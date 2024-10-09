import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getXataClient ,Users} from "./xata";
import cors from "cors";


dotenv.config();
// Inference
const app: Express = express();
const port = process.env.PORT || 7000;

const xata = getXataClient();


//midle wares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors()); // Middleware for CORS

//GET Request
app.get("/api/v1/users", async(req: Request, res: Response) => {
    try{
        const user = await xata.db.users.getAll();
        res.json({
          message: "Users fetched successfully",
          data: user,
        });
    }catch(err){
        console.error("Error fetching users", err);
        res.status(500).json({
          message: "Error fetching users",
        });
    }
});

//POST Request
app.post("/api/v1/users",async(req:Request, res:Response) => {
    try{
        const newUser= await xata.db.users.create(req.body);
        console.log(newUser);

        res.json({
          message: "User created successfully",
          data: newUser,
        });
    }catch(err){
        console.log("Error creating user", err);
        res.status(500).json({
          message: "Error creating user",
        });
    }
})

// PUT Request  
app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
  try {
      const params: any = req.params.id;
      const updatedUser = await xata.db.users.update(params, req.body); // Full update
      console.log(updatedUser);

      res.json({
          message: "User updated successfully",
          data: updatedUser,
      });
  } catch (err) {
      console.error("Error updating user", err);
      res.status(500).json({
          message: "Error updating user",
      });
  }
});

// PATCH Request 
app.patch("/api/v1/users/:id", async (req: Request, res: Response) => {
  try {
      const params: any = req.params.id;
      const partialUpdateUser = await xata.db.users.update(params, req.body); // Partial update
      console.log(partialUpdateUser);

      res.json({
          message: "User partially updated successfully",
          data: partialUpdateUser,
      });
  } catch (err) {
      console.error("Error partially updating user", err);
      res.status(500).json({
          message: "Error partially updating user",
      });
  }
});

//DELETE Request
app.delete("/api/v1/users/:id", async (req:Request, res:Response) => {
    try{
        const params:any = req.params.id

        const user = await xata.db.users.delete(params);
        console.log(user);

        res.json({
          message: "User deleted successfully",
          data: user,
        });

    }catch(err){
        console.error("Error deleting users", err);
        res.status(500).json({
          message: "Error deleting users",
        });
    }
})

// Start the server
app.listen(port, () => {
  console.log(
    `[server]: Server TypeScript is running at http://localhost:${port} 🎉🎉🎉🎉🎉`
  );
});
