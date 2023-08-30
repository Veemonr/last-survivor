const namaPejuang=["Bung Karno","Jess No Limit","Jisoo"]
let pejuangTerpilih = ""
function showListPejuang(data,target){
    const header = document.createElement("h1");
    header.innerHTML = "List pejuang";
    document.querySelector(target).appendChild(header);
    for(const pejuang of data){
        const para = document.createElement("h2");
        para.innerHTML = pejuang;
        document.querySelector(target).appendChild(para);
    }
}

function deletPejuang(data,dataDelete) {
    let index = data.indexOf(dataDelete)
    if(index >= 0){
        data.splice(index,1)
        return "Nama berhasil dihapus"
    }
    return "Nama tidak ditemukan"
}

function bikinPejuangButton (data) {
    for(const pejuang of data){
        const pejuangButton = document.createElement("button");
        pejuangButton.onclick=function(){
            pejuangTerpilih = pejuangButton.innerText
            console.log(pejuangTerpilih);
            document.querySelector("#menu").style.display = "none"
            document.querySelector("#pickName").style.display = "none"
            document.querySelector("#mainGame").innerHTML = `selamat datang ${pejuangTerpilih}`
        }
        pejuangButton.innerHTML = pejuang;
        console.log(pejuangButton);
        document.querySelector("#buttonName").appendChild(pejuangButton);
    }
}

document.querySelector("#addButton").onclick = function() {
    document.querySelector("#mainMenu").style.display = "none"
    document.querySelector("#menuAdd").style.display = "flex"
    showListPejuang(namaPejuang,"#showAdd")
}

document.querySelector("#inputAddButton").onclick=function() {
    let pejuang = document.querySelector("#addInput").value
    document.querySelector("#addInput").value = ""
    namaPejuang.push(pejuang)
    document.querySelector("#showAdd").innerHTML = ""
    showListPejuang(namaPejuang,"#showAdd")
    document.querySelector("#isSuccesAdd").innerHTML = "Nama Berhasil Dimasukan"
}

document.querySelector("#inputDeleteButton").onclick = function() {
    let pejuang=document.querySelector("#deleteInput").value
    document.querySelector("#deleteInput").value = ""
    let result=deletPejuang(namaPejuang,pejuang)
    document.querySelector("#showDelete").innerHTML = ""
    showListPejuang(namaPejuang,"#showDelete")
    document.querySelector("#isSuccesDelete").innerHTML = result
}

document.querySelector("#deleteButton").onclick=function() {
    document.querySelector("#mainMenu").style.display = "none"
    document.querySelector("#menuDelete").style.display = "flex"
    showListPejuang(namaPejuang,"#showDelete")
}

document.querySelector("#start").onclick=function() {
    document.querySelector("#mainMenu").style.display="none"
    document.querySelector("#pickName").style.display="flex"
    bikinPejuangButton(namaPejuang)
}

let back=document.querySelectorAll(".backMenu")
for(let i = 0; i < back.length; i++) {
    back[i].onclick=function() {
        document.querySelector("#mainMenu").style.display = "flex"
        document.querySelector("#menuDelete").style.display = "none"
        document.querySelector("#menuAdd").style.display = "none"
        document.querySelector("#pickName").style.display = "none"
        document.querySelector("#showAdd").innerHTML = ""
        document.querySelector("#showDelete").innerHTML = ""
        document.querySelector("#isSuccesDelete").innerHTML = ""
        document.querySelector("#isSuccesAdd").innerHTML = ""
        document.querySelector("#buttonName").innerHTML = ""

    }
}
