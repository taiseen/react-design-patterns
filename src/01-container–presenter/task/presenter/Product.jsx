const ProductCard = ({ product, onAddToCart }) => {
	return (
		<div className="border border-slate-600 p-4! rounded shadow hover:shadow-lg flex flex-col">
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-48 object-contain"
			/>

			<h3 className="font-semibold text-lg text-center py-2 flex-1 flex justify-center items-center">
				{product.title.slice(0, 30)}...
			</h3>

			<p className="text-gray-300 !p-1">${product.price.toFixed(2)}</p>

			<button
				type="button"
				onClick={onAddToCart}
				className="w-full bg-blue-600 text-white py-2! rounded hover:bg-blue-700 transition cursor-pointer"
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
