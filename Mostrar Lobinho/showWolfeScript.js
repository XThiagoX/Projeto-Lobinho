let urlApi = "https://lobinhos.herokuapp.com/wolves"
let IdWolfe = 62

function showWolfe(wolfe){
    // Criação e obtenção de elemtos da página para conter as informações
    let main = document.querySelector('#mainShowWolfe')
    // let main = document.createElement('main')
    // main.setAttribute('id', 'mainShowWolfe')

    let divWolfeName = document.createElement('div')
    divWolfeName.setAttribute('class', 'WolfeName')
    
    let wolfeName = document.createElement('h1')
    wolfeName.innerHTML = wolfe.name
    console.log(typeof(wolfeName))
    
    // let card = document.querySelector('.card') 
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    let container = document.createElement('div')
    container.setAttribute('class','ContainerImgButtons')
    // let container = document.querySelector('.ContainerImgButtons')    
    let imageWolfe = document.createElement('img')
    imageWolfe.setAttribute('class', 'wolfe')
    imageWolfe.setAttribute('src', wolfe.image_url)         

    let divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'buttons')

    let buttonAdopt = document.createElement('button')
    buttonAdopt.setAttribute('class', 'buttonAdopt')
    buttonAdopt.textContent = "ADOTAR"
    let buttonDelete = document.createElement('button')
    buttonDelete.setAttribute('class', 'buttonDelete')
    buttonDelete.textContent = "EXCLUIR"

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
}

async function getMessage(){
    // let descriptionWolfe = document.querySelector('.descriptionText')
    // descriptionWolfe.innerHTML = " "

    let fetchConfig={
        method: "GET"
    }

    urlApi += "/" + IdWolfe

    await fetch(urlApi, fetchConfig)
        .then( anwer => anwer.json()
            .then(wolfe => { showWolfe(wolfe)
                console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })
}

getMessage()


