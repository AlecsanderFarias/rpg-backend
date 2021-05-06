import User from '../../../models/User';


import Request from '../../../@types/StandarReq';

const remove = async (req: Request, res) => {
  try {
    const { tokenUser, params } = req;
    const { id } = params;

    const userId = id || tokenUser._id;

    if (String(userId) !== String(tokenUser._id) && tokenUser.role !== 'admin') {
      return res.status(401).json({ error: 'You have no permission to do that.' });
    }

    await User.findByIdAndUpdate(userId, {
      deleted: true
    })



    return res.status(200).json({ deleted: true });
  } catch (error) {

    return res.status(500).json(error);
  }
};

export default remove;
