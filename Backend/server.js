import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';
import urlRoutes from './routes/url.js';

dotenv.config();

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
    })
);
app.use(express.json());
app.use("/",urlRoutes);

// app.use("/api/url", urlRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!")
});

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Connected to MongoDB");
//         app.listen(process.env.PORT, () => {
//             console.log(`Server running on port ${process.env.PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log("Error connecting to MongoDB:", err);
//     });
const PORT = process.env.PORT || 5000;

// start server FIRST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// connect Mongo separately
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB error:", err));
