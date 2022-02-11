import { connect } from "react-redux";

import collectionOverview from "./collectionOverview";

import { compose } from "redux";

import WithSpinner from "../with-spinner/with.spinner";

import {selectIsCollectionsFetching} from "../../redux/shop/shopselector";
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionsFetching
})

const CollectionOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverview);

export default CollectionOverviewContainer ;