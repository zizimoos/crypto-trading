import React from "react";
import styled from "styled-components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { PieChart } from "react-minimal-pie-chart";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 2rem 0;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
`;
const PieChartContainer = styled.div`
  width: 200px;
  height: 200px;
`;
const UserItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    padding: 1rem;
    line-height: 2.5rem;

`;
const ChartSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
`;

const ChartItems = styled.div`
  width: 200px;
  height: 600px;
  border-radius: 0.5rem;
  background-color: white;
`;
const ControllSection = styled.div`
  width: 1280px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
`;
const ControlInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  input {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

function Main(props) {
  return (
    <>
      <Container>
        <Title>Crypto Wave</Title>
        <InfoSection>
          <UserItems>
            <div>
              <h1>KRW BALANCE : 000,000</h1>
              <h1>COIN BALANCE : 000,000</h1>
              <h1>User Items</h1>
              <h1>User Items</h1>
            </div>
            <div>
              <h1>CURRENT PRICE : 000,000</h1>
              <h1>SELL PRICE : 000,000</h1>
              <h1>AVG PRICE : 000,000</h1>
              <h1>BUY PRICE : 000,000</h1>
            </div>
          </UserItems>
          <PieChartContainer>
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </PieChartContainer>
        </InfoSection>
        <ChartSection>
          <TradingViewWidget
            symbol={"UPBIT:NEARKRW"}
            theme={Themes.LIGHT}
            width={"1024px"}
            interval="D"
            locale="en"
            timezone="Asia/Seoul"
            hideSideToolbar={false}
            container_id={"tradingview_ae721"}
            details
            news={["headlines"]}
          />
          <ChartItems />
        </ChartSection>
        <ControllSection>
          <ControlInput>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </ControlInput>
        </ControllSection>
      </Container>
    </>
  );
}

export default Main;
