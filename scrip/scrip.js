document.getElementById('date').innerHTML = new Date().getFullYear()

document.getElementById('icon-menu').addEventListener('click', showmenu);
function showmenu(){
    document.getElementById('move-content').classList.toggle('moves')
    document.getElementById('menu-show').classList.toggle('show-menu')
}
// top up 

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.btn-top-container')
            .classList.add('show-top')
    } else {
          document.querySelector('.btn-top-container')
            .classList.remove('show-top')
    }
}
document.querySelector('.btn-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    })
})


//code search this code should be the final js code because it doesn't run any code down

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
   let filter = input_search.value.toUpperCase();
  let  li = box_search.getElementsByTagName("li");
    //filtre all tag "li"
    for (let i = 0; i < li.length; i++){
       let a = li[i].getElementsByTagName("a")[0];
      let  textValue = a.textContent || a.innerText;
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


