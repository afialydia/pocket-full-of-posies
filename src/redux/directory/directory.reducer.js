const INITIAL_STATE = {
	sections: [
		{
			title: "Occasions",
			id: 1,
			imageUrl: "/assets/img/occasions.jpg",
			linkUrl: "shop/occasions",
		},
		{
			title: "Arrangements",
			id: 2,
			imageUrl: "assets/img/arrangements.jpg",
			linkUrl: "shop/arrangements",
		},
		{
			title: "Nursery",
			id: 3,
			imageUrl: "assets/img/nursery.jpg",
			linkUrl: "shop/nursery",
		},
		{
			title: "Plant Care",
			id: 4,
			imageUrl: "assets/img/plant-care.jpg",
			linkUrl: "shop/plant-care",
			size: "large",
		},
		{
			title: "Consultation",
			id: 5,
			imageUrl: "assets/img/consultation.jpg",
			linkUrl: "shop/consultation",
			size: "large",
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
