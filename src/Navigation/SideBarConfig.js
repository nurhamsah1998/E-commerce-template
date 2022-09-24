import CheckroomIcon from "@mui/icons-material/Checkroom";
import DiamondIcon from "@mui/icons-material/Diamond";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import {
  grey,
  green,
  yellow,
  red,
  purple,
  blue,
  orange,
  pink,
} from "@mui/material/colors";

export const SideBarConfig = [
  {
    path: "/e-commerce/products/new-in",
    title: "New in",
    icon: <ElectricBoltIcon sx={{ color: yellow[500] }} />,
  },
  {
    path: "/e-commerce/products/clothing",
    title: "Clothing",
    icon: <CheckroomIcon sx={{ color: purple[500] }} />,
  },
  {
    path: "/e-commerce/products/accessories",
    title: "Accessories",
    icon: <DiamondIcon sx={{ color: orange[500] }} />,
  },
  {
    path: "/e-commerce/products/activewear",
    title: "Activewear",
    icon: <DiamondIcon sx={{ color: blue[500] }} />,
  },
  {
    path: "/e-commerce/products/gift-living",
    title: "Gifts & living",
    icon: <DiamondIcon sx={{ color: yellow[500] }} />,
  },
  {
    path: "/e-commerce/products/inspiration",
    title: "Inspiration",
    icon: <DiamondIcon sx={{ color: pink[500] }} />,
  },
];
