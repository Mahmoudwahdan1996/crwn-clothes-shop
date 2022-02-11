import React from "react";
import { useSelector } from "react-redux";

import { selectCollectionForPreview } from "../../redux/shop/shopselector";

import CollectionPreview from "../collection-preview/collection-preview";

import { CollectionsOverviewContainer } from "./collectionOverview.styles";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionForPreview);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewContainer>
  );
};

export default CollectionOverview;
