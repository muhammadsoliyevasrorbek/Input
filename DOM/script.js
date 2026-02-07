let elitem = document.createElement("li")
let elimg = document.createElement("img")
let elsubtitle = document.createElement("h2")
let elp = document.createElement("p")
elitem.append(elimg)
elitem.append(elsubtitle)
elitem.append(elp)
document.querySelector(".list").appendChild(elitem)
elimg.setAttribute("src","./tabiat.jpg")
elimg.setAttribute("width","500","height","300")
elsubtitle.textContent="Ona tabiat"
elp.textContent="Tabiatni asrang odamlar!"
