import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsActions";
import Slide from "./Slide";
import {useDispatch, useSelector} from 'react-redux'
const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;
const Home = () => {
  const {products}=useSelector(state=>state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <Slide products={products}title="Deal of the day" timer={true}/>
        <Slide products={products}title="Discounts for you" timer={false}/>
        <Slide products={products}title="Suggested items" timer={false}/>
        <Slide products={products}title="Top Selections" timer={false}/>
        <Slide products={products}title="Recommended items" timer={false}/>
        <Slide products={products}title="Trending offers" timer={false}/>
        <Slide products={products}title="Season's top picks" timer={false}/>
        <Slide products={products}title="Top Deals On accessories" timer={false}/>
      </Component>
    </>
  );
};

export default Home;
