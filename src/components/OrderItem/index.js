import {
  Text,
  Image,
  Tick,
  StatusContainer,
  TextContainer,
  StatusText,
  Btn,
  PopUpContainer,
  Container1,
  Container2,
  Tr,
  Td,
} from "./styledComponent";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { ApproveAction } from "../../action";
import { MissingAction } from "../../action";
import { EditedAction } from "../../action";

const OrderItem = (props) => {
  const { data, ApproveAction, MissingAction, EditedAction, newArray } = props;
  const { id, title, price, category, image } = data;

  const requiredObjectArray = newArray.filter((item) => item.textId === id);
  requiredObjectArray.push({ text: "", textBg: "" });

  const { text, textBg } = requiredObjectArray[0];

  let statusTextColor = textBg;

  return (
    <>
      <Tr>
        <td>
          <Image src={image} alt="order" />
        </td>
        <td>
          <Text>{title}</Text>
        </td>
        <td>
          <Text>{category}</Text>
        </td>
        <td>
          <Text>{price}</Text>
        </td>
        <td>
          <Text>1</Text>
        </td>
        <td>
          <Text>{price}</Text>
        </td>
        <Td>
          <StatusContainer>
            <TextContainer statustextcolor={statusTextColor}>
              <StatusText>{text}</StatusText>
            </TextContainer>
            <Btn
              type="button"
              onClick={() =>
                ApproveAction({
                  text: "Approved",
                  textId: id,
                  textBg: "green",
                })
              }
              statustextcolor={statusTextColor}
              value="green"
            >
              <Tick />
            </Btn>
            <PopUpContainer>
              <Popup
                modal
                trigger={
                  <Btn
                    type="button"
                    value1="true"
                    statustextcolor={statusTextColor}
                    value="red"
                  >
                    x
                  </Btn>
                }
              >
                {(close) => (
                  <>
                    <Container1>
                      <Container2>
                        <Text>Missing Product</Text>
                        <Btn type="button" onClick={() => close()}>
                          x
                        </Btn>
                      </Container2>
                      <Text value="true">Is {title.slice(0, 23)} urgent?</Text>
                      <Container2>
                        <Btn
                          type="button"
                          onClick={() =>
                            MissingAction({
                              text: "Missing",
                              textId: id,
                              textBg: "orange",
                            })
                          }
                        >
                          No
                        </Btn>
                        <Btn
                          type="button"
                          onClick={() =>
                            MissingAction({
                              text: "Missing Urgent",
                              textId: id,
                              textBg: "red",
                            })
                          }
                        >
                          Yes
                        </Btn>
                      </Container2>
                    </Container1>
                  </>
                )}
              </Popup>
            </PopUpContainer>
            <Btn
              type="button"
              onClick={() =>
                EditedAction({
                  text: "Edited",
                  textId: id,
                  textBg: "yellow",
                })
              }
              statustextcolor={statusTextColor}
              value="yellow"
            >
              Edit
            </Btn>
          </StatusContainer>
        </Td>
      </Tr>
    </>
  );
};

const mapStateToProps = (state) => ({
  newArray: state,
});

export default connect(mapStateToProps, {
  ApproveAction,
  MissingAction,
  EditedAction,
})(OrderItem);
