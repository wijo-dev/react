/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Table } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter bg-black">
        <div
          className="page-header-image"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          // }}
          ref={pageHeader}
        ></div>
        <Container>
          <Table dark>
            <thead>
              <tr>
                <th>거래소</th>
                <th>원화 시세</th>
                <th>달러 시세</th>
                <th>변동률</th>
                <th>한국 프리미엄</th>
                <th>거래량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">빗썸</th>
                <td>8,000,000 원</td>
                <td>7,600 $</td>
                <td>▼ -29,000 -0.12 %</td>
                <td>-28,110 -0.32%</td>
                <td>3,158 BTC</td>
              </tr>
              <tr>
                <th scope="row">업비트</th>
                <td>8,000,000 원</td>
                <td>7,600 $</td>
                <td>▼ -29,000 -0.12 %</td>
                <td>-28,110 -0.32%</td>
                <td>3,158 BTC</td>
              </tr>
              <tr>
                <th scope="row">바이넨스</th>
                <td>8,000,000 원</td>
                <td>7,600 $</td>
                <td>▼ -29,000 -0.12 %</td>
                <td>-28,110 -0.32%</td>
                <td>3,158 BTC</td>
              </tr>
              <tr>
                <th scope="row">OK</th>
                <td>8,000,000 원</td>
                <td>7,600 $</td>
                <td>▼ -29,000 -0.12 %</td>
                <td>-28,110 -0.32%</td>
                <td>3,158 BTC</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
