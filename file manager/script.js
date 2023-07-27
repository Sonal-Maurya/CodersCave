
    let data = document.querySelector("textarea");
    let name = document.getElementById("fileName");
    let type = document.getElementById("saveAs");
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        let blob = new Blob([data.value], { type: type.value });
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.download = name.value;
        link.href = url;
        link.click()
    });
