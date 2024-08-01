const taskInput = document.querySelector('#taskInput'); 
const addTaskBtn = document.querySelector('#addTaskBtn'); 
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
    }
    taskInput.value = '';
});

function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="completeBtn">Complete</button>
        <button class="editBtn">Edit</button>
        <button class="removeBtn">Remove</button>
    `;
    taskList.appendChild(li);

    li.querySelector('.completeBtn').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    li.querySelector('.editBtn').addEventListener('click', () => {
        const newText = prompt('Edit task', li.querySelector('span').textContent);
        if (newText) {
            li.querySelector('span').textContent = newText;
        }
    });

    li.querySelector('.removeBtn').addEventListener('click', () => {
        taskList.removeChild(li);
    });
}
/////////////////////////////////////////////////////////////////////


// simple filter exercise
const someArray = [1,2,3,4,5]
const newArray = someArray.filter(n=>{
    return n< 3;
})
console.log(`this is filterd array${newArray}`)



// get total price in the array
const prices = [29.98, 37.33, 90.21, 30.43]
const total = prices.reduce( (total,price)=> total+price)

console.log(`total price is ${total}`)


// find the minimum price in the array
const pricess = [29.98, 37.33, 90.21, 30.43, 898.22]
const minPrice = pricess.reduce((min , price)=>{
    if(price < min){
        return price
    }
    return min
})
console.log(`minimum price is${minPrice}`)

// better option to find the minimum price in the array
const minNum = Math.min(...pricess)
console.log('minimum price is:', minNum)

// combine different arrays into new one using spread syntax
const cats = ['mia','panny','micky']
const dogs = ['sisi','jany','givi']
const allPets = [...cats, ...dogs]
console.log(...allPets)

// destructuring arrays
const scores = ['lela','sofo','artiom','levani']
const [first,second, ...evreryoneElse] = scores;
console.log(first)
console.log(evreryoneElse)

// object destructuring to extract specific info from the profile array
const profile = [{
    firstName:'zura',
    lastName:'adanaia',
    dateOfBirth:'1994',
    bio:'asdjioaj iojoisajdoiji ijiosjdoijdsiofj',
    workPlace:'curently unemployed'
}
]
const someProfile = profile.map(({firstName, lastName, dateOfBirth})=>{
    return `${firstName} ${lastName} ${dateOfBirth}`
})
console.log(`some info: ${someProfile}`)