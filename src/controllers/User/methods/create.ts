import { Request, Response } from 'express'
import User from '../../../models/User';


const create = async (req: Request, res: Response) => {
  try {

    const user = await User.create({
      name: 'Alecsander Farias',
      email: 'alecs@devfarias.com',
      birth: new Date(),
      password: '123456'
    });


    return res.status(201).json(user);
  } catch (error) {

    console.error('deu merda');


    return res.status(500).json(error);
  }
};

export default create;
