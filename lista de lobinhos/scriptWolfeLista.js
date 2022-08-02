const urlApi = "https://lobinhos.herokuapp.com/wolves"
let IdWolfe = 171

// ELEMENTO REFERÊNCIA DA PÁGINA PARA COMTAGEM DO BLOCO COM INF DOS LOBOS
let section = document.querySelector(".example")
let containerExample = document.createElement('div')
containerExample.setAttribute('class', 'container containerExample')

function transferOfShowLittelWolfePage(wolfe){
    console.log(wolfe)
    window.location.href = "../Mostrar_Lobinho/showWolfePage.html"    
    console.log(wolfe)
        
}

// FUNÇÕES
function showWolfe(wolfe){
    let firtWolfe = document.createElement('div')
    firtWolfe.setAttribute('class', 'linha1 mBt100Lg')

    let imageContainer = document.createElement('div')
    imageContainer.setAttribute('class', 'exampleImgContainer')

    let buttonShowWolfe = document.createElement('a')
    buttonShowWolfe.setAttribute('class', 'showWolfe')

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
    buttonShowWolfe.append(image) 
    imageContainer.append(buttonShowWolfe)
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

    buttonShowWolfe.addEventListener('click', e => { transferOfShowLittelWolfePage(wolfe) })
}

function showWolfeReverse(wolfe){
    let secondWolfe = document.createElement('div')
    secondWolfe.setAttribute('class', 'linha2 mBt100Lg')

    let imageContainer2 = document.createElement('div')
    imageContainer2.setAttribute('class', 'exampleImgContainer')

    let buttonShowWolfe = document.createElement('a')
    buttonShowWolfe.setAttribute('class', 'showWolfe')

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
    buttonShowWolfe.append(imageSecondWolfe)
    imageContainer2.append(buttonShowWolfe)
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
    
    buttonShowWolfe.addEventListener('click', e => { transferOfShowLittelWolfePage(wolfe.id) })
}

// FUNÇÕES DE REQUEST GET PARA A API
async function getWolfe(){   
    let i = 1

    let fetchConfig = {
        method: "GET"
    }       

    fetch(urlApi, fetchConfig)
        .then( reply => reply.json()
            .then( answer => { 
                answer.forEach( wolfe => {                    
                    if (i % 2 != 0){
                        showWolfe(wolfe)
                    }
                    else{
                        showWolfeReverse(wolfe)
                    }
                    i++
                })
             })
            .catch(error => { console.log(error) }))
        .catch(error => { console.log(error) })      
}

// CHAMDA DAS FUNÇÕES
getWolfe()


