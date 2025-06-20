console.log("Hey dear friend, I am your server");

// import node modules (express,cors,dotenv,pg)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

// setup our server (initialize express)

const app = express();

// set up middlware that belong to the server and  act as filter. They filter incoming request from client
app.use(express.json());
app.use(cors());

// thanks to this line the server will have access to .env file
dotenv.config();

// pulling data from the database thanks to the link from supabase this function Pool

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

//quick check that I reach the root route. If i type http://localhost:6060/ I should receive message "Welcome to the root route!"
app.get("/", (req, res) => {
  res.json("Welcome to the root route!");
});

// fetching rows&columns about vinlys in my SQL table named 'jokes'
app.get("/jokes", async (req, res) => {
  const result = await db.query(`SELECT * FROM vinylsreview ORDER BY country`);
  res.json(result.rows);
});

app.post("/jokes", async (req, res) => {
  const body = req.body;

  const nameFromClient = req.body.name;
  const countryFromClient = req.body.country;
  const albumFromClient = req.body.album;
  const commentFromClient = req.body.comment;

  const data = await db.query(
    `INSERT INTO vinyls (name, country, album, comment) VALUES ($1, $2, $3, $4)`,
    [nameFromClient, countryFromClient, albumFromClient, commentFromClient]
  );

  res.send(data);
});

app.get("/jokes", (req, res) => {
  console.log(req.query);

  const filteredVinylsPerName = vinyls.filter(
    (vinyl) => vinyl.artist == req.query.name
  );
  const filteredVinylsPerCountry = vinyls.filter(
    (vinyl) => vinyl.genre == req.query.country
  );
  const filteredVinylsPerAlbum = vinyls.filter(
    (vinyl) => vinyl.album == req.query.album
  );
  const filteredVinylsPerComment = vinyls.filter(
    (vinyl) => vinyl.label == req.query.comment
  );
  console.log(filteredVinylsPerYear);

  res.json(
    filteredVinylsPerName,
    filteredVinylsPerCountry,
    filteredVinylsPerAlbum,
    filteredVinylsPerComment
  );
});

app.listen("6060", () => {
  console.log("app is running on port http://localhost:6060...");
});
