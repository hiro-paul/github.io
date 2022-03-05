'use strict';

//ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

const line_link = document.querySelector('#line-link');

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};


//スクロール時のイベントを追加
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
  
  if(window.pageYOffset > 400){
    scroll_to_top_btn.style.opacity = '1';
  }else if(window.pageYOffset < 400){
    scroll_to_top_btn.style.opacity = '0';
  }
    
    if(window.pageYOffset > 400){
    line_link.style.opacity = '1';
  }else if(window.pageYOffset < 400){
    line_link.style.opacity = '0';
  }
  
};







let display = 0;
function drinkDisplay(){
    if(display==0){
        document.getElementById("drink").style.display="block";
        display = 1;
        console.log(display);
        }else{
            document.getElementById("drink").style.display="none";
            display = 0;
        }
}