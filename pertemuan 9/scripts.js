document.addEventListener('DOMContentLoaded', function(){

    // mendapatkan elemen dengan id
    var input = document.getElementById('task-input')
    var btn = document.getElementById('add-task-btn')
    var task = document.getElementById('tasks')

    // menambhkan event click pada button tambah tugas
    btn.onclick = function(){

        // mendapatkan teks dari input
        var text = input.value.trim();

        if(text === ""){
            alert("Silahkan masukkan tugas!")
        }else{
            // membuat element li
            var newTask = document.createElement('li')

            // mengambil value variable text
            newTask.textContent = text;

            // menambahkan tugas ke daftar tugas
            task.appendChild(newTask)

            // membersihkan input setelah menambahkan tugas
            input.value=""
        }
    }
    
})