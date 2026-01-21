async function loadComponent(componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Component yüklenemedi: ${componentPath}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Component yükleme hatası:", error);
    return "";
  }
}

async function loadMagazineCards() {
  const swiperWrapper = document.querySelector(".magazines-swiper .swiper-wrapper");
  if (!swiperWrapper) return;

  const template = await loadComponent("components/magazine-card.html");

  swiperWrapper.innerHTML = "";

  const magazines = [
    {
      badge: "YENİ",
      badgeClass: "",
      featured: true,
      image: "images/card-img.png",
      title: "Teknoloji ve Dijital Dergisi",
      cilt: "1",
      sayi: "1",
      tarih: "Aralık 2022",
    },
    {
      badge: "YENİ",
      badgeClass: "",
      featured: false,
      image: "images/card-img.png",
      title: "Teknoloji ve Dijital Dergisi",
      cilt: "2",
      sayi: "2",
      tarih: "Haziran 2023",
    },
    {
      badge: "YENİ",
      badgeClass: "",
      featured: false,
      image: "images/card-img.png",
      title: "Teknoloji ve Dijital Dergisi",
      cilt: "3",
      sayi: "3",
      tarih: "Aralık 2024",
    },
    {
      badge: "YENİ",
      badgeClass: "",
      featured: false,
      image: "images/card-img.png",
      title: "Teknoloji ve Dijital Dergisi",
      cilt: "2",
      sayi: "4",
      tarih: "Mart 2024",
    },
  ];

  magazines.forEach((magazine) => {
    let cardHTML = template;

    cardHTML = cardHTML.replace("YENİ", magazine.badge);
    cardHTML = cardHTML.replace(
      'card-badge">',
      `card-badge ${magazine.badgeClass}">`.trim(),
    );


    if (magazine.featured) {
      cardHTML = cardHTML.replace('class="magazine-card"', 'class="magazine-card featured"');
    
      cardHTML = cardHTML.replace('<div class="card-image">', '<div class="card-image"><div class="son-sayi-badge">Son Sayı</div>');
    }

    cardHTML = cardHTML.replace("images/card-img.png", magazine.image);
    cardHTML = cardHTML.replace(
      /Teknoloji ve Dijital Dergisi/g,
      magazine.title,
    );
    cardHTML = cardHTML.replace(
      /Cilt: <strong>1<\/strong>/,
      `Cilt: <strong>${magazine.cilt}</strong>`,
    );
    cardHTML = cardHTML.replace(
      /Sayı: <strong>1<\/strong>/,
      `Sayı: <strong>${magazine.sayi}</strong>`,
    );
    cardHTML = cardHTML.replace(/Aralık 2022/, magazine.tarih);

    // Wrap in swiper-slide
    swiperWrapper.innerHTML += `<div class="swiper-slide">${cardHTML}</div>`;
  });

  // Initialize Swiper after cards are loaded
  initMagazineSwiper();
}

function initMagazineSwiper() {
  new Swiper(".magazines-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 12,
      },
    },
  });
}

async function loadArticleCards() {
  const articlesList = document.querySelector(".articles-list");
  if (!articlesList) return;

  const template = await loadComponent("components/article-card.html");

  articlesList.innerHTML = "";

  const articles = [
    {
      category: "İklim",
      type: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pages: "12-28",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
    },
    {
      category: "İklim",
      type: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pages: "29-45",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
    },
    {
      category: "İklim",
      type: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pages: "46-62",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
    },
    {
      category: "İklim",
      type: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pages: "63-79",
      authors: "Elif Başkaya Acar, Emre Taran, Halil Başar",
    },
  ];

  articles.forEach((article) => {
    let cardHTML = template;


    cardHTML = cardHTML.replace(/İklim/g, article.category);
    cardHTML = cardHTML.replace(/Araştırma Makalesi/g, article.type);
    cardHTML = cardHTML.replace(
      /Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi/g,
      article.title,
    );
    cardHTML = cardHTML.replace(/12-28/, article.pages);
    cardHTML = cardHTML.replace(
      /Elif Başkaya Acar, Emre Taran, Halil Başar/,
      article.authors,
    );

    articlesList.innerHTML += cardHTML;
  });
}

function initSearchToggle() {
  const searchButton = document.querySelector(".search-button");
  const headerButtons = document.querySelectorAll(".header-button");
  const searchInput = document.querySelector(".search-input");
  let isSearchOpen = false;

  searchButton.addEventListener("click", () => {
    isSearchOpen = !isSearchOpen;
    
    if (isSearchOpen) {
      
      headerButtons.forEach(button => {
        button.style.display = "none";
      });
      searchInput.style.display = "block";
      searchInput.focus();
    } else {
    
      headerButtons.forEach(button => {
        button.style.display = "inline-flex";
      });
      searchInput.style.display = "none";
      searchInput.value = "";
    }
  });

  // Escape tuşu ile aramayı kapat
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isSearchOpen) {
      searchButton.click();
    }
  });
}

// Hamburger Menu Toggle
function initHamburgerMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  if (!hamburgerMenu || !mobileMenu) return;
  
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
  
  // Menü linklerine tıklandığında menüyü kapat
  const mobileNavLinks = mobileMenu.querySelectorAll("a");
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
  
  // Escape tuşu ile menüyü kapat
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadMagazineCards();
  loadArticleCards();
  initSearchToggle();
  initHamburgerMenu();
});
