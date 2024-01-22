const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const {  authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get( getUserDetails);

router.route("/password/update").put( updatePassword);

router.route("/me/update").put( updateProfile);

router
  .route("/admin/users")
  .get( authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get( authorizeRoles("admin"), getSingleUser)
  .put( authorizeRoles("admin"), updateUserRole)
  .delete( authorizeRoles("admin"), deleteUser);

module.exports = router;
