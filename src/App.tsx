import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GNB from "./components/Common/GNB";

function App() {
  return (
    <Layout>
      {/* GNB */}
      <GNB />
      {/* 카테고리별 메인 영역 */}
      <Outlet />
      {/* 푸터 */}
      <footer></footer>
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
  align-items: center;
`;
