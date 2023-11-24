import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import {
  AiOutlineRight,
  AiFillApple,
  AiFillCustomerService,
  AiOutlineRadarChart,
} from "react-icons/ai";

import { GiAmpleDress } from "react-icons/gi";
import { FaShoppingBag, FaRing } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { FiBox } from "react-icons/fi";

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
  flex-wrap: ${(props) => props.value2 && "wrap"};
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
  width: 220px;
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
  height: 16px;
  margin-top: 6px;
  margin-left: 6px;
`;

export const SearchIcon = styled(BiSearch)`
  width: 15px;
  margin: 10px;
  margin-top: 2px;
  margin-left: 2px;
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

export const EmptySearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #aeaeae;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #aeaeae;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const AppleIcon = styled(AiFillApple)`
  margin: 2px;
`;

export const ServiceIcon = styled(AiFillCustomerService)`
  margin: 2px;
`;

export const ChartIcon = styled(AiOutlineRadarChart)`
  margin: 2px;
`;

export const DressIcon = styled(GiAmpleDress)`
  margin: 2px;
`;

export const BagIcon = styled(FaShoppingBag)`
  margin: 2px;
`;

export const RingIcon = styled(FaRing)`
  margin: 2px;
`;

export const MonitorIcon = styled(MdMonitor)`
  margin: 2px;
`;

export const BoxIcon = styled(FiBox)`
  margin: 2px;
`;
