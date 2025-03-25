import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addTask, removeTask } from './redux/todosSlice';

const App = () => {
  const [ input, setInput ] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const handleAddTask = () => {
    if(input.trim()) {
      dispatch(addTask({ id: Math.random(), text: input}))
      setInput('')
    }
  }

  const handleRemoveTask = id => {
    dispatch(removeTask(id))
  }

  return (
    <div className='container'>
    <h1>Lista de tareas</h1>
    <form>
      <input 
        type='text' 
        placeholder='introduce la tarea'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </form>
    <button onClick={handleAddTask}>Añadir tarea</button>
    <ul>
      {todos.map(task => 
        <li key={task.id}>{task.text} <button onClick={() => handleRemoveTask(task.id)}>Eliminar tarea</button></li>)
      }
    </ul>

    </div>
  );
};

export default App;