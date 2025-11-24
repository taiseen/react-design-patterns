import { useState } from "react";
import Modal from "./Modal";
import CallAccordion from "./CallAccordion";
import Accordion from "./Accordion";

const CallModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center h-[200px] justify-center">
      <button
        type="button"
        className="btnV1"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

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
          <button
            type="button"
            className="btnV1 w-fit! bg-green-600!"
            onClick={() => alert("Confirmed!")}
          >
            Confirm
          </button>

          <button
            type="button"
            className="btnV1 w-fit! bg-red-500!"
            onClick={handleModalClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CallModal;
