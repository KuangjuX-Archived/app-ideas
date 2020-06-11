function convert() {

    let dollars = document.getElementById("dollars").value;
    if (dollars === "undefined" || dollars == null) {
        alert("Please enter a correct number.")
    }
    dollars = Number(dollars);
    let cents = dollars * 100;
    let quarter = Math.floor(cents / 25);
    let left = cents % 25;
    let dimes = Math.floor(left / 10);
    left = left % 10;
    let nickel = Math.floor(left / 5);
    left = left % 5;
    let penny = left;
    document.getElementById("cents").innerText=quarter + " quarter " + dimes + " dimes " + nickel + " nickel " + penny + " penny.";
}