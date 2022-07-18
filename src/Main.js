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
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
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
const ChartContainer = styled.div`
  width: 200px;
  height: 200px;
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

function Main(props) {
  return (
    <>
      <Container>
        <Title>Crypto Wave</Title>
        <InfoSection>
          <ChartContainer>
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </ChartContainer>
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
        <ControllSection></ControllSection>
      </Container>
    </>
  );
}

export default Main;
