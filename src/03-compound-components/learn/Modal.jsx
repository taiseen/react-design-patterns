const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/50 backdrop-blur"
      // onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-2xl"
        // onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          className="absolute right-3 top-3 rounded-full p-1 hover:bg-red-200 outline-none cursor-pointer duration-300"
          onClick={onClose}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

// Compound sub-components
// these are the sub-components that are attached, 
// as property of the model component.
const ModalHeader = ({ children }) => {
  return (
    <div className="mb-4 text-xl font-semibold text-gray-900">{children}</div>
  );
};

const ModalBody = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
};

// Lego block || Attribute
// Attach as compound components
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
