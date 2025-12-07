const GroupData = ({ children }) => (
  <div className="grid grid-cols-[auto_50%] gap-y-1 gap-x-16 ">{children}</div>
);

const Text = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

const Number = ({ children }) => <span>{children}</span>;

GroupData.Text = Text;
GroupData.Number = Number;

export default GroupData;
