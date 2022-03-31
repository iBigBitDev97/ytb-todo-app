import React from 'react'
import { Header, FormCreateTask, TaskList } from './Components/IndexComponents.js';

const App = () => {
  return (
    <>
    <div>
        <Header/>
        <FormCreateTask/>
        <TaskList/>
    </div>
    </>
  )
}

export default App