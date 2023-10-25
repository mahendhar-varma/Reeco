import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export const OrderDetailsContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: ${(props) => !props.value && 12}px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.value && "space-between"};
`;

export const RightArrow = styled(AiOutlineRight)`
  width: 12px;
`;

export const Heading = styled.h1`
  font-size: 23px;
`;

export const Paragraph = styled.p`
  color: #bfb9c7;
  font-size: 18px;
  font-weight: 500;
`;

export const HrElement = styled.hr`
  color: #bfb9c7;
  width: 5px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border-width: 0px;
  height: 40px;
  color: ${(props) => (props.value ? "#620de0" : "#ffffff")};
  background-color: ${(props) => (props.value ? "transparent" : "#620de0")};
  border: ${(props) => (props.value ? 3 : 0)}px;
`;

export const Form = styled.form`
  width: 200px;
  border: none;
  background: #a8a6ab;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  border: none;
  cursor: pointer;
  padding: 6px;
`;

export const SearchIcon = styled(BiSearch)`
  width: 15px;
  margin: 10px;
`;

export const Printer = styled(BsPrinter)`
  width: 20px;
  color: #620de0;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px;
  background-color: #a8a6ab;
`;

export const TableContainer = styled.div`
  width: 100%;
  border: ${(props) => (props.value ? 3 : 0)}px;
  border-top-left-radius: ${(props) => props.value && 6}px;
  border-top-right-radius: ${(props) => props.value && 6}px;
  height: ${(props) => props.value && 60}px
  border-color: #a8a6ab;
`;

export const Ul = styled.ul`
  margin: 0px;
  width: 100%;
`;
