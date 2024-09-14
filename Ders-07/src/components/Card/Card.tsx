import { Product } from '../..';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../slices/checkoutSlice';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

type CardProps = {
    product: Product
}

const Card = ({ product }: CardProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const addToCart = () => {
        dispatch(addProduct(product));
    }

    const goDetailPage = () => {
        navigate(`/products/${product.id}`);
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImg} onClick={goDetailPage}>
                <img src={product.image} alt={product.image} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardPrice} onClick={goDetailPage}>
                    <p>{product.price} ₺</p>
                </div>
                <div className={styles.productName} onClick={goDetailPage}>
                    <p>{product.brand} {product.model}</p>
                    <p>{product.name}</p>
                </div>
                <div className={styles.basket}>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card;