import {
  ListItem,
  Text,
  Image,
  Tick,
  StatusContainer,
  StatusText,
  Btn,
  PopUpContainer,
  Container,
} from "./styledComponent";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { ApproveAction } from "../../action";
import { MissingAction } from "../../action";
import { EditedAction } from "../../action";

const OrderItem = (props) => {
  const { data, textId, ApproveAction, MissingAction, EditedAction } = props;
  let { text } = props;
  const { id, title, price, category, image } = data;

  let statusTextColor = "";
  if (textId === id) {
    statusTextColor = "green";
    if (text === "Missing Urgent") {
      statusTextColor = "red";
    } else if (text === "Urgent") {
      statusTextColor = "yellow";
    }
  }
  if (textId !== id) {
    text = "";
  }

  return (
    <>
      <ListItem>
        <Image src={image} alt="order" />
        <Text>{title}</Text>
        <Text>{category}</Text>
        <Text>{price}</Text>
        <Text>1</Text>
        <Text>{price}</Text>
        <StatusContainer>
          <StatusText statustextcolor={statusTextColor}>{text}</StatusText>
          <Btn
            type="button"
            onClick={() => ApproveAction({ text: "Approved", textId: id })}
          >
            <Tick />
          </Btn>
          <PopUpContainer>
            <Popup
              modal
              trigger={
                <Btn type="button" value="true">
                  x
                </Btn>
              }
            >
              {(close) => (
                <>
                  <ListItem value="true">
                    <Container>
                      <Text>Missing Product</Text>
                      <Btn type="button" onClick={() => close()}>
                        x
                      </Btn>
                    </Container>
                    <Text>is {title} urgent?</Text>
                    <Container>
                      <Btn
                        type="button"
                        onClick={() =>
                          MissingAction({ text: "Urgent", textId: id })
                        }
                      >
                        No
                      </Btn>
                      <Btn
                        type="button"
                        onClick={() =>
                          MissingAction({ text: "Missing Urgent", textId: id })
                        }
                      >
                        Yes
                      </Btn>
                    </Container>
                  </ListItem>
                </>
              )}
            </Popup>
          </PopUpContainer>
          <Btn
            type="button"
            onClick={() => EditedAction({ text: "Edited", textId: id })}
          >
            Edit
          </Btn>
        </StatusContainer>
      </ListItem>
      <hr />
    </>
  );
};

const mapStateToProps = (state) => ({
  text: state.text,
  textId: state.textId,
});

export default connect(mapStateToProps, {
  ApproveAction,
  MissingAction,
  EditedAction,
})(OrderItem);
