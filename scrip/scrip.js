document.getElementById('date').innerHTML = new Date().getFullYear()

document.getElementById('icon-menu').addEventListener('click', showmenu);
function showmenu(){
    document.getElementById('move-content').classList.toggle('moves')
    document.getElementById('menu-show').classList.toggle('show-menu')
}




// executed code 

document.getElementById('ctn-icon-search').addEventListener('click', show_search);

// function search 

bars_search = document.getElementById('ctn-bars-search');
cover_search = document.getElementById('cover-ctn-search');
input_search = document.getElementById('inputSearch');
box_search = document.getElementById('Box-search');

// function-show-search 

function show_search() {
    bars_search.style.top = '5em'
    cover_search.style.dispay = 'block'
    box_search.style.dispay = 'block'
    
}