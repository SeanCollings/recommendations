import styled from 'styled-components';
import { DISCOUNT_PERCENT_OFF, DISCOUNT_THRESHOLD } from '../../constants';
import { useCartContext } from '../../context/cart-context';

const SContainer = styled.div`
  background: #232323;
  color: white;
  padding: 16px;
  margin: 0 0 16px 0;
  border-radius: 2px;
  margin-top: 24px;
`;
const SMain = styled.div`
  letter-spacing: 0.01875em;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 8px 0;
  font-weight: 700;
  display: flex;
`;
const SDetails = styled.div`
  padding: 8px 0;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
`;
const SDetailPrice = styled.div`
  letter-spacing: 0.01875em;
  font-weight: bold;
`;
const STotal = styled(SMain)`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const Summary = () => {
  const { cartItems, totalPrice } = useCartContext();

  let finalTotal = totalPrice;
  let discount = 0;

  if (totalPrice > DISCOUNT_THRESHOLD) {
    finalTotal = (totalPrice * ((100 - DISCOUNT_PERCENT_OFF) / 100)).toFixed(2);
    discount = (totalPrice - finalTotal).toFixed(2);
  }

  return (
    <SContainer>
      <SMain>Your order summary</SMain>
      <SDetails>
        <div>{cartItems.length} items</div>
        <SDetailPrice>${totalPrice}</SDetailPrice>
      </SDetails>
      {discount > 0 && (
        <SDetails>
          <div>Discount</div>
          <SDetailPrice>-${discount}</SDetailPrice>
        </SDetails>
      )}
      <SDetails>
        <div>Delivery to</div>
        <SDetailPrice>{discount > 0 ? 'FREE' : '$7.95'}</SDetailPrice>
      </SDetails>
      <SDetails>
        <div>Returns</div>
        <SDetailPrice>FREE FOR 30 DAYS*</SDetailPrice>
      </SDetails>
      <STotal>
        <div>Total</div>
        <div>${finalTotal}</div>
      </STotal>
    </SContainer>
  );
};

export default Summary;
