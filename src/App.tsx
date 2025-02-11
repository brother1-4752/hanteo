import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GNB from "./components/Common/GNB";
import CommonFooter from "./components/Common/Footer";

function App() {
  return (
    <Layout>
      {/* GNB */}
      <GNB />

      {/* 카테고리별 메인 영역 */}
      <Outlet />

      {/* 푸터 */}
      <CommonFooter />
    </Layout>
  );
}

export default App;

const Layout = styled.section`
  max-width: 425px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
`;
