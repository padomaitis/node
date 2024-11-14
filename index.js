// Import http library
const http = require("http");
// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080;
//create our server object
const server = http.createServer();

const result = [{"image":"https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg","city":"Vilnius","price":200000,"description":"One of the smallest flats in the very city centre of Vilnius full of action and attraction."},{"image":"https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg","city":"Vilnius","price":200000,"description":"One of the smallest flats in the very city centre of Vilnius full of action and attraction."},{"image":"https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg","city":"Vilnius","price":200000,"description":"One of the smallest flats in the very city centre of Vilnius full of action and attraction."},{"image":"https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg","city":"Kaunas","price":100000,"description":"One of the smallest flats in the very city centre of Vilnius full of action and attraction."},{"image":"https://s1.15min.lt/images/photos/2020/02/05/original/vilniaus-pilies-g-parduodamas-10-kv-m-ploto-butas-5e3ad52eee51a.jpg","city":"Klaipeda","price":5000,"description":"One of the smallest flats in the very city centre of Vilnius full of action and attraction."}]
 
// We define a function that runs in response a request event
server.on("request", (request, response) => {
  // handle request based on method then URL
  response.statusCode = 200;
  response.json(result);
  response.end();
});
// get the server to start listening
server.listen(PORT, (err) => {
  // error checking
  err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
