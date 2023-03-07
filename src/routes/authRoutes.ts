import passport from "passport";

import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("http://localhost:3000/profile");
  }
  res.render("login");
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user
    });
  } else {
    res.json({
      success: false,
      message: "user has not authenticated"
    })
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

router.get("/google", passport.authenticate("google", {
  scope: ["email", "profile", "openid"]
}));

router.get("/google/callback", passport.authenticate('google', { failureRedirect: '/login/failure' }), (req, res) => {
  res.redirect("http://localhost:3000/profile");
});

router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('http://localhost:3000');
  });
});

export default router;
