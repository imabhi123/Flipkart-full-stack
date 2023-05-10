import React, { useEffect, useState } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import Searchh from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 200%;
  margin-left: 10px;
  border-radius: 3px;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  return (
    <div>
      <SearchContainer style={{ display: "flex" }}>
        <InputSearchBase
          placeholder="search for products,brands and more"
          onChange={(e) => getText(e.currentTarget.value)}
          value={text}
        />
        <Box>
          <Searchh style={{ color: "blue", padding: "5px" }} />
        </Box>
        {text && (
          <ListWrapper>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setText("")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </ListWrapper>
        )}
      </SearchContainer>
    </div>
  );
};

export default Search;
