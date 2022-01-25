export const getSortedData = (productList, sortBy) => {
  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b["price"] - a["price"]);
  }
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a["price"] - b["price"]);
  }
  return productList;
};

export const getFilteredData = (
  productList,
  { showInventoryAll, showFastDeliveryOnly }
) => {
  return productList
    .filter(({ inStock }) => (showInventoryAll ? true : inStock))
    .filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true));
};
