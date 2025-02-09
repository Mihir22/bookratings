import express from "express"; // Ge the router instance of Express
import userController from "../controllers/user.js"; // Get all exported functions in the user controller
import bookController from "../controllers/book.js"; // Get all exported functions in the user controller
import reviewController from "../controllers/review.js";
const router = express.Router();

// Map the `signup` request to the signup function
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/resetpass", userController.reset);
router.post("/deleteuser", userController.delete);
router.post("/insertbook", bookController.insert);
router.post("/getbook", bookController.get);
router.get("/getallbooks", bookController.getAllBooks);
router.post("/insertreview", reviewController.insert);
router.post("/getbookallreview", reviewController.getBookAllReview);
router.post("/getuserallreview", reviewController.getUserAllReview);
router.post("/getuserbookreview", reviewController.getuserbookreview);
router.delete("/deleteuserbookreview", reviewController.deleteuserbookreview);

export default router;
