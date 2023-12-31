import { Component } from "react";
import Header from "../Header";
import OrderItem from "../OrderItem";
import { connect } from "react-redux";
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
  EmptySearchContainer,
  Table,
  Tr,
  Th,
  AppleIcon,
  ServiceIcon,
  ChartIcon,
  DressIcon,
  BagIcon,
  RingIcon,
  MonitorIcon,
  BoxIcon,
} from "./styledComponent";
import { Btn } from "../OrderItem/styledComponent";

class Home extends Component {
  state = { ordersList: [], searchInput: "", isSearchClicked: false };

  componentDidMount() {
    this.getOrderDetails();
  }

  getOrderDetails = async () => {
    const urls = "https://api.escuelajs.co/api/v1/products";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const responseData = await fetch(urls, options);
      const data = await responseData.json();
      const updatedData = data.map((item) => ({
        title: item.title,
        id: item.id,
        price: item.price,
        category: item.category.name,
        image: item.category.image,
      }));
      this.setState({ ordersList: updatedData });
    } catch (e) {
      console.log(e);
    }
  };

  addSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  searchResults = () => {
    this.setState({ isSearchClicked: true });
  };

  render() {
    const { ordersList, searchInput } = this.state;

    let searchList = [];

    const searchLength = searchInput.length !== 0;
    if (searchLength === true) {
      const filteredList = ordersList.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      searchList = filteredList;
    } else {
      searchList = ordersList;
    }

    const checkForList = searchList.length === 0;

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
            <Heading value="true">Order 12367ABC</Heading>
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
            <RowContainer value1="true">
              <Paragraph>Supplier</Paragraph>
              <Heading>East coast dressing and accessories</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer value1="true">
              <Paragraph>Shipping date</Paragraph>
              <Heading>Thu, Nov 26</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer value1="true">
              <Paragraph>Total</Paragraph>
              <Heading>$ 12,301.9</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer value1="true">
              <Paragraph>Category</Paragraph>
              <RowContainer value2="true">
                <AppleIcon />
                <ServiceIcon />
                <ChartIcon />
                <DressIcon />
                <BagIcon />
                <RingIcon />
                <MonitorIcon />
                <BoxIcon />
              </RowContainer>
            </RowContainer>
            <HrElement />
            <RowContainer value1="true">
              <Paragraph>Department</Paragraph>
              <Heading>123-598-670</Heading>
            </RowContainer>
            <HrElement />
            <RowContainer value1="true">
              <Paragraph>Status</Paragraph>
              <Heading>Awaiting your approval</Heading>
            </RowContainer>
          </OrderDetailsContainer>
        </MainContainer>
        <OrderDetailsContainer value="true">
          <RowContainer value="true">
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

          <Table>
            <tbody>
              <Tr>
                <th></th>
                <Th>Product name</Th>
                <Th>Brand</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th>Status</Th>
              </Tr>

              {checkForList ? (
                <EmptySearchContainer>
                  <Paragraph>No Data</Paragraph>
                </EmptySearchContainer>
              ) : (
                <>
                  {searchList.map((item, index) => (
                    <OrderItem data={item} key={index} />
                  ))}
                </>
              )}
            </tbody>
          </Table>
        </OrderDetailsContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.text,
  textId: state.textId,
});

export default connect(mapStateToProps)(Home);
