import styled from 'styled-components';
import { BsBag, BsTruck, BsCreditCard2Back } from 'react-icons/bs';
import { useCartContext } from '../../context/cart-context';

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
  display: flex;
  align-items: center;

  > div {
    margin-left: 8px;
  }
`;

const CheckoutHeader = () => {
  const { cartItems } = useCartContext();

  return (
    <SContainer>
      <SItem>
        <BsBag size={'1.25em'} />
        <div>{`BAG (${cartItems.length} items)`}</div>
      </SItem>
      <SItem>
        <BsTruck size={'1.25em'} />
        <div>DELIVERY</div>
      </SItem>
      <SItem>
        <BsCreditCard2Back size={'1.25em'} />
        <div>PAYMENT</div>
      </SItem>
    </SContainer>
  );
};

export default CheckoutHeader;
