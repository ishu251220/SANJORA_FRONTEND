// ProductPreview.js
import React, { useState } from "react";
import styled from "styled-components";

const ProductPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
`;

const ImageViewer = styled.div`
  flex: 1;
  flex-basis: 100%;
  align-self: flex-start;
  /* align-items: center; */
  /* justify-content: center; */
  /* border: 1px solid red; */
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const DescriptionBox = styled.div`
  flex: 1;
  flex-basis: 100%;
  height: 100%;
  padding: 20px;
  /* border: 1px solid red; */
  align-self: flex-start;
  padding-left: 7rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  & > .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 8rem;
`;

const PriceWrapper = styled.div`
  margin-bottom: 10px;
`;

const OfferPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #e44d26;
  margin-right: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #777;
`;

const DiscountPercentage = styled.span`
  color: #e44d26;
`;

const SizeSelector = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeTile = styled.span`
  /* display: inline-block; */
  padding: 8px;
  border: 1px solid #ccc;
  margin-right: 8px;
  cursor: pointer;
  font-size: 1.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddToBagButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WishlistButton = styled.button`
  background-color: #e44d26;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const ProductPreview = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ProductPreviewWrapper>
      <ImageViewer>
        <MainImage src={selectedImage} alt="Product" />
        <ThumbnailContainer>
          {product.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </ThumbnailContainer>
      </ImageViewer>
      <DescriptionBox>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <PriceWrapper>
          <OfferPrice>${product.offerPrice}</OfferPrice>
          <OldPrice>${product.oldPrice}</OldPrice>
          <DiscountPercentage>
            ({product.discountPercentage}% Off)
          </DiscountPercentage>
        </PriceWrapper>
        <SizeSelector>
          {product.sizes.map((size, idx) => (
            <SizeTile>{size}</SizeTile>
          ))}
          {/* <SizeTile>XS</SizeTile>
          <SizeTile>S</SizeTile>
          <SizeTile>M</SizeTile>
          <SizeTile>L</SizeTile>
          <SizeTile>XL</SizeTile> */}
        </SizeSelector>
        <div className="btns">
          <AddToBagButton>Add to Bag</AddToBagButton>
          <WishlistButton>Add to Wishlist</WishlistButton>
        </div>
      </DescriptionBox>
    </ProductPreviewWrapper>
  );
};

export default ProductPreview;
