import ProductListPresenter from "../presenter";
import { useState, useEffect } from "react";
import { fetchProducts } from "../api";

const ProductListContainer = () => {
	const [cart, setCart] = useState([]);

	// 📝📝📝 Single Source of Truth + Derived View
	// 📝📝📝 Master List + View List
	const [product, setProduct] = useState({
		original: [], // master list, never touched after load
		display: [], // view list, always what UI shows
		loading: true,
		error: null,
	});

	// Fetch data
	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts();
				setProduct({
					original: data,
					display: data,
					loading: false,
					error: null,
				});
			} catch (err) {
				setProduct((prev) => ({
					...prev,
					loading: false,
					error: err.message || "Failed to load products",
				}));
			}
		};
		loadProducts();
	}, []);

	// 📝📝📝 This is the ONLY function that can change what user sees
	// 📝📝📝 This is the trick part of the state update...
	const setFilteredProducts = (newDataFromOriginal) => {
		setProduct((prev) => ({
			...prev,
			display: newDataFromOriginal,
		}));
	};

	// Cart management
	const addToCart = (product) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}

			return [...prev, { ...product, quantity: 1 }];
		});
	};

	const getTotalCartItems = () =>
		cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<ProductListPresenter
			{...product} // original + display + loading + error
			onFilteredProducts={setFilteredProducts}
			totalCartItems={getTotalCartItems()}
			addToCart={addToCart}
		/>
	);
};

export default ProductListContainer;
