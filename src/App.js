
import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setID] = useState("")
  const [error, setError] = useState(null)

  const validForm = () => {
    let isValid = true
    setError(null)
    if(isEmpty(task)){
      setError("Debes ingresar una tarea")
      isValid = false
    }
    
    return isValid


  }
  
  const addTask = (e) => {

        e.preventDefault()
        if(!validForm()){
          return

        }
        
      const newTasks = {
        id:shortid.generate(),
        name:task
      }
      setTasks([...tasks, newTasks])
      console.log("OK")
      setTask("")
  }

  const deleteTask = (id) => {
    const filterTasks = tasks.filter(task => task.id !== id)
    setTasks(filterTasks)


  }
  const editTask = (tarea) => {
      setTask(tarea.name)
      setEditMode(true)
      setID(tarea.id)
  }

  const saveTask = (e) => {
    e.preventDefault()
    if(!validForm()){
      return

    }
   const editedTask=tasks.map((item) => item.id===id?{id,name:task}:item)
    setTasks(editedTask)
    setEditMode(false)
    setTask("")
    setID("")
    
}


  return (
    <div className="container mt-5">
      <h1 >Tareas</h1>
      <hr/>
        <div className="row">
          <div className="col-8">
            <h4 className='text-center'>Lista de tareas</h4>
            {
              size(tasks)=== 0 ? 
              (<li className="list-group-item text-center">No ahi tareas programadas</li>):
              (
                <ul className="list-group">

                {
                  tasks.map((task) => (

                        <li className="list-group-item" key={task.id}>
                          <span className='lead'>{task.name}</span>
                          <button 
                           className='btn btn-warning btn-sm float-right mx-2'
                           onClick={()=>editTask(task)}
                           >
                            Editar
                          </button>
                          <button 
                          className='btn btn-danger btn-sm float-right'
                          onClick={()=>deleteTask(task.id)}>
                            Eliminar
                          </button>
                         </li>
                      )

                  )
                 
                }
            </ul>


              )
            }
           
          </div>
          <div className="col-4">
             
              <h4 className='text-center'>
               {(editMode) ? ("Modificar tarea"):("Agregar tarea")}
                </h4>
              <form onSubmit={editMode?(saveTask):(addTask)}>
                {error && <span className="text-danger">{error}</span>}
                <input type='text' className='form-control mb-2'
                 placeholder='Ingresar tarea...'
                 onChange={(text) => setTask(text.target.value)}
                 value={task}
                 />
                  <button className={editMode?'btn btn-warning btn-block':
                                    'btn btn-dark btn-block'} type="submit">
                    
                    {(editMode) ? ("Guardar"):("Agregar")}
                  </button>
              </form>
          </div>
        </div>
        
    
    </div>
    
    
  )
}

export default App;
