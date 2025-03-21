import { Schema, mongoose } from "mongoose";

const schema = new Schema({
    address: { type: String, required: true, unique: true, dropDups: true },
    chainId: { type: Number, required: true },
    description: { type: String, required: false },
    sosmed: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        required: false
    }
},
{
    timestamps: true,
});

const userSchema = mongoose.model("users", schema);

export default userSchema;