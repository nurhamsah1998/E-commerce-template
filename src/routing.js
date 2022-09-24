import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Story from "./Pages/Story/Story";
import Packaging from "./Pages/Packaging/Packaging";
import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import NavBar from "./Layout/AppBar/NavBar";
import Page_not_found from "./Section/Auth/Page_not_found";
import SideBarMenu from './Layout/SideMenu/SideBarMenu'
import NewIn from './Pages/Product/NewIn/NewIn'
import Accessories from "./Pages/Product/Accessories/Accessories";
import ActiveWear from "./Pages/Product/ActiveWear/ActiveWear";
import GiftNliving from './Pages/Product/Gift&Living/GiftNliving'
import Inspiration from "./Pages/Product/Inspiration/Inspiration";
import Clothing from "./Pages/Product/Clothing/Clothing";
import Background from "./Layout/AppBar/Background";

function Routing() {
  return (
    <Routes>
      <Route
        path="/e-commerce"
        element={<Background />}
        children={
          <React.Fragment>
            <Route path="products" element={<SideBarMenu />} children={
              <React.Fragment>
                    <Route path="new-in" element={<NewIn />} />
                    <Route path="clothing" element={<Clothing />} />
                    <Route path="accessories" element={<Accessories />} />
                    <Route path="activewear" element={<ActiveWear />} />
                    <Route path="gift-living" element={<GiftNliving />} />
                    <Route path="inspiration" element={<Inspiration />} />
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
