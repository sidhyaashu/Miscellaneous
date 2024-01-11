let pageValue = document.getElementById("x")
let count = 0;

const next=()=>{
    count++
    pageValue.innerText = count    
}

const onLoad=()=>{
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function(){
        const data = this.responseText
        console.log(data)
    }
    // xhttp.open('GET',`./txt/three.txt`)
    xhttp.open('GET',`https://jsonplaceholder.typicode.com/users`)
    xhttp.send()
}