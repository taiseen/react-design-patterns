export const apiData = [
    {
        name: "Taiseen",
        email: "taiseen@example.com",
        role: "Developer",
        status: "Active",
    },
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        name: "Bob Smith",
        email: "bob@example.com",
        role: "Editor",
        status: "Inactive",
    },
];

// Get headers from first object keys
export const headers = Object.keys(apiData[0]);

export const getStatusClasses = (status) => {
    switch (status?.toLowerCase()) {
        case "active":
            return "bg-green-100 text-green-800 border-green-300";
        case "inactive":
            return "bg-red-100 text-red-800 border-red-300";
        case "pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-300";
        case "banned":
            return "bg-gray-100 text-gray-800 border-gray-300";
        default:
            return "bg-gray-100 text-gray-500 border-gray-300"; // fallback
    }
};