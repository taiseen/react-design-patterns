const CartSummary = ({ totalCartItems }) => {
	return (
		<div className="bg-slate-700 px-4! py-2! rounded-lg font-semibold shadow-2xl">
			Cart: {totalCartItems} item{totalCartItems !== 1 ? "s" : ""}
		</div>
	);
};

export default CartSummary;
