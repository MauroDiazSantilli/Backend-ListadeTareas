import { Schema, model } from 'mongoose';

const tareaSchema = new Schema({
  tarea: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
});

const Tarea = model('Tarea', tareaSchema);

export default Tarea;