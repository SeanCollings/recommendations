import styled from 'styled-components';

const SContainer = styled.div`
  color: #4d4d4d;
  display: block;
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: auto;
`;
const SItem = styled.div`
  padding: 1rem 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01875em;
  text-transform: uppercase;
  font-weight: bold;
`;

const CheckoutHeader = () => {
  return (
    <SContainer>
      <SItem>BAG (1 items)</SItem>
      <SItem>DELIVERY</SItem>
      <SItem>PAYMENT</SItem>
    </SContainer>
  );
};

export default CheckoutHeader;
