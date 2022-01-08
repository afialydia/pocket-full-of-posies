const INITIAL_STATE = {
	sections: [
		{
			title: "Subscriptions",
			id: 1,
			imageUrl: "/assets/img/occasions.jpg",
			linkUrl: "shop/subscriptions",
			colSpan: 3,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Arrangements",
			id: 2,
			imageUrl: "assets/img/arrangements.jpg",
			linkUrl: "shop/arrangements",
			colSpan: 3,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Nursery",
			id: 3,
			imageUrl: "assets/img/nursery.jpg",
			linkUrl: "shop/nursery",
			colSpan: 6,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Plant Accessories",
			id: 4,
			imageUrl: "assets/img/plant-care.jpg",
			linkUrl: "shop/plant-accessories",
			colSpan: 3,
			rowSpan: 2,
			height: "23.75rem",
		},
		{
			title: "Consultation",
			id: 5,
			imageUrl: "assets/img/consultation/consultation.jpg",
			linkUrl: "shop/consultation",
			colSpan: 3,
			rowSpan: 2,
			height: "23.75rem",
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
