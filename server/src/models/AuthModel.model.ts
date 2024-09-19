import mongoose, { Schema } from "mongoose";

const AuthSchema = new Schema({
  username: {
    type: String,
    required: [true, "Name harus di isi"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email harus di isi"],
  },
  password: {
    type: String,
    required: [true, "Password harus di isi"],
  },
});

const AuthModel = mongoose.model("users", AuthSchema);

export default AuthModel;
