for(let i = 0; i < 8; i++){
    document.getElementById("table").innerHTML += '<tr id="tr" ></tr>';
    
    for(let j = 0; j < 8; j++){
        var tr = document.getElementsByTagName("tr");

        var tr = tr[i];
        tr.setAttribute("id", i + 1);
        if ((i+j) % 2 == 0){
            document.getElementById(`${i + 1}`).innerHTML += '<td id="td" class="cell whitecell"></td>';
        } else {
            document.getElementById(`${i + 1}`).innerHTML += '<td id="td" class="cell blackcell"></td>';
        }
    }
}