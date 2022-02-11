import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shopselector";
import CollectionItem from "./../../components/collection-item/collectionItem";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const Collection = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => {
          return <CollectionItem className="item-collection" key={item.id} item={item} />;
        })}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default Collection;
