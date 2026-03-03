import React from "react";

function NewTaskForm({categories, formData, handleFormChange, onTaskFormSubmit}) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={formData.details} onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {categories.map(category => {
            if (category !== "All")
              return <option key={category} value={category}>{category}</option>
              })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onTaskFormSubmit}/>
    </form>
  );
}

export default NewTaskForm;
