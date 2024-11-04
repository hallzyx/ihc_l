

const elm_rrssItem=document.getElementsByClassName('rrss_item');

/*Se debe convertir a un array primero que todo antes de poder interar [actualmente elm_rrssItem es un NodeList*/
Array.from((elm_rrssItem)).map((item)=>{
    item.addEventListener('mouseenter',()=>{
        item.children[1].classList.toggle('hidden');
    })
    item.addEventListener('mouseleave',()=>{
        item.children[1].classList.toggle('hidden');
    })
})

