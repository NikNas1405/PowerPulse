export const selectProducts = (state) => state.products.productsArray;

export const selectProductsCategories = (state) =>
  state.products.productsCategories;

export const selectProductsIsLoading = (state) =>
  state.products.isLoadingProducts;

export const selectProductsCategoriesIsLoading = (state) =>
  state.products.isLoadingProductsCategories;

export const selectProductsError = (state) => state.products.error;
