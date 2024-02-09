function myFunction(x) {
    var layer1 = document.getElementById('bottom-cloud');
    var layer2 = document.getElementById('top-cloud');
    var layer3 = document.getElementById('side-cloud-one');
    var layer4 = document.getElementById('near-cloud');
    var mountain = document.getElementById('mountain');
    var sun = document.getElementById('sun-image');

    function setInitialPositions() {
        layer1.style.left = (x.matches ? 2 : 12) + '%';
        layer2.style.left = (x.matches ? 54 : 59) + '%';
        layer2.style.top = '26%';
        layer3.style.left = (x.matches ? 23 : 29) + '%';
        layer3.style.top = '29%';
        layer4.style.left = (x.matches ? 68 : 74) + '%';
        sun.style.transform = 'translateY(0)';
        sun.style.opacity = '1';
    }
    document.addEventListener('DOMContentLoaded', setInitialPositions);
    function updatePositions() {
        var offset = window.pageYOffset;
        var scroll = offset / 30;

        layer1.style.left = (x.matches ? 2 : 12) + scroll + '%';
        layer2.style.left = (x.matches ? 54 : 59) + (scroll * 1.7) + '%';
        layer3.style.left = (x.matches ? 23 : 29) + (scroll * 2) + '%';
        layer4.style.left = (x.matches ? 68 : 74) + (scroll * 1.5) + '%';

        var scale = 1 + Math.min(1, offset / 500);
        mountain.style.transform = 'scale(' + scale + ')';
        mountain.style.opacity = 1 - Math.min(1, offset / 500);
        sun.style.transform = 'translateY(' + offset * 0.7 + 'px)';
        sun.style.opacity = 1 - Math.min(1, (offset / 500) * 4.4);
    }

    updatePositions();
    function loop() {
        updatePositions();
        requestAnimationFrame(loop);
    }
    loop();
}
if (matchMedia) {
    const x = window.matchMedia("(max-width: 1050px)");
    x.addListener(myFunction);
    myFunction(x);
}

