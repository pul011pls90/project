window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    document.querySelector(".loader").addEventListener("trasitionend", () =>{
        document.body.removeChild(document.querySelector(".loader"));
    });
});
