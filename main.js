let rangenb = document.querySelector(".cusrange");
let priceshower = document.querySelector(".pricenb");
rangenb.oninput = () => {
    priceshower.innerHTML = `$ ${parseFloat(rangenb.value)}`
}