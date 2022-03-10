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
  totalPrice: 0,
  addToCart: () => null,
  removeFromCart: () => null,
};

const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
  const intialCartItems = PRODUCTS[0];
  const initialRecommendedItems = PRODUCTS.slice(1);

  const [totalPrice, setTotalPrice] = useState(
    intialCartItems.markdown || intialCartItems.price
  );
  const [cartItems, setCartItems] = useState([intialCartItems]);
  const [recommendationItems, setRecommendationItems] = useState(
    initialRecommendedItems
  );

  const getTotalPrice = useCallback((items) => {
    return items.reduce((acc, current) => {
      acc += +current.markdown || +current.price;
      return +acc.toFixed(2);
    }, 0);
  }, []);

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
      setTotalPrice(getTotalPrice(updatedCartItems));
    },
    [cartItems, recommendationItems, getTotalPrice]
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
      setTotalPrice(getTotalPrice(updatedCartItems));
    },
    [cartItems, recommendationItems, getTotalPrice]
  );

  const context = useMemo(
    () => ({
      cartItems,
      recommendationItems,
      totalPrice,
      addToCart,
      removeFromCart,
    }),
    [cartItems, recommendationItems, totalPrice, addToCart, removeFromCart]
  );

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
