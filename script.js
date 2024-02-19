const side_bar_btns = document.querySelectorAll('#sidebar-btn');

side_bar_btns.forEach((elem) => {
    elem.addEventListener('click', () =>{
        for (let index = 0; index < side_bar_btns.length; index++){
            side_bar_btns[index].classList.remove('active');
        }
        elem.classList.add('active');
    });
});


let min = true;

document.querySelector('.window__close').addEventListener('click', () =>{
    document.querySelector('.container').style.display = 'none';
});

document.querySelector('.window__maximize').addEventListener('click', () => {
    if(min == false){
        min = true;
        document.querySelector('.container').style.width = '90%';
        document.querySelector('.container').style.height = '90%';
    } else {
        min = false;
        document.querySelector('.container').style.width = '100%';
        document.querySelector('.container').style.height = '100%';
    }
});

document.querySelector('.window__minimize').addEventListener('click', () => {
    document.querySelector('.container').style.transform = 'scale(0)';
})