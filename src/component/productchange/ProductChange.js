import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import change from '../../action/productChange.action'

const ProductChange = (props) => {
    const [propsItemName, setpropsItemName] = useState(props.selectedItem[0].name);
    const [propsItemDescription, setpropsItemDescription] = useState(props.selectedItem[0].description);
    const [propsItemPrice, setpropsItemPrice] = useState(props.selectedItem[0].price);
    const [propsItemIndex, setpropsItemIndex] = useState(props.selectedItem[0].index);

    useEffect(() => {
        if (props.selectedItem[0].name !== propsItemName) {
            setpropsItemName(props.selectedItem[0].name);
        }
    }, [props.selectedItem[0].name]);

    useEffect(() => {
        if (props.selectedItem[0].description !== propsItemDescription) {
            setpropsItemDescription(props.selectedItem[0].description)
        }
    }, [props.selectedItem[0].description]);

    useEffect(() => {
        if (props.selectedItem[0].price !== propsItemPrice) {
            setpropsItemPrice(props.selectedItem[0].price)
        }
    }, [props.selectedItem[0].price]);

    useEffect(() => {
        if (props.selectedItem[0].index !== propsItemIndex) {
            setpropsItemIndex(props.selectedItem[0].index)
        }
    }, [props.selectedItem[0].index]);

    const nameChange = (e) => {
        setpropsItemName(e.currentTarget.value)
    }
    const descriptionChange = (e) => {
        setpropsItemDescription(e.currentTarget.value)
    }
    const priceChange = (e) => {
        setpropsItemPrice(e.currentTarget.value)
    }

    const handlChangeSubmit = (event) => {
        event.preventDefault();
        props.change({
            name: propsItemName,
            description: propsItemDescription,
            price: propsItemPrice,
            index: propsItemIndex
        })
    }
    return (
        <form onSubmit={handlChangeSubmit}>
            <h1>Change product</h1>
            <div className="form-group">
                <label htmlFor="validationServer03">Name</label>
                <input type="text" data-name="name" className="form-control is-invalid" id="validationServer03"
                    onChange={nameChange} value={props.selectedItem && propsItemName} required />
            </div>
            <div className="form-group">
                <label htmlFor="validationServer04">Description</label>
                <input type="text" data-name="description" className="form-control is-invalid" id="validationServer04"
                    onChange={descriptionChange} value={props.selectedItem && propsItemDescription} required />
            </div>
            <div className="form-group">
                <label htmlFor="validationServer05">Price</label>
                <input type="text" data-name="price" className="form-control is-invalid" id="validationServer05"
                    onChange={priceChange} value={props.selectedItem && propsItemPrice} required />
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
export default connect(
    (state) => ({
        products: state.products.products,
        selectedItem: state.products.selectedItem
    }), { change })(ProductChange);

