import { NextFunction, Request, Response } from "express";
import { getXataClient } from "../xata";
import { matchedData } from "express-validator";

const xata = getXataClient();

export const getUsers = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const users = await xata.db.users.getAll();
    res.json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    console.error("Error fetching users", err);
    res.status(500).json({
      message: "Error fetching users",
    });
  }
  next();
};

export const createUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const newUser = await xata.db.users.create(matchedData(req));
    console.log(newUser);

    res.json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    console.log("Error creating user", err);
    res.status(500).json({
      message: "Error creating user",
    });
  }
  next();
};

export const updateUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const params = req.params.id;
    const updatedUser = await xata.db.users.update(params, matchedData(req));
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
  next();
};

export const patchUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const params = req.params.id;
    const partialUpdateUser = await xata.db.users.update(params, matchedData(req));
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
  next();
};

export const deleteUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const params = req.params.id;

    const user = await xata.db.users.delete(params);
    console.log(user);

    res.json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    console.error("Error deleting user", err);
    res.status(500).json({
      message: "Error deleting user",
    });
  }
  next();
};
