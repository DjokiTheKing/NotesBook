import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { readFile } from "fs/promises";
import sqlite from "sqlite3";
import bcrypt from "bcrypt";
import crypto from "crypto";

const config = JSON.parse(await readFile("config.json", { encoding: "utf8" }));

let base = null;

if (config.database.type == "sqlite") {
  base = new sqlite.Database(
    config.database.host + config.database.base,
    (err) => {
      if (err) {
        console.log(
          `Connection to the ${config.database.base} database failed: ` +
            err.message
        );
        exit(0);
      }
      console.log(`Connected to the ${config.database.base} database.`);
    }
  );
}

if (base == null) {
  console.log("Connection to the database failed.");
  exit(0);
}

let jwt_base = new sqlite.Database(":memory:", (err) => {
  if (err) {
    console.log("Connection to the jwt tokens database failed: " + err.message);
    exit(0);
  }
  jwt_base.exec(`CREATE TABLE "tokens" (
	"user"	TEXT NOT NULL,
	"token"	TEXT NOT NULL
);`);
  console.log(`Connected to the jwt tokens database.`);
});

const jwt_base_check = jwt_base.prepare(
  "SELECT * FROM tokens WHERE user = ? AND token = ? ;"
);
const jwt_base_add = jwt_base.prepare("INSERT INTO tokens values( ? , ? );");
const jwt_base_update = jwt_base.prepare(
  "UPDATE tokens SET token = ? WHERE user = ? ;"
);
const jwt_base_remove = jwt_base.prepare(
  "DELETE FROM tokens WHERE token = ? ;"
);
const jwt_base_remove_all = jwt_base.prepare(
  "DELETE FROM tokens WHERE user = ? ;"
);

const PORT = 3555;

let app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.get("/signup", (req, res) => {});

app.get("/login", (req, res) => {
  const user_data_query = base.prepare(
    "SELECT * FROM USERS WHERE username = ? OR email = ?"
  );
  const user_data = user_data_query.get(req.body.login, req.body.login);

  if (user_data) {
    bcrypt.compare(req.body.password, user_data.password).then((success) => {
      if (success) {
        let user_info = {
          username: req.body.login,
        };
        let response = {
          type: "success",
        };
      }
    });
  } else {
    let response = {
      type: "error",
      error: 404,
    };
    res.send(JSON.stringify(response));
  }
  res.end();
});

console.log(jwt.sign({ tst: "s" }, config.jwt.key));

console.log(jwt.sign({ tsadt: "sa" }, config.jwt.key));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.\n`);
});
