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
const MovieWithHOCLearn = lazy(() => import("../05-higher-order-component/learn"));
const RoleWithHOCTask = lazy(() => import("../05-higher-order-component/task"));
const ContextProviderLearn = lazy(() => import("../07-context-provider/learn"));
const RenderPropsPatternLearn = lazy(() => import("../04-render-props/learn"));
const ContextProviderTask = lazy(() => import("../07-context-provider/task"));
const RenderPropsPatternTask = lazy(() => import("../04-render-props/task"));
const CompoundLearn = lazy(() => import("../03-compound-components/learn"));
const CompoundTask = lazy(() => import("../03-compound-components/task"));
const OptimisticUILearn = lazy(() => import("../08-optimistic-ui/learn"));
const StateReducerLearn = lazy(() => import("../09-state-reducer/learn"));
const StateReducerTask = lazy(() => import("../09-state-reducer/task"));
const OptimisticUITask = lazy(() => import("../08-optimistic-ui/task"));
const CustomHookLearn = lazy(() => import("../06-custom-hook/learn"));
const CustomHookTask = lazy(() => import("../06-custom-hook/task"));
const PubSubLearn = lazy(() => import("../10-pub-sub/learn"));
const PubSubTask = lazy(() => import("../10-pub-sub/task"));

const day1 = [
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
]

const day2 = [
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
]

const day3 = [
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
]

const day4 = [
    // Day-4: ✨✨✨ [LEARN] Render Props
    {
        id: "✨ Day-4-learn",
        title: "Pattern:- Render Props",
        description: "Render Props let a component handle logic/state (e.g., mouse position), while the parent controls what to render via a function prop that returns JSX.",
        component: RenderPropsPatternLearn,
        props: {}
    },
    // Day-4: ✅✅✅ [TASK] Render Props
    {
        id: "✅ Day-4-task",
        title: "Pattern:- Render Props",
        description: "Render Props let a component handle logic/state, while the parent controls what to render via a function prop that returns JSX.",
        component: RenderPropsPatternTask,
        props: {}
    },
]

const day5 = [
    // Day-5: ✨✨✨ [LEARN] Higher Order Component
    {
        id: "✨ Day-5-learn",
        title: "Pattern:- Higher Order Component (HOC)",
        description: "(HOCs) are a common pattern in React for reusing logic between components. They are a function that takes a component and returns a new component with enhanced functionality.",
        component: MovieWithHOCLearn,
        props: {}
    },
    // Day-5: ✅✅✅ [TASK] Higher Order Component
    {
        id: "✅ Day-5-task",
        title: "Pattern:- Higher Order Component (HOC)",
        description: "(HOCs) are a common pattern in React for reusing logic between components. They are a function that takes a component and returns a new component with enhanced functionality.",
        component: RoleWithHOCTask,
        props: {}
    },
]

const day6 = [
    // Day-6: ✨✨✨ [LEARN] Custom Hook
    {
        id: "✨ Day-6-learn",
        title: "Pattern:- Custom Hook",
        description: "Custom hooks are functions that let you reuse stateful logic between components. They are a way to abstract away complex logic and make it easier to reuse across multiple components.",
        component: CustomHookLearn,
        props: {}
    },
    // Day-6: ✅✅✅ [TASK] Custom Hook
    {
        id: "✅ Day-6-task",
        title: "Pattern:- Custom Hook",
        description: "Custom hooks are functions that let you reuse stateful logic between components. They are a way to abstract away complex logic and make it easier to reuse across multiple components.",
        component: CustomHookTask,
        props: {}
    },
]

const day7 = [
    // Day-7: ✨✨✨ [LEARN] Context Provider
    {
        id: "✨ Day-7-learn",
        title: "Pattern:- Context Provider",
        description: "Context provides a way to pass data through the component tree without passing props down manually at every level.",
        component: ContextProviderLearn,
        props: {}
    },
    // Day-7: ✅✅✅ [TASK] Context Provider
    {
        id: "✅ Day-7-task",
        title: "Pattern:- Context Provider",
        description: "Context provides a way to pass data through the component tree without passing props down manually at every level.",
        component: ContextProviderTask,
        props: {}
    },
]

const day8 = [
    // Day-8: ✨✨✨ [LEARN] Optimistic UI
    {
        id: "✨ Day-8-learn",
        title: "Pattern:- Optimistic UI",
        description: "Optimistic UI is a pattern that allows you to update the UI without waiting for a server response.",
        component: OptimisticUILearn,
        props: {}
    },
    // Day-8: ✅✅✅ [TASK] Optimistic UI
    {
        id: "✅ Day-8-task",
        title: "Pattern:- Optimistic UI",
        description: "Optimistic UI is a pattern that allows you to update the UI without waiting for a server response.",
        component: OptimisticUITask,
        props: {}
    },
]

const day9 = [
    // Day-9: ✨✨✨ [LEARN] State Reducer
    {
        id: "✨ Day-9-learn",
        title: "Pattern:- State Reducer",
        description: "A React design pattern that decouples state update logic from components by moving it into a separate, reusable function called a reducer",
        component: StateReducerLearn,
        props: {}
    },
    // Day-9: ✅✅✅ [TASK] State Reducer
    {
        id: "✅ Day-9-task",
        title: "Pattern:- State Reducer",
        description: "A React design pattern that decouples state update logic from components by moving it into a separate, reusable function called a reducer",
        component: StateReducerTask,
        props: {}
    },
]

const day10 = [
    // Day-10: ✨✨✨ [LEARN] Pub-Sub
    {
        id: "✨ Day-10-learn",
        title: "Pattern:- Pub-Sub",
        description: "Pub-Sub is a design pattern that allows components to communicate with each other without having direct references to each other.",
        component: PubSubLearn,
        props: {}
    },
    // Day-10: ✅✅✅ [TASK] Pub-Sub
    {
        id: "✅ Day-10-task",
        title: "Pattern:- Pub-Sub",
        description: "Pub-Sub is a design pattern that allows components to communicate with each other without having direct references to each other.",
        component: PubSubTask,
        props: {}
    },
]



const componentList = [
    ...day1,
    ...day2,
    ...day3,
    ...day4,
    ...day5,
    ...day6,
    ...day7,
    ...day8,
    ...day9,
    ...day10,
];

export default componentList;
