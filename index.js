const express = require("express");
const cors = require("cors"); // Import cors middleware

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

let lastId = 5;
const result = [
  {
    id: 1,
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    id: 2,
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    id: 3,
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Vilnius",
    price: 200000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    id: 4,
    image:
      "https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg",
    city: "Kaunas",
    price: 100000,
    description:
      "One of the smallest flats in the very city centre of Vilnius full of action and attraction.",
  },
  {
    id: 5,
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

app.post("/data", (req, res) => {
  const newEntry = req.body;

  // Check if required fields are provided
  if (
    !newEntry.image ||
    !newEntry.city ||
    !newEntry.price ||
    !newEntry.description
  ) {
    return res.status(400).json({
      error: "All fields (image, city, price, description) are required.",
    });
  }
  lastId = lastId + 1;
  // Add the new entry to the data array
  result.push({ id: lastId, ...newEntry });

  // Respond with the updated data array
  res.status(201).json(result);
});

// DELETE endpoint to delete an element by id
app.delete("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = result.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found." });
  }

  // Remove the item from the data array
  v.splice(index, 1);
  result.json({ message: "Item deleted successfully", result });
});

// PUT endpoint to update an element by id
app.put("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = result.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found." });
  }

  const updatedEntry = req.body;

  // Check if required fields are provided
  if (
    !updatedEntry.image ||
    !updatedEntry.city ||
    !updatedEntry.price ||
    !updatedEntry.description
  ) {
    return res.status(400).json({
      error: "All fields (image, city, price, description) are required.",
    });
  }

  // Update the entry with new data
  result[index] = { id, ...updatedEntry };
  res.json({ message: "Item updated successfully", result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
