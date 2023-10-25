import styled from "styled-components";
import { TiTick } from "react-icons/ti";

export const ListItem = styled.li`
  list-style-type: none;
`;

export const Image = styled.img`
  width: 20px;
  height: 30px;
  background-size: cover;
`;

export const Tick = styled(TiTick)``;

export const Text = styled.p`
  font-size: 18px;
  color: #a8a6ab;
`;

export const StatusContainer = styled.div`
  background-color: #575659;
  display: flex;
  flex-direction: row;
`;

export const StatusText = styled.p``;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
