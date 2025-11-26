const SortFilterControls = ({ onSortChange, onFilterChange }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Search products..."
        onChange={onFilterChange}
        className="px-4 py-2 border border-slate-600
				 rounded outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        onChange={onSortChange}
        className="px-4 py-2 border border-slate-600 rounded outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700"
      >
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortFilterControls;
