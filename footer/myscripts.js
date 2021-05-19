var nav = document.querySelector('.my-nav');
nav.addEventListener('toggle', function (event) {
    // Only run if the dropdown is open
    if (!event.target.open) return;
    // Get all other open dropdowns and close them
    var dropdowns = nav.querySelectorAll('.dropdown[open]');
    Array.prototype.forEach.call(dropdowns, function (dropdown) {
        if (dropdown === event.target) return;
        dropdown.removeAttribute('open');
    });
}, true);
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.open) {
        var dropdowns = nav.querySelectorAll('.dropdown[open]');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
}
