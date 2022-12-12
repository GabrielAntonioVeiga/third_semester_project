import { Response, Request, NextFunction } from "express";

const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (!body.email || body.email === "") {
    return res
      .status(400)
      .json({ message: "The field email can not be empty" });
  }

  if (!body.password || body.password === "") {
    return res
      .status(400)
      .json({ message: "The field password can not be empty" });
  }

  if (!body.name || body.name === "") {
    return res.status(400).json({ message: "The field user can not be empty" });
  }

  if (!body.id_classes || body.id_classes === "") {
    return res
      .status(400)
      .json({ message: "The field class can not be empty" });
  }

  next();
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (!body.email || body.email === "") {
    return res
      .status(400)
      .json({ message: "The field email can not be empty" });
  }

  if (!body.password || body.password === "") {
    return res
      .status(400)
      .json({ message: "The field password can not be empty" });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
};

// req: Request, res: Response): Promise<Response>
