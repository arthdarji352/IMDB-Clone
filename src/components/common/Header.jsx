import React from "react";
import { useState } from "react";
import { logoURL } from "../../constants/constant";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { routePath } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-item: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  const [open, setOpen] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Logo
          src={logoURL}
          alt="LOGO"
          onClick={() => navigate(routePath.home)}
        />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>En</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
