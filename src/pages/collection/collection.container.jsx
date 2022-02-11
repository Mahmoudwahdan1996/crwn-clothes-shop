import { connect } from "react-redux";
import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with.spinner";
import {selectIsCollectionLoaded} from "../../redux/shop/shopselector"

import Collection from "./collection";
import { createStructuredSelector } from 'reselect';


const mapStateToProps = createStructuredSelector({
    isLoading : (state)=>!selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainer ;