import express from "express";
import 'dotenv/config';
import alertasRouter from "./routers/alertasRouter.js"
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/alertas", alertasRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
