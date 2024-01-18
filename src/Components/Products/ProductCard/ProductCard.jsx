import { Box, Button, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ data,addToCart,isLoading}) => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [image,changeImage] = useState(false);
  
  return (
    <div>
      
    </div>
  );
}