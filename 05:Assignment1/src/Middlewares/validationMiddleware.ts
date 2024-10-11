import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Validator middleware to check for errors
const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return; // Ensure the function stops after sending a response
    }
    next();
  };
  
  export default validateRequest;
