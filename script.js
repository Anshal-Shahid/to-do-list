let arr = []
let inp = document.querySelector("#input")
let btn = document.querySelector("#button")
let list = document.querySelector(".list")

let h1 = document.querySelector(".top h1")

let edit = document.querySelector(".edited button")
let popup = document.querySelector(".list-popup")
let popup_input = document.querySelector(".list-popup textarea")
let popup_wrapper = document.querySelector(".list-popoup-wrapper")
let popup_value;
let save_btn = document.querySelector(".save");

let val;
let a = 0;
let y = 0
var dlt;
let f

function func() {
    a = 0
    y = 0
    list.innerHTML = ""
    arr.map((x) => {

        a++;
        if (a < 10) {


            list.innerHTML += ` <div class="list-div ">
                    <div class="serial ">
                    <p>${a}</p>
                </div>
                <div class="info">
                <div class="p">
                    <p style="  display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;  
                    overflow: hidden;">${x}</p>
                    </div>
                </div>
                <div class="edited" >
                    <button value="${a}">Edit</button>
                </div>
                <div class="deleted">
                    <button value="${a}">delete</button>
                </div>
            </div>
     `}
        if (a == 10 || a > 10) {
            list.innerHTML += ` <div class="list-div ">
        <div class="serial list-div-10-serial">
        <p>${a}</p>
    </div>
    <div class="info">
    <div class="p list-div-10-p">
        <p style="  display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;">${x}</p>
        </div>
    </div>
    <div class="edited  list-div-10-btn" >
        <button value="${a}">Edit</button>
    </div>
    <div class="deleted  list-div-10-btn">
        <button value="${a}">delete</button>
    </div>
</div>`
        }

    })

    if (y = 1) {
        dlt = document.querySelectorAll(".deleted button")
        edt = document.querySelectorAll(".edited button")
        console.log(edt);

    }


    dlt.forEach(dlts => {
        dlts.addEventListener("click", (e,) => {
            f = 0
            f = event.target.value

            f--

            arr.splice(f, 1)
            func();

        })

    })

    edt.forEach(element => {
        element.addEventListener("click", () => {
            console.log("sds");
            f = 0
            f = event.target.value
            popup_value = arr[f - 1]
            console.log(popup_value);
            popup_input.value = popup_value

            gsap.to(".list-popup", {
                opacity: 1,
                scale: 1,

                transformOrigin: "center",


            })

        })
    });
    inp.value = ""
    inp.classList.remove("input-2")

}
let final_val;
save_btn.addEventListener("click", () => {
    final_val = popup_input.value
    arr[f - 1] = final_val



    gsap.to(".list-popup", {
        duration: .2,
        scale: 0,
        transformOrigin: "center"
    })

    func();


})




h1.addEventListener("click", () => {
    console.log(edt);
})
// function func(){


//     a = 0
//     y=0
//     list.innerHTML = ""
//     arr.map((x) => {

//         a++;

//         list.innerHTML += ` <div class="list-div  list-no-{}">
//                     <div class="serial ">
//                     <p>${a}</p>
//                 </div>
//                 <div class="info">
//                     <p>${x}</p>
//                 </div>
//                 <div class="deleted">
//                     <button value="${a}">delete</button>
//                 </div>
//             </div>
//      `



//     })


//     if (y = 1) {
//         dlt = document.querySelectorAll(".deleted button")
//     }


//     dlt.forEach(dlts => {
//         dlts.addEventListener("click", (e,) => {
//             let f = event.target.value

//             f--
//             console.log(f);
//             arr.splice(f, 1)
//             func2();
// //             list.innerHTML = ""
// //             // console.log("win");
// //             console.log(arr);
// //             let a = 0


// //             arr.map((x) => {
// //                 a++
// //                 list.innerHTML += ` <div class="list-div  list-no-{}">
// //                 <div class="serial ">
// //                 <p>${a}</p>
// //             </div>
// //             <div class="info">
// //                 <p>${x}</p>
// //             </div>
// //             <div class="deleted">
// //                 <button value="${a}">delete</button>
// //             </div>
// //         </div>
// //  `
// //             })


//         })

//     })
// }


let tl = gsap.timeline();

btn.addEventListener("click", () => {
    arr.push(inp.value)
    setTimeout(func, 300)

    setTimeout(() => {
        inp.classList.add("input-2")

    }, 150);

    tl.to("#button", {
        // repeat:0,
        x: -15,
        duration: .3,
        // yoyo:true,
    })
    tl.to("#button", {
        x: 0
    })
})







arr2 = ["one", "twp", "three"]
arr2.map((le) => {

    // console.log(le);
})
gsap.to(".list-popup", {
    duration: .2,
    scale: 0,
    transformOrigin: "center"
})


edit.addEventListener("click", () => {

    gsap.to(".list-popup", {
        opacity: 1,
        scale: 1,

        transformOrigin: "center",


    })

})
console.log(popup);




// body.addEventListener("click",()=>{

// })