const tab = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

function getalea(table) {
    return table[parseInt(Math.random()*table.length)]
}

document.querySelectorAll("li").forEach((element)=>{
    element.addEventListener("click",(e)=>{e.target.style.color = `#${getalea(tab)}${getalea(tab)}${getalea(tab)}${getalea(tab)}${getalea(tab)}${getalea(tab)}`
    })
})