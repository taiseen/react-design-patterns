export const initialState = {
    completedSteps: new Set(),
    currentStep: 0,
    formData: {},
};


export const formInputSteps = [
    {
        key: 'step1',
        title: 'Personal Info',
        fields: [
            { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
            { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '(123) 456-7890', required: false },
        ],
    },
    {
        key: 'step2',
        title: 'Address',
        fields: [
            { name: 'street', label: 'Street Address', type: 'text', placeholder: '123 Main St', required: true },
            { name: 'city', label: 'City', type: 'text', placeholder: 'New York', required: true },
            { name: 'zip', label: 'ZIP Code', type: 'text', placeholder: '10001', required: false },
        ],
    },
    {
        key: 'step3',
        title: 'Preferences',
        fields: [
            // {
            //     name: 'gender',
            //     label: 'Gender',
            //     type: 'radio',
            //     required: true,
            //     options: [
            //         { value: 'male', label: 'Male' },
            //         { value: 'female', label: 'Female' },
            //         { value: 'prefer_not_to_say', label: 'Prefer not to say' },
            //     ],
            // },
            {
                name: 'role',
                label: 'Your Role',
                type: 'radio',
                required: true,
                options: [
                    { value: 'student', label: 'Student' },
                    { value: 'teacher', label: 'Teacher' },
                    { value: 'other', label: 'Other' },
                ]
            },
            {
                name: 'country',
                label: 'Country',
                type: 'select',
                required: true,
                options: [
                    { value: '', label: 'Select a country' },
                    { value: 'bangladesh', label: 'Bangladesh' },
                    { value: 'canada', label: 'Canada' },
                    { value: 'india', label: 'India' },
                    { value: 'russia', label: 'Russia' },
                    { value: 'switzerland', label: 'Switzerland' },
                    { value: 'usa', label: 'United States of America' },
                ],
            },
            { name: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox', required: false },
            { name: 'bio', label: 'Short Bio (optional)', type: 'textarea', placeholder: 'About yourself...', required: false },
        ],
    },
    {
        key: 'step3',
        title: 'Review',
        fields: [], // no input fields
    },
];
