import React, { startTransition, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import { CiHospital1 } from 'react-icons/ci';

function ProductList() {
    // const selector = useSelector();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productReducer);
    async function getData() {
        const respose = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await respose.json();
        dispatch(loadProducts(data));
    }

    useEffect(() => {
        getData();

    }, [])
    return (
        <div>{products.map(x => <h1>{x.title}</h1>)}
        </div>
    )
}

export default ProductList