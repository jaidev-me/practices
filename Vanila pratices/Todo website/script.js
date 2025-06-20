// todo forom logics on button click animations

let addBtn = document.querySelectorAll(".addtodo");
const formContainer = document.getElementById('slide-down');
Array.from(addBtn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.id == 'addtodo2') {
            window.location.href = "#slide-down";
        }
        const formHTML = `
        <form id="form" class="card p-5">
        <div class="mb-3 ">
            <label for="title" class="form-label">Title</Title></label>
            <input type="text" class="form-control" id="title" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="disc" class="form-label">Description</label>
            <div class="form-floating">
                <textarea class="form-control" id="disc" style="height: 100px"></textarea>
            </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" id="Submit">Submit</button>
                <button class="btn btn-primary" type="button" id="cancle">Cancle</button>
            </div>   
    </form>
  `;

        const newForm = document.createElement('div');
        newForm.innerHTML = formHTML;
        formContainer.innerHTML = ''; // Clear existing content
        formContainer.appendChild(newForm);


        // Trigger the slide-down animation
        formContainer.classList.add('slide-down', 'mx-5', 'my-5');

        let title = document.getElementById("title");
        let disc = document.getElementById("disc");
        let submit = document.getElementById("Submit");
        let cancle = document.getElementById("cancle")



        // local storage and todo form subbmission
        submit.addEventListener('click', (e) => {
            e.preventDefault()
            if (title.value.trim().length != 0 || disc.value.trim().length != 0) {
                formContainer.classList.remove('slide-down', 'mx-5', 'my-5')
                setTimeout(() => {
                    formContainer.removeChild(newForm);
                    message('Todo successfully added — check it out!', 'alert-success')
                }, 300)
                localStorage.setItem(title.value + "," + getCurrentDateTimeFormatted(), disc.value)
                setTimeout(() => {
                    loadTodos()
                }, 1000)
                setTimeout(()=>{
                    edittodo()
                    deletefunc()
                },2000)
            }
            else {
                message('Title or Description can not be empty!', 'alert-danger')
            }

        })
        cancle.addEventListener('click', () => {
            formContainer.classList.remove('slide-down', 'mx-5', 'my-5')
        })

    });
})




// message showing function
const container = document.getElementById('slide-side');

const message = (message, type) => {
    container.classList.add('mx-5', 'my-3')
    const newElement = document.createElement('div');
    newElement.className = `alert ${type} message`; // Add 'new-element' class
    newElement.textContent = message;
    container.appendChild(newElement);

    // Trigger the animation by using a timeout to apply the left position after a slight delay
    setTimeout(() => {
        newElement.style.left = '0';
    }, 10);

    setTimeout(() => {
        // Slide the element back to the left and then remove it
        newElement.style.left = '-100%';
        setTimeout(() => {
            container.removeChild(newElement);
            container.classList.remove('mx-5', 'my-5')
        }, 300); // Wait for the animation to complete before removing
    }, 3000); // Show the element for 3 seconds
};








// clear local storage
let clear = document.getElementsByClassName("localclear");
Array.from(clear).forEach((clear) => {
    clear.addEventListener('click', () => {
        confirm_clear = confirm("Do you want to clear all todos?");
        if (confirm_clear) {
            localStorage.clear()
            setTimeout(() => {
                let todos = document.getElementById("todos");
                todos.innerHTML = ""
                loadTodos()
            }, 1000)
        }
    })
})






// load all items from local storage
let todos = document.getElementById("todos");
let createdTodoIds = [];
const loadTodos = () => {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (createdTodoIds.includes('notodo')) {
                todos.innerHTML = "";
                createdTodoIds = [];
            }
            if (!createdTodoIds.includes(key)) {
                createdTodoIds.push(key);
                newtodo = document.createElement('div');
                newtodo.setAttribute('id', `${key}`);
                newtodo.setAttribute('class', 'tododiv');
                let innerHTML = `<div class="card text-center my-3 mx-5 h-50">
<div class="card-header">
<h5 class="card-title" id="title+${key}">${key.split(",")[0]}</h5>
</div>
<div class="card-body">
    <p class="card-text" id="disc+${key}">${localStorage.getItem(key)}</p>
    <button class="btn btn-primary me-md-2 localdelete mx-2" type="button" id="delete+${key}">Delete</button>
    <button class="btn btn-primary localedit mx-2" type="button" id="edit+${key}">Edit Todo</button>
</div>
<div class="card-footer text-muted">Created On ${key.split(",")[1]}</div>
</div>
<div class="editslidedown" id="slide-down+${key}">
</div>`

                newtodo.innerHTML = innerHTML;
                todos.appendChild(newtodo);

            }
        }
        else {

            if (localStorage.length == 0) {
                newtodo = document.createElement('div');
                let innerHTML = `<div class="card text-center my-5 mx-5 h-50">
<div class="card-header">
<h5 class="card-title">No Todos Found! Add a Todo</h5>
</div>
</div>`
                newtodo.innerHTML = innerHTML;
                todos.appendChild(newtodo);
                createdTodoIds.push('notodo');
            }

            break
        }
    }

}
loadTodos()


// delete todo
const deletefunc = ()=>{
const deleteButton = document.getElementsByClassName("localdelete");
Array.from(deleteButton).forEach((elem) => {
    elem.addEventListener('click', () => {
        const id = elem.id.split("+")[1];
        const toremoveTodo = document.getElementById(id);

        if (toremoveTodo) {
            todos.removeChild(toremoveTodo);
            localStorage.removeItem(id); // Remove the corresponding item from local storage
            loadTodos()
        }
    });
});}
deletefunc()


//edit todo
const edittodo = () => {
    const editButton = document.getElementsByClassName("localedit");
    Array.from(editButton).forEach((elem) => {
        elem.addEventListener('click', () => {
            const id = elem.id.split("+")[1];
            const toeditTodo = document.getElementById(id);
            if (toeditTodo) {
                let containerf = document.getElementById(`slide-down+${id}`)
                const formHTML = `
        <form id="form${id}" class="card p-5">
        <div class="mb-3 ">
            <label for="title" class="form-label">Title</Title></label>
            <input type="text" class="form-control" id="#title${id}" aria-describedby="emailHelp" value="${id.split(",")[0]}">
        </div>
        <div class="mb-3">
            <label for="disc" class="form-label">Description</label>
            <div class="form-floating">
                <textarea class="form-control" id="#disc${id}" style="height: 100px">${localStorage.getItem(id)}</textarea>
            </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" id="Submit+${id}">Submit</button>
                <button class="btn btn-primary" type="button" id="cancle+${id}">Cancle</button>
            </div>   
    </form>
  `;

                const newForm = document.createElement('div');
                newForm.innerHTML = formHTML;
                containerf.innerHTML = ''; // Clear existing content
                containerf.appendChild(newForm);

                // Trigger the slide-down animation
                containerf.classList.add('slide-down', 'mx-5', 'my-5');
                let submit = document.getElementById(`Submit+${id}`)
                submit.addEventListener('click', () => {
                    let title = document.getElementById(`#title${id}`).value
                    let disc = document.getElementById(`#disc${id}`).value
                    if (title.trim().length != 0 || disc.trim().length != 0){
                    localStorage.setItem(`${title},${id.split(",")[1]}`, disc)
                    if (id != `${title},${id.split(",")[1]}`) {
                        localStorage.removeItem(id);
                    }
                    else {
                        const indexToRemove = createdTodoIds.indexOf(id);
                        if (indexToRemove !== -1) {
                            createdTodoIds.splice(indexToRemove, 1);
                        } 
                    }
                
                containerf.classList.remove('slide-down', 'mx-5', 'my-5')
                document.getElementById(`title+${id}`).innerHTML = title;
                document.getElementById(`disc+${id}`).innerHTML = disc;
                message("Todo successfully edited!", "alert-success")

            }
        else{
            message("Title or Description can not be empty!", "alert-danger")
        }})
                let cancle = document.getElementById(`cancle+${id}`);
                cancle.addEventListener('click', () => { containerf.classList.remove('slide-down', 'mx-5', 'my-5') })


            }
        });
    });
}
edittodo()


// time and fate func
function getCurrentDateTimeFormatted() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;

    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes.toString().padStart(2, '0')}${ampm}`;

    return formattedDateTime;
}




