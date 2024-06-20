const $ = (DOMElement) => {return document.querySelector(DOMElement)}




let input = $("#cni")

function previewImage(event) {
    const input = event.target
    let wrap = $(".fieldcni")
    if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = function(e){
            wrap.innerHTML = `<img src="${e.target.result}" alt="" class="profile">`
            let profile = $(".profile")
        profile.style.display = "block"
        }
        reader.readAsDataURL(input.files[0])
        
    } else {
        
    }
}

input.onchange = (e) => {
    previewImage(e)
}