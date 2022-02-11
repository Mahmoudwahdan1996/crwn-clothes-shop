import React from "react";
import { useNavigate } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
}from "./menuItems.styles"

const MenuItem = ({title, imageUrl, size, linkUrl  }) => {
    const navigate =useNavigate();
    return (  
        <MenuItemContainer  
        size={size} 
        onClick={()=>{navigate(linkUrl)}}
        >
            <BackgroundImageContainer      
                imageUrl={imageUrl}
                className='background-image' 
            />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
}
 
export default MenuItem;