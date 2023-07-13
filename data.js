// Obiectul cu datele
var obiect = {
    item1: {
      src: "assets/img/portfolio/build-master (4).png",
      titlu: "Build Masters",
      descriere: "made in React",
      pagina: "pages-projects/portfolio1.html",
      category: "filter-react"
    },
    item2: {
      src: "assets/img/portfolio/rentappdesign.png",
      titlu: "Rent a car",
      descriere: "HTML-CSS-JS",
      pagina: "pages-projects/portfolio2.html",
      category: "filter-apps"
    },
    item3: {
      src: "assets/img/portfolio/ddleasing (1).png",
      titlu: "DD Leasing",
      descriere: "Bootstrap",
      pagina: "pages-projects/portfolio3.html",
      category: "filter-web"
    },
    item4: {
      src: "assets/img/portfolio/scoretable1.png",
      titlu: "Football Scoreboard",
      descriere: "Scrimba course",
      pagina: "pages-projects/portfolio4.html",
      category: "filter-apps"
    },
    item5: {
      src: "assets/img/portfolio/calculator.png",
      titlu: "Calculator",
      descriere: "HTML-CSS-JS",
      pagina: "pages-projects/portfolio5.html",
      category: "filter-apps"
    },
    item6: {
      src: "assets/img/portfolio/convert.png",
      titlu: "Units Convertor",
      descriere: "HTML-CSS-JS",
      pagina: "pages-projects/portfolio6.html",
      category: "filter-web"
    },
    item7: {
      src: "assets/img/portfolio/blackjack2.png",
      titlu: "BlackJack Game",
      descriere: "HTML-CSS-JS",
      pagina: "pages-projects/portfolio7.html",
      category: "filter-apps"
    }
  };
  
  // Parcurgerea obiectului și crearea elementelor de portofoliu
  for (var key in obiect) {
    if (obiect.hasOwnProperty(key)) {
      var item = obiect[key];
  
      // Creează elementul col-lg-4
      var colElement = document.createElement("div");
      colElement.classList.add("col-lg-4", "col-md-6", "portfolio-item");
      colElement.classList.add(item.category);
  
      // Creează elementul portfolio-wrap
      var wrapElement = document.createElement("div");
      wrapElement.classList.add("portfolio-wrap");
  
      // Creează elementul imagine
      var imgElement = document.createElement("img");
      imgElement.src = item.src;
      imgElement.classList.add("img-fluid");
      imgElement.alt = "";
  
      // Creează elementul portfolio-info
      var infoElement = document.createElement("div");
      infoElement.classList.add("portfolio-info");
  
      // Creează elementul titlu
      var h4Element = document.createElement("h4");
      h4Element.textContent = item.titlu;
  
      // Creează elementul descriere
      var pElement = document.createElement("p");
      pElement.textContent = item.descriere;
  
      // Creează elementul portfolio-links
      var linksElement = document.createElement("div");
      linksElement.classList.add("portfolio-links");
  
      // Creează elementul link imagine
      var lightboxLink = document.createElement("a");
      lightboxLink.href = item.src;
      lightboxLink.setAttribute("data-gallery", "portfolioGallery"); // Folosește atributul data-gallery în loc de data-lightbox
      lightboxLink.classList.add("portfolio-lightbox");
      lightboxLink.title = item.titlu;
      var plusIcon = document.createElement("i");
      plusIcon.classList.add("bx", "bx-plus");
      lightboxLink.appendChild(plusIcon);
  
      // Creează elementul link pagină
      var detailsLink = document.createElement("a");
      detailsLink.href = item.pagina;
      detailsLink.setAttribute("data-gallery", "portfolioDetailsGallery");
      detailsLink.setAttribute("data-glightbox", "type: external");
      detailsLink.classList.add("portfolio-details-lightbox");
      detailsLink.title = item.titlu;
      var linkIcon = document.createElement("i");
      linkIcon.classList.add("bx", "bx-link");
      detailsLink.appendChild(linkIcon);
  
      // Adaugă elementele în ierarhia DOM
      linksElement.appendChild(lightboxLink);
      linksElement.appendChild(detailsLink);
      infoElement.appendChild(h4Element);
      infoElement.appendChild(pElement);
      infoElement.appendChild(linksElement);
      wrapElement.appendChild(imgElement);
      wrapElement.appendChild(infoElement);
      colElement.appendChild(wrapElement);
      document.querySelector(".row.portfolio-container").appendChild(colElement);
    }
  }
  