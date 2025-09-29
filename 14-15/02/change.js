function find_edit(){
    const new_sname  = document.getElementById('sname')
    const new_name  = document.getElementById('name')
    new_sname.innerHTML="<b>Shalabaev</b>"
    new_name.innerHTML="<b>Aleksei</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
