document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#Main2"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('Main2');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});