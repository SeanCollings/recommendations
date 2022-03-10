import styled from 'styled-components';
import { useCartContext } from '../../context/cart-context';

const SContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  position: relative;
  padding: 0 2rem 1rem;
`;
const SInnerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: auto;
`;
const SHeader = styled.div`
  font-weight: bold;
  margin: 0 0 8px 0;
`;
const SRecoContainer = styled.div`
  padding: 0 8px;
  width: 124px;
`;
const SRecoName = styled.div`
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
  color: #4d4d4d;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const SRecoTag = styled.div`
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
  color: #4d4d4d;
  margin-bottom: 4px;
  font-size: 12px;
  color: #232323;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const SPriceContainer = styled.div`
  display: flex;
  margin-bottom: 4px;
  font-size: 12px;
`;
const SPrice = styled.div`
  margin-right: 4px;
  color: #acacac;
  ${({ hasMarkdown }) => hasMarkdown && ' text-decoration: line-through;'};
`;
const SMarkdown = styled.div`
  color: #ef423c;
`;
const SImageContainer = styled.div`
  position: relative;
`;
const SAddToCart = styled.div`
  color: #4d4d4d;
  position: absolute;
  bottom: 8px;
  left: 4px;
  padding: 8px;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: #42abc8;
    color: white;
  }
`;
const SPreImage = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  padding-bottom: 125%;
  background: #f3f3f7;
  width: 124px;
  height: auto;
`;
const SImage = styled.img`
  position: absolute;
  left: 50%;
  right: auto;
  top: 50%;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

const RecommendedItem = ({ item }) => {
  const { addToCart } = useCartContext();

  const handeAddToCart = () => {
    addToCart(item.id);
  };

  return (
    <SRecoContainer>
      <SImageContainer>
        <SPreImage>
          <SImage alt="image" src={item.url} />
          <SAddToCart onClick={handeAddToCart}>Add to cart</SAddToCart>
        </SPreImage>
      </SImageContainer>
      <SRecoName>{item.name}</SRecoName>
      <SRecoTag>{item.tag}</SRecoTag>
      <SPriceContainer>
        <SPrice hasMarkdown={item.markdown}>${item.price}</SPrice>
        {item.markdown && <SMarkdown>${item.markdown}</SMarkdown>}
      </SPriceContainer>
    </SRecoContainer>
  );
};

const Recommendations = () => {
  const { recommendationItems } = useCartContext();

  return (
    <SContainer>
      <SHeader>Recommendations</SHeader>
      <SInnerContainer>
        {recommendationItems?.map((item, index) => {
          if (index > 4) {
            return null;
          }

          return <RecommendedItem key={item.id} item={item} />;
        })}
      </SInnerContainer>
    </SContainer>
  );
};

export default Recommendations;
