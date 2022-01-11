const INITIAL_STATE = {
	sections: [
		{
			title: "Subscriptions",
			id: 1,
			imageUrl: "/assets/img/occasions.jpg",
			linkUrl: "subscriptions",
			colSpan: 3,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Arrangements",
			id: 2,
			imageUrl: "assets/img/arrangements.jpg",
			linkUrl: "arrangements",
			colSpan: 3,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Nursery",
			id: 3,
			imageUrl: "assets/img/nursery.jpg",
			linkUrl: "nursery",
			colSpan: 6,
			rowSpan: 2,
			height: "15rem",
		},
		{
			title: "Plant Accessories",
			id: 4,
			imageUrl: "assets/img/plant-care.jpg",
			linkUrl: "plant accessories",
			colSpan: 3,
			rowSpan: 2,
			height: "23.75rem",
		},
		{
			title: "Consultation",
			id: 5,
			imageUrl: "assets/img/consultation/consultation.jpg",
			linkUrl: "consultation",
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
