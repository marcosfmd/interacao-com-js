    let btn = document.getElementById("toCheck")
    btn.addEventListener("click", () => {
            
        let pais = "Brasil"
        let about = document.querySelector("#txtpais").value
        let answer = document.querySelector(".res")

        if(pais == about || about == "Brasileiro"){
            answer.innerHTML = "Que legal, muito bom conhcer você! :)"
        } else {
            answer.innerHTML = "<p></p>Que legal, voce e Estrangeiro, e bom conhecer pessoas de outros pais </p> <p>Seja bem vindo! </p>"
        }
    })