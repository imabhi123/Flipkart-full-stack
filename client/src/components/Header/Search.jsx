import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import Searchh from "@mui/icons-material/Search";
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
const Search = () => {
  return (
    <div>
      <SearchContainer style={{ display: "flex" }}>
        <InputSearchBase placeholder="search for products,brands and more" />
        <Box>
          <Searchh style={{ color: "blue", padding: "5px" }} />
        </Box>
      </SearchContainer>
    </div>
  );
};

export default Search;
