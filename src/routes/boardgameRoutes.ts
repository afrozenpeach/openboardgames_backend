import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

import passport from "passport";

import { Sequelize } from "sequelize"
const sequelize = new Sequelize('openboardgames', process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql' })

import { initModels } from "../../database/models/init-models"
const models = initModels(sequelize);

router.get('/', async (req, res) => {
  await sequelize.authenticate().then(async () => {
    const boardgames = await models.boardgames.findAll()
    res.send(boardgames)
  }).catch(() => {
    res.sendStatus(503)
  });
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.sendStatus(200);
});

export default router;