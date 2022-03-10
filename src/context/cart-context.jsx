import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { getDisplayRecommendations, getTotalPrice } from '../utils';

export const initialState = {
  cartItems: [],
  recommendations: [],
  displayRecommendations: [],
  totalPrice: 0,
  addToCart: () => null,
  removeFromCart: () => null,
};

const CartContext = createContext(initialState);

export const CartContextProvider = ({ children, ...initialState }) => {
  const [totalPrice, setTotalPrice] = useState(initialState.price || 0);
  const [cartItems, setCartItems] = useState(initialState.cart || []);
  const [displayRecommendations, setDisplayRecommendations] = useState(
    initialState.displayRecommended || []
  );
  const [recommendationItems, setRecommendationItems] = useState(
    initialState.recommended || []
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
      const total = getTotalPrice(updatedCartItems);

      const display = getDisplayRecommendations(updatedRecommendations, total);

      setDisplayRecommendations(display);
      setCartItems(updatedCartItems);
      setRecommendationItems(updatedRecommendations);
      setTotalPrice(total);
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

      const total = getTotalPrice(updatedCartItems);
      const display = getDisplayRecommendations(updatedRecommendations, total);

      setDisplayRecommendations(display);
      setCartItems(updatedCartItems);
      setRecommendationItems(updatedRecommendations);
      setTotalPrice(total);
    },
    [cartItems, recommendationItems]
  );

  const context = useMemo(
    () => ({
      cartItems,
      recommendationItems,
      displayRecommendations,
      totalPrice,
      addToCart,
      removeFromCart,
    }),
    [
      cartItems,
      recommendationItems,
      displayRecommendations,
      totalPrice,
      addToCart,
      removeFromCart,
    ]
  );

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
