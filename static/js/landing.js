document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.hero-title', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out'
    });

    gsap.from('.hero-cta', {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: 'bounce.out'
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotation: index % 2 === 0 ? -10 : 10,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Why choose us items animation
    gsap.utils.toArray('.why-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: index * 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // CTA section animation
    gsap.from('.cta-title', {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.cta-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.cta-main', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.6,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Hover effect for CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.1, duration: 0.3 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.3 });
        });
    });
});
