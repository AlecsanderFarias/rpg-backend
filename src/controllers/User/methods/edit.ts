import bcrypt from 'bcrypt';
import User from '../../../models/User';


import Request from '../../../@types/StandarReq';

const edit = async (req: Request, res) => {
  try {
    const { tokenUser, body, params } = req;

    let { email, role, password, ...data } = body;
    const { id } = params;

    const userId = id || tokenUser._id;

    if (String(userId) !== String(tokenUser._id) && tokenUser.role !== 'admin') {
      return res.status(401).json({ error: 'You have no permission to do that.' });
    }

    if (password) {
      data.password = await bcrypt.hash(
        password,
        10
      );
    }

    if (role) {
      if (tokenUser.role !== 'admin') {
        return res.status(401).json({ error: 'You have no permission to do that.' });
      }

      data.role = role;
    }

    if (email) {
      const checkEmail = await User.findOne({ email: email, _id: { $not: userId } });

      if (checkEmail) {

        return res.status(401).json({ error: 'This email is already on use.' });
      } else {
        data.email = email;
      }

    }

    const user = await User.findByIdAndUpdate(userId, data);

    return res.status(200).send(user).end();
  } catch (error) {

    return res.status(500).json(error);
  }
};

export default edit;
