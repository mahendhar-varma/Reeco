import { Link } from "react-router-dom";
import {
  Nav,
  Ul,
  LogoImage,
  ListElement,
  Div,
  CartIcon,
  Para,
} from "./styledComponent";

const Header = () => (
  <Nav>
    <Ul>
      <Div>
        <LogoImage
          src="https://i.ibb.co/XsW06LJ/download.png"
          alt="Reeco logo"
        />
        <ListElement>Store</ListElement>
        <ListElement>Orders</ListElement>
        <ListElement>Analytics</ListElement>
      </Div>
      <Div>
        <Link to="/Reeco/cart">
          <CartIcon />
        </Link>
        <Para>Hello James</Para>
      </Div>
    </Ul>
  </Nav>
);

export default Header;
