import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        unique: true,
        required: true
    },
    description:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    priority: mongoose.SchemaTypes.Boolean,
    duration: mongoose.SchemaTypes.String,
    done: mongoose.SchemaTypes.Boolean,
    doing: mongoose.SchemaTypes.Boolean,
})

export const Task = mongoose.model('Task',TaskSchema)