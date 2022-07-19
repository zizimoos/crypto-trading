import React from "react";
import styled from "styled-components";

import upbitNav from "../assets/img/upbitNav.png";
import customerPage from "../assets/img/customerPage.png";
import openApiButton from "../assets/img/openApiButton.png";
import openApiManage from "../assets/img/openApiManage.png";
import openApiAddr from "../assets/img/openApiAddr.png";
import openApiConfirm from "../assets/img/openApiConfirm.png";
import openApiKey from "../assets/img/openApiKey.png";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1.5rem;
`;
const Title = styled.h1`
  margin: 2rem 0;
`;

function Manual(props) {
  return (
    <Container>
      <h1> 먼저, 자동매매 프로그램이란 용어에 대한 두가지 개념.</h1>
      <p>
        <br />
        1. 자동매매가 필요한 조건 설정들이 가득 들어 있는 메뉴들이 있고,
        사용자가 직접 조건의 값들을 설정하여 자동매매를 실행할 수 있는 기능을
        가진 프로그램.
        <br />
        <br />
        2. 최소한의 조건들만 설정하게 하고, 나머지는 프로그램이 알아서 거래를
        실행하도록 하는 프로그램.
        <br />
        <br />
      </p>
      <Title>제작자의 변</Title>
      <p>위의 내용들의 장단점을 논하기 전에 제작자의 작업기를 이야기 해보자.</p>
      <p>자동매매를 처음 만들어 보고자 했을 때의 아이디어는 2번이였다.</p>
      <p>매매를 위한 알고리즘이 생각이 났고,</p>
      <p>
        이런 저런 설정하는 것이 무척 번거롭고 사람이 일일이 설정하는 것이
        불가능한 것을 자동화 하고자 했다.
      </p>
      <p>
        다행스럽게도, 예상이상의 수익률을(월 10%, 두달 연속) 달성했고, 지속
        가능해 보이는 지표들을 확인했다.
      </p>
      <br />
      <p>주말에 미팅을 통해서 확인한 것은,</p>
      <p>1번이 좀더 퍼블릭한 마켓에 적합하다는 것이였음.</p>
      <p>
        2번은 수익률에 대한 확신이 유저에게 형성되기 전에는 제품으로 인정받기
        힘든 부분이 있고,
      </p>
      <p>더해서, 확인 과정 자체가 사용상 장벽들이 존재한다는 이유 때문임.</p>
      <p>
        예를 들면, 적어도 1달 이상의 기간이 필요하고, 매매과정을 확인하기
        힘들고, 유저 본인이 컨트롤 할 수 있는 것이 없다는 것.
      </p>
      <br />
      <p>
        현재, 2번과 1번을 동시에? 가능하도록 작업중이며, 지금 url로 작업과정을
        확인할 수 있다.
      </p>
      <p>
        정확한 스케쥴은 아직 모르겠지만, 베타버전은 2주 정도 소요된다고
        생각된다.
      </p>
      <p>
        서비스를 위한 프로그램은 위의 작업과는 다른 성격의 작업이고, 공수가
        들어간다.
      </p>
      <p> 이런 이유로, 서비스 프로그램은 베타버전 후에 생각해보도록 하자.</p>
      <Title>UPBIT OPEN API</Title>
      <img src={upbitNav} alt="upbitOpenApi" />
      <img src={customerPage} alt="customerPage" />
      <img src={openApiButton} alt="openApiButton" />
      <img src={openApiManage} alt="openApiManage" />
      <img src={openApiAddr} alt="openApiAddr" />
      <img src={openApiConfirm} alt="openApiConfirm" />
      <img src={openApiKey} alt="openApiKey" />
    </Container>
  );
}

export default Manual;
