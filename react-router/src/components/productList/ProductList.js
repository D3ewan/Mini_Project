import React, { startTransition, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import { CiHospital1 } from 'react-icons/ci';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css'

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
        <div className='ProductList'>{products.map(x => <SingleProduct key={x.id} product={x} />)}
        </div>
    )
}

export default ProductList;