import Express from "express";
import {conntectToDB} from "./config/database.js";
import errorMiddleWare from "./middleware/error.js";
import router from './routes/userRoute.js';

const app = Express();


app.use(router); 

conntectToDB(); 

app.use(errorMiddleWare);

app.listen(4000, ()=>{
    console.log('Server is Working!');
})