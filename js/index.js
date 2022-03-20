index = 1;
slider(index)

function slide(n) {
    slider(index = n);
}

function slider(n) {
    let img = document.querySelectorAll('#img');
    let dot = document.querySelectorAll('#item');

    if(n>img.length) {
        index = 1;
    }

    if(n<1) {
        index = slider.length;
    }

    for(let i=0;i<img.length;i++) {
        img[i].style.display = "none";
    }

    img[index-1].style.display = "block"
}
