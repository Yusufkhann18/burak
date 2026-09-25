import { Request, Response } from "express";
import{T} from "../libs/types/common";

const restaurantController: T   = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
    res.send("Home page");
} catch (err) {
    console.log("Error go Home:", err);
}

};
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
    res.send("Login page");
} catch (err) {
    console.log("Error get Login:", err);
}

};
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
    res.send("Signup page");
} catch (err) {
    console.log("Error get Signup:", err);
}

};

export default restaurantController;