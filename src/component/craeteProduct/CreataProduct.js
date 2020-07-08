import React, { useRef } from 'react';
import createProduct from '../../action'
import { connect } from 'react-redux';
import './createproduct.css'
const CreataProduct = (props) => {

    const imgRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);

    const handlProductSubmit = (event) => {
        event.preventDefault();
        console.log(imgRef.current)
        props.createProduct({
            
            img: imgRef.current,
            index: "",
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            date: new Date().toLocaleDateString(),
            sortByDate: new Date().getTime(),
            className: "oneItem"
        })
    }

    return (
        <form onSubmit={handlProductSubmit}>
            <h1>Create product</h1>
            <div className="form-group">
                <img src="https://picsum.photos/60/60" ref={imgRef}/>
            </div>
            <div className="form-group">
                <label htmlFor="validationServer03">Name</label>
                <input type="text" data-name="name" ref={nameRef} className="form-control is-invalid" id="validationServer03" placeholder="Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="validationServer04">Description</label>
                <input type="text" data-name="description" ref={descriptionRef} className="form-control is-invalid" id="validationServer04" placeholder="Description" required />
            </div>
            <div className="form-group">
                <label htmlFor="validationServer05">Price</label>
                <input type="number" data-name="price" ref={priceRef} className="form-control is-invalid" id="validationServer05" placeholder="Price $" required />
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                    <label className="form-check-label" htmlFor="invalidCheck3">
                        Agree to terms and conditions
                        </label>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Save</button>
        </form>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products.products,
        selectedItem: state.products.selectedItem,
        // correntPosts: state.correntPosts
    }
}
export default connect(mapStateToProps, { createProduct })(CreataProduct)

