import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProductQty, getProductsInCart, removeProductQty } from '../../slices/checkoutSlice';
import styles from "./Checkout.module.css";

const Checkout = () => {
    const dispatch = useAppDispatch();
    const { productsInCart, totalPrice } = useAppSelector((state) => state.checkout);

    useEffect(() => {
        dispatch(getProductsInCart());

    }, [])

    return (
        <div>
            <h3 className={styles.title}>Cart</h3>
            <ul className={styles.cartContainer}>
                {productsInCart.map((product) => (
                    <li key={product.product.id}>
                        <div className={styles.productContainer}>
                            <div className={styles.product}>
                                <div>{product.product.name}</div>
                                <div>{product.product.price} ₺</div>
                            </div>
                            <div className={styles.quantity}>
                                <button onClick={() => dispatch(removeProductQty(product.product))}>-</button>
                                <span>{product.qty}</span>
                                <button onClick={() => dispatch(addProductQty(product.product))}>+</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className={styles.title}>Checkout</h3>
            <div className={styles.checkoutContainer}>
                <div>Total Price: <span>{totalPrice} ₺</span></div>
                <button>Checkout</button>
            </div>

        </div>
    )
}

export default Checkout