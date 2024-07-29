let container = document.getElementById('container');

let selectedCellSet = new Set()



// 20 rows and 26 columns:

// A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z


// 0th row with A-Z
for(let i = 0; i<=26; i++){
   let cell = document.createElement('div');
   cell.className = "cell header-cell"
   cell.innerText = i == 0 ? "": String.fromCharCode(64+i) 
   container.append(cell)
}


// row and colums +  column 0th(1-20)

for(let row = 1; row<=20; row++){
    // the starting column of each row (header)
    let rowHeader = document.createElement('div');
    rowHeader.className = "cell header-cell"
    rowHeader.innerText = row
    container.append(rowHeader)


    for(let col = 1; col<=26; col++){
        let cell = document.createElement('div');
        cell.className = "cell"
        // cell.innerText = row+ " " + col
        cell.setAttribute("contenteditable", "true")
        container.append(cell)
        cell.addEventListener("click", handleClick)
    }
}



function handleClick(e){
    console.log(e)
   let targetCell = e.target;
//    let key = e
   if(!e.ctrlKey && !e.metaKey){
    for(let t of selectedCellSet){
        t.classList.remove("selectedCell")
    }
    selectedCellSet.clear()
   }

   else if(selectedCellSet.has(targetCell)){
     targetCell.classList.remove("selectedCell")
     selectedCellSet.delete(targetCell)
   }
    else{
        targetCell.classList.add("selectedCell")
        selectedCellSet.add(targetCell)
    }
}


let boldButton = document.getElementById('boldButton')

boldButton.addEventListener("click", ()=>{
    selectedCellSet.forEach((cell)=>{
        cell.style.fontWeight = cell.style.fontWeight == "bold" ? "normal" : "bold"
    })
})

let textColor = document.getElementById('texColor')

textColor.addEventListener("change", ()=>{
    let selectedColor = textColor.value;
    console.log(selectedColor)
    selectedCellSet.forEach((cell)=>{
        cell.style.color = selectedColor
    })
})


// sum and avg: => regular expression






