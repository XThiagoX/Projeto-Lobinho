let urlApi = "https://lobinhos.herokuapp.com/wolves/"
let IdWolfe = 293

// CRIAÇÃO E ATRIBUIÇÃO DAS CLASSES AOS BOÕES (ADOTAR E EXCLUIR)
let buttonAdopt = document.createElement('button')
buttonAdopt.setAttribute('class', 'buttonAdopt')
buttonAdopt.textContent = "ADOTAR"

let buttonDelete = document.createElement('button')
buttonDelete.setAttribute('class', 'buttonDelete')
buttonDelete.textContent = "EXCLUIR"


function showWolfe(wolfe){
    // Criação e obtenção de elemtos da página para conter as informações
    let main = document.querySelector('#mainShowWolfe')    

    let divWolfeName = document.createElement('div')
    divWolfeName.setAttribute('class', 'WolfeName')
    
    let wolfeName = document.createElement('h1')
    wolfeName.innerHTML = wolfe.name        

    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    let container = document.createElement('div')
    container.setAttribute('class','ContainerImgButtons')
   
    let imageWolfe = document.createElement('img')
    imageWolfe.setAttribute('class', 'wolfe')
    imageWolfe.setAttribute('src', wolfe.image_url)         

    let divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'buttons')


    let divDescription = document.createElement('div')
    divDescription.setAttribute('class', 'descriptionText')
    let descriptionText = document.createElement('p')
    descriptionText.innerHTML = wolfe.description

    // Montando o bloco de elementos com as informações
    divWolfeName.append(wolfeName)    
    main.append(divWolfeName)

    container.append(imageWolfe)

    divButtons.append(buttonAdopt)
    divButtons.append(buttonDelete)
    container.append(divButtons)
    card.append(container)

    divDescription.append(descriptionText)
    card.append(divDescription)
    main.append(card)

    buttonAdopt.addEventListener('click', e => { adoptWolf(wolfe) })
}


async function getMessage(){    
    let fetchConfig={
        method: "GET"
    }

    urlApi += "/" + IdWolfe

    await fetch(urlApi, fetchConfig)
        .then( answer => answer.json()
            .then(wolfe => { showWolfe(wolfe)
                console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })      
}

// FUNÇÕES DOS BOTÕES
function adoptWolf(){
    alert('ok')    

    let fetchBody = {        
        adopter_name:  adopter_name,
        adopter_age:  adopter_age,
        adopter_email: adopter_email                    
    }

    let fetchConfig = {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(fetchBody)
    }

    fetch(urlApi,fetchConfig)
        .then(answer => alert('Lobo Adotado')
            .then( wolfe => { wolfe.adopted = true   
                 alert('Lobo Adotado')  })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })
        console.log(wolfe)
}

buttonDelete.addEventListener('click', e => {

    let fetchConfig = {
        method: "DELETE"
    }

    fetch(urlApi,fetchConfig)
        .then(answer => alert('Lobo Excluido')
            .then( wolfe => { alert('Lobo Excluido'), console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })
    
    // * Após a exclusão redirecionar usuário
})

getMessage()


