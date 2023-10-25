import { Component } from "react";
import Header from "../Header";
import OrderItem from "../OrderItem";
import {
  OrderDetailsContainer,
  RowContainer,
  Heading,
  Paragraph,
  Button,
  RightArrow,
  MainContainer,
  HrElement,
  Form,
  SearchInput,
  SearchIcon,
  Printer,
  TableContainer,
  Ul,
} from "./styledComponent";
import { Btn } from "../OrderItem/styledComponent";

class Home extends Component {
  state = { ordersList: [], searchInput: "" };

  componentDidMount() {
    this.getOrderDetails();
  }

  getOrderDetails = async () => {
    const url = "https://fakestoreapi.com/products";
    const responseData = await fetch(url);
    const data = await responseData.json();
    this.setState({ ordersList: data });
  };

  addSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  searchResults = () => {
    const { ordersList, searchInput } = this.state;
    const filteredList = ordersList.map((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ ordersList: filteredList });
  };

  render() {
    const { ordersList } = this.state;
    return (
      <>
        <Header />
        <OrderDetailsContainer value="true">
          <RowContainer>
            <Paragraph>Orders</Paragraph>
            <RightArrow />
            <Paragraph>Order 12367ABC</Paragraph>
          </RowContainer>
          <RowContainer value="true">
            <Heading>Order 12367ABC</Heading>
            <RowContainer>
              <Button type="button" value="true">
                Back
              </Button>
              <Button type="button">Approve order</Button>
            </RowContainer>
          </RowContainer>
        </OrderDetailsContainer>
        <MainContainer>
          <OrderDetailsContainer>
            <RowContainer>
              <Paragraph>Supplier</Paragraph>
              <Heading>East coast fruits & vegetables</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer>
              <Paragraph>Shipping date</Paragraph>
              <Heading>Thu, Oct 26</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer>
              <Paragraph>Total</Paragraph>
              <Heading>$ 12,301.9</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer>
              <Paragraph>Category</Paragraph>
            </RowContainer>
            <HrElement />
            <RowContainer>
              <Paragraph>Department</Paragraph>
              <Heading>123-598-670</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer>
              <Paragraph>Status</Paragraph>
              <Heading>Awaiting your approval</Heading>
            </RowContainer>
            <HrElement />
          </OrderDetailsContainer>
        </MainContainer>
        <OrderDetailsContainer>
          <RowContainer>
            <Form>
              <SearchInput
                type="text"
                placeholder="Search..."
                onChange={this.addSearchInput}
              />
              <Btn type="button" onClick={this.searchResults}>
                <SearchIcon />
              </Btn>
            </Form>
            <RowContainer>
              <Button type="button" value="true">
                Add Item
              </Button>
              <Printer />
            </RowContainer>
          </RowContainer>
          <TableContainer value="true">
            <Paragraph>Product name</Paragraph>
            <Paragraph>Brand</Paragraph>
            <Paragraph>Price</Paragraph>
            <Paragraph>Quantity</Paragraph>
            <Paragraph>Total</Paragraph>
            <Paragraph>Status</Paragraph>
          </TableContainer>
          <TableContainer>
            <Ul>
              {ordersList.map((item) => (
                <OrderItem data={item} key={item.id} />
              ))}
            </Ul>
          </TableContainer>
        </OrderDetailsContainer>
      </>
    );
  }
}

export default Home;
