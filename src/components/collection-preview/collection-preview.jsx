import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import CollectionItem from "../collection-item/collectionItem";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";
import "./swiper.css";

SwiperCore.use([Pagination, Navigation]);

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='mySwiper swiper-container'
          breakpoints={{
            640: {
              spaceBetween : 10,
              slidesPerView: 2,
              slidesPerGroup: 2 
            },
            768: {
              spaceBetween : 15,
              slidesPerView: 3,
              slidesPerGroup: 3 ,
            },
            992:{
              spaceBetween : 20,
              slidesPerView: 3,
              slidesPerGroup: 3 ,
            },
            1200:{
              spaceBetween : 25,
              slidesPerView: 4,
              slidesPerGroup: 3 ,
            }
          }}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CollectionItem item={item} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
