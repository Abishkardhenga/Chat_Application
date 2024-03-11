import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("Conversation", ConversationSchema);
export default conversation;
