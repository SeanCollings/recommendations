import styled from 'styled-components';
import CartItems from './components/cart-items';
import CheckoutHeader from './components/checkout-header';
import DeliverTo from './components/deliver-to';
import Header from './components/header';
import PayBy from './components/pay-by';
import Recommendations from './components/recommendations';
import Summary from './components/summary';
import { CartContextProvider } from './context/cart-context';

const SAppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Helvetica, Arial,
    sans-serif;
`;
const SBodyContainer = styled.div`
  position: relative;
  margin-top: 4rem;
`;
const SInnerBodyContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 1.5rem 1rem 0;
  display: flex;
  justify-content: space-between;
`;
const SRightContainer = styled.div`
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(100% / 3);
`;
const SDivider = styled.div`
  border-bottom: solid 1px whitesmoke;
`;

function App() {
  return (
    <SAppContainer>
      <Header />
      <SBodyContainer>
        <CartContextProvider>
          <CheckoutHeader />
          <SDivider />
          <SInnerBodyContainer>
            <CartItems />
            <DeliverTo />
            <SRightContainer>
              <PayBy />
              <Summary />
            </SRightContainer>
          </SInnerBodyContainer>
          <Recommendations />
        </CartContextProvider>
      </SBodyContainer>
    </SAppContainer>
  );
}

export default App;
