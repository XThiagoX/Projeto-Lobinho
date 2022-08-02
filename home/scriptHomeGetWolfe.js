let urlApi = "https://lobinhos.herokuapp.com/wolves"
let IdWolfe = 171

function showWolfe(wolfe){
    let section = document.querySelector(".example")
    let containerExample = document.createElement('div')
    containerExample.setAttribute('class', 'container containerExample')

    let exampleTitleContainer = document.querySelector(".exampleTitleContainer")
    let exampleTitle = document.querySelector(".exampleTitle")
    
    let line1 = document.createElement('div')
    line1.setAttribute('class', 'linha1 mBt100')

    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'exampleImgContainer')

    let image = document.createElement('img')
    image.setAttribute('class', 'exampleImg')
    image.setAttribute('src', wolfe.image_url) 

    let infoContent = document.createElement('div')
    infoContent.setAttribute('class', 'exampleInfoContent')
    
    let NameContaine = document.createElement('div')
    NameContaine.setAttribute('class', 'exampleNameContainer')
    
    let name = document.createElement('div')
    name.setAttribute('class', 'exampleName')
    name.innerHTML = wolfe.name

    let ageContainer = document.createElement('div')
    ageContainer.setAttribute('class', 'exampleAgeContainer')
    
    let age = document.createElement('div')
    age.setAttribute('class', 'exampleAge')
    age.innerHTML = wolfe.age

    let ContainerDescriptionText = document.createElement('div')
    ContainerDescriptionText.setAttribute('class', 'exampleTextContainer')
    
    let descriptionText = document.createElement('div')
    descriptionText.setAttribute('class', 'exampleText mBt70')
    descriptionText.innerHTML = wolfe.description

    // Atribuição dos blocos
    imageContainer.append(image)
    line1.append(imageContainer)

    NameContaine.append(name)
    infoContent.append(NameContaine)

    ageContainer.append(age)
    infoContent.append(ageContainer)

    ContainerDescriptionText.append(descriptionText)
    infoContent.append(ContainerDescriptionText)
    
    line1.append(infoContent)

    containerExample.append(line1)
    section.append(containerExample)
    
}

async function getMessage(){   

    let fetchConfig = {
        method: "GET"
    }

    urlApi += "/" + IdWolfe
    console.log(urlApi)

    await fetch(urlApi, fetchConfig)
        .then( answer => answer.json()
            .then(wolfe => { showWolfe(wolfe)
                console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })      
}

getMessage()