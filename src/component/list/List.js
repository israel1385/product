import React, { useState } from 'react';
import { useEffect } from 'react'
import Item from '../item/Item';
import correntPosts from '../../action/correntPost.action'
import { connect } from 'react-redux';
import Paginiet from '../paginiet/Paginiet'
import ButtonSortBy from '../buttonSort/ButtonSortBy'
import sortBy from '../../action/sort.action'
import './list.css'

const List = (props) => {

    const [product, setproduct] = useState([]);
    const [currentPage, setCurrentpage] = useState(1);
    const [productPerPage] = useState(5);

    const indexOfLestProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLestProduct - productPerPage;
    const correntPost = product.slice(indexOfFirstProduct, indexOfLestProduct)

    const paginate = (pageNumbers) => { setCurrentpage(pageNumbers) }

    useEffect(() => {
        return setproduct(props.products)
    }, [props.products]);

    const search = (event) => {
        const length = event.currentTarget.value.length
        const len = event.currentTarget.value
        length == 0  ?   setproduct(props.products) : setproduct(product.filter(p => p.name.includes(len))) 
        // if (length == 0) {
        //     return setproduct(props.products)
        // } else {
        //     setproduct(product.filter(p => p.name.includes(len)))
        // }
    }
    return (
        <div className=''>
            <ButtonSortBy search={search} />
            {<Item correntPost={correntPost} />}
            <Paginiet productPerPage={productPerPage} totalProduct={product.length} paginate={paginate} />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products.products,
        // correntPosts: state.correntPosts
    }
}
export default connect(mapStateToProps, { sortBy, correntPosts })(List)
