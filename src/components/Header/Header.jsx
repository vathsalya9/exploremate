import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h4" className="title">
                    ExploreMate
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="h7" className="title">
                        Explore the World
                    </Typography>
                    <div className="search">
                        <div className="searchIcon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{ root: "inputRoot", input: "inputInput" }}
                        />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
