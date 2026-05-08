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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listbaru.appendChild(checkbox);
    
    const container = document.createElement("div");
    containerTeks.style.flex = "1";

    const spanTugas  = document.createElement("span");
    span.innerHTML = inputValue.value;

    const spanTanggal = document.createElement("small");
    spanTanggal.innerHTML = ` (${inputDate.value}) `;
    spanTanggal.style.display = "block";

    const labelStatus = document.createElement("span");
    labelStatus.innerHTML = "Progress";
    labelStatus.className = "status-label";
    listbaru.appendChild(labelStatus);

    checkbox.addEventListener("change", function(){
        if(this.checked){
            labelStatus.innerHTML = "Done";
            labelStatus.className = "status-done";
        } else {
            labelStatus.innerHTML = "Progress";
            labelStatus.className = "status-progress";
        }
    });

    container.appendChild(spanTugas);
    container.appendChild(spanTanggal);
    listbaru.appendChild(container);
    
    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputDate.value = "";
    inputValue.focus();

});