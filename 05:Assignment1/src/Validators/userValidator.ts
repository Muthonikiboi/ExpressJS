import { body, param } from "express-validator";

// export const createUserValidator = [
//   body("UserID").notEmpty().withMessage("UserID is required"),
//   body("FirstName").notEmpty().withMessage("First Name is required"),
//   body("LastName").notEmpty().withMessage("Last Name is required"),
//   body("Email").isEmail().withMessage("Invalid email format"),
//   body("Phone").isMobilePhone("any").withMessage("Invalid phone number"),
//   body("Country").notEmpty().withMessage("Country is required"),
// ];

//OR

export const createUserValidator={
  UserID:{
    notEmpty:{
      errorMessage:"UserID is required"
    }
  },
  FirstName:{
    notEmpty:{
      errorMessage:"First Name is required"
    }
  },
  LastName:{
    notEmpty:{
      errorMessage:"Last Name is required"
    }
  },
  Email:{
    isEmail:{
      errorMessage:"Invalid email format"
    }
  },
  Phone:{
    isMobilePhone:{
      options:"any",
      errorMessage:"Invalid phone number"
    }
  },
  Country:{
    notEmpty:{
      errorMessage:"Country is required"
    }
  }
}

export const updateUserValidator = [
  param("id").notEmpty().withMessage("UserID is required"),
  body("FirstName").optional().notEmpty().withMessage("First Name is required"),
  body("LastName").optional().notEmpty().withMessage("Last Name is required"),
  body("Email").optional().isEmail().withMessage("Invalid email format"),
  body("Phone").optional().isMobilePhone("any").withMessage("Invalid phone number"),
  body("Country").optional().notEmpty().withMessage("Country is required"),
];

export const patchUserValidator = [
  param("id").notEmpty().withMessage("UserID is required"),
  body("FirstName").optional().notEmpty().withMessage("First Name cannot be empty"),
  body("LastName").optional().notEmpty().withMessage("Last Name cannot be empty"),
  body("Email").optional().isEmail().withMessage("Invalid email format"),
  body("Phone").optional().isMobilePhone("any").withMessage("Invalid phone number"),
  body("Country").optional().notEmpty().withMessage("Country cannot be empty"),
];

export const deleteUserValidator = [
  param("id").notEmpty().withMessage("UserID is required"),
];
