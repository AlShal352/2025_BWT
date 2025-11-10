function find_edit(){
    const new_sname  = document.getElementById('surname')
    const new_name  = document.getElementById('name')
    new_sname.innerHTML="SHALABAEV"
    new_name.innerHTML="ALEKSEI"
}


const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
