import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* GNB */}
      <nav>
        <NavLink to="/">차트</NavLink>
        <NavLink to="/whook">Whook</NavLink>
        <NavLink to="/event">이벤트</NavLink>
        <NavLink to="/news">뉴스</NavLink>
        <NavLink to="/store">스토어</NavLink>
        <NavLink to="/charge">충전소</NavLink>
      </nav>
      {/* 카테고리별 메인 영역 */}
      <Outlet />
      {/* 푸터 */}
      <footer></footer>
    </div>
  );
}

export default App;
