import React from 'react';
import { connect } from 'react-redux';
import sortBy from '../../action/sort.action'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import createItem from '../../action/createItem.actionn'


const ButtonSortBy = (props) => {

    const searchByName = (event) => {
        props.sortBy(event.currentTarget.dataset.by)
    }
    const addProduct = () => {
        props.createItem()
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="mt-1 mb-1 mr-5">
                    <button type="button" className="btn btn-primary" onClick={addProduct} >Add product</button>
                </div>
                <div className="mt-1 mb-1 mr-5">
                    <DropdownButton id="dropdown-basic-button" title="sort by">
                        <Dropdown.Item data-by="name" onClick={searchByName}>sort by name</Dropdown.Item>
                        <Dropdown.Item data-by="sortByDate" onClick={searchByName}>sort by date</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="mt-2 mb-1 mr-5">
                    <input type="text" placeholder="Search" onChange={props.search} />
                </div>
            </div>
        </div>
    );
}
export default connect(null, { sortBy, createItem })(ButtonSortBy)

