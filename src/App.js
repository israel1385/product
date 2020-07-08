import React, { useState, useEffect } from 'react';
import './App.css';
import List from './component/list/List.js';
import CreataProduct from './component/craeteProduct/CreataProduct'
import Heder from './component/heder/Heder'
import ButtonSortBy from '../src/component/buttonSort/ButtonSortBy'
import { connect } from 'react-redux';
import Productchange from '../src/component/productchange/ProductChange'
import createItem from '../src/action/createItem.actionn'

function App(props) {
  const [addProducts, setaddProducts] = useState(false);
  return (
    <div className="">
      <div className='container-fluid ' style={{ backgroundColor: "darkturquoise" }}>
        <Heder />
      </div>
      <div className='container badyProduct'>
        <div className="row ">
          <div className='col'>
            <List />
          </div>
          <div className='col'>
            {!props.selectedItem && < CreataProduct />}
            {props.selectedItem && <Productchange />}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    products: state.products.products,
    selectedItem: state.products.selectedItem,
  }
}
export default connect(mapStateToProps, { createItem })(App)

