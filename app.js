const t1 = gsap.timeline({defaults:{ease: 'power.out'}});

t1.to(".text", {y: "0%", duration: 1.5, stagger: 0.416});
t1.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
t1.to(".intro", {y: "-200%", duration: 1}, "-=1");
t1.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
t1.fromTo("h2", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
t1.fromTo("h2", {y: "-40"}, {y: "0%", duration: 1}, "-=1");
