import express from "express"
const app = express()
const port = 3000

import dotenv from "dotenv";
dotenv.config();

import path from 'path';

import { Sequelize } from "sequelize"
const sequelize = new Sequelize('openboardgames', process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })

import { initModels } from "../database/models/init-models"
const models = initModels(sequelize);

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

import session from "express-session";
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000
  },
  name: 'openboardgames'
}));

import "./config/passport";
import passport from "passport";
app.use(passport.initialize());
app.use(passport.session());

import authRoutes from "./routes/authRoutes";
app.use('/auth', authRoutes);
import profileRoutes from "./routes/profileRoutes";
app.use("/profile", profileRoutes);
import boardgameRoutes from "./routes/boardgameRoutes";
app.use("/boardgame", boardgameRoutes);

app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
});