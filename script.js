    function animateOnScroll() {

        const fadeUpElems = document.querySelectorAll('.fadeUpElem')
        const fadeInElems = document.querySelectorAll('.fadeInElem')
        const lineElems = document.querySelectorAll('.lineElem')

        function width() {
            if (window.innerWidth <= 1220) {
                return 'top bottom'
            } else {
                return '30% 90%'
            }
        }


        function hide(elem) {
            gsap.set(elem, { autoAlpha: 0 });
        }

        gsap.utils.toArray(fadeUpElems).forEach(item => {
            hide(item);
            ScrollTrigger.create({
                trigger: item,
                start: width(),
                onEnter: function () {
                    gsap.fromTo(item, {
                        y: 70
                    }, {
                        autoAlpha: 1,
                        duration: 1.5,
                        y: 0,
                        ease: 'expo',
                    })
                },
                once: true
            })

        })
        gsap.utils.toArray(fadeInElems).forEach(item => {
            hide(item);
            ScrollTrigger.create({
                trigger: item,
                onEnter: function () {
                    gsap.to(item, {
                        autoAlpha: 1,
                        duration: 1.5,
                        ease: 'expo'
                    })
                },
                once: true
            })

        })
        gsap.utils.toArray(lineElems).forEach(item => {
            hide(item);
            gsap.set(item, { width: 0 })
            ScrollTrigger.create({
                trigger: item,
                onEnter: function () {
                    gsap.to(item, {
                        width: '100%',
                        autoAlpha: 1,
                        duration: 0.5,
                        ease: 'power1.in',
                    })

                },
                once: true
            })

        })

    }

    animateOnScroll();

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"></script>
