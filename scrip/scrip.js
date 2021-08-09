document.getElementById('date').innerHTML = new Date().getFullYear()

document.getElementById('icon-menu').addEventListener('click', showmenu);
function showmenu(){
    document.getElementById('move-content').classList.toggle('moves')
    document.getElementById('menu-show').classList.toggle('show-menu')
}




// code search 


// executed code 

document.getElementById('ctn-icon-search').addEventListener('click', show_search);
document.getElementById('cover-ctn-search').addEventListener('click', close_search);

// function search 

bars_search = document.getElementById('ctn-bars-search');
input_search = document.getElementById('inputSearch');
box_search = document.getElementById('Box-search');
cover_search = document.getElementById('cover-ctn-search');

// function-show-search 

function show_search() {
    bars_search.style.top = '5em';
    cover_search.style.display = 'block';
    input_search.focus();

          if (inputSearch.value === ""){
                box_search.style.display = "none";
            }
}






// function to hidden search 
function close_search() {
    bars_search.style.top = '-10px';
    cover_search.style.display = 'none';
        // empty space after close search 
    input_search.value = '';
    box_search.style.display = 'none';
}




// escape 

function press_scape() {
    teclas_scape = event.keyCode;
    // code 27 is escape  
    if (teclas_scape === 27) {
        return close_search();
    }
}
window.onkeydown = press_scape;
// escape code end 




// whent to writing on input
document.getElementById('inputSearch').addEventListener('keyup',search_inside)


// create filtre search 

function search_inside(){


    filter = input_search.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //filtre all tag "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}


