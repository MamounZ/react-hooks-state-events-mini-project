import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const originalCategories = {
    All: "",
    Code: "",
    Food: "",
    Money: "",
    Misc: ""
  }
  const [selectedCategory, setSelectedCategory] = useState(originalCategories)
  const [tasksState, setTasksState] = useState(TASKS)
  const [formData, setFormData] = useState({
    text:"",
    category:"Code"
  })


  function handelDeleteTask(event){
    setTasksState(tasksState.filter(task => task.text !== event.target.value))
  }

  function handelSelectedCategory(event){
    const key = event.target.value
    setSelectedCategory({...originalCategories, [key]: "selected" })
  }

  const currentCategory = Object.keys(selectedCategory).find(key => selectedCategory[key] === 'selected')
  let visibleTasks = currentCategory === "All" || !currentCategory
  ? tasksState
  : tasksState.filter(task => task.category === currentCategory);

  function handleFormChange(event){
    let name =event.target.name
    let value = event.target.value

    setFormData({...formData,
      [name]: value
    })
  }

    function onTaskFormSubmit(event) {
    event.preventDefault();
    setTasksState([...tasksState, formData]);
    console.log(formData);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handelSelectedCategory={handelSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} formData={formData} handleFormChange={handleFormChange} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList visibleTasks={visibleTasks} handelDeleteTask={handelDeleteTask} />
    </div>
  );
}

export default App;
