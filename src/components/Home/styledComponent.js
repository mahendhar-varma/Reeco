import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export const OrderDetailsContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  height: ${(props) => props.value && 70}px;
  border-radius: ${(props) => !props.value && 12}px;
  display: ${(props) => !props.value && "flex"};
  flex-direction: row;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.value1 ? "column" : "row")};
  justify-content: ${(props) => props.value && "space-between"};
`;

export const RightArrow = styled(AiOutlineRight)`
  width: 12px;
  margin: 3px;
  margin-top: 15px;
`;

export const Heading = styled.h1`
  font-size: ${(props) => (props.value ? 23 : 15)}px;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  color: #bfb9c7;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
`;

export const HrElement = styled.hr`
  color: #bfb9c7;
  margin: 12px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border-width: 0px;
  height: 40px;
  color: ${(props) => (props.value ? "#620de0" : "#ffffff")};
  background-color: ${(props) => (props.value ? "transparent" : "#620de0")};
  border-width: ${(props) => (props.value ? 1 : 0)}px;
  border-color: #620de0;
  margin: 10px;
  margin-top: 10px;
`;

export const Form = styled.form`
  width: 200px;
  border: 1px solid #a8a8a8;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 30px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 3px;
  height: 30px;
`;

export const SearchIcon = styled(BiSearch)`
  width: 15px;
  margin: 10px;
  background-color: transparent;
`;

export const Printer = styled(BsPrinter)`
  width: 20px;
  color: #620de0;
  margin-top: 20px;
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
  width: 700px;
  border: ${(props) => (props.value ? 3 : 0)}px;
  border-top-left-radius: ${(props) => props.value && 6}px;
  border-top-right-radius: ${(props) => props.value && 6}px;
  height: ${(props) => props.value && 60}px;
  margin-left: ${(props) => props.value && 28}px;
  border-color: #a8a6ab;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
