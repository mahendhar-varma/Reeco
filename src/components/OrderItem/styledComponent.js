import styled from "styled-components";
import { TiTick } from "react-icons/ti";

export const Tr = styled.tr`
  border-bottom: 1px solid #aeaeae;
`;

export const Td = styled.td`
  background-color: #7005d3;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
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
    } else if (props.statustextcolor === "Edited") {
      return "#dbab25";
    } else if (props.statustextcolor === "Missing") {
      return "#FFA550";
    }
  }};
  border-radius: 12px;
  height: 30px;
  padding: 5px;
`;

export const StatusText = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 2px;
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
    } else if (props.value === "yellow" && props.statustextcolor === "Edited") {
      return "#dbab25";
    } else if (props.value === "red" && props.statustextcolor === "Missing") {
      return "#FFA550";
    }
  }};
  margin-top: ${(props) => props.value1 === "true" && -2}px;
  height: 40px;
  width: 40px;
`;

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const Container1 = styled.div`
  margin: 0px;
  padding: 20px;
  width: 200px;
  border-radius: 12px;
  box-shadow: 1px 1px 1px 1px #888888;
  background-color: white;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
`;
