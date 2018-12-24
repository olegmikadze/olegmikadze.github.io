jQuery(document).ready(function () {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
    particlesJS.load('courses', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
    particlesJS.load('education', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
    particlesJS.load('projects', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
    particlesJS.load('emailSection', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });
});

function myFunction() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.portHeader__div__sandwich')) {
      var dropdowns = document.getElementsByClassName("portHeader__div__list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



