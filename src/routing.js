import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Product from "./Pages/Product/Product";
import Story from "./Pages/Story/Story";
import Packaging from "./Pages/Packaging/Packaging";
import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import NavBar from "./Layout/AppBar/NavBar";
import Page_not_found from "./Section/Auth/Page_not_found";
import SideBarMenu from './Layout/SideMenu/SideBarMenu'

function Routing() {
  return (
    <Routes>
      <Route
        path="/e-commerce"
        element={<NavBar />}
        children={
          <React.Fragment>
            <Route path="products" element={<SideBarMenu />} children={
              <React.Fragment>
                    <Route path="story" element={<Story />} />
                    <Route path="manufacturing" element={<Manufacturing />} />
                    <Route path="packaging" element={<Packaging />} />
              </React.Fragment>
            } />
            <Route path="story" element={<Story />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="packaging" element={<Packaging />} />
          </React.Fragment>
        }
      />
      <Route path="alamat-tidak-ditemukan" element={<Page_not_found />} />
      <Route path="*" element={<Navigate to="/alamat-tidak-ditemukan" />} />
      <Route path="/" element={<Navigate to="/e-commerce/products" />} />
    </Routes>
  );
}

export default Routing;
