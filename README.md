# Profuture Teknoloji Dergisi Web Sitesi

Profuture Teknoloji Dergisi için geliştirilmiş modern ve responsive web sitesi. Akademik dergi içeriklerini kullanıcı dostu bir arayüzle sunar.

## Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Fixed Header**: Sayfa kaydırılırken üstte sabit kalır
- **Dinamik İçerik**: JavaScript ile component tabanlı yapı
- **Swiper Carousel**: Dergi kartları için kaydırılabilir galeri
- **Arama Fonksiyonu**: Header'da dinamik arama alanı
- **Modern UI/UX**: Temiz ve profesyonel tasarım

## Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla)
- Swiper.js (Carousel için)
- Google Fonts (Inter)

## Proje Yapısı

```
zeplin-creative-case/
├── components/          # Yeniden kullanılabilir component'ler
│   ├── article-card.html
│   ├── article-card.css
│   ├── magazine-card.html
│   └── magazine-card.css
├── css/                # Ana stil dosyaları
│   └── style.css
├── js/                 # JavaScript dosyaları
│   └── script.js
├── icons/              # SVG ikonlar
├── images/             # Görseller ve logo
├── index.html          # Ana HTML dosyası
└── README.md
```

## Kurulum

1. Projeyi klonlayın veya indirin
2. `index.html` dosyasını tarayıcınızda açın

Proje statik HTML dosyalarından oluştuğu için herhangi bir sunucu kurulumu gerektirmez.

## Kullanım

### Component Yükleme

Component'ler JavaScript ile dinamik olarak yüklenir. `js/script.js` dosyasındaki fonksiyonlar component'leri otomatik olarak sayfaya entegre eder.

### Dergi Kartları

Dergi kartları Swiper.js ile kaydırılabilir bir carousel içinde gösterilir. Her kaydırmada 3 kart görüntülenir.

### Makale Kartları

Makale kartları liste halinde gösterilir ve her kart içerik bilgilerini, yazarları ve etkileşim butonlarını içerir.

## Bölümler

- **Hero Section**: Ana başlık ve son sayı bilgileri
- **Hakkında**: Dergi amacı ve kapsamı
- **Sayılar**: Dergi sayılarının carousel görünümü
- **Makale Çağrısı**: Güncel makale çağrıları
- **Güncel Yazılar**: Son yayınlanan makaleler
- **Footer**: İletişim bilgileri ve yasal uyarılar

## Özelleştirme

### Renkler

Ana renkler `css/style.css` dosyasında tanımlıdır:
- Birincil: `#273d89`
- İkincil: `#a8b95e`
- Vurgu: `#DB0D15`

### Fontlar

Proje Inter font ailesini kullanır. Google Fonts üzerinden yüklenir.

---

# Profuture Technology Journal Website

Modern and responsive website developed for Profuture Technology Journal. Presents academic journal content with a user-friendly interface.

## Features

- **Responsive Design**: Perfect appearance on all devices
- **Fixed Header**: Stays fixed at the top while scrolling
- **Dynamic Content**: Component-based structure with JavaScript
- **Swiper Carousel**: Scrollable gallery for journal cards
- **Search Function**: Dynamic search field in header
- **Modern UI/UX**: Clean and professional design

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)
- Swiper.js (for Carousel)
- Google Fonts (Inter)

## Project Structure

```
zeplin-creative-case/
├── components/          # Reusable components
│   ├── article-card.html
│   ├── article-card.css
│   ├── magazine-card.html
│   └── magazine-card.css
├── css/                # Main style files
│   └── style.css
├── js/                 # JavaScript files
│   └── script.js
├── icons/              # SVG icons
├── images/             # Images and logo
├── index.html          # Main HTML file
└── README.md
```

## Installation

1. Clone or download the project
2. Open `index.html` in your browser

The project consists of static HTML files and does not require any server setup.

## Usage

### Component Loading

Components are loaded dynamically via JavaScript. Functions in `js/script.js` automatically integrate components into the page.

### Journal Cards

Journal cards are displayed in a scrollable carousel using Swiper.js. Three cards are displayed per scroll.

### Article Cards

Article cards are displayed in a list format, with each card containing content information, authors, and interaction buttons.

## Sections

- **Hero Section**: Main title and latest issue information
- **About**: Journal purpose and scope
- **Issues**: Carousel view of journal issues
- **Call for Papers**: Current call for papers
- **Current Articles**: Recently published articles
- **Footer**: Contact information and legal notices

## Customization

### Colors

Main colors are defined in `css/style.css`:
- Primary: `#273d89`
- Secondary: `#a8b95e`
- Accent: `#DB0D15`

### Fonts

The project uses the Inter font family, loaded via Google Fonts.

