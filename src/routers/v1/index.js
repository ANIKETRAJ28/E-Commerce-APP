const express = require("express");
const userController = require("../../controllers/user-controller");
const Categorycontroller = require("../../controllers/category-controller");
const ProductController = require("../../controllers/product-controller");
const RatingReviewController = require("../../controllers/review-rating-controller");
const BookingController = require("../../controllers/booking-controller");
const CartController = require("../../controllers/cart-controller");

const CategoryMiddleware = require("../../middlewares/category-middleware");
const ProductMiddleware = require("../../middlewares/product-middleware");
const UserMiddleware = require("../../middlewares/user-middleware");
const { authenticate } = require("../../middlewares/authenticate");
const RatingReviewMiddleware = require("../../middlewares/review-rating-middleware");

const router = express.Router();

router.post("/users/signup", UserMiddleware.validateUserSignUp, userController.SignUp);
router.post("/users/signin", UserMiddleware.validateUserSignIn, userController.signIn);
router.get("/users/:id", userController.get);
router.get("/users", userController.getAll);
router.delete("/users/:id", userController.destroy);

router.post("/category", CategoryMiddleware.validateCategory, Categorycontroller.create);
router.get("/category", Categorycontroller.getAll);

router.post("/products", ProductMiddleware.validateProduct, ProductController.create);

router.post("/cart/add-items", CartController.addItems);

router.post("/rating-review", authenticate, RatingReviewMiddleware.validateReviewRating, RatingReviewController.create);

router.post("/bookings", authenticate ,BookingController.create);

module.exports = router;