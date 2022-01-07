function capturarUrl(){
    var url1 = document.getElementById("url").value;
    let objeto = {url1}
    
    const options = {
        method: "POST",
        headers: new Headers({"content-type":"application/json"}),
        body: JSON.stringify(objeto)
    }

    fetch("http://localhost:3000/encode", options).then((res)=>{
        return res.json()
    }).then((data)=>{
        Object.keys(data).forEach((item)=> {
            let concatenado = "data:application/pdf;base64," + data[item]
            let insercao = `<textarea id="urlGerada" class="titulo">${concatenado}</textarea>`
            document.getElementById("resultado").innerHTML = insercao
        })
    })
}
document.getElementById("btn").addEventListener("click", capturarUrl);
