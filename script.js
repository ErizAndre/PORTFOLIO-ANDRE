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

document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#Main"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('Main');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#resume-section"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('resume-section');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#SkillsExperience"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('SkillsExperience');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#Contactss"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('Contactss');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});