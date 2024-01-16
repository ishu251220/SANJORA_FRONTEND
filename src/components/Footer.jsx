import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductPreview from "../pages/ProductViewer";

const FooterContainer = styled.div``;
const Ul = styled.ul``;
const Li = styled.li``;
const Img = styled.img`
  height: 20rem;
`;

const product = {
  title: "Example Product",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  offerPrice: 99.99,
  oldPrice: 129.99,
  discountPercentage: 23,
  images: [
    "https://via.placeholder.com/800x600",
    "https://via.placeholder.com/800x601",
    "https://via.placeholder.com/800x602",
    "https://via.placeholder.com/800x603",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
};
const Footer = () => {
  return (
    <FooterContainer>
      <ProductPreview product={product} />
    </FooterContainer>
  );
};

export default Footer;
