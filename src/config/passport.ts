import passport from "passport";

import passportGoogle from "passport-google-oauth20";
var GoogleStrategy = passportGoogle.Strategy;

import passportJwt, { ExtractJwt } from "passport-jwt";
var JwtStrategy = passportJwt.Strategy;

import jwt from 'jsonwebtoken';

import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize"
const sequelize = new Sequelize('openboardgames', process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })

import { initModels } from "../../database/models/init-models"
const models = initModels(sequelize);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let user = await models.users.findOne({
      where: {
        id: id
      }
    });

    done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
        clientID: process.env.GA_CLIENT_ID!,
        clientSecret: process.env.GA_CLIENT_SECRET!,
        callbackURL: process.env.GA_REDIRECT_URI
    },
    async (accessToken, refreshToken, profile, done) => {
      await sequelize.authenticate().then(async () => {
        let user = await models.users.findOne({
          where: {
            google_id: profile.id
          }
        });
        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        if (!user) {
          let newUser = await models.users.create({
            alias: profile.emails[0].value,
            name: profile.name.givenName + (profile.name.middleName != undefined ? " " + profile.name.middleName : "") + " " + profile.name.familyName,
            google_id: profile.id,
            date_registered: new Date(),
            email: profile.emails[0].value,
            token: token
          });

          if (newUser) {
            done(null, newUser);
          }
        } else {
          const result = await models.users.update(
            { token: token },
            { where: { id: user.id}}
          );

          user.token = token;

          done(null, user);
        }
      });
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
      await sequelize.authenticate().then(async () => {
        const user = await models.users.findOne({
          where: {
            id: jwtPayload.id
          }
        });

        if (user) {
          done(null, user);
        } else {
          done (null, false);
        }
      });
    }
  )
);