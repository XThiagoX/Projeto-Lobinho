let urlApi = "https://lobinhos.herokuapp.com/wolves"
let idWolfe = 300

async function putAdopterInformation(adopterName, adopterAge, adopterEmail){
    let fetchBody = {
        adopter_name: adopterName,
        adopter_age : adopterAge,
        adopter_email : adopterEmail             
    }

console.log(adopterName, adopterAge, adopterEmail)

    let fetchConfig = {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(fetchBody)
    }

    urlApi += "/" + idWolfe 
    console.log(urlApi)
    await fetch(urlApi, fetchConfig)
        .then( answer =>  answer.json() 
            .then(resp => { alert("SUCESSO! Seu lobo foi cadastrado.", resp), console.log(resp) })
            .catch(error => { alert("ERRO! Houve algum problema, tente novamente mais tarde."),console.log(error)}))
        .catch(error => { console.log(error) }) 
}

let adopterName = document.querySelector("#name").value
let adopterAge = document.querySelector("#age").value
let adopterEmail = document.querySelector("#email").value


let buttonAdopt = document.querySelector(".adopt")
buttonAdopt.addEventListener('click', e => putAdopterInformation(adopterName, adopterAge, adopterEmail))
