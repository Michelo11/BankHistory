let coll = document.getElementsByClassName("list");
let container = document.getElementById("container");
let i;

for (i = 0; i < coll.length; i++) {
    const item = coll[i];

    item.addEventListener("click", function() {
        item.classList.toggle("active");
        let content = item.nextElementSibling;

        let height = Number(container.style.height.replace("px", ""));

        if (height === 0) {
            height = 875;
        }

        console.log(Number(container.style.height.replace("px", "")))
        console.log(content.scrollHeight)

        if (content.style.maxHeight){
            container.style.height = height - content.scrollHeight + "px";
            content.style.maxHeight = null;
        } else {
            container.style.height = height + content.scrollHeight + "px";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
