import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const editedValidationList = [
  "Quantity Updated",
  "Price Updated",
  "Quantity and Price updated",
];

export const Tr = styled.tr`
  border-bottom: 1px solid #aeaeae;
`;

export const Td = styled.td`
  background-color: #7005d3;
`;

export const Image = styled.img`
  width: ${(props) => (props.value ? 150 : 30)}px;
  height: ${(props) => (props.value ? 150 : 30)}px;
  background-size: cover;
`;

export const Tick = styled(TiTick)`
  width: 20px;
  font-size: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #a8a6ab;
  width: ${(props) => (props.value ? 200 : 120)}px;
  width: ${(props) => props.value1 && 400}px;
  width: ${(props) => props.quantity && "auto"};
  text-align: left;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  padding-top: 10px;
`;

export const TextContainer = styled.div`
  background-color: ${(props) => {
    if (props.statustextcolor === "Approved") {
      return "#023d04";
    } else if (props.statustextcolor === "Missing Urgent") {
      return "#d90707";
    } else if (editedValidationList.includes(props.statustextcolor)) {
      return "#dbab25";
    } else if (props.statustextcolor === "Missing") {
      return "#FFA550";
    }
  }};
  border-radius: 14px;
  height: 35px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StatusText = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 2px;
  width: 100px;
  text-align: center;
  padding-top: 3px;
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => {
    if (props.value === "green" && props.statustextcolor === "Approved") {
      return "#023d04";
    } else if (
      props.value === "red" &&
      props.statustextcolor === "Missing Urgent"
    ) {
      return "#d90707";
    } else if (
      props.value === "yellow" &&
      editedValidationList.includes(props.statustextcolor)
    ) {
      return "#dbab25";
    } else if (props.value === "red" && props.statustextcolor === "Missing") {
      return "#FFA550";
    }
  }};
  margin-top: ${(props) => props.value1 === "true" && -2}px;
  height: 40px;
  width: ${(props) => (props.send ? 60 : 40)}px;
  color: ${(props) => props.cancel && "#620de0"};
  background-color: ${(props) => props.send && "#620de0"};
  border-radius: ${(props) => props.send && 12}px;
  color: ${(props) => props.send && "#ffffff"};
`;

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const Container1 = styled.div`
  margin: 0px;
  padding: 20px;
  width: ${(props) => (props.value ? 600 : 200)}px;
  border-radius: 12px;
  box-shadow: 1px 1px 1px 1px #888888;
  background-color: white;
  height: ${(props) => props.value1 && 450}px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: ${(props) => props.value && 30}px;
`;

export const QuantityCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 90px;
  margin-right: 60px;
`;

export const Input = styled.input`
  cursor: pointer;
`;

export const ListItem = styled.li`
  list-style-type: none;
  border-radius: 14px;
  height: 25px;
  padding: 5px;
  background-color: #aeaeae;
`;

export const PlusIcon = styled(CiCirclePlus)`
  border-radius: 16px;
  background-color: green;
  margin-top: 18px;
`;

export const MinusIcon = styled(CiCircleMinus)`
  border-radius: 16px;
  background-color: green;
  margin-top: 18px;
`;
