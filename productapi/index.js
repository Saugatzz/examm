import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(Path.join(process.cwd(), "uploads")));

const connectDB = async () => {
  const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+ '-' +file.fieldname  )
  }
})

const upload = multer({ storage: storage })
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connection successful");
  } catch (error) {
    console.log("error:", error.message);
  }
};
connectDB();
app.use("/expenses", expenseRoutes);
app.get("/", (req, res) => {
  res.send("Server is running fine!");
});
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
