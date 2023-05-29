import { Link } from "react-router-dom";
import "./header.css";

const items = [
  { name: "All", to: "/", exact: true },
  { name: "Jewelry & Accessories", to: "/jewelry" },
  { name: "Clothing & Shoes", to: "/clothing" },
  { name: "Wedding & Party", to: "/wedding" },
  { name: "Toys & Entertainment", to: "/toys" },
  { name: "Art & Collectibles", to: "/art" },
  { name: "Craft Supplies & Tools", to: "/craft" },
];

const Navigation = () => {
  return (
    <nav>
      <hr />
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
