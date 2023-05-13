import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
      },
    courseId: {
        type: Number
    },
    courseType: {
        type: String
      }
});
autoIncrement.initialize(mongoose.connection);
courseSchema.plugin(autoIncrement.plugin, {
  model: "course", 
  field: "courseId", 
  startAt: 1, 
  incrementBy: 1, 
});
export default mongoose.model("course",courseSchema);