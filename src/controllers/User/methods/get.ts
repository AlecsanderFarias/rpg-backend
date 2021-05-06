import { Response } from 'express'
import User from '../../../models/User';


import Request from '../../../@types/StandarReq';

const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = id ? await User.findById(id) : req.tokenUser;

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (String(id) !== String(req?.tokenUser?._id) && !req.admin) {
      return res.status(401).json({ error: "You don't have access to this" })
    }


    return res.status(200).json(user);
  } catch (error) {

    return res.status(500).json(error);
  }
};

export default get;
