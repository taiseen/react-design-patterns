import SortFilterControls from "./SortFilterControls";
import ErrorMessage from "../common/ErrorMessage";
import EmptyInfo from "../common/EmptyInfo";
import Loading from "../common/Loading";
import CartSummary from "./CartSummary";
import ProductCard from "./Product";

const ProductListPresenter = ({
	onFilteredProducts,
	totalCartItems,
	original = [], // ← use this as source for filter/sort
	display = [], // ← just render at UI
	addToCart,
	loading,
	error,
}) => {
	const handleSortChange = (e) => {
		const value = e.target.value;
		const sorted = [...original];

		if (value === "price-low") sorted.sort((a, b) => a.price - b.price);
		if (value === "price-high") sorted.sort((a, b) => b.price - a.price);
		if (value === "name") sorted.sort((a, b) => a.title.localeCompare(b.title));

		// update displayed products
		onFilteredProducts(sorted);
		// 📝📝📝 this is the trick part of the state update...
	};

	const handleFilterChange = (e) => {
		const query = e.target.value.toLowerCase();

		if (!query) {
			onFilteredProducts(original);
			return;
		}

		const filtered = original.filter((p) =>
			p.title.toLowerCase().includes(query),
		);

		// update displayed products
		onFilteredProducts(filtered);
		// 📝📝📝 this is the trick part of the state update...
	};

	if (loading) return <Loading />;

	if (error) return <ErrorMessage message={error} />;

	return (
		<div className="max-w-6xl mx-auto p-4! container min-h-screen">
			<div className="flex justify-between items-center mb-6!">
				<SortFilterControls
					onSortChange={handleSortChange}
					onFilterChange={handleFilterChange}
				/>

				<CartSummary totalCartItems={totalCartItems} />
			</div>

			{display?.length === 0 && <EmptyInfo />}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{display &&
					display?.length > 0 &&
					display?.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							onAddToCart={() => addToCart(product)}
						/>
					))}
			</div>
		</div>
	);
};

export default ProductListPresenter;
