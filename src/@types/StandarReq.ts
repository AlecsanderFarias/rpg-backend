import { Request } from 'express'
import User from './User';

interface CustomRequest extends Request {
  tokenUser?: User,
  admin?: Boolean,
};


export default CustomRequest;