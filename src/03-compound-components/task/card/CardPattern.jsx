// Main Card Component
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-100 rounded-lg border border-gray-500 shadow-2xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

// Sub-components
const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`px-6 py-4 border-b border-slate-300 ${className}`}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = "" }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

const CardFooter = ({ children, className = "" }) => {
  return (
    <div
      className={`px-6 py-4 bg-slate-100 border-t border-slate-300 ${className}`}
    >
      {children}
    </div>
  );
};

const CardImage = ({ src, alt = "", className = "" }) => {
  return (
    <img src={src} alt={alt} className={`w-full object-cover ${className}`} />
  );
};

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
