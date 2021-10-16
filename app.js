// Document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '3px';
// // taskTitle.style.display ='none';

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task list</span>';

//documnt.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(3)').textContent = 'Hello World'; 

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';





