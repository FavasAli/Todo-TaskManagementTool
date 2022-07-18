import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./router/userRouter.js";
import dataRouter from "./router/dataRouters.js";
const app = express();

dotenv.config();
connectDb();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/datas", dataRouter);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log("first");
  res.status(statusCode);
  res.json({
    message: err.message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server started at port 5000"));


// const PORT = process.env.PORT || 5000;
// // Set up the port number
// app.listen(PORT, () =>
//   console.log(
//     `Server Running in ${process.env.NODE_ENV} mode on port number: ${PORT}`)
// );
