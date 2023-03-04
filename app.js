const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
document.querySelector('.search').addEventListener('submit', e=>{
    e.preventDefault();
});
const generateTemplate = (todo) =>{

    const html = `
    <li class="list-group-item text-light d-flex 
    justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    //append this html template to the html content of the ul
    list.innerHTML+=html;

}

addForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //only add non-blank todos
    if (todo.length>0){
        generateTemplate(todo);
        addForm.reset();
    }
});  

//delete todos
list.addEventListener('click', (e)=>{
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }

});

const filterTodos = (term) => {
    //remove the display for the todos that do not match the term
    //list.children() is an HTML collection

    Array.from(list.children)
    .filter((todo)=>{
        return !(todo.textContent.includes(term) || todo.textContent.includes(term.toLowerCase()) || todo.textContent.includes(term.toUpperCase()));
    })
    .forEach((todo)=>{
        todo.classList.add('filtered');
        // console.log(todo);
    });

    Array.from(list.children)
    .filter((todo)=>{
        return todo.textContent.includes(term) || todo.textContent.includes(term.toLowerCase()) || todo.textContent.includes(term.toUpperCase());
    })
    .forEach((todo)=>{
        todo.classList.remove('filtered');
        // console.log(todo);
    });

};

//search todos with keyup event
search.addEventListener('keyup', (e)=>{
    const term = search.value.trim();
    filterTodos(term);
    // console.log("!!!!!!!");
    // console.log(search.value);
})

const a1 = "Abhishek";
console.log(a1.toLowerCase(), a1.toUpperCase());