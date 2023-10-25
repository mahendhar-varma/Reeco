import styled from "styled-components";
import { TiTick } from "react-icons/ti";

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: ${(props) => (props.value ? "column" : "row")};
  justify-content: ${(props) => (props.value ? "center" : "space-between")};
  width: 850px;
  margin-left: -43px;
  background-color: ${(props) => props.value && "#348feb"};
  align-items: ${(props) => props.value && "center"};
  padding: ${(props) => props.value && 20}px;
  width: ${(props) => props.value && 200}px;
`;

export const Image = styled.img`
  width: 20px;
  height: 30px;
  background-size: cover;
`;

export const Tick = styled(TiTick)`
  width: 20px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #a8a6ab;
  width: 120px;
  margin-left: 10px;
`;

export const StatusContainer = styled.div`
  background-color: #575659;
  display: flex;
  flex-direction: row;
`;

export const StatusText = styled.p`
  color: ${(props) => {
    if (props.statusTextColor === "green") {
      return "#023d04";
    } else if (props.statusTextColor === "red") {
      return "#d90707";
    } else {
      return "#dbab25";
    }
  }};
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => {
    if (props.statusTextColor === "green") {
      return "#023d04";
    } else if (props.statusTextColor === "red") {
      return "#d90707";
    } else if (props.statusTextColor === "yellow") {
      return "#dbab25";
    }
  }};
  margin-top: ${(props) => props.value && 5}px;
`;

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
