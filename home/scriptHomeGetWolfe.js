const urlApi = "https://lobinhos.herokuapp.com/wolves"
let IdWolfe = 95

function showWolfe(wolfe){
    let section = document.querySelector(".example")
    let containerExample = document.querySelector(".containerExample")

    let exampleTitleContainer = document.querySelector(".exampleTitleContainer")
    let exampleTitle = document.querySelector(".exampleTitle")
    exampleTitle.innerHTML = wolfe.name
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