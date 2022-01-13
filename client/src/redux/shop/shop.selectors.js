import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollection = memoize((routeName) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[routeName] : "howdy"
	)
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collections
);
