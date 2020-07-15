import { createSelector } from 'reselect';
// import memoize from "lodash.memoize";

const COLLECTION_ID_MATCH ={
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find( collection => collection.id === COLLECTION_ID_MATCH[collectionUrlParam])
  )



// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], 
//     (collections) => collections[collectionUrlParam]
//     );

