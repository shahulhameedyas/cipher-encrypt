let alph = "abcdefghijklmnopqrstuvwxyz"
let key = 3
function cipher() {
    let input = document.getElementById("input")
    let para = document.getElementById("para")
    let ans = input.value
    let value = ans.split('')
    let get = value.map((val) => {
        let enc = alph.indexOf(val) + key
        return alph.charAt(enc)
    })
    return para.innerText = "encrypt value: " + get.join('')

}







