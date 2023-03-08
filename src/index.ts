import express from "express"
const app = express()

import dotenv from "dotenv";
dotenv.config();

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

import cors from "cors";

app.use(
  cors({
    origin: `http://localhost:${ process.env.PORT }`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
)

import session from "express-session";
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000,
    secure: process.env.NODE_ENV === 'production'
  },
  name: process.env.COOOKIE_NAME
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

app.listen( process.env.EXPRESS_PORT, () => {
  console.log( `server started at http://localhost:${ process.env.EXPRESS_PORT }` );
});