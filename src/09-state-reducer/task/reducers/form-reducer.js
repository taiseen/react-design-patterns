import { formInputSteps, initialState } from "../const/data";

export const formReducer = (state, action) => {

    switch (action.type) {

        case 'UPDATE_FIELD': {
            const { stepKey, field, value } = action.payload;

            const newFormData = {
                ...state.formData,

                [stepKey]: {
                    ...state.formData[stepKey],
                    [field]: value,
                },
            };

            return { ...state, formData: newFormData };
        }

        case 'NEXT': {
            const currentStepIndex = state.currentStep;

            const currentStep = formInputSteps[currentStepIndex];

            // Skip validation for last step (Review)
            if (currentStepIndex < formInputSteps.length - 1) {
                const currentData = state.formData[currentStep.key] || {};

                // Only validate REQUIRED fields
                const isComplete = currentStep.fields
                    .filter(field => field.required) // only required fields
                    .every(field => {
                        const value = currentData[field.name]?.trim();
                        return value !== undefined && value !== '';
                    });

                if (!isComplete) {
                    alert('Cannot proceed: required fields missing in', currentStep.key);
                    return state; // block navigation
                }
            }

            return { ...state, currentStep: currentStepIndex + 1 };
        }

        case 'PREV':
            return {
                ...state,
                currentStep: Math.max(0, state.currentStep - 1),
            };

        case 'RESET':
            return initialState;

        case 'SUBMIT':
            // Final submit logic
            alert('Form submitted!\n' + JSON.stringify(state.formData, null, 2));
            return initialState;

        default:
            return state;
    }

}