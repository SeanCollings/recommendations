import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { PRODUCTS } from '../data/products';

export const initialState = {
  cartItems: [],
  recommendations: [],
  addToCart: () => null,
  removeFromCart: () => null,
};

const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
  const initialRecommendedItems = PRODUCTS.slice(1);

  const [cartItems, setCartItems] = useState([PRODUCTS[0]]);
  const [recommendationItems, setRecommendationItems] = useState(
    initialRecommendedItems
  );

  const addToCart = useCallback(
    (id) => {
      const updatedCartItems = [...cartItems];
      const addedItem = recommendationItems.find(
        (product) => product.id === id
      );
      const updatedRecommendations = recommendationItems.filter(
        (item) => item.id !== id
      );
      updatedCartItems.push(addedItem);

      setCartItems(updatedCartItems);
      setRecommendationItems(updatedRecommendations);
    },
    [cartItems, recommendationItems]
  );

  const removeFromCart = useCallback(
    (id) => {
      const updatedRecommendations = [...recommendationItems];
      const removedItem = cartItems.find((product) => product.id === id);
      const updatedCartItems = cartItems.filter((item) => item.id !== id);

      updatedRecommendations.push(removedItem);
      updatedRecommendations.sort((a, b) => (a.id > b.id ? 1 : -1));

      setCartItems(updatedCartItems);
      setRecommendationItems(updatedRecommendations);
    },
    [cartItems, recommendationItems]
  );

  const context = useMemo(
    () => ({
      cartItems,
      recommendationItems,
      addToCart,
      removeFromCart,
    }),
    [cartItems, recommendationItems, addToCart, removeFromCart]
  );

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
