import hcOffcanvasNav from 'hc-offcanvas-nav';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper/bundle";




gsap.registerPlugin(ScrollTrigger)


gsap.utils.toArray("div.service-panels > ul > li").forEach((servicePanel) => {
  const textBlock = servicePanel.querySelectorAll("div.text");
  const imgBlock = servicePanel.querySelectorAll("div.img");
  const linkBlock = servicePanel.querySelectorAll("div.link");

  const move = gsap.timeline({
    scrollTrigger: {
      trigger: servicePanel,
      start: "top 70%",
      end: "bottom top",
      // markers: true,
      toggleActions: "play none none reverse",
    },
  });

  move
  .from(servicePanel, { opacity: 0, duration: 0.5 })
  .from(imgBlock, { opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.2")
  .from(textBlock, { yPercent: 20, opacity: 0, duration: 0.8 }, "-=0.8");
  if (linkBlock.length) {
    move.from(linkBlock, { opacity: 0, duration: 0.7 }, "-=0.5");
  }
  move.from(servicePanel, { boxShadow: "0 0 0 rgba(0, 0, 0, 0)", duration: 1 });
});


let mm = gsap.matchMedia();

mm.add("(min-width: 960px", () => {

  let tl = gsap.timeline();
  
  tl.from(".hero h1", { delay: 0.8, duration: 1.2, opacity: 0, x: 200 }) //notice that there's no semicolon!
    .from(".hero p", { duration: 1, opacity: 0, x: 200 }, "-=1");
});



const headers = document.querySelectorAll(".accHeader");
const hoverPanelTl = [];
let openedPanel = null;

function togglePanel(panelIndex) {
  const panel = headers[panelIndex].parentNode;
  const content = panel.querySelector(".accContent");
  
  if (!panel.classList.contains("active")) {
    // Open the panel
    if (openedPanel !== null) {
      // Close the previously opened panel
      const prevPanel = headers[openedPanel].parentNode;
      const prevContent = prevPanel.querySelector(".accContent");
      hoverPanelTl[openedPanel].reverse();
      gsap.to(prevContent, { height: 0, duration: 0.3 });
      prevPanel.classList.remove("active");
    }
    
    openedPanel = panelIndex;
    panel.classList.add("active");
    hoverPanelTl[panelIndex].play();
    gsap.set(content, { height: "auto" });
    gsap.from(content, {
      height: 0,
      borderTopWidth: 0,
      ease: "back.out(1.4)",
      duration: 0.5
    });
  } else {
    // Close the panel
    openedPanel = null;
    panel.classList.remove("active");
    hoverPanelTl[panelIndex].reverse();
    gsap.to(content, { height: 0, duration: 0.3 });
  }
}

headers.forEach((el, i) => {
  const panel = el.parentNode;
  const content = panel.querySelector(".accContent");
  
  hoverPanelTl[i] = gsap.timeline({ paused: true });
  
  el.addEventListener("mouseenter", () => {
    if (!hoverPanelTl[i].paused() || panel.classList.contains("active")) {
      hoverPanelTl[i].timeScale(1).play();
    }
  });
  
  el.addEventListener("mouseleave", () => {
    if (!hoverPanelTl[i].paused()) {
      hoverPanelTl[i].timeScale(3).reverse();
    }
  });
  
  el.addEventListener("click", () => {
    togglePanel(i);
  });
});


let map; // Declare map globally

// Initialize Google Map
async function initMap() {
  const mapElement = document.getElementById("map");

  // Only initialize if the map element exists on the page
  if (!mapElement) {
    return;
  }

  const altius = { lat: 53.52495369423819, lng: -2.1090302711930655 };

  try {
    // Load the Maps library
    const { Map } = await google.maps.importLibrary("maps");

    // Create the map with standard marker (not Advanced Marker)
    map = new Map(mapElement, {
      zoom: 15,
      center: altius,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
    });

    // Use standard Marker instead of AdvancedMarkerElement
    // AdvancedMarkerElement requires a valid Map ID and additional billing setup
    const { Marker } = await google.maps.importLibrary("marker");

    new Marker({
      position: altius,
      map: map,
      title: "Altius Lifts"
    });
  } catch (error) {
    console.error('Error loading Google Maps:', error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuLogo = document.createElement('div');
  const logoImage = document.createElement('img');
  logoImage.src = '/images/roundel-grey.svg';
  menuLogo.appendChild(logoImage);

  new hcOffcanvasNav('.header-nav', {
    disableAt: 1024,
    position: 'left',
    insertClose: false,
    width: 250,
    customToggle: '.toggle',
    navTitle: menuLogo,
    levelTitles: true,
    levelTitleAsBack: true
  });


  const clientTestimonials = new Swiper('.testimonials', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // Initialize client carousel with proper image loading detection
  function initializeClientCarousel() {
    const carouselElement = document.querySelector('.clientCarousel');
    if (!carouselElement) return;

    const images = carouselElement.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;

    // Function to initialize Swiper after images are loaded
    function createSwiper() {
      const clientCarousel = new Swiper('.clientCarousel', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        centeredSlides: true,
        rewind: true,
        spaceBetween: 0,
        freeMode: false,
        watchOverflow: true, // Disable if not enough slides
        breakpoints: {
          320: {
            spaceBetween: 20,
          },
          400: {
            spaceBetween: 30,
          },
          560: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          },
          1600: {
            spaceBetween: 50,
          }
        },
        on: {
          init: function () {
            // Ensure proper sizing after initialization
            this.update();
          },
          resize: function () {
            // Reset styles on resize to ensure slides remain fully visible
            const slides = document.querySelectorAll('.clientCarousel .swiper-slide');
            slides.forEach(slide => {
              slide.style.width = 'auto';
            });
            this.update();
          }
        }
      });
    }

    // Check if images are already loaded or load them
    if (totalImages === 0) {
      createSwiper();
      return;
    }

    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            createSwiper();
          }
        });
        img.addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            createSwiper();
          }
        });
      }
    });

    // If all images are already loaded
    if (loadedImages === totalImages) {
      createSwiper();
    }
  }

  // Initialize carousel with a slight delay to ensure DOM is ready
  setTimeout(initializeClientCarousel, 100);



  // const scrollers = document.querySelectorAll(".clients");

  // // If a user hasn't opted in for recuded motion, then we add the animation
  // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //   addAnimation();
  // }
  
  // function addAnimation() {
  //   scrollers.forEach((scroller) => {
  //     // add data-animated="true" to every `.scroller` on the page
  //     scroller.setAttribute("data-animated", true);
  
  //     // Make an array from the elements within `.scroller-inner`
  //     const scrollerInner = scroller.querySelector(".clients-inner");
  //     const scrollerContent = Array.from(scrollerInner.children);
  
  //     // For each item in the array, clone it
  //     // add aria-hidden to it
  //     // add it into the `.scroller-inner`
  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       duplicatedItem.setAttribute("aria-hidden", true);
  //       scrollerInner.appendChild(duplicatedItem);
  //     });
  //   });
  // }
  


  // Load the Google Maps API script dynamically using the new loading library
  function loadGoogleMapsScript() {
    // Only load if map element exists on the page
    if (!document.getElementById("map")) {
      return;
    }

    const script = document.createElement('script');
    // Use the new loading library approach
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC6nKYLGeEswtI0r1S0s40Ttx2Fl3QnKnE&loading=async`;
    script.async = true;
    script.defer = true;

    // Initialize map after script loads
    // With loading=async, we need to wait for the library to be ready
    script.onload = () => {
      // Wait a bit for the library to initialize
      if (typeof google !== 'undefined' && google.maps && google.maps.importLibrary) {
        initMap();
      } else {
        // Retry after a short delay
        setTimeout(() => {
          if (typeof google !== 'undefined' && google.maps && google.maps.importLibrary) {
            initMap();
          }
        }, 100);
      }
    };

    document.head.appendChild(script);
  }

  loadGoogleMapsScript();
});
