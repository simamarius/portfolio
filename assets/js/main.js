
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }



  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 800,
    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

//Main Page and Navbar
const toggleSwitch = document.querySelector("#toggle-switch")

const mainPage = document.querySelector("#header")


const containerMain = document.querySelector(".container")
const subTextContainer = containerMain.children

const navBarMain = document.querySelector(".navbar")
const navBarChild = navBarMain.querySelectorAll("li a ")
const label = document.querySelector("label")
const socialLinks = document.querySelector(".social-links")
const childSocial = socialLinks.querySelectorAll("a i")
//end

//Container 
const sectionContainer = document.querySelector("#about");

const skillsContainer = document.querySelector('.skills.container');



let isDarkMode = true;
toggleSwitch.addEventListener("click", function() {
  if (isDarkMode) {
    // Switch to light color scheme
    mainPage.style.background = "#fff"
    mainPage.style.width = "100%"

   for( let i=0; i<subTextContainer.length; i++){
    subTextContainer[i].style.color = "#000"
   }

   for( let j=0; j<navBarChild.length; j++){
    navBarChild[j].style.color = "#000"
    

   }
   label.style.background = "linear-gradient(180deg,#777,#3a3a3a)"
   label.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px"
   for(let x=0; x<childSocial.length; x++){
    childSocial[x].style.color = "#000"
   }

// Container
sectionContainer.style.background = "#dfdfdf"
sectionContainer.style.color = "#000"
skillsContainer.style.background = "#dfdfdf"



    isDarkMode = false;
  } else {
    // Switch to dark color scheme
    mainPage.style.removeProperty("background")
    mainPage.style.removeProperty("width");
    
    containerMain.style.removeProperty("box-Shadow");
    containerMain.style.removeProperty("padding");
    for( let i=0; i<subTextContainer.length; i++){
      subTextContainer[i].style.removeProperty("color") 
     }


     for( let j=0; j<navBarChild.length; j++){
      navBarChild[j].style.removeProperty("color") 
     }
     label.style.removeProperty("background") 
     for(let x=0; x<childSocial.length; x++){
      childSocial[x].style.removeProperty("color")
     }

    isDarkMode = true;
  }
});
