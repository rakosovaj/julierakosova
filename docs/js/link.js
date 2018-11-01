document.querySelector('#street').addEventListener('click', function (e) {
    if (navigator.userAgent && navigator.userAgent.match(/(iphone|ipad|android)/i)) {
        location.href = 'https://maps.apple.com/?ll=50.0992825,14.3837428&address=Velvarská+13,Praha+6'
    } else {
        location.href = 'https://mapy.cz/s/3aTfw';
    }

    e.preventDefault();
});