import express from 'express';
const router = express.Router();

import * as UserController from '../controllers/user.controller';

/* GET users listing. */
router.route('/')
  .get(UserController.all)
  .post(UserController.create);

router.route('/:id')
  .get(UserController.read);

router.route('/token').get(UserController.getAccessToken);

export default router;