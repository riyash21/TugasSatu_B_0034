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
    
    const containerTeks = document.createElement("div");
    containerTeks.style.flex = "1";

    const spanTugas  = document.createElement("span");
    spanTugas.innerHTML = inputValue.value;

    const spanTanggal = document.createElement("small");
    spanTanggal.innerHTML = ` (${inputDate.value}) `;
    spanTanggal.style.display = "block";

    containerTeks.appendChild(spanTugas);
    containerTeks.appendChild(spanTanggal);
    listbaru.appendChild(containerTeks);

    const labelStatus = document.createElement("span");
    labelStatus.innerHTML = "Progress";
    labelStatus.className = "status-label";
    listbaru.appendChild(labelStatus);

    checkbox.addEventListener("change", function(){
        if(this.checked){
            labelStatus.innerHTML = "Done";
            labelStatus.className = "status-done";
            containerTeks.classList.add("task-done");
        } else {
            labelStatus.innerHTML = "Progress";
            labelStatus.className = "status-progress";
            containerTeks.classList.remove("task-done");
        }
    });

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.className = "btn-edit";

    btnEdit.onclick = function(){
        const newTask = prompt("Edit nama tugas:", spanTugas.innerHTML);
        if(newTask !== null && newTask.trim() !== ""){
            spanTugas.innerHTML = newTask;           
        }
    };
    listbaru.appendChild(btnEdit);

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    btnDelete.className = "btn-delete";

    btnDelete.onclick = function(){
        if(confirm("Hapus tugas ini?")){
            listbaru.remove();
        }
    };
    listbaru.appendChild(btnDelete);
        
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputDate.value = "";
    inputValue.focus();

});