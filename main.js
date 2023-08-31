const namaPejuang=["Bung Karno","Jess No Limit","Jisoo"]
let pejuangTerpilih = ""
let dialogData=[]

function reAssign(){
    dialogData={opening:[{
        pesan:"Kisah dimulai di sebuah desa kecil bernama Merdeka, yang terletak di tengah hutan yang subur.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Kamu adalah seorang pejuang muda yang bercita-cita membebaskan tanah air dari penjajahan.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Saat fajar menyingsing, kamu mengenakan pakaian perjuanganmu dan memegang pedang pusaka yang berkilauan.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Di tengah hutan, kamu menemui markas pasukan penjajah yang dipimpin oleh Dimitrije van der Berg, seorang perwira Belanda yang kejam.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Dengan mata yang tajam, dia menatapmu seolah meremehkan niatmu.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Kalian terlibat dalam pertarungan sengit, di mana kamu berhasil mengalahkannya dan membebaskan beberapa tahanan yang ditahan.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:`“Inlander, beraninya kau muncul di hadapan ku?” `,
        type:"villianDialog",
        actor:"Dimitrije van der Berg",
            },
            {
        pesan:`“Maju dań matilah!!!” `,
        type:"villianDialog",
        actor:"Dimitrije van der Berg",
            }
        ],
        setelahBoss1:[
            {
        pesan:"Pada akhirnya aku mati di tangan pejuang, bukan hal memalukan....",
        type:"villianDialog",
        actor:"Dimitrije van der Berg",
            },
            {
        pesan:"Perjalananmu melanjutkan ke kota yang diduduki oleh pasukan Iva Nakamura, seorang jenderal Jepang yang licik.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Bangunan-bangunan di kota ini dipenuhi bendera merah matahari, mengingatkanmu pada penjajahan baru.",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Kamu harus menggunakan kecerdikanmu untuk menjebaknya dalam permainan pikiran sebelum akhirnya menghadapinya dalam pertarungan hebat",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Setelah kemenanganmu, semangat para penduduk mulai membara!",
        type:"characterDialog",
        actor:"Narator",
            },
            {
        pesan:"Setelah berhasil mengalahkan si Belanda itu, kau pikir kau bisa mengalahkan ku??? HAHAHA maju dan matilah !!",
        type:"villianDialog",
        actor:"Iva Nakamura",
            },
        ],
        setelahBoss2:[
            {
                pesan:"Furu… sa… to ni kaere..",
                type:"villianDialog",
                actor:"Iva Nakamura",
            },
            {
                pesan:"Jejakmu mengarah ke gunung suci, tempat pengkhianat bangsa yang dulu berdiri di pihakmu kini bersekutu dengan musuh-musuh penjajah.",
                type:"characterDialog",
                actor:pejuangTerpilih,
            },
            {
                pesan:"Nunir, seorang yang dulunya kau anggap sahabat, kini telah berbalik menjadi penghianat.",
                type:"characterDialog",
                actor:pejuangTerpilih,
            },
            {
                pesan:"Dia mengejarmu dengan dendam dalam hati, dan kamu harus menghadapi dualitas emosi saat menghadapinya.",
                type:"characterDialog",
                actor:pejuangTerpilih,
            },
            {
                pesan:"Setelah pertarungan yang penuh emosi, kamu berhasil mengalahkannya.",
                type:"characterDialog",
                actor:pejuangTerpilih,
            },
            {
                pesan: `Seharusnya kau menjalani hidup yang tenang di desa saja ${pejuangTerpilih} aku menyayangkan kita harus bertempur`,
                type:"villianDialog",
                actor:"Nunir",
            },
            {
                pesan: "Kau seharusnya tau, seberapa hebatnya para penjajah ini",
                type:"villianDialog",
                actor:"Nunir",
            },
            {
                pesan: "Kenapa kau harus membuang nyawa mu demi orang orang yang bahkan tidak mengenal dan bahkan tidak tau apa yang telah kau lakukan sejauh ini untuk mereka",
                type:"villianDialog",
                actor:"Nunir",
            },
            {
                pesan: "Tapi jika inilah akhirnya, biarkan aku yang mengakhiri hidup mu dengan pedangku",
                type:"villianDialog",
                actor:"Nunir",
            },
            {
                pesan: "dan biarkan aku tetap menjadi orang yang akan selalu mengenangmu setelah kematianmu, maju dan matilah sahabat ku!!!",
                type:"villianDialog",
                actor:"Nunir",
            },
        ],
        setelahBoss3:[
            {
                pesan:`Kau tau ${pejuangTerpilih}, mati ditanganmu ternyata tidak terlalu buruk, uhuuuukkk… Maafkan aku, semoga perjuangan kalian terus berlanjut~
                Maafff…..`,
                type:"villianDialog",
                actor:"Nunir",
            },
            {
                pesan:'Dengan ketekunan dan semangat yang tak tergoyahkan, kita akhirnya mampu mengusir para penjajah',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
            {
                pesan:'Desa Merdeka yang dulu sunyi dan tak berdaya, kini bersinar dengan semangat kemerdekaan yang meriah.',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
            {
                pesan:'Rakyat bersatu dan bersama-sama membangun tanah air yang bebas dari penjajahan, mengisahkan kisah pahlawan yang tak pernah menyerah.',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
            {
                pesan:'Dalam perjalana kita yang penuh liku ini, kita telah membuktikan bahwa semangat dan tekad adalah senjata yang paling ampuh.',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
            {
                pesan:'Kisah perjuangan kita akan menjadi inspirasi bagi generasi mendatang, mengajarkan nilai-nilai keberanian dan cinta tanah air.',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
            {
                pesan:'The End',
                type:"characterDialog",
                actor: pejuangTerpilih,
            },
        ],
        kalahBoss1:[
            {
                pesan:"Pribumi lemah, mencoba menantang ku??? HAHAHA SUNGGUH BODOHHHH!!!",
                type:"villianDialog",
                actor:"Dimitrije van der Berg",
            }
        ],
        kalahBoss2:[
            {
                pesan:  "Warera ga shouri o tataeyou, Dai Nippon!!",
                type:   "villianDialog",
                actor:  "Iva Nakamura",
            }
        ],
        kalahBoss3:[
            {
                pesan:"aku sudah tahu bahwa hal ini akan terjadi, istirahatlah dengan tenang sahabat ku, sampai berjumpa lagi nanti",
                type:"villianDialog",
                actor:"Nunir",
            }
        ]
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let pesanKe=0
let kondisi="opening"

async function jalanDialog(){
    document.querySelector("#bottomDialog").removeEventListener("click",jalanDialog)
    console.log(pejuangTerpilih);
    const dialog=dialogData[kondisi][pesanKe]
    if(!dialog){
        if(kondisi==="setelahBoss3"){
            document.querySelector("#dialogMenu").style.display="none"
            document.querySelector("#mainMenu").style.display="flex"
            document.querySelector("#menu").style.display="block"
            window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
        pesanKe=0
        const checkKalah=kondisi.substring(0,5)
        console.log(checkKalah);
        if(checkKalah==="kalah"){
            document.querySelector("#dialogMenu").style.display="none"
            document.querySelector("#menuKalah").style.display="flex"
            return 
        }
        document.querySelector("#dialogMenu").style.display="none"
        document.querySelector("#mainGame").style.display="flex"
        document.querySelector(".bar-enemy").style.width="100%"
        document.querySelector(".bar-player").style.width="100%"

        document.querySelector(".p-player").innerText=pejuangTerpilih
        if(kondisi==="opening"){
            document.querySelector(".stage1").innerText="STAGE 1"
            document.querySelector(".p-enemy").innerText="Dimitrije van der Berg"
        }
        if(kondisi==="opening"){
            document.querySelector(".stage1").innerText="STAGE 1"
            document.querySelector(".p-enemy").innerText="Dimitrije van der Berg"
        }
        else if(kondisi==="setelahBoss1"){
            document.querySelector(".stage1").innerText="STAGE 2"
            document.querySelector(".p-enemy").innerText="Iva Nakamura"
        }
        else if(kondisi==="setelahBoss2"){
            document.querySelector(".stage1").innerText="STAGE 3"
            document.querySelector(".p-enemy").innerText="Nunir"
        }
        
        return 
    }
    const type=dialog.type
    const character=dialog.actor
    const pesanLengkap=dialog.pesan
    if(type==="characterDialog"){
        document.querySelector("#characterDialogChar").style.opacity=1
        document.querySelector("#villianDialogChar").style.opacity=0
    }
    else{
        document.querySelector("#characterDialogChar").style.opacity=0
        document.querySelector("#villianDialogChar").style.opacity=1
    }
    if(character=== pejuangTerpilih) {
        document.querySelector(`#${type}Char`).src="img/pejuang.png"
    }
    else if(character=== "Dimitrije van der Berg") {
        document.querySelector(`#${type}Char`).src="img/jendralBelanda.jpg"
    }
    else if (character=== "Iva Nakamura") {
        document.querySelector(`#${type}Char`).src="img/jendralJepang.jpg"
    }
    else if (character=== "Nunir") {
        document.querySelector(`#${type}Char`).src="img/penghianat.jpg"
    }
    else if (character === "Narator") {
        document.querySelector(`#${type}Char`).src="img/narator.png"
    }
    document.querySelector("#isiDialog").innerText=""
    document.querySelector("#nameDialog").innerHTML=character
    const percakapan = document.querySelector("#isiDialog")
    for(let i=0;i<pesanLengkap.length;i++){
        const pesanHuruf=pesanLengkap[i]
        percakapan.innerHTML+=pesanHuruf
        await sleep(10)
    }
    pesanKe++
    document.querySelector("#bottomDialog").addEventListener("click", jalanDialog)
}

document.querySelector("#retryButton").onclick=function(){
    kondisi="opening"
    document.querySelector("#menu").style.display = "block"
    document.querySelector("#mainMenu").style.display = "flex"
    document.querySelector("#menuKalah").style.display = "none"
}
//!---------------------------------------------------------------------------------------
function menangGame(){
    document.querySelector("#mainGame").style.display = "none"
    document.querySelector("#dialogMenu").style.display = "block"
    document.querySelector("#bottomDialog").addEventListener("click", jalanDialog)
    if(kondisi==="opening"){
        kondisi="setelahBoss1"
    }
    else if(kondisi==="setelahBoss1"){
        kondisi="setelahBoss2"
    }
    else if(kondisi==="setelahBoss2"){
        kondisi="setelahBoss3"
    }
    jalanDialog()
}
//!---------------------------------------------------------------------------------------------
function kalahGame(){
    document.querySelector("#mainGame").style.display = "none"
    document.querySelector("#dialogMenu").style.display = "block"
    document.querySelector("#bottomDialog").addEventListener("click", jalanDialog)
    if(kondisi==="opening"){
        kondisi="kalahBoss1"
    }
    else if(kondisi==="setelahBoss1"){
        kondisi="kalahBoss2"
    }
    else if(kondisi==="setelahBoss2"){
        kondisi="kalahBoss3"
    }
    jalanDialog()
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
    document.querySelector("#buttonName").innerHTML=""
    const header = document.createElement("h1");
    header.innerHTML = "Pilih Nama Pejuang Mu";
    document.querySelector("#buttonName").appendChild(header);
    for(const pejuang of data){
        const pejuangButton = document.createElement("button");
        pejuangButton.onclick=function(){
            pejuangTerpilih = pejuangButton.innerText
            reAssign()
            console.log(pejuangTerpilih);
            document.querySelector("#menu").style.display = "none"
            document.querySelector("#pickName").style.display = "none"
            document.querySelector("#dialogMenu").style.display = "block" 
            document.querySelector("#bottomDialog").addEventListener("click", jalanDialog)
            jalanDialog()
            // document.querySelector("#dialogMenu").innerHTML = `selamat datang ${pejuangTerpilih}`
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


//! =========================================================================================

function checkMenang(){
    if(document.querySelector(".bar-enemy").style.width==="0%"){
        menangGame()
        return 
    }
    if(document.querySelector(".bar-player").style.width==="0%"){
        kalahGame()
    }
}

document.querySelector("#toggleButton").addEventListener("click",buttonAttack)
async function buttonAttack() {
    // script.js
    const toggleButton = document.getElementById("toggleButton");
    const playerChar = document.getElementById("playerChar");
    const playerCharAttack = document.getElementById("playerCharAttack");
    const enemyCharDeath = document.getElementById("enemyCharDeath");
    const audioAttackPlayer = document.getElementById("audioAttackPlayer");

    playerCharAttack.style.left = "400px";
    playerCharAttack.style.bottom = "5px";
    playerChar.classList.toggle("hidden");
    playerCharAttack.classList.toggle("hidden");
    audioAttackPlayer.play();

    setTimeout(() => {
      playerChar.classList.toggle("hidden");
      playerCharAttack.classList.toggle("hidden");
    }, 1000);


    if(!document.querySelector(".bar-enemy").style.width){
    document.querySelector(".bar-enemy").style.width="100%"
    }
    let hBarTotal=document.querySelector(".bar-enemy").style.width
    hBarTotal=hBarTotal.substring(0,(hBarTotal.length-1))
    hBarTotal=Number(hBarTotal)
    let hBar=document.querySelector(".health-bar-enemy")
    let barValue=hBar.getAttribute("data-value")
    let damage=(Math.floor(Math.random()*200))+100
    barValue=Number(barValue)
    let hitWidth = ((damage / barValue) * 100);
    hitWidth=hBarTotal-hitWidth
    console.log(hitWidth);
    if(hitWidth<=0){
        hitWidth=0
    }
    hitWidth+="%"
    document.querySelector(".bar-enemy").style.width=hitWidth

    await sleep(1100)
    buttonAttackEnemy()
    await sleep(1100)
  }
  async function buttonHeal() {
    // script.js
    const toggleButton1 = document.getElementById("toggleButton1");
    const playerChar = document.getElementById("playerChar");
    const playerCharHeal = document.getElementById("playerCharHeal");
    const audioHealPlayer = document.getElementById("audioHealPlayer");

    playerCharHeal.style.bottom = "0px";
    playerChar.classList.toggle("hidden");
    playerCharHeal.classList.toggle("hidden");
    audioHealPlayer.play();
    setTimeout(() => {
      playerChar.classList.toggle("hidden");
      playerCharHeal.classList.toggle("hidden");
    }, 1000);

    if(!document.querySelector(".bar-player").style.width){
        document.querySelector(".bar-player").style.width="100%"
        }
    let hBarTotal=document.querySelector(".bar-player").style.width
    hBarTotal=hBarTotal.substring(0,(hBarTotal.length-1))
    hBarTotal=Number(hBarTotal)
    let hitWidth = hBarTotal+40
    if(hitWidth>=100){
        hitWidth=100
    }
    hitWidth+="%"
    document.querySelector(".bar-player").style.width=hitWidth
    await sleep(1100)
    buttonAttackEnemy()
    await sleep(1100)
  }
  async function buttonDeff() {
    // script.js
    const toggleButton2 = document.getElementById("toggleButton2");
    const playerChar = document.getElementById("playerChar");
    const playerCharDeff = document.getElementById("playerCharDeff");
    playerCharDeff.style.bottom = "0px";

    playerChar.classList.toggle("hidden");
    playerCharDeff.classList.toggle("hidden");

    setTimeout(() => {
      playerChar.classList.toggle("hidden");
      playerCharDeff.classList.toggle("hidden");
    }, 1000);
    await sleep(1100)
    buttonAttackEnemy()
    await sleep(1100)
  }


  async function buttonAttackEnemy() {
    // script.js
    const toggleButton3 = document.getElementById("toggleButton3");
    const enemyChar = document.getElementById("enemyChar");
    const enemyCharAttack = document.getElementById("enemyCharAttack");
    enemyCharAttack.style.bottom = "0px";
    enemyCharAttack.style.left = "400px";

    enemyChar.classList.toggle("hidden");
    enemyCharAttack.classList.toggle("hidden");

    setTimeout(() => {
      enemyChar.classList.toggle("hidden");
      enemyCharAttack.classList.toggle("hidden");
    }, 1000);


    if(!document.querySelector(".bar-player").style.width){
        document.querySelector(".bar-player").style.width="100%"
        }
    let hBarTotal=document.querySelector(".bar-player").style.width
    hBarTotal=hBarTotal.substring(0,(hBarTotal.length-1))
    hBarTotal=Number(hBarTotal)
    let hBar=document.querySelector(".health-bar-player")
    let barValue=hBar.getAttribute("data-value")
    let damage=(Math.floor(Math.random()*200))+100
    barValue=Number(barValue)
    let hitWidth = ((damage / barValue) * 100);
    hitWidth=hBarTotal-hitWidth
    console.log(hitWidth);
    if(hitWidth<=0){
        hitWidth=0
    }
    hitWidth+="%"
    document.querySelector(".bar-player").style.width=hitWidth
    checkMenang()
  }

  async function buttonInstantKill(){
    document.querySelector(".bar-enemy").style.width="0%"
    await sleep(1000)
    checkMenang()
  }