window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let header = document.querySelector('.header');
    let logo = document.querySelector('.logo');
    let headerlefta = document.querySelectorAll('.headernavleft li a');
    let headersearch = document.querySelector('.headersearch');
    let headernavrightname = document.querySelectorAll('.headernavrightname');
    let iconspan = document.querySelectorAll('.icon span');

    if (scrollPosition > 0) {
        header.style.top = '0';
        header.classList.add('active');
        logo.style.display = 'none';
        headersearch.classList.add('dropdown');
        headernavrightname.forEach(function (a) {
            a.classList.add('dropdown');
        })
        headerlefta.forEach(function (a) {
            a.classList.add('dropdown');
        });
        iconspan.forEach(function (span) {
            span.classList.add('dropdown');
        })
    } else {
        header.style.top = '0';
        header.classList.remove('active');
        logo.style.display = 'block';
        headersearch.classList.remove('dropdown');
        headernavrightname.forEach(function (a) {
            a.classList.remove('dropdown');
        })
        headerlefta.forEach(function (a) {
            a.classList.remove('dropdown');
        });
        iconspan.forEach(function (span) {
            span.classList.remove('dropdown');
        })
    }
});
