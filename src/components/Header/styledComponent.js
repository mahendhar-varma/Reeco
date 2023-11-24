import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";

export const Nav = styled.nav`
  height: 70px;
  background-color: #6603fc;
  margin-top: 0px;
  padding: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 30px;
  margin: 8px;
  margin-top: 2px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListElement = styled.li`
  margin: 10px;
  color: #ffffff;
  margin: 8px;
`;

export const CartIcon = styled(BsCart4)`
  width: 20px;
  margin-top: 18px;
  margin-right: 10px;
  color: white;
`;

export const Para = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;
