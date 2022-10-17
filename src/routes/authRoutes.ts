import passport from "passport";

import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/profile");
  }
  res.render("login");
});

router.get("/google", passport.authenticate("google", {
  scope: ["email", "profile", "openid"]
}));

router.get("/google/callback", passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect("/profile");
});

router.get("/google/callbackJwt", passport.authenticate('google', { session: false }), (req, res) => {
  var token = req.user.token;
  res.status(200).json({token});
});

router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

export default router;
