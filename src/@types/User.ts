
interface User {
  _id?: String,
  email: String,
  birth: Date,
  password?: String,
  confirmPassword?: String,
  active?: Boolean,
  role?: String,
  deleted?: Boolean,
}




export default User;