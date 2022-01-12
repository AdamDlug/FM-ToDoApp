const todoList = document.getElementById('Todo-list').querySelectorAll('.new-item')
const newItemAccept = document.getElementById('NewItemAccept')
const przyciskActive = document.getElementById('ActiveTodoItems')
const themeSwitch = document.getElementById('theme-switch')

const newItemText = document.getElementById('NewItemInput')



//////////////  dodanie nowego elementu listy  /////////////////
for (let i = -1; i < todoList.length; i++) {
    newItemAccept.addEventListener('click', function(){
        document.getElementById('Todo-list').innerHTML += 
        `<div class="new-item">
            <div class="div-checkbox"></div>
            <div>${newItemText.value}</div>         
        </div>
        `
        newItemText.value=""
    })
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
