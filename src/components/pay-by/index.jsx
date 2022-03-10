import styled from 'styled-components';
import { AFTER_PAY, PAYMENT_IMAGES, PAY_PAL } from '../../constants';

const SContainer = styled.div``;
const SHeader = styled.div`
  font-weight: bold;
  margin: 0 0 8px 0;
`;
const SContent = styled.div`
  border: 1px solid #cdcdcd;
  border-bottom: none;
  border-radius: 2px;
`;
const STop = styled.div`
  justify-content: center;
  padding: 12px;
  color: #4d4d4d;
  line-height: inherit;
  text-decoration: none;
`;
const SCard = styled.div`
  color: #222;
  background-color: #f5f5f5;
  border-top: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
  padding: 12px;
`;
const SPaymentOptions = styled.div`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
`;
const SCardText = styled.div`
  color: #4d4d4d;
  display: inline-block;
  text-transform: capitalize;
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  margin-bottom: 2px;
`;
const SInput = styled.input`
  border: 1px solid #cdcdcd;
  background-color: #fff;
  margin-bottom: 1rem;
  border-radius: 0.125rem;
  padding: 10px;
`;
const SCardContent = styled.div`
  display: grid;
`;
const SCardMin = styled.div``;

const PayBy = () => {
  return (
    <SContainer>
      <SHeader>Pay by</SHeader>
      <SContent>
        <STop>
          <img alt="payments" src={PAYMENT_IMAGES} />
        </STop>
        <SCard>
          <SCardContent>
            <SCardText>Card Number</SCardText>
            <SInput placeholder="1234 1234 1234 1234" />
          </SCardContent>
          <SCardMin>
            <SCardContent>
              <SCardText>Expiry Date (MM/YY)</SCardText>
              <SInput placeholder="MM / YY" />
            </SCardContent>
            <SCardContent>
              <SCardText>CVC</SCardText>
              <SInput placeholder="CVC" />
            </SCardContent>
          </SCardMin>
        </SCard>
        <SPaymentOptions>
          <img alt="after_pay" src={AFTER_PAY} />
        </SPaymentOptions>
        <SPaymentOptions>
          <img alt="after_pay" src={PAY_PAL} />
        </SPaymentOptions>
      </SContent>
    </SContainer>
  );
};

export default PayBy;
