import { apiData, getStatusClasses, headers } from "./data";
import Table from "./TablePattern";
import { Edit2, Trash2 } from "lucide-react";

const DisplayTable = () => {
  const handleEdit = (item) => {
    alert(`Edit ${item.name}`);
  };

  const handleDelete = (id) => {
    alert(`Delete user with id: ${id}`);
  };

  return (
    <div>
      <div className="w-2/3 mx-auto mt-4">
        <Table>
          {/* Sub-component */}
          <Table.Head>
            {headers.map((header) => (
              <Table.Header key={header}>{header}</Table.Header>
            ))}

            {/* Manually added */}
            {/* Extra Action Column — Not from API */}
            <Table.Header>Actions</Table.Header>
          </Table.Head>

          <Table.Body>
            {apiData.map((row, idx) => (
              <Table.Row key={idx}>
                {headers.map((header) => {
                  const value = row[header];

                  // 💡 Special render for "status" column
                  if (header === "status") {
                    const statusClasses = getStatusClasses(value);
                    return (
                      <Table.Cell key={header}>
                        <span
                          className={`px-3 py-1 rounded-full inline-block text-xs font-medium border ${statusClasses}`}
                        >
                          {value}
                        </span>
                      </Table.Cell>
                    );
                  }

                  // 🟢 Default cell
                  return <Table.Cell key={header}>{value}</Table.Cell>;
                })}

                {/* Action Column — Fully Custom */}
                <Table.ActionCell>
                  <button
                    onClick={() => handleEdit(row)}
                    className="text-indigo-400 hover:text-indigo-700 mr-3 cursor-pointer"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(row.name)}
                    className="text-red-400 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </Table.ActionCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default DisplayTable;
