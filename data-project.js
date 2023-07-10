document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var itemId = urlParams.get('item');
  
    // Obiectul cu datele proiectelor
    var obiect = {
      item1: {
        src: "assets/img/portfolio/portfolio-1.png",
        titlu: "Titlu 1",
        descriere: "Descriere 1",
        category: "Web design",
        client: "ASU Company",
        projectDate: "01 March, 2020",
        projectURL: "www.example.com"
      },
      item2: {
        src: "assets/img/portfolio/rentappdesign.png",
        titlu: "Titlu 2",
        descriere: "Descriere 2",
        category: "Card design",
        client: "XYZ Company",
        projectDate: "15 April, 2021",
        projectURL: "www.example.com"
      },
      item3: {
        src: "assets/img/portfolio/rentappdesign.png",
        titlu: "Titlu 3",
        descriere: "Descriere 3",
        category: "Web development",
        client: "ABC Company",
        projectDate: "30 June, 2022",
        projectURL: "www.example.com"
      }
    };
  
    var item = obiect[itemId];
  
    if (item) {
      var portfolioTitle = document.querySelector('.portfolio-title');
      var portfolioSlider = document.querySelector('.portfolio-details-slider');
      var swiperWrapper = portfolioSlider.querySelector('.swiper-wrapper');
      var projectInfoList = document.querySelector('.portfolio-info ul');
  
      portfolioTitle.textContent = item.titlu;
  
      for (var i = 1; i <= 3; i++) {
        var swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperWrapper.appendChild(swiperSlide);
  
        var img = document.createElement('img');
        img.src = 'assets/img/portfolio/portfolio-details-' + i + '.jpg';
        img.alt = '';
        swiperSlide.appendChild(img);
      }
  
      var categoryItem = document.createElement('li');
      categoryItem.innerHTML = '<strong>Category</strong>: ' + item.category;
      projectInfoList.appendChild(categoryItem);
  
      var clientItem = document.createElement('li');
      clientItem.innerHTML = '<strong>Client</strong>: ' + item.client;
      projectInfoList.appendChild(clientItem);
  
      var projectDateItem = document.createElement('li');
      projectDateItem.innerHTML = '<strong>Project date</strong>: ' + item.projectDate;
      projectInfoList.appendChild(projectDateItem);
  
      var projectURLItem = document.createElement('li');
      projectURLItem.innerHTML = '<strong>Project URL</strong>: <a href="#">' + item.projectURL + '</a>';
      projectInfoList.appendChild(projectURLItem);
  
      var projectDescription = document.querySelector('.portfolio-info p');
      projectDescription.textContent = item.descriere;
    }
  });
  