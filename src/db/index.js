import ContainerUserProfile from "../01-container–presenter/learn";
import ProductListContainer from "../01-container–presenter/task/container";
import CounterWithRef from "../02-controlled-uncontrolled-forms/learn/CounterWithRef";
import UncontrolledFeedbackForm from "../02-controlled-uncontrolled-forms/learn/UncontrolledFeedbackForm";
import UncontrolledFormNoRef from "../02-controlled-uncontrolled-forms/learn/UncontrolledFormNoRef";

// Define your component array — note: these are component *types*, not JSX elements
const componentList = [
    // Day-1: [LEARN] Container-Presenter
    {
        id: "day-1-learn",
        component: ContainerUserProfile,
        title: "Pattern:- Container-Presenter",
        description: "Container handles api/data logic, Presenter handles UI.",
        props: { userId: 1 }
    },
    // Day-1: [TASK] Container-Presenter
    {
        id: "day-1-task",
        component: ProductListContainer,
        title: "Pattern:- Container-Presenter",
        description: "Container handles api/data logic, Presenter handles UI.",
        props: {}
    },


    // Day-2: [LEARN] Controlled vs Uncontrolled Forms
    {
        id: "day-2-learn-a",
        component: CounterWithRef,
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Demonstrates useRef for mutable values that don’t trigger re-renders.",
        props: {},
    },
    {
        id: "day-2-learn-b",
        component: UncontrolledFeedbackForm,
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled feedback form with validation. Only using (useRefs) to access input values directly without React state.",
        props: {},
    },
    {
        id: "day-2-learn-c",
        title: "Pattern:- Controlled vs Uncontrolled",
        description: "Uncontrolled Form (No Refs). This form does not use React state or refs to manage input values. It relies on the native HTML form submission and FormData API.",
        component: UncontrolledFormNoRef,
        props: {}
    },
];

export default componentList;
