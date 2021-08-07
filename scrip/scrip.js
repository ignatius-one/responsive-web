document.getElementById('date').innerHTML = new Date().getFullYear()

document.getElementById('icon-menu').addEventListener('click', showmenu);
function showmenu(){
    document.getElementById('move-content').classList.toggle('moves')
    document.getElementById('menu-show').classList.toggle('show-menu')
}