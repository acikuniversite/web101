const URL = "http://localhost:3000";

export const fetchProducts = async () => await fetch(`${URL}/products`).then(res => res.json());
export const fetchProduct = async (id: number) => await fetch(`${URL}/products/${id}`).then(res => res.json());
