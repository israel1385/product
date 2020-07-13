import React, { useState } from 'react';
import './Item.css'
import { connect } from 'react-redux';
import deleteProduct from '../../action/delete.action'
import selectItem from '../../action/selectedItem.action'
import itemClked from '../../action/itemCliked.action'

const Item = (props, { correntPost }) => {
    const [isActive, setIsActive] = useState(false)
    // const [singelProduct, setSingelProduct] = useState()
    const [active, setactive] = useState();
   
    const deletea = (e) => {
        e.stopPropagation()
        props.deleteProduct(e.currentTarget.dataset.by)
    }
    const ProductChange = (event) => {
        setactive(active === event.currentTarget.dataset.index ? '' : event.currentTarget.dataset.index)
        // setSingelProduct(event.currentTarget.dataset.by)
        const singel = props.products.slice().filter(i => i.name == event.currentTarget.dataset.by)
        props.selectItem(singel);
        const activeREsult = !isActive;
        setIsActive(activeREsult);
    }
    return (
        <div>
            {props.correntPost.map((product, index) => (
                <div className={`oneItem container ${active == product.index && props.selectedItem && props.selectedItem[0].index === product.index ? 'selected' : ''}`} data-index={product.index}
                    data-by={product.name} onClick={ProductChange} key={index}>
                    {/* <div>
                        <p>{product.img}</p>
                    </div> */}
                    <div className="row">
                        <div className="col">
                            <div className=" mt-6">
                                <h3> {product.name} </h3>
                            </div>
                            <div>
                                <h5>{product.date}</h5>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <p>{product.price}$</p>
                            </div>
                        </div>
                        <div className="col">
                            <button data-by={product.index} onClick={deletea} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.products.products,
        selectedItem: state.products.selectedItem,
        correntPosts: state.correntPosts
    }
}
export default connect(mapStateToProps, { deleteProduct, selectItem, itemClked })(Item)
