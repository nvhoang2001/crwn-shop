import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
);
// export const selectCollectionsForPreview = createSelector(
//     [selectShopData],
//     collections => Object.values(collections)
// );

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopData],
        collections => collections[collectionUrlParam]
    );
