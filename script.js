const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    
    if(inputValue.value === "" || inputDate.value === ""){
        alert("Nama tugas dan tanggal harus diisi!");
        return;
    }

    const listbaru = document.createElement("li");
    const span  =document.createElement("span");
    span.innerHTML = inputValue.value;
    
    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputValue.focus();

});