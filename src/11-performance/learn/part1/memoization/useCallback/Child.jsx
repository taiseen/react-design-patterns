import { memo } from "react";
import Button from "../../../../../components/ui/Button";

const ChildComponent = ({ onClick }) => {
  console.log("Child Rendered");

  return (
    <Button size="sm" onClick={onClick}>
      Click Me
    </Button>
  );
};

const Child = memo(ChildComponent);

export default Child;
