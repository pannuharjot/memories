import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: {type: String},
    name: { type: String, required: true},
    email: { type: String, requred: true},
    password: {type: String, required: true},
  
})

export default mongoose.model("User", userSchema)