import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GNB = () => {
  return (
    <StyledGnb>
      <NavLink to="/">차트</NavLink>
      <NavLink to="/whook">Whook</NavLink>
      <NavLink to="/event">이벤트</NavLink>
      <NavLink to="/news">뉴스</NavLink>
      <NavLink to="/store">스토어</NavLink>
      <NavLink to="/charge">충전소</NavLink>
    </StyledGnb>
  );
};

export default GNB;

const StyledGnb = styled.nav`
  width: calc(100% - 32px);
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--spacing-2);
  background-color: var(--color-pink-2);
  font-family: "PretendardB", sans-serif;

  a.active {
    color: var(--color-white-1);
  }
`;
