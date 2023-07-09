import { Schema, model } from 'mongoose';

const tareaSchema = new Schema({
  tarea: {
    type: String,
    required: true,
  },
});

const Tarea = model('Tarea', tareaSchema);

export default Tarea;