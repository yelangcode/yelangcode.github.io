const button1 = document.createElement('button');
button1.textContent = '显示';

button1.style.position = 'fixed';
button1.style.top = '10px';
button1.style.right = '10px';

button1.style.backgroundColor = 'orange';
button1.style.color = 'white';
button1.style.borderRadius = '5px';
button1.style.border = 'none';

document.body.appendChild(button1);

button1.addEventListener('click', function() {
    if(button1.textContent === '显示'){
        button1.textContent = '隐藏';

        document.querySelectorAll(".ibk").forEach((item) => {
            item.style.color = "orange";
        })

    }else {
        button1.textContent = '显示';

        document.querySelectorAll(".ibk").forEach((item) => {
            item.style.color = "transparent";
        })
    }
});

document.querySelectorAll(".hljs").forEach(function(item) {
    item.removeAttribute("spellcheck");
    var pre = document.createElement("pre");

    while (item.firstChild) {
        pre.appendChild(item.firstChild);
    }
    item.appendChild(pre);
});

var u_style = "color: transparent;border-bottom: 1px solid orange;align-self: flex-start;";

document.querySelectorAll(".ibk").forEach((item) => {
    item.setAttribute("style", u_style);

    item.addEventListener("click", (event) => {
        if(item.style.color === "transparent"){
            item.style.color = "orange";
        }else {
            item.style.color = "transparent";
        }
    })
})