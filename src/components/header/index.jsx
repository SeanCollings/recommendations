import React from 'react';
import styled from 'styled-components';

const SHeaderContainer = styled.div`
  background: #232323;
  position: fixed;
  height: 4rem;
  width: 100%;
  z-index: 100;
  color: white;
`;
const SHeaderName = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 0.01875em;
  line-height: 16px;
`;
const SSideHeaders = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  letter-spacing: 0.01875em;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
`;
const SHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Header = () => {
  return (
    <SHeaderContainer>
      <SHeaderContents>
        <SSideHeaders>Continue Shopping</SSideHeaders>
        <SHeaderName>THE ICONIC</SHeaderName>
        <SSideHeaders>{`Contact & FAQs`}</SSideHeaders>
      </SHeaderContents>
    </SHeaderContainer>
  );
};

export default Header;
