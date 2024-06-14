//write basic express blueprint code,
//with express.json() middleware

const  express =require("express");
const app = express();
const {todo} =require("./db")
const {createTodo, updateTodo} = require("./types");
app.use(express.json());

//body {
  title:string;
//   description:string;  that is two thing that user send for todo so we have to validate it is user input is correct or not so we use zod 

// }



app.post("todo/", async function(res,req){

  const createPayload=req.body;
  const parsePayload= createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.statusCode(411).json({
      msg:"you sent the write inputs",
    })
    return;
  }
//put it in mongodb
 await todo.create({
  title:createPayload.title,
  description: createPayload.description,
})
})

app.get("/todos", function(res,req){

})

app.put("/completed", function(res,req){
  const updatePayload=req.body;
  const parsePayload=updateTodo.safeParse(updatePayload);
  if(!parsePayload.sucees){
    res.status(411).json({
      msg:"you sent the write inputs"
    })
    return;
  }

})