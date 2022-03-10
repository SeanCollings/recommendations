import styled from 'styled-components';
import { DISCOUNT_THRESHOLD } from '../../constants';
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
  const { cartItems } = useCartContext();

  const total = cartItems.reduce((acc, current) => {
    acc += +current.markdown || +current.price;
    return +acc.toFixed(2);
  }, 0);

  let finalTotal = total;
  let discount = 0;

  if (total > DISCOUNT_THRESHOLD) {
    finalTotal = (total * 0.75).toFixed(2);
    discount = (total - finalTotal).toFixed(2);
  }

  return (
    <SContainer>
      <SMain>Your order summary</SMain>
      <SDetails>
        <div>{cartItems.length} items</div>
        <SDetailPrice>${total}</SDetailPrice>
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
