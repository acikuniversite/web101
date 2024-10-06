import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import { Checkout, Loading } from '../../components';
import styles from './ProductDetail.module.css';
import { addProduct } from '../../slices/checkoutSlice';
import { getProduct } from '../../slices/productsSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.products).selectedProduct;

  useEffect(() => {
    if (product?.id !== Number(id)) {
      dispatch(getProduct(Number(id)));
    }
  }, [])


  const addToCart = () => {
    dispatch(addProduct(product!));
  }

  return product ? (
    <div className="container">
      <div className={styles.productDetailContainer}>
        <div className={styles.productDetail}>
          <div className={styles.image}>
            <img src={product.image} alt={product.image} loading="lazy" />
          </div>
          <div className={styles.content}>
            <div className={styles.price}>
              <p>{product.price} ₺</p>
            </div>
            <div className={styles.productName}>
              <p>{product.brand} {product.model}</p>
              <p>{product.name}</p>
            </div>
            <div className={styles.carBtn}>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
            <div className={styles.description}>
              {product.description}
            </div>
          </div>
        </div>
        <Checkout />
      </div>
    </div>
  ) : <Loading />
}

export default ProductDetail;