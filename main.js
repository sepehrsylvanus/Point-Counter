let homePoint = 0
let guestPoint = 0
let homeInner = document.getElementById('homePoint')
let guestInner =    document.getElementById('guestPoint')
function addHome1() {
    homePoint += 1
    document.getElementById('homePoint').textContent = homePoint
}
function addHome2() {
    homePoint += 2
    document.getElementById('homePoint').textContent = homePoint

} function addHome3() {
    homePoint += 3
    document.getElementById('homePoint').textContent = homePoint

}
function addGuest1() {
    guestPoint += 1
    document.getElementById('guestPoint').textContent = guestPoint
}
function addGuest2() {
    guestPoint += 2
    document.getElementById('guestPoint').textContent = guestPoint


} function addGuest3() {
    guestPoint += 3
    document.getElementById('guestPoint').textContent = guestPoint


}
function resetHome(){
    homePoint = 0
    homeInner.textContent = 0
}
function resetGuest(){
    guestPoint = 0
    guestInner.textContent = 0
}