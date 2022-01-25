const todoList = document.getElementById('Todo-list').querySelectorAll('.new-item')
const newItemAccept = document.getElementById('NewItemAccept')
const przyciskActive = document.getElementById('ActiveTodoItems')
const themeSwitch = document.getElementById('theme-switch')

const newItemText = document.getElementById('NewItemInput')
let ElementsDoneToDelete = new Array();

///////////// zlicza elementy które istnieją w liscie
const ItemCounter = () => {
    document.getElementById('itemsLeft-span').innerHTML = document.querySelectorAll('.new-item').length;
}



///////////// dodanie nowego elementu //////////////////

newItemAccept.addEventListener('click', function(){
    document.getElementById('Todo-list').innerHTML += 
    `<div id="" class="new-item">
        <div class="new-item-content">
            <div class="div-checkbox CheckIf"></div>
            <div>${newItemText.value}</div>
        </div>
        <div><img src="./images/icon-cross.svg" class="DeleteElement"></div> 
    </div>
    `
    newItemText.value="";
    ItemCounter();
    AddIdToNewItems();
    ItemDelete(); 
    taskDone();
})

const AddIdToNewItems = () => {
    for ( i = 0; i < document.getElementsByClassName('new-item').length; i++) {
        document.getElementsByClassName('new-item')[i].setAttribute('id', `${i}`)
    }
}
const DeleteIdFromNewItems = () => {
    for ( i = 0; i < document.getElementsByClassName('new-item').length; i++) {
        document.getElementsByClassName('new-item')[i].setAttribute('id', "")
    }
}


///////////// przycisk usun element //////////////////
/*
   
*/


const ItemDelete = () => {
    let ElementToDelete = document.getElementsByClassName('new-item')
    const BttDeleteEl = document.getElementsByClassName('DeleteElement')
    for (let i = 0; i < ElementToDelete.length; i++) {
        BttDeleteEl[i].addEventListener('click', function () {
            document.getElementById(`${i}`).remove()            
            ItemCounter()
        })  
    }
}


///////////// drag drop //////////////////
/*
    
*/
// const DragDrop = () => {
//     const testDragDrop = document.getElementsByClassName('new-item')
//     for (let i = 0; i < testDragDrop.length; i++) {
//         testDragDrop[i].addEventListener('', function () {
            
//             testusuwanie[i].parentNode.removeChild(testusuwanie[i])
//             i--
//             console.log(document.querySelectorAll('.new-item'))
//             ItemCounter();
//         })  
//     }
// }

///////////// przycisk potwierdzajacy wykonanie zadania //////////////////

const taskDone = () => {
    const taskDoneButton = document.getElementsByClassName('div-checkbox')
    for (let i = 1; i < taskDoneButton.length; i++) {
        
        taskDoneButton[i].addEventListener('click', function () {
            taskDoneButton[i].classList.toggle("div-checkbox-done")
        })  
    }
}


//////////// zmiana motywu ////////////
let count = 1
for (let i = -1; i < todoList.length; i++) {
    themeSwitch.addEventListener('click', function(){
        count++
        console.log(count)
        if (count % 2 == 0) {
            this.src="images/icon-sun.svg"
            this.alt="light theme icon"
            document.documentElement.className = "light-theme"
            document.getElementById('monke').style.backgroundImage = `url('./images/bg-mobile-light.jpg')`
            console.log('sun')
        } else {
            this.src="images/icon-moon.svg"
            this.alt="dark theme icon"
            document.documentElement.className = "dark-theme"
            document.getElementById('monke').style.backgroundImage = `url('./images/bg-mobile-dark.jpg')`
            console.log('moon')
        }
        if (count == 10) count = 0
    })
}

///////////////  all active completed /////////////// 
const AllButton = document.getElementById('All-button');
const ActiveToDoButton = document.getElementById('ActiveTodoItems');
const CompletedButton = document.getElementById('CompletedButton');


AllButton.addEventListener('click', function() {
    let testusuwanie = document.getElementsByClassName('new-item')
    AllButton.classList.add('isActive')
    ActiveToDoButton.classList.remove('isActive')
    CompletedButton.classList.remove('isActive')
    for (let i = 0; i < testusuwanie.length; i++) {
        document.getElementsByClassName('new-item')[i].classList.remove('visibility')
    }
})
ActiveToDoButton.addEventListener('click', function() {
    let testusuwanie = document.getElementsByClassName('new-item')
    const CheckIf = document.getElementsByClassName('CheckIf')
    AllButton.classList.remove('isActive')
    ActiveToDoButton.classList.add('isActive')
    CompletedButton.classList.remove('isActive')
    for (let i = 0; i < testusuwanie.length; i++) {
        console.log(testusuwanie.length)
        if (CheckIf[i].classList.contains('div-checkbox-done') != true) {
            document.getElementsByClassName('new-item')[i].classList.remove('visibility')
        } else {
            document.getElementsByClassName('new-item')[i].classList.add('visibility')
        } 
    }
})
CompletedButton.addEventListener('click', function() {
    let testusuwanie = document.getElementsByClassName('new-item')
    const CheckIf = document.getElementsByClassName('CheckIf')
    AllButton.classList.remove('isActive')
    ActiveToDoButton.classList.remove('isActive')
    CompletedButton.classList.add('isActive')
    for (let i = 0; i < testusuwanie.length; i++) {
        if (CheckIf[i].classList.contains('div-checkbox-done') === true) {
            document.getElementsByClassName('new-item')[i].classList.remove('visibility')
        } else {
            document.getElementsByClassName('new-item')[i].classList.add('visibility')
        } 
    }
})


// ///////////// Clear completed //////////////////
    const ClearCompletedBtt = document.getElementById('clear-completed-button')

    ClearCompletedBtt.addEventListener('click', function() {
        
            
        funk()
        
        ElementsDoneToDelete = new Array();
        ItemCounter();
        AddIdToNewItems();
        taskDone()
    })

    const funk = function() {
        const CheckIf = document.getElementsByClassName('CheckIf')
        for (let i = 0; i < document.getElementsByClassName('new-item').length; i++) {
            if (CheckIf[i].classList.contains('div-checkbox-done') === true) {
                ElementsDoneToDelete += (i)
            }
        }
        console.log(ElementsDoneToDelete)
        for (let j = 0; j < ElementsDoneToDelete.length; j++) {
            document.getElementById(`${ElementsDoneToDelete[j]}`).remove()  
            console.log(ElementsDoneToDelete[j])
        } 
    }


    

/*
const ItemDelete = () => {
    let ElementToDelete = document.getElementsByClassName('new-item')
    const BttDeleteEl = document.getElementsByClassName('DeleteElement')
    for (let i = 0; i < ElementToDelete.length; i++) {
        BttDeleteEl[i].addEventListener('click', function () {
            document.getElementById(`${i}`).remove()            
            ItemCounter()
        })  
    }
}
*/



