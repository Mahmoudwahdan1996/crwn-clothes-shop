import React, { useEffect } from "react";
import{Routes , Route} from "react-router-dom";
import {  useDispatch } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopactions";

import CollectionContainer from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collection-overview/collectionOverview.container";

const Shop = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  },[dispatch]);
  return (
    <div className='shopContainer'>
      <Routes>
        <Route path='/*' element={<CollectionOverviewContainer />} />

        <Route path={`:collectionId`} element={<CollectionContainer />} />
      </Routes>
    </div>
  );
};



export default Shop;
