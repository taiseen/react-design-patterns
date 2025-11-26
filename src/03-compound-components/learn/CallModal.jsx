import Button from "@/components/ui/Button";
import Accordion from "./Accordion";
import Modal from "./Modal";
import { useState } from "react";

const CallModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center h-[200px] justify-center">
      <Button className="w-fit" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>Welcome to the Modal</Modal.Header>

        <Modal.Body>
          <p className="mb-4">This modal build by compound component.</p>

          <Accordion>
            <Accordion.Item title="What is Compound Component Pattern?">
              It’s a React pattern that allows parent and child components to
              work together seamlessly while giving developers flexible
              composition.
            </Accordion.Item>

            <Accordion.Item title="Where to use it?">
              In any components, where layout and nesting matters.
            </Accordion.Item>
          </Accordion>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="md"
            className="w-fit!"
            variant="confirm"
            onClick={() => alert("Confirmed!")}
          >
            Confirm
          </Button>

          <Button
            size="md"
            variant="danger"
            className="w-fit bg-red-500!"
            onClick={handleModalClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CallModal;
