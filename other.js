// introJs(".cintro").start();

var introguide = introJs();


// and check for it when deciding whether to start.
window.addEventListener('load', function () {
    var doneTour = localStorage.getItem('EventTour') === 'Completed';
    if (doneTour) {
        introguide.start()

        introguide.oncomplete(function () {
            localStorage.setItem('EventTour', 'Completed');
        });

        introguide.onexit(function () {
            localStorage.setItem('EventTour', 'Completed');
        });
    }
});