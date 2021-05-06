import { Response } from 'express'
import User from '../../../models/User';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth';


import Request from '../../../@types/StandarReq';


const create = async (req: Request, res: Response) => {
  try {
    const { email, password, ...rest } = req.body;

    //check email
    const checkEmail = await User.findOne({ email: email });

    if (checkEmail) {
      return res.status(401).json({ error: 'This email is not available.' })
    }

    //encrypt password
    const passwordHashed = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      email,
      password: passwordHashed,
      ...rest
    });

    const tokenOptions = {};

    const token = jwt.sign(
      { tokenUser: user._id },
      authConfig.secret,
      tokenOptions
    );

    //email to confirm ?


    return res.status(201).json({ token, user });
  } catch (error) {

    console.error('deu merda');


    return res.status(500).json(error);
  }
};

export default create;
