import { lazy } from "react";

const ContactFormWithRef = lazy(() => import("../02-controlled-uncontrolled/task/uncontrolled/ContactFormWithRef"));
const ContactFormNoRef = lazy(() => import("../02-controlled-uncontrolled/task/uncontrolled/ContactFormNoRef"));
const FormWithNoRef = lazy(() => import("../02-controlled-uncontrolled/learn/uncontrolled/FormWithNoRef"));
const FormWithRef = lazy(() => import("../02-controlled-uncontrolled/learn/uncontrolled/FormWithRef"));
const FeedbackForm = lazy(() => import("../02-controlled-uncontrolled/learn/controlled/FeedbackForm"));
const ContactForm = lazy(() => import("../02-controlled-uncontrolled/task/controlled/ContactForm"));
const CounterWithRef = lazy(() => import("../02-controlled-uncontrolled/learn/CounterWithRef"));
const ProductListContainer = lazy(() => import("../01-container–presenter/task/container"));
const ContainerUserProfile = lazy(() => import("../01-container–presenter/learn"));
const CompoundLearn = lazy(() => import("../03-compound-components/learn"));
const CompoundTask = lazy(() => import("../03-compound-components/task"));
const RenderPropsPattern = lazy(() => import("../04-render-props/learn"));

// Define your component array — note: these are component *types*, not JSX elements
const componentList = [
    // Day-1: ✨✨✨ [LEARN] Container-Presenter
    {
        id: "✨ Day-1-learn",
        component: ContainerUserProfile,
        title: "Pattern:- Container-Presenter",
        description: "Container handles api/data logic, Presenter handles UI.",
        props: { userId: 1 }
    },
    // Day-1: ✅✅✅ [TASK] Container-Presenter
    {
        id: "✅ Day-1-task",
        component: ProductListContainer,
        title: "Pattern:- Container-Presenter",
        description: "Container handles api/data logic, Presenter handles UI.",
        props: {}
    },


    // Day-2: ✨✨✨ [LEARN] Controlled vs Uncontrolled Forms
    {
        id: "✨ Day-2-learn-a",
        component: CounterWithRef,
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Demonstrates useRef for mutable values that don’t trigger re-renders.",
        props: {},
    },
    {
        id: "✨ Day-2-learn-b",
        component: FormWithRef,
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled - form with validation. Only using (useRefs) to access input values directly without React state.",
        props: {},
    },
    {
        id: "✨ Day-2-learn-c",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled - form (No Refs). This form does not use React (state) or (refs) to manage input values. It relies on the native HTML form submission & (FormData) API.",
        component: FormWithNoRef,
        props: {}
    },
    {
        id: "✨ Day-2-learn-d",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Controlled - form with validation. This form uses React (useState) to manage input values & (useRef) to access input DOM elements. It provides validation feedback by focusing on invalid fields.",
        component: FeedbackForm,
        props: {}
    },
    // Day-2: ✅✅✅ [TASK] Controlled vs Uncontrolled
    {
        id: "✅ Day-2-task-a",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Controlled - form with validation. This form uses React (useState) to manage input values & (useRef) to access input DOM elements. It provides validation feedback by focusing on invalid fields.",
        component: ContactForm,
        props: {}
    },
    {
        id: "✅ Day-2-task-b",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled - form with validation. Only using (useRefs) to access input values directly without React state.",
        component: ContactFormWithRef,
        props: {}
    },
    {
        id: "✅ Day-2-task-c",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled - form (No Refs). This form does not use React (state) or (refs) to manage input values. It relies on the native HTML form submission & (FormData) API.",
        component: ContactFormNoRef,
        props: {}
    },

    // Day-3: ✨✨✨ [LEARN] Compound Components
    {
        id: "✨ Day-3-learn",
        title: "Pattern:- Compound Components",
        description: "Perfect when layout & nesting || child structure/order matters. Parent handles layout + data context, Children handle UI rendering.",
        component: CompoundLearn,
        props: {}
    },
    // Day-3: ✅✅✅ [TASK] Compound Components
    {
        id: "✅ Day-3-task",
        title: "Pattern:- Compound Components",
        description: "Perfect when layout & nesting || child structure/order matters. Parent handles layout + data context, Children handle UI rendering.",
        component: CompoundTask,
        props: {}
    },


    // Day-4: ✨✨✨ [LEARN] Compound Components
    {
        id: "✨ Day-4-learn",
        title: "Pattern:- Render Props",
        description: "Render Props let a component handle logic/state (e.g., mouse position), while the parent controls what to render via a function prop that returns JSX. ",
        component: RenderPropsPattern,
        props: {}
    },

];

export default componentList;
