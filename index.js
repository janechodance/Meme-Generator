document.addEventListener("DOMContentLoaded", () => {

    const newTaskForm = document.getElementById('create-task-form');
    // const taskUl = document.getElementById('tasks')

    newTaskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const inputData = e.target.new_task_description.value;
      addTask(inputData)
    })

    const addTask = (todo) => {
      let p = document.createElement('p');
      let btn = document.createElement('button');
      

      btn.addEventListener('click', handleDelete);
      btn.textContent = 'x';
      p.textContent = `- ${todo}`;
      p.appendChild(btn)
      document.querySelector('#tasks').appendChild(p)
    }
    const handleDelete = (e) => {
      e.target.parentNode.remove();
    }
});

// TEST FOR A DISCUSSION////
// document.addEventListener("DOMContentLoaded", function(){
//   const button = document.getElementById("notify")
//   button.addEventListener('mouseover', function(){
//     console.log("Printing a Message!")
//   })
// }); 