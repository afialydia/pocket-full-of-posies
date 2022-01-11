import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import ShopOverview from "./overview.shop";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const Shop = compose(
	connect(mapStateToProps),
	WithSpinner
)(ShopOverview);

export default Shop;
