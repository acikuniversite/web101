import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Card, Checkout, Filter, Loading, Pagination, SortFilter } from '../components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getProducts } from '../slices/productsSlice';
import { SearchContext } from '../context/searchContext';
const productsPerPage = 12;
const sortByItems = ["Old To New", "New To Old", "High To Low", "Low To High"];

const Products = () => {
    const { searchText } = useContext(SearchContext);
    const dispatch = useAppDispatch();
    const { products, brands, models, loading, errors } = useAppSelector((state) => state.products);
    const filteredProductCountRef = useRef(products.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [brandFilters, setBrandFilters] = useState<string[]>([]);
    const [modelFilters, setModelFilters] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>("");


    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText, brandFilters, modelFilters]);

    const getFilteredProducts = () => {
        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        if (brandFilters.length > 0 || modelFilters.length > 0) {
            filteredProducts = filteredProducts.filter(product => brandFilters.includes(product.brand) || modelFilters.includes(product.model));
        }
        filteredProductCountRef.current = filteredProducts.length;

        switch (sortBy) {
            case sortByItems[0]:
                filteredProducts = [...filteredProducts].sort((a, b) => {
                    const aDate = new Date(a.createdAt);
                    const bDate = new Date(b.createdAt);
                    return aDate.getTime() - bDate.getTime();
                });
                break;
            case sortByItems[1]:
                filteredProducts = [...filteredProducts].sort((a, b) => {
                    const aDate = new Date(a.createdAt);
                    const bDate = new Date(b.createdAt);
                    return bDate.getTime() - aDate.getTime();
                });
                break;
            case sortByItems[2]:
                filteredProducts = [...filteredProducts].sort((a, b) => Number(b.price) - Number(a.price));
                break;
            case sortByItems[3]:
                filteredProducts = [...filteredProducts].sort((a, b) => Number(a.price) - Number(b.price));
                break;
            default:
                break;
        }

        const lastProductIndex = currentPage * productsPerPage;
        const firstProductIndex = lastProductIndex - productsPerPage;
        return filteredProducts.slice(firstProductIndex, lastProductIndex);
    }

    const visibleItems = useMemo(() => {
        return getFilteredProducts();
    }, [products, searchText, brandFilters, modelFilters, sortBy, currentPage]);

    return loading ? <Loading /> : <div className="container">
        <div className="filters-container">
            <SortFilter items={sortByItems} filterName="Sort By" onFilter={(e) => setSortBy(e)} />
            <Filter items={brands} filterName="Brands" onFilter={(e) => setBrandFilters(prev => [...prev, e])}
                removeFilter={(e) => setBrandFilters(prev => prev.filter(item => item !== e))} />
            <Filter items={models} filterName="Models" onFilter={(e) => setModelFilters(prev => [...prev, e])}
                removeFilter={(e) => setModelFilters(prev => prev.filter(item => item !== e))} />
        </div>
        <div className="products-container">
            {// eslint-disable-next-line no-extra-boolean-cast
                !!products ? visibleItems.map(product => (
                    <div style={{ padding: "5px", width: "220px" }} key={product.id} >
                        <Card product={product} />
                    </div>
                )) : <div>{errors}</div>
            }
            <Pagination itemsPerPage={productsPerPage} totalItems={filteredProductCountRef.current}
                currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div className="checkout-container">
            <Checkout />
        </div>
    </div>
}

export default Products;