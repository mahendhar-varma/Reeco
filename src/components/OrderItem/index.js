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
  const { data, text, ApproveAction, MissingAction, EditedAction } = props;
  const { title, price, category, image } = data;

  return (
    <ListItem>
      <Image src={image} alt="order" />
      <Text>{title}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Text>1</Text>
      <Text>{price}</Text>
      <StatusContainer>
        <StatusText>{text}</StatusText>
        <Btn type="button" onClick={() => ApproveAction("Approved")}>
          <Tick />
        </Btn>
        <PopUpContainer>
          <Popup modal trigger={<Btn type="button">x</Btn>}>
            {(close) => (
              <>
                <ListItem>
                  <Container>
                    <Text>Missing Product</Text>
                    <Btn type="button" onClick={() => close()}>
                      x
                    </Btn>
                  </Container>
                  <Text>is {title.slice(0, 10)} urgent?</Text>
                  <Container>
                    <Btn type="button" onClick={() => MissingAction("Urgent")}>
                      No
                    </Btn>
                    <Btn
                      type="button"
                      onClick={() => MissingAction("Missing Urgent")}
                    >
                      Yes
                    </Btn>
                  </Container>
                </ListItem>
              </>
            )}
          </Popup>
        </PopUpContainer>
        <Btn type="button" onClick={() => EditedAction("Edited")}>
          Edit
        </Btn>
      </StatusContainer>
      <hr />
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  text: state,
});

export default connect(mapStateToProps, {
  ApproveAction,
  MissingAction,
  EditedAction,
})(OrderItem);
