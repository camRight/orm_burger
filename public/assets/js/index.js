const devour_btn = document.querySelectorAll(".btn_devour");


devour_btn.forEach(btn=> {
    btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id")
        
        
        // server call from controller
        fetch("/"+id, {
            method: "PUT"
        })
        // taking id from inside button
        .then(response => response.json())
        .then(response => location.reload())
    })
});