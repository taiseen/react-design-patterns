const Table = ({ children, className = "" }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
        {children}
      </table>
    </div>
  );
};

// Sub-components (Lego bricks)
const Head = ({ children }) => {
  return (
    <thead className="bg-slate-100">
      <tr>{children}</tr>
    </thead>
  );
};

const Body = ({ children }) => {
  return (
    <tbody className="bg-white divide-y divide-slate-200">{children}</tbody>
  );
};

const Row = ({ children, className = "" }) => {
  return <tr className={`hover:bg-slate-100/80 cursor-pointer ${className}`}>{children}</tr>;
};

const Header = ({ children }) => {
  return (
    <th className="px-6 py-3 text-left text-sm font-medium text-slate-700 capitalize border-r border-slate-300 last:border-none">
      {children}
    </th>
  );
};

const Cell = ({ children, className = "" }) => {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-800 ${className}`}
    >
      {children}
    </td>
  );
};

const ActionCell = ({ children }) => {
  return (
    <td className="px-6 py-4">
      {children}
    </td>
  );
};

// Attach sub-components to parent (Compound Pattern Magic)
Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Header = Header;
Table.Cell = Cell;
Table.ActionCell = ActionCell;

export default Table;
