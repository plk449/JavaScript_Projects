const trash = document.getElementById("trash");
const save = document.getElementById("save");
const addmore = document.getElementById("addmore");
const main = document.querySelector("#main");

addmore.addEventListener("click", () => {
    add();
});

const savenotes = () => {
    const notes = document.querySelectorAll(" .noe textarea");
    const data = [];
    notes.forEach((i) => {
        data.push(i.value);
    });
    // console.log(data);
    // saving data in locol storage
    localStorage.setItem("notes", JSON.stringify(data));
}


const add = (text="") => {
    const note = document.createElement("div");
    note.classList.add("noe");
    note.innerHTML=`<div id="note" class="noe">
    <div id="tool">
    <button id="trash" >
    <i class=" trash fa fa-trash" ></i>
    </button>
    <button id="save">
    <i class="save fa fa-save" ></i>
    </button>
    
    </div>
    <div>
    <textarea name="" id="write">${text}</textarea>
    </div>
    </div>`
    note.querySelector(".trash").addEventListener("click", () => {
        // alert();
        note.remove();
        savenotes();
    });

    note.querySelector(".save").addEventListener("click", () => {
        savenotes();
    })
    main.append(note);
    savenotes();

};
(
    function () {
        const lsnote = JSON.parse(localStorage.getItem("notes"));
        
        // for (let i = 0; i < 4; i++){
            
            // }
        lsnote.forEach((i) => {
                add(i);
                // console.log(lsnote.i);
            // notes.innerText = lsnote.value;
        })
        // notes.forEach((j) => {
            
        // })
    }
)()