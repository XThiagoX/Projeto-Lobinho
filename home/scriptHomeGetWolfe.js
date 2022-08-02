let urlApi = "https://lobinhos.herokuapp.com/wolves"
let IdWolfe = 171

// ELEMENTO REFERÊNCIA DA PÁGINA PARA COMTAGEM DO BLOCO COM INF DOS LOBOS
let section = document.querySelector(".example")
let containerExample = document.createElement('div')
containerExample.setAttribute('class', 'container containerExample')

// FUNÇÕES DE MONTAGEM DOS BLOOS
// Primeiro Lobo
function showFirstWolfe(wolfe){
    // Criação e atribução de classes aos elementos dinâmicos de apresentação de dois lobos                
    let firtWolfe = document.createElement('div')
    firtWolfe.setAttribute('class', 'linha1 mBt100')

    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'exampleImgContainer')

    let image = document.createElement('img')
    image.setAttribute('class', 'exampleImg')
    image.setAttribute('src', wolfe.image_url) 

    let infoContent = document.createElement('div')
    infoContent.setAttribute('class', 'exampleInfoContent')
    
    let NameContainer = document.createElement('div')
    NameContainer.setAttribute('class', 'exampleNameContainer')
    
    let name = document.createElement('h3')
    name.setAttribute('class', 'exampleName')
    name.innerHTML = wolfe.name

    let ageContainer = document.createElement('div')
    ageContainer.setAttribute('class', 'exampleAgeContainer')
    
    let age = document.createElement('p')
    age.setAttribute('class', 'exampleAge')
    age.innerHTML = wolfe.age

    let ContainerDescriptionText = document.createElement('div')
    ContainerDescriptionText.setAttribute('class', 'exampleTextContainer')
    
    let descriptionText = document.createElement('p')
    descriptionText.setAttribute('class', 'exampleText mBt70')
    descriptionText.innerHTML = wolfe.description

    // Atribuição/Montagem dos blocos    
    imageContainer.append(image)
    firtWolfe.append(imageContainer)

    NameContainer.append(name)
    infoContent.append(NameContainer)

    ageContainer.append(age)
    infoContent.append(ageContainer)

    ContainerDescriptionText.append(descriptionText)
    infoContent.append(ContainerDescriptionText)
    
    firtWolfe.append(infoContent)

    containerExample.append(firtWolfe)
    section.append(containerExample)      
}
    
//Segundo lobo
function showSecondWolfe(wolfe){
// Criação e atribução de classes aos elementos dinâmicos de apresentação de dois lobos                
    let secondWolfe = document.createElement('div')
    secondWolfe.setAttribute('class', 'linha2')

    let imageContainer2 = document.createElement('div')
    imageContainer2.setAttribute('class', 'exampleImgContainer')

    let imageSecondWolfe = document.createElement('img')
    imageSecondWolfe.setAttribute('class', 'exampleImg2')
    imageSecondWolfe.setAttribute('src', wolfe.image_url) 

    let infoContent2 = document.createElement('div')
    infoContent2.setAttribute('class', 'exampleInfoContent')
    
    let NameContainer2 = document.createElement('div')
    NameContainer2.setAttribute('class', 'exampleNameContainer')
    
    let nameSecondWolfe = document.createElement('h3')
    nameSecondWolfe.setAttribute('class', 'exampleName2')
    nameSecondWolfe.innerHTML = wolfe.name

    let ageContainer2 = document.createElement('div')
    ageContainer2.setAttribute('class', 'exampleAgeContainer')
    
    let ageSecondWolfe = document.createElement('p')
    ageSecondWolfe.setAttribute('class', 'exampleAge2')
    ageSecondWolfe.innerHTML = wolfe.age

    let ContainerDescriptionText2 = document.createElement('div')
    ContainerDescriptionText2.setAttribute('class', 'exampleTextContainer2')
    
    let descriptionTextSecondWolfe = document.createElement('p')
    descriptionTextSecondWolfe.setAttribute('class', 'exampleText2')
    descriptionTextSecondWolfe.innerHTML = wolfe.description
    
    // Atribuição/Montagem dos blocos 
    imageContainer2.append(imageSecondWolfe)
    secondWolfe.append(imageContainer2)

    NameContainer2.append(nameSecondWolfe)
    infoContent2.append(NameContainer2)

    ageContainer2.append(ageSecondWolfe)
    infoContent2.append(ageContainer2)

    ContainerDescriptionText2.append(descriptionTextSecondWolfe)
    infoContent2.append(ContainerDescriptionText2)
    
    secondWolfe.append(infoContent2)

    containerExample.append(secondWolfe)
    section.append(containerExample)      
}

// FUNÇÕES DE REQUEST GET PARA A API
async function getFirstWolfe(){   

    let fetchConfig = {
        method: "GET"
    }

    urlApi += "/" + IdWolfe
    console.log(urlApi)

    await fetch(urlApi, fetchConfig)
        .then( answer => answer.json()
            .then(wolfe => { showFirstWolfe(wolfe)
                console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })      
}

async function getSecondWolfe(){  
    IdWolfe = 147
    urlApi = "https://lobinhos.herokuapp.com/wolves" 
    urlApi += "/" + IdWolfe
    console.log(urlApi)

    let fetchConfig = {
        method: "GET"
    }
   
    await fetch(urlApi, fetchConfig)
        .then( answer => answer.json()
            .then(wolfe => { showSecondWolfe(wolfe)
                console.log(wolfe) })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })      
}

// CHAMDA DAS FUNÇÕES
getFirstWolfe()
getSecondWolfe()