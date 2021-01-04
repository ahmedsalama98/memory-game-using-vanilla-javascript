var intro = document.getElementById("intro");
console.log(intro)



// firs part
let butt = document.querySelector(".contol-butt span"),
    name = document.querySelector(".name span");

butt.onclick = function() {


    let pop = prompt("please put your name");

    if (pop === null || pop === "") {
        name.textContent = "user"
    } else {
        name.textContent = pop.toUpperCase();
    }


    document.querySelector(".contol-butt").remove();
}

///////////////////////////////////////

var blockscontainer = document.querySelector(".memory-game-blocks"),
    blocks = Array.from(blockscontainer.children),
    durition = 1000,
    arrayorder = [...Array(blocks.length).keys()];






// make randome order style for my blocks//
function randomorder(aray) {
    let curent = aray.length,
        box,
        random;
    while (curent > 0) {
        random = Math.floor(Math.random() * curent);
        curent--;
        box = aray[curent];
        aray[curent] = aray[random];
        aray[random] = box;
    }
}
//////////
randomorder(arrayorder)
    //blocks ateration// 
blocks.forEach(function(block, index) {
    block.style.order = arrayorder[index];

    block.addEventListener("click", function() {
        flip(block)
    })
})


// flip function//
function flip(flib) {
    flib.classList.add("flipped");

    let checkflip = blocks.filter(allblocks => allblocks.classList.contains("flipped"));



    if (checkflip.length >= 2) {
        stopfliped()
            //
        checkall(checkflip[0], checkflip[1]);


    }

}
//////////////////////

// stop fliped//
function stopfliped() {
    blockscontainer.classList.add("no-click");
    setTimeout(function() {
        blockscontainer.classList.remove("no-click");
    }, durition)
}

// check //

function checkall(first, second) {

    let tries = document.querySelector(".tries span");
    let score = document.getElementById("score");
    if (first.dataset.tecknologt === second.dataset.tecknologt) {
        score.innerHTML = parseInt(score.innerHTML) + 1;

        first.classList.remove("flipped");
        second.classList.remove("flipped");
        first.classList.add("matched");
        second.classList.add("matched");

        document.querySelector("#sucsses").play();



    } else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1
        setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
        }, durition)

        document.querySelector("#fail").play();

    }
}