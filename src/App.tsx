import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* GNB */}
      <nav>
        <ul>
          <li>
            <a href="/chart">차트</a>
          </li>
          <li>
            <a href="/whook">Whook</a>
          </li>
          <li>
            <a href="/event">이벤트</a>
          </li>
          <li>
            <a href="/news">뉴스</a>
          </li>
          <li>
            <a href="/store">스토어</a>
          </li>
          <li>
            <a href="/charge">충전소</a>
          </li>
        </ul>
      </nav>

      {/* 카테고리별 메인 영역 */}
      <Outlet />

      {/* 푸터 */}
      <footer></footer>
    </div>
  );
}

export default App;
