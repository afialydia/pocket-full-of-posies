import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page" >
			
			<Routes>
				<Route exact path="/" component={CollectionsOverview} />
				<Route path=':collectionId' component={CollectionPageContainer} />
			</Routes>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
