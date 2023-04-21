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
  console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
