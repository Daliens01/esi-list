import { Schema, model, models} from "mongoose"

const taskSchema = new Schema ({
    titleLink:{
        type: String,
        unique: true,
        trim: true,
        maxlength: [50]
    },link :{
        type: String,
        unique: true,
        trim: true,
        maxlength: [500]
    }
},{
    timestamps: true,
    versionKey: false
})

export default models.Task || model('Task', taskSchema)