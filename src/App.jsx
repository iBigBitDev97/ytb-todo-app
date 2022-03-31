import React from "react";
import {
  Header,
  FormCreateTask,
  TaskList,
} from "./Components/IndexComponents.js";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col text-center ">
        <FormCreateTask />
        <TaskList />
      </div>
    </>
  );
};

export default App;
