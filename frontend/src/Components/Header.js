import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store"
import useStyles from "./utils";

export default function Header() {
  const classes = useStyles()
  const dispath = useDispatch()

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(108,9,121,1) 10%, rgba(63,94,177,1) 51%, rgba(0,212,255,1) 76%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">BlogsApp</Typography>
        {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab className={classes.font} LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab className={classes.font} LinkComponent={Link} to="/blogs/add" label="Add" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn &&
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          }
          {isLoggedIn &&
            <Button
              onClick={()=> dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>}
        </Box>
      </Toolbar>
    </AppBar >
  );
}
