
import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const addTask = (e) => {

        e.preventDefault()
        if(isEmpty(task)){
          console.log("Task vacio")
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


  return (
    <div className="container mt-5">
      <h1 >Tareas</h1>
      <hr/>
        <div className="row">
          <div className="col-8">
            <h4 className='text-center'>Lista de tareas</h4>
            {
              size(tasks)=== 0 ? 
              (<h5 className='text-center'>No ahi tareas programadas</h5>):
              (
                <ul className="list-group">

                {
                  tasks.map((task) => (

                        <li className="list-group-item" key={task.id}>
                          <span className='lead'>{task.name}</span>
                          <button className='btn btn-warning btn-sm float-right mx-2'>
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
              <h4 className='text-center'>Formulario</h4>
              <form onSubmit={addTask}>
                <input type='text' className='form-control mb-2'
                 placeholder='Ingresar tarea...'
                 onChange={(text) => setTask(text.target.value)}
                 value={task}
                 />
                  <button className='btn btn-dark btn-block' type="submit">Agregar</button>
              </form>
          </div>
        </div>
        
    
    </div>
    
    
  )
}

export default App;
