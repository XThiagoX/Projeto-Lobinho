const urlApi = "https://lobinhos.herokuapp.com/wolves"

async function postWolfInformation(wolfeName, wolfeAge, wolfeImage, wolfeDescription){

    let fetchBody = {
        name: wolfeName,
        age : wolfeAge,
        image_url : wolfeImage,
        description : wolfeDescription        
    }

    let fetchConfig = {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(fetchBody)
    }

    await fetch(urlApi, fetchConfig)
        .then( answer =>  answer.json() 
            .then(resp => { alert("SUCESSO! Seu lobo foi cadastrado.") })
            .catch(error => { alert("ERRO! Houve algum problema, tente novamente mais tarde.", error ) 
                console.log(error) }))
        .catch(error => { console.log(error) }) 
}

let wolfeName = document.querySelector(".inputWolfeName").value
let wolfeAge = document.querySelector(".inputWolfeAge").value
let wolfeImage = document.querySelector(".inputlinkPhoto").value
let wolfeDescription = document.querySelector(".textareaDescription").value

let buttonSave = document.querySelector(".buttonSave")
buttonSave.addEventListener('click', e => postWolfInformation(wolfeName, wolfeAge, wolfeImage, wolfeDescription))
