const favorite = []


//trae api
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        postView(data)
})


function postView(data){

    data.forEach(function(data){
        const elementApi = document.createElement("div")
        elementApi.innerHTML = ` 
        <div class="">
                <figure class="p-5 bg-slate-100 rounded-xl dark:bg-slate-800">
                    <div class="pt-6 space-y-4">
                        <blockquote>
                            <h1 class="text-purple-600 dark:text-purple-300 " id="id-name">
                                ${data.name}
                            </h1>
                        </blockquote>
                        <figcaption class="">
                            <div class="text-sky-500 dark:text-sky-400" id="id-body">
                            ${data.body}
                            </div>
                            <div class="text-slate-700 dark:text-slate-400" id="id-email">
                            ${data.email}
                            </div>
                            <div class="flex items-left justify-end px-3 py-2  dark:border-gray-600">
                                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 ">
                                    <a class="agregarFavorito" onclick="saveFavorite(${data.id})" id="valorPublicacion">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                    </a>
                                </button>
                                <button type="submit" id="${data.id}" class=" agregarlike inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 ">
                                    <a class=""  onclick="like(${data.id})">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </figcaption>
                    </div>
                </figure>
        </div>`
        
        const publi = document.getElementById("elementPublicado")
        if (data.id<=20 && sessionStorage.getItem('userName')){
            publi.append(elementApi)
        }
    })     
}

modeDark()  
function modeDark(){

    const change = document.querySelector('.dark')

    change.addEventListener("click", (e)=> {
        e.preventDefault()
        if(e.isTrusted){
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }
    })
}

modeLight()
function modeLight(){

    const btnlight = document.querySelector('.light')

    btnlight.addEventListener("click", (e)=> {
        e.preventDefault()
        if(e.isTrusted){
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            localStorage.theme = 'light'
        }
})
}

const btnLogin = document.querySelector(".btnLogin")
btnLogin.addEventListener("click", login)

    
const btnCerrar = document.getElementById("btnCerrar")
btnCerrar.addEventListener("click", cerrar)

function cerrar(){
    sessionStorage.removeItem('userName')
    location.reload(true)
}



function login(){
    
    const user = document.getElementById("username").value
    const pass = document.getElementById("password").value

    const resultadoUser = usuarios.find(userSeach => userSeach.name === user)
    const resultadoPass = usuarios.find(userSeach => userSeach.pass === pass)
    
    if(resultadoUser && resultadoPass){
        
        sessionStorage.setItem("userName",JSON.stringify(resultadoUser.name))
        
    }else{
        alert("error de iniciar sesion")
    }
    
}
sesionOpen()
function sesionOpen(){
    
    var data = sessionStorage.getItem('userName');
    
    if(data){
        ocultar('sesion-closed', 'none')
        mostrar(JSON.parse(data))
        walcomeName(JSON.parse(data))
    }else{
        ocultar('btnCerrar', 'none')
        ocultar('favorite', 'none')
    }
}

function mostrar(name){
    const nombre = document.createElement("div")
    nombre.innerHTML = `<span class= "text-white"> ${name} </span>`

    const bName = document.getElementById("nameUser")
    bName.append(nombre)
}

function walcomeName(name){
    const nombre = document.createElement("div")
    nombre.innerHTML = `<p class= "text-black texto-2xl" >Bienvenido a blogD, un placer tenerte  ${name} </p>`
    const bName = document.getElementById("walcomeName")
    bName.append(nombre)
}


function ocultar(id, display){
    div = document.getElementById(id);
    div.style.display = display;
}


function saveFavorite(id){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {

    const resultadoId = data.find(function(dataid){
            return dataid.id === id
        })
    
    favorite.push(resultadoId)
    const saveArrayFavo = JSON.stringify(favorite)
    localStorage.setItem ("favoritos", saveArrayFavo)
    
})
    
}

viewFavorite(favorite)
function viewFavorite(favorite){
    

    favorite = JSON.parse(localStorage.getItem("favoritos"))

    favorite.forEach(function(data){
        const elementApi = document.createElement("div")
        elementApi.innerHTML = `<div class="">
        <figure class="p-5 bg-slate-100 rounded-xl dark:bg-slate-800">
            <div class="pt-6 space-y-4">
                <blockquote>
                    <h1 class="text-purple-600 dark:text-purple-300 " id="id-name">
                        ${data.name}
                    </h1>
                </blockquote>
                <figcaption class="">
                    <div class="text-sky-500 dark:text-sky-400" id="id-body">
                    ${data.body}
                    </div>
                    <div class="text-slate-700 dark:text-slate-400" id="id-email">
                    ${data.email}
                    </div>
                    <button type="submit" id="" class=" agregarlike inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 ">
                                    <a class=""  onclick="delFavorite(${data.id})">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
                                    </svg>
                                </a>
                    </button>
                    
                </figcaption>
            </div>
        </figure>
</div>`
    
    const publi = document.getElementById("publicacion")
    publi.append(elementApi)
})
}

function like(id){

    if(id){
        const like = document.getElementById(id)
        like.classList.add("bg-blue-700")
    }
    
}

function delFavorite(id){

        console.log(id)
}

