import styled from "styled-components";

const CommonFooter = () => {
  return <FooterStyled></FooterStyled>;
};

export default CommonFooter;

const FooterStyled = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--color-gray-1);
  position: absolute;
  bottom: 0;
`;
