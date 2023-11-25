import { Component } from "react";

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
  QuantityCont,
  Input,
  PlusIcon,
  MinusIcon,
  ListItem,
  Tr,
  Td,
} from "./styledComponent";
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { ApproveAction } from "../../action";
import { MissingAction } from "../../action";
import { EditedAction } from "../../action";

const reasonsList = [
  "Missing Product",
  "Quantity is not the same",
  "Price is not the same",
  "other",
];

class OrderItem extends Component {
  state = { updatedPrice: "", quantity: 1 };

  componentDidMount() {
    const { data } = this.props;
    const { price } = data;
    this.setState({ updatedPrice: price });
  }

  changePrice = (event) => {
    const inputValue = parseFloat(event.target.value);

    const { data } = this.props;
    const { price } = data;
    if (isNaN(inputValue) || inputValue <= 0) {
      this.setState({ updatedPrice: price });
      alert("Please enter a positive number");
    } else {
      this.setState({ updatedPrice: event.target.value });
    }
  };

  onIncreaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  onDecreaseQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  render() {
    const {
      data,
      ApproveAction,
      MissingAction,
      EditedAction,
      newArray,
    } = this.props;
    const { id, title, price, category, image } = data;
    const { updatedPrice, quantity } = this.state;

    const total = parseFloat(updatedPrice) * parseInt(quantity);

    let responseText = "";
    if (price !== updatedPrice && quantity !== 1) {
      responseText = "Quantity and Price updated";
    } else if (price !== updatedPrice) {
      responseText = "Price Updated";
    } else if (quantity !== 1) {
      responseText = "Quantity Updated";
    }

    const requiredObjectArray = newArray.filter((item) => item.textId === id);
    requiredObjectArray.push({ text: "", textBg: "" });

    const { text } = requiredObjectArray[0];

    let check = false;
    if (text !== "") {
      check = true;
    }

    let forStatusTextColor = text;

    return (
      <>
        <Tr>
          <td>
            <Image src={image} alt="order" />
          </td>
          <td>
            <Text value="true">{title}</Text>
          </td>
          <td>
            <Text>{category}</Text>
          </td>
          <td>
            <Text>{check ? updatedPrice : price}</Text>
          </td>
          <td>
            <Text>{check ? quantity : 1}</Text>
          </td>
          <td>
            <Text>{check ? total : price}</Text>
          </td>
          <Td>
            <StatusContainer>
              <TextContainer statustextcolor={forStatusTextColor}>
                <StatusText>{text}</StatusText>
              </TextContainer>
              <Btn
                type="button"
                onClick={() =>
                  ApproveAction({
                    text: "Approved",
                    textId: id,
                  })
                }
                statustextcolor={forStatusTextColor}
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
                      value="red"
                      statustextcolor={forStatusTextColor}
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
                        <Text value="true">
                          Is {title.slice(0, 23)} urgent?
                        </Text>
                        <Container2>
                          <Btn
                            type="button"
                            onClick={() =>
                              MissingAction({
                                text: "Missing",
                                textId: id,
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
              <PopUpContainer>
                <Popup
                  modal
                  trigger={
                    <Btn
                      type="button"
                      statustextcolor={forStatusTextColor}
                      value="yellow"
                    >
                      Edit
                    </Btn>
                  }
                >
                  {(close) => (
                    <>
                      <Container1 value="true" value1="true">
                        <Container2>
                          <div>
                            <Text value1="true">{title}</Text>
                            <Text>{category}</Text>
                          </div>
                          <Btn type="button" onClick={() => close()}>
                            x
                          </Btn>
                        </Container2>
                        <Container2>
                          <Image src={image} alt="item-image" value="true" />
                          <div>
                            <Container2>
                              <Text>Price:</Text>
                              <Input
                                type="text"
                                onChange={this.changePrice}
                                min="1"
                                priceInput="true"
                              />
                            </Container2>
                            <Container2>
                              <Text>Quantity:</Text>
                              <QuantityCont>
                                <Btn
                                  type="button"
                                  onClick={this.onDecreaseQuantity}
                                >
                                  <MinusIcon />
                                </Btn>
                                <Text quantity="true">{quantity}</Text>
                                <Btn
                                  type="button"
                                  onClick={this.onIncreaseQuantity}
                                >
                                  <PlusIcon />
                                </Btn>
                              </QuantityCont>
                            </Container2>
                            <Container2>
                              <Text>Total:</Text>
                              <Text>{total}</Text>
                            </Container2>
                          </div>
                        </Container2>
                        <Text>Choose reason (optional)</Text>
                        <Container2 as="ul" value="true">
                          {reasonsList.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                          ))}
                        </Container2>
                        <Container2>
                          <Btn
                            type="button"
                            onClick={() => close()}
                            cancel="true"
                          >
                            Cancel
                          </Btn>
                          <Btn
                            type="button"
                            onClick={() =>
                              EditedAction({
                                text: responseText,
                                textId: id,
                              })
                            }
                            send="true"
                          >
                            Send
                          </Btn>
                        </Container2>
                      </Container1>
                    </>
                  )}
                </Popup>
              </PopUpContainer>
            </StatusContainer>
          </Td>
        </Tr>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  newArray: state,
});

export default connect(mapStateToProps, {
  ApproveAction,
  MissingAction,
  EditedAction,
})(OrderItem);
