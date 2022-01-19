const todoList = document.getElementById('Todo-list').querySelectorAll('.new-item')
const newItemAccept = document.getElementById('NewItemAccept')
const przyciskActive = document.getElementById('ActiveTodoItems')
const themeSwitch = document.getElementById('theme-switch')

const newItemText = document.getElementById('NewItemInput')


///////////// zlicza elementy które istnieją w liscie
const licznikElementow = () => {
    document.getElementById('itemsLeft-span').innerHTML = document.querySelectorAll('.new-item').length;
}



///////////// dodanie nowego elementu //////////////////

newItemAccept.addEventListener('click', function(){

    document.getElementById('Todo-list').innerHTML += 
    `<div class="new-item">
        <div class="new-item-content">
            <div class="div-checkbox"></div>
            <div>${newItemText.value}</div>
        </div>
        <div><img src="./images/icon-cross.svg" class="DeleteElement"></div> 
    </div>
    `
    newItemText.value="";
    licznikElementow();
    ItemDelete(); 
    console.log(document.getElementsByClassName('new-item'))
})


///////////// przycisk usun element //////////////////
/*
    trzeba poprawić usuwanie bo przy zmiennej kolejności usuwania wywala błąd
*/
const ItemDelete = () => {
    let testusuwanie = document.getElementsByClassName('new-item')
    const przyciskUsunEl = document.getElementsByClassName('DeleteElement')
    for (let i = 0; i < przyciskUsunEl.length; i++) {
        przyciskUsunEl[i].addEventListener('click', function () {
            
            testusuwanie[i].parentNode.removeChild(testusuwanie[i])
            i--
            console.log(document.querySelectorAll('.new-item'))
            licznikElementow();
        })  
    }
}



///////////// drag drop //////////////////
/*
    
*/
const DragDrop = () => {
    const testDragDrop = document.getElementsByClassName('new-item')
    for (let i = 0; i < testDragDrop.length; i++) {
        testDragDrop[i].addEventListener('', function () {
            
            testusuwanie[i].parentNode.removeChild(testusuwanie[i])
            i--
            console.log(document.querySelectorAll('.new-item'))
            licznikElementow();
        })  
    }
}

///////////// przycisk potwierdzajacy wykonanie zadania //////////////////

const taskDone = () => {
    for (let i = 0; i < testMouseOver.length; i++) {
        testMouseOver[i].addEventListener('click', function () {
            
            testusuwanie[i].parentNode.removeChild(testusuwanie[i])
            console.log(i)
            console.log(document.querySelectorAll('.new-item'))
            licznikElementow();
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

///////////////  zmiana na ukończone /////////////// 




// ///////////// przycisk usun element //////////////////
// document.getElementById('DeleteElement').addEventListener('click', function() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`pozycja ${i}`)
//     }
// })

// let testArray = new Array();
// testArray[0] = "element 0"
// testArray[1] = "element 1"
// testArray[2] = "element 2"
// testArray[3] = "element 3"

// testArray.forEach(element => {
//     console.log(element)
// });

// testArray.splice(2,1)