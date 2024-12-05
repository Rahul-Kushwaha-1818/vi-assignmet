const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/checkout", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Welcome to the checkout page" });
});

module.exports = router;
