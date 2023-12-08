const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const database = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const teamRoutes = require("./routes/TeamRoutes");

dotenv.config();

const port = process.env.PORT || 5000;

database.connect();

app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", userRoutes);
app.use('/api',teamRoutes)

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
