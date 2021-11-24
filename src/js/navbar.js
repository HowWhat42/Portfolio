let open = false

document.getElementById("openNav").addEventListener('click', function openNav() {
        if(!open) {
            document.getElementById("q-navbar").style.height = "267px"
            document.querySelectorAll(".q-hero__nav li").forEach(function (element) {
                element.style.display = "block"
            })
            document.querySelector(".q-hero__text").style.marginTop = "20px"
            open = true
        } else {
            document.getElementById("q-navbar").style.height = "80px"
            document.querySelectorAll(".q-hero__nav li").forEach(function (element) {
                element.style.display = "none"
            })
            document.querySelector(".q-hero__selected").style.display = "block"
            document.querySelector(".q-hero__text").style.marginTop = "207px"
            open = false
        }
})