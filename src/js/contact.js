document.getElementById("sendEmail").addEventListener('click', function sendEmail() {
            const email = document.getElementById("email").value
            const object = document.getElementById("object").value
            const text = document.getElementById("message").value
            const message = `Expéditeur : ${email}\r\n${text}`
            Email.send({
                SecureToken: "d99918b8-2dfc-43ed-b5df-bbc022fabccc",
                To: 'charles.lapierre91@gmail.com',
                From: email,
                Subject: object,
                Body: message,
            })
                .then(() => {
                    document.getElementById("mailreturn").innerHTML = "Le mail a été envoyé avec succès"
                    document.getElementById("mailreturn").classList.add('q-span--green');
                })
                .catch(error => {
                    document.getElementById("mailreturn").innerHTML = error
                    document.getElementById("mailreturn").classList.add('q-span--error');
                })
        })

let open = false

document.getElementById("openNav").addEventListener('click', function openNav() {
        if(!open) {
            document.getElementById("q-navbar").style.height = "267px"
            document.querySelectorAll(".q-hero__nav li").forEach(function (element) {
                element.style.display = "block"
            })
            document.querySelector(".q-contact").style.marginTop = "20px"
            open = true
        } else {
            document.getElementById("q-navbar").style.height = "80px"
            document.querySelectorAll(".q-hero__nav li").forEach(function (element) {
                element.style.display = "none"
            })
            document.querySelector(".q-hero__selected").style.display = "block"
            document.querySelector(".q-contact").style.marginTop = "120px"
            open = false
        }
})