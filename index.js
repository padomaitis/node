const express = require("express");
const cors = require("cors"); // Import cors middleware

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

const result = [
  {
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Kaunas",
    price: 100000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Klaipeda",
    price: 5000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
];

// Endpoint to return the array of objects
app.get("/data", (req, res) => {
  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
