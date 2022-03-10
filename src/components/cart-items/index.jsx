import styled from 'styled-components';
import { useCartContext } from '../../context/cart-context';
import CartItem from '../cart-item';

const SContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  color: #222;
  width: calc(100% / 3);
`;
const SHeader = styled.div`
  font-weight: bold;
  margin: 0 0 8px 0;
`;
const SCartPadder = styled.div`
  padding-bottom: 16px;
`;

const CartItems = () => {
  const { cartItems } = useCartContext();

  return (
    <SContainer>
      <SHeader>Parcel 1 - Sent by THE ICONIC</SHeader>
      {cartItems?.map((item) => (
        <SCartPadder key={item.id}>
          <CartItem item={item} />
        </SCartPadder>
      ))}
    </SContainer>
  );
};

export default CartItems;
