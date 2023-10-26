const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

dotenv.config();

connectDb();
const app = express();

app.use(morgan("dev"));
app.use(express.json());




app.use("/", require("./routes/userRoute"));

app.use(cors());





const PORT =   process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});