export const selectProducts = (state) => state.products.productsArray;

export const selectProductsIsLoading = (state) => state.products.isLoading;

export const selectProductsIsFilter = (state) => state.products.isFilter;

export const selectProductsError = (state) => state.products.error;
