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
          src="https://www.reeco.io/assets/logo.44b75468.svg"
          alt="Reeco logo"
        />
        <ListElement>Store</ListElement>
        <ListElement>Orders</ListElement>
        <ListElement>Analytics</ListElement>
      </Div>
      <Div>
        <Link to="/cart">
          <CartIcon />
        </Link>
        <Para>Hello James</Para>
      </Div>
    </Ul>
  </Nav>
);

export default Header;
