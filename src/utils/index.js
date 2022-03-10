import { DISCOUNT_THRESHOLD } from '../constants';

const PRICE_RANGE = 20;

export const getDisplayRecommendations = (allRecommendations, totalPrice) => {
  const difference = DISCOUNT_THRESHOLD - totalPrice;

  if (difference > 0) {
    const allInRange = allRecommendations.filter(
      (product) => product.price <= difference + PRICE_RANGE
    );

    if (allInRange.length > 3) {
      return allInRange;
    }
  }

  return allRecommendations;
};

export const getTotalPrice = (items) => {
  return items.reduce((acc, current) => {
    acc += +current.markdown || +current.price;
    return +acc.toFixed(2);
  }, 0);
};
