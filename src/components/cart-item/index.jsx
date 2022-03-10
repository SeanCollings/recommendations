import styled from 'styled-components';
import { DISCOUNT_THRESHOLD } from '../../constants';
import { useCartContext } from '../../context/cart-context';

const SContainer = styled.div`
  display: flex;
  letter-spacing: 0.01875em;
  font-size: 12px;
  line-height: 1.6;
`;
const SImage = styled.img`
  max-width: 180px;
  width: 50%;
`;
const SDesciptor = styled.div`
  display: block;
  padding-left: 8px;
`;
const SName = styled.div`
  color: #232323;
  font-weight: bold;
`;
const STag = styled.div`
  color: #232323;
`;
const SPriceContainer = styled.div`
  display: flex;
`;
const SPrice = styled.div`
  margin-right: 4px;
  color: #acacac;
  ${({ hasMarkdown }) => hasMarkdown && ' text-decoration: line-through;'};
`;
const SMarkdown = styled.div`
  color: #ef423c;
  line-height: 16px;
`;
const SCampaign = styled.div`
  color: #c59b15;
  font-size: 9px;
  line-height: 13.5px;
  text-transform: uppercase;
  font-weight: bold;
  ursor: pointer;
`;
const SActions = styled.div`
  margin-top: 0.5rem;
  color: #4d4d4d;
  font-weight: 700;
  cursor: pointer;
`;

const CartItem = ({ item }) => {
  const { removeFromCart, cartItems } = useCartContext();

  if (!item) {
    return null;
  }

  const total = cartItems.reduce((acc, current) => {
    acc += +current.markdown || +current.price;
    return +acc.toFixed(2);
  }, 0);

  const discountApplied = total >= DISCOUNT_THRESHOLD;

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <SContainer>
      <SImage src={item.url} alt="image" />
      <SDesciptor>
        <SName>{item.name}</SName>
        <STag>{item.tag}</STag>
        <SPriceContainer>
          <SPrice hasMarkdown={item.markdown}>${item.price}</SPrice>
          {item.markdown && <SMarkdown>${item.markdown}</SMarkdown>}
        </SPriceContainer>
        <SCampaign>
          Spend ${DISCOUNT_THRESHOLD} save 25%
          {discountApplied ? ' applied' : ''}
        </SCampaign>
        <SActions>Move to wishlist</SActions>
        <SActions onClick={handleRemove}>Remove</SActions>
      </SDesciptor>
    </SContainer>
  );
};

export default CartItem;
