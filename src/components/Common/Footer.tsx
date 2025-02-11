import styled from "styled-components";

const CommonFooter = () => {
  return (
    <FooterStyled>
      <div className="footer-top">
        <h3>Company Introduction</h3>
        <h3>Partnership</h3>
        <h3>Corporate</h3>
      </div>
      <div className="footer-bottom">
        <p>Copyright © HANTEO GLOBAL Inc. All Rights Reserved</p>
      </div>
    </FooterStyled>
  );
};

export default CommonFooter;

const FooterStyled = styled.footer`
  width: 100%;
  height: 100px;
  background-color: var(--color-black-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-1);
  position: absolute;
  bottom: 0;

  .footer-top {
    margin-left: var(--spacing-1);
    width: 90%;
    color: var(--color-gray-3);
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-12);
  }

  .footer-bottom {
    margin-left: var(--spacing-1);
    color: var(--color-gray-2);
    font-size: var(--font-size-11);
  }
`;
