const namaPejuang=["Bung Karno","Jess No Limit","Jisoo"]
let pejuangTerpilih = ""

function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}

function showListPejuangDelete(data,target){
    const header = document.createElement("h1");
    header.innerHTML = "List pejuang";
    document.querySelector(target).appendChild(header);
    for(let i = 0; i < namaPejuang.length; i++){
        const pejuang=namaPejuang[i]
        const para = document.createElement("h2");
        para.innerHTML=pejuang
        para.id = "pejuangListDelete";
        document.querySelector(target).appendChild(para);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.id = "pejuangCheck";
        check.value = pejuang
        document.querySelectorAll("#pejuangListDelete")[i].appendChild(check);
    }
}


function showListPejuangAdd(data,target){
    const header = document.createElement("h1");
    header.innerHTML = "List pejuang";
    document.querySelector(target).appendChild(header);
    for(const pejuang of data){
        const para = document.createElement("h2");
        para.innerHTML = pejuang;
        document.querySelector(target).appendChild(para);
    }
}





function deletPejuang(data) {
    let deleteList= document.querySelectorAll("#pejuangCheck")
    let berhasil = false
    for(const pejuangHapus of deleteList){
        if(pejuangHapus.checked){
            const namaPejuang=pejuangHapus.value
            for(let i = 0; i < data.length; i++) {
                if(namaPejuang === data[i]){
                    data.splice(i, 1)
                    berhasil = true
                    break
                }
            }
        }
    }
    console.log(deleteList);
    if(berhasil){
        return "Pejuang berhasil dihapus"
    }
    return "Pejuang gagal dihapus"
}


function tambahPejuang(data,dataTambah){
    let index=data.indexOf(dataTambah)
    if(index===-1){
        data.push(dataTambah)
        return "Nama berhasil ditambah"
    }
    return "Terdapat nama yang duplikat"
}


function bikinPejuangButton (data) {
    const header = document.createElement("h1");
    header.innerHTML = "Pilih Nama Pejuang Mu";
    document.querySelector("#buttonName").appendChild(header);
    for(const pejuang of data){
        const pejuangButton = document.createElement("button");
        pejuangButton.onclick=function(){
            pejuangTerpilih = pejuangButton.innerText
            console.log(pejuangTerpilih);
            document.querySelector("#menu").style.display = "none"
            document.querySelector("#pickName").style.display = "none"
            document.querySelector("#dialogMenu").style.display = "flex" 
            document.querySelector("#dialogMenu").innerHTML = `selamat datang ${pejuangTerpilih}`
        }
        pejuangButton.innerHTML = pejuang;
        console.log(pejuangButton);
        document.querySelector("#buttonName").appendChild(pejuangButton);
    }
}

document.querySelector("#addButton").onclick = function() {
    document.querySelector("#mainMenu").style.display = "none"
    document.querySelector("#menuAdd").style.display = "flex"
    showListPejuangAdd(namaPejuang,"#showAdd") 
}

document.querySelector("#inputAddButton").onclick=function() {
    let pejuang = document.querySelector("#addInput").value
    document.querySelector("#addInput").value = ""
    let result = tambahPejuang(namaPejuang,pejuang)
    document.querySelector("#showAdd").innerHTML = ""
    showListPejuangAdd(namaPejuang,"#showAdd")
    document.querySelector("#isSuccesAdd").innerHTML = result
}

document.querySelector("#inputDeleteButton").onclick = function() {
    let result=deletPejuang(namaPejuang)
    document.querySelector("#showDelete").innerHTML = ""
    showListPejuangDelete(namaPejuang,"#showDelete")
    document.querySelector("#isSuccesDelete").innerHTML = result
}

document.querySelector("#deleteButton").onclick=function() {
    document.querySelector("#mainMenu").style.display = "none"
    document.querySelector("#menuDelete").style.display = "flex"
    showListPejuangDelete(namaPejuang,"#showDelete")
}



document.querySelector("#start").onclick=function() {
    document.querySelector("#mainMenu").style.display="none"
    document.querySelector("#pickName").style.display="flex"
    bikinPejuangButton(namaPejuang)
}

let back=document.querySelectorAll("#backMenu")
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