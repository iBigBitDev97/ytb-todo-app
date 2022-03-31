import React from "react";

const FormCreateTask = () => {
  return (
    <>
    <div className="container mx-auto bg-red-400 shadow-md py-3">
      <form>
        <input className="p-3" type="text" placeholder="Escribe aqui tu tarea"></input>
        {" "}
        <button className="bg-red-500 p-3 rounded-md hover:bg-red-600">Add Task</button>
      </form>
      </div>
    </>
  );
};

export default FormCreateTask;
