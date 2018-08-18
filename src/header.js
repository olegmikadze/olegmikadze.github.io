function myFunction() {
    document.getElementById("header__list").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.sandwich')) {

        var dropdowns = document.getElementsByClassName("header__list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}