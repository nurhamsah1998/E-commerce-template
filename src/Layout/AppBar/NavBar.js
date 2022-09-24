import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navigationLink } from "../../Navigation/AppBarConfig";
import { Link, TextField } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navigationLink.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{ boxShadow: "none", zIndex: 9999, bgcolor: "transparent" }}
        component="nav"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar sx={{ width: drawerWidth }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
          </Toolbar>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextField
              InputProps={{ startAdornment: <SearchIcon /> }}
              placeholder="Search store"
              size="small"
            />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              {navigationLink.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    color: "#fff",
                    py: 0.6,
                  }}
                >
                  <Typography
                    fontSize={15}
                    component="button"
                    color="#000"
                    onClick={() => navigate(item.path)}
                    sx={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      borderBottom: location.pathname?.includes(item.path)
                        ? "2px solid #000"
                        : "none",
                      transition: "0.2s",
                      "&:hover": {
                        borderBottom: "1px solid #000",
                      },
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{ display: "flex", alignItems: "center", ml: 2, gap: 1 }}
              >
                <ListItemButton color="secondary">
                  <ShoppingCartIcon />
                </ListItemButton>
                <ListItemButton>
                  <PersonIcon />
                </ListItemButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 2, width: "100%" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
