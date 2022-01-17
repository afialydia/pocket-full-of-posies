const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, (error) => {
	if (error) throw error;
	console.log("Server running on port " + port);
});

const storeItems = new Map([
	[1, { name: "Weekly Florals - 1 Month", priceInCents: 4500 }],
	[2, { name: "Weekly Florals - 6 Months", priceInCents: 27000 }],
	[3, { name: "Weekly Florals - 1 Year", priceInCents: 54000 }],
	[4, { name: "Cactus of the Month Club - Small", priceInCents: 7500 }],
	[5, { name: "Cactus of the Month Club - Medium", priceInCents: 9000 }],
	[6, { name: "Cactus of the Month Club - Large", priceInCents: 10500 }],
	[7, { name: "Modern Floral Arrangement", priceInCents: 5000 }],
	[8, { name: "Dried Flower Bouquet", priceInCents: 3500 }],
	[9, { name: "Birthday Bouquet", priceInCents: 6500 }],
	[10, { name: "Get Well Soon Arrangement", priceInCents: 6500 }],
	[11, { name: "Just Because", priceInCents: 5000 }],
	[12, { name: "Pompas Stem", priceInCents: 800 }],
	[13, { name: "Mini-Cactus Collection", priceInCents: 4500 }],
	[14, { name: "Tradescantia Starter", priceInCents: 3500 }],
	[15, { name: "Monstera Clipping", priceInCents: 600 }],
	[16, { name: "Small Cactus w/ Pot", priceInCents: 2500 }],
	[17, { name: "Elephant Ears Clipping Bundle", priceInCents: 1000 }],
	[18, { name: "Dieffenbachia Start w/ Pot", priceInCents: 6500 }],
	[19, { name: "Twin Vase", priceInCents: 2500 }],
	[20, { name: "Manic Pixie Dream-Pot", priceInCents: 2400 }],
	[21, { name: "Plant Shelves", priceInCents: 3500 }],
	[22, { name: "Pot Set", priceInCents: 6500 }],
	[23, { name: "Shell Vase", priceInCents: 3500 }],
	[24, { name: "Bust Vase", priceInCents: 4500 }],
	[25, { name: "Terracotta Pitcher", priceInCents: 3000 }],
	[26, { name: "Bordi Vase", priceInCents: 3500 }],
	[27, { name: "Onyx Vase", priceInCents: 4500 }],
	[28, { name: "Talia Vase", priceInCents: 3500 }],
	[29, { name: "Squig Vase", priceInCents: 2500 }],
	[30, { name: "Event Florals Consultation", priceInCents: 5000 }],
	[31, { name: "Plant Parent Emergency Care", priceInCents: 3500 }],
	[32, { name: "Floral Arranging 101", priceInCents: 2500 }],
	[33, { name: "Botany Basics + Q&A", priceInCents: 6500 }],
]);

app.post("/create-checkout-session", async (req, res) => {
	let { body } = req.body;
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: body.items.map((item) => {
				const storeItem = storeItems.get(item.id);
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: storeItem.name,
						},
						unit_amount: storeItem.priceInCents,
					},
					quantity: item.quantity,
				};
			}),
			success_url: `${process.env.CLIENT_URL}/order-confirmation`,
			cancel_url: `${process.env.CLIENT_URL}/checkout`,
		});
		res.json({ url: session.url, id: session.id });
	} catch (e) {
		res.status(500).json("this is the error", { error: e.message });
	}
});
