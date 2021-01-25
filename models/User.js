import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    gitgubId: Number
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" })   // write in {}, which field to use as the username

const model = mongoose.model("User", UserSchema);

export default model;