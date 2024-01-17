export const selectProducts = (state) => state.products.productsArray;

export const selectProductsCategories = (state) =>
  state.products.productsCategories;

export const selectProductsIsLoading = (state) => state.products.isLoading;

export const selectProductsError = (state) => state.products.error;
