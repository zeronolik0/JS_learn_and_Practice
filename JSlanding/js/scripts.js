window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

        const links = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

  /*      sections.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 100)) {
                console.log(window.scrollY + " >=" + section.offsetTop + " " + section.id);
                links.forEach(link => {
                    link.classList.remove('active')
                    if (link.href.split('#').pop() === section.id) {
                        //console.log("I'm here");
                        link.classList.add('active')
                    }
                })
            }
        })*/
    };

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    //анимация контента
    
    const animItems = document.querySelectorAll('.animate');
    if (animItems.length > 0) {
        function onEntry(params) {
            animItems.forEach(item => {
                const itemHeight = item.offsetHeight; //высота анимируемого обьекта
                const itemOffset = offset(item).top //позиция обьекта от верхнего края
                const startPos = 2; //параметр регулирования старта анимации
                const animPoint = document.documentElement.clientHeight - itemHeight / startPos; //не window.innerWidth/innerHeight

                if(itemHeight > document.documentElement.clientHeight) {
                    const animPoint = document.documentElement.clientHeight - document.documentElement.clientHeight / startPos;
                }
                if((scrollY > itemOffset - animPoint) && scrollY < itemOffset + itemHeight) {
                    item.classList.add('show');
                } else {
                    if(!item.classList.contains('no-hide')) {
                        item.classList.remove('show');
                    }
                }
            })
        }
    } 
    /*
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show');
            } else change.target.classList.remove('show');
        });
    }
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animate');

    for (let elm of elements) {
        observer.observe(elm);
    } */


    onEntry();
    navbarShrink();

    window.addEventListener('scroll', () => {
        navbarShrink();
        onEntry();
    })

    window.addEventListener('resize', () => {
        navbarShrink();
    })

    document.addEventListener('scroll', navbarShrink);

    document.addEventListener('resize', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});