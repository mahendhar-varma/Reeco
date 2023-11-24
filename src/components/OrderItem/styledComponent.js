import styled from "styled-components";
import { TiTick } from "react-icons/ti";

export const Image = styled.img`
  width: 20px;
  height: 30px;
  background-size: cover;
`;

export const Tick = styled(TiTick)`
  width: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #a8a6ab;
  width: 120px;
  margin-left: 10px;
  text-align: center;
`;

export const StatusContainer = styled.div`
  background-color: #575659;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  padding: 10px;
`;

export const StatusText = styled.p`
  color: white;
  font-size: 14px;
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => {
    if (props.statustextcolor === "green" && props.value === "green") {
      return "#023d04";
    } else if (props.statustextcolor === "red" && props.value === "red") {
      return "#d90707";
    } else if (props.statustextcolor === "yellow" && props.value === "yellow") {
      return "#dbab25";
    } else if (props.statustextcolor === "orange" && props.value === "red") {
      return "#FFA550";
    }
  }};
  margin-top: ${(props) => props.value1 === "true" && -2}px;
  height: 123px;
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
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
`;

export const TextContainer = styled.div`
  background-color: ${(props) => {
    if (props.statustextcolor === "green") {
      return "#023d04";
    } else if (props.statustextcolor === "red") {
      return "#d90707";
    } else if (props.statustextcolor === "yellow") {
      return "#dbab25";
    } else if (props.statustextcolor === "orange") {
      return "#FFA550";
    }
  }};
  border-radius: 12px;
  height: 18px;
`;
