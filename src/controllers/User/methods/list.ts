import User from '../../../models/User';
import { Request, Response } from 'express'

const list = async (req: Request, res: Response) => {
  try {
    const {
      page,
      perPage,
    } = req.query;

    const options = {
      limit: Number(perPage || 10),
      page: Number(page),
      //populate: 'workerCompany.company',
    };

    const query = { deleted: false };

    const users = await User.paginate(query, options);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default list;
