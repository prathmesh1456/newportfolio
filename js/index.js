AOS.init();

AOS.init({
    // Global settings:
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false,
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 70, 
    delay: 0, 
    duration: 400, 
    easing: 'ease-in-out', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
  
  });