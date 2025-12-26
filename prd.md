## Bodrum Atlas Benzeri Statik Site – PRD

### 1) Amaç ve hedef kitle
- Bodrum’da site/villa yönetimi hizmetlerini tanıtan, hızli açılan statik bir kurumsal site.
- Hedef kitle: Villa ve site sahipleri, profesyonel yönetim arayan işletmeler.
- Platform: Statik HTML + CSS + hafif JS; barındırma için herhangi bir statik hosting yeterli.

### 2) Sayfa listesi ve amacı
- `index.html`: Ana sayfa; hoş geldiniz metni, kahraman görsel, hizmetler listesi, hızlı iletişim bilgisi.
- `hakkimizda.html`: Şirket tanıtımı ve deneyim özeti.
- `site-yonetimi.html`: Site yönetimi hizmet detayları.
- `villa-yonetimi.html`: Villa yönetimi hizmet detayları.
- `hizmetler.html` (opsiyonel): Tüm hizmetlerin özetlenmiş listesi.
- `iletisim.html`: İletişim bilgileri + form.
- Ortak header/footer tüm sayfalarda aynı yapıda.

### 3) Navigasyon ve footer
- Header: Logo alanı, menü: Anasayfa, Hakkımızda, Site Yönetimi, Hizmetlerimiz, İletişim.
- Üst sağ blok: E-posta ve telefon bilgisi, TR/EN bayrak ikonları.
- Footer: E-posta, telefonlar, kısa adres satırı, sosyal medya ikonları.

### 4) Dil desteği (TR/EN)
- Başlangıç: Metinler Türkçe, parantez içinde İngilizce karşılık (tek sayfa içinde).
- Uygulandı: TR/EN butonları (bayraklı) `data-lang-switch` ile; JS (`main.js`) body’e `lang-tr` / `lang-en` sınıfı ekleyip `<span class="lang lang-tr|lang-en">` bloklarını göster/gizliyor, seçim localStorage’da tutuluyor.

### 5) Tasarım ilkeleri
- Renkler: Açık mavi gökyüzü zemin veya gradyan; kartlar beyaz; hizmetler bölümünde hafif kahverengi/bej overlay; butonlar koyu gri/kahverengi, yazılar beyaz.
- Font: Google Fonts `Lato` veya `Open Sans`.
- Genişlik: Merkezde `max-width` ~1200px; yeterli padding ve boşluk.
- Grid: Hizmet ikonları 2–4 sütun; mobilde tek sütuna düşer.
- Görseller: `assets/` altında tut; hero ve arka plan görselleri optimize (webp/jpg, makul boyut).
- Kullanılan görseller: `assets/background.jpeg` tüm sayfalara sabit arka plan; `assets/Logo.png` üst barda sol tarafta.

### 5.1) İçerik ve görsel değiştirme
- Görseller: `assets/hero.jpg` (ana görsel) vb. dosyaları buraya kopyala; HTML’de `src="assets/..."`
  yolunu adlandır. Şu an hero için `assets/hero.jpg` yoksa otomatik Unsplash fallback devrede.
- Metinler: İlgili sayfadaki `<p>`, `<h1>` vb. içerikleri doğrudan düzenle (`index.html`, `hakkimizda.html` vb.).
- Renk/font değişimi: `css/styles.css` içinde kök değişkenleri (`:root`) güncelle.

### 5.2) Üst bar yerleşimi
- Sol: `assets/Logo.png` logo.
- Sağ: e-posta, telefon ve TR/EN dil düğmeleri (bayraklı), `main.js` ile dil seçimi kalıcı. Site sakini girişi kaldırıldı.

### 5.3) Dil geçişi ve ana sayfa
- Tüm sayfalarda `js/main.js` yüklü; index’e de eklendi. Body varsayılanı `lang-tr`, seçim localStorage’da saklanıyor.

### 5.4) Arka plan ve stil tonu
- Arka plan fotoğrafı daha belirgin: linear-gradient opaklığı düşürüldü, fotoğraf daha görünür.
- Hizmet kartı gradienti hafif yumuşatıldı; minimal ve lüks görünüm korunuyor.

### 6) İletişim formu gereksinimleri
- Alanlar: Ad Soyad / Name, Email, Telefon, Mesaj.
- Davranış: Boş veya hatalı alanlarda uyarı; gönderimde sayfayı yenilemeden teşekkür mesajı göster (JS, backend yok).
- Erişilebilirlik: Label/placeholder net; buton klavye ile erişilebilir.

### 7) Performans ve responsive
- Statik varlıklar; gereksiz JS yok. Görselleri sıkıştır.
- Responsive kırılımlar: ~1200px, ~992px, ~768px, ~576px; menü mobilde üst üste veya basit hamburger (ileride).

### 8) Hizmet ikonları görünürlüğü
- Ana sayfadaki hizmet ikonları 130px boyutunda büyütüldü ve hover'da %15 scale animasyonu eklendi (0.3s geçişli).
- service-icon container'a sabit boyut (130x130px) ve overflow:hidden eklendi, böylece sadece ikonlar büyüyor, kartlar genişlemiyor.

### 9) Hizmetler sayfası yeniden tasarımı
- Her hizmet kategorisi için profesyonel kartlar oluşturuldu
- Kartlara border, shadow ve hover animasyonu eklendi
- Başlıklar için alt çizgi ve accent rengi kullanıldı
- Grid düzeni 4 sütun (1200px altı 3 sütun, 900px altı 2 sütun, 600px altı 1 sütun)
- Tüm içerikler İngilizce dil desteği ile güncellendi
- Emoji'ler yerine profesyonel SVG ikonları eklendi (32x32px, accent renk)

### 10) İngilizce çeviri iyileştirmeleri
- index.html: Ana sayfa açıklama metni daha detaylı İngilizce çevirisi eklendi
- iletisim.html: Form başlığı "Get in Touch" olarak güncellendi
- iletisim.html: Form alanları "Full Name", "Your Message" olarak iyileştirildi
- Tüm sayfalarda tutarlı TR/EN çeviri sistemi kontrol edildi ve doğrulandı

### 11) İletişim formu entegrasyonu
- FormSubmit.co servisi ile form `bodrumatlasyonetim@gmail.com` adresine yönlendirildi
- Spam koruması (honeypot) eklendi
- Otomatik teşekkür maili ayarlandı
- Form validation JS ile yapılıyor
- FORM-KURULUM.md ile detaylı kurulum rehberi oluşturuldu
- İlk kullanım için aktivasyon gerekiyor (tek seferlik)

### 12) Açık işler (takip)
- FormSubmit aktivasyonunun yapılması (site yayınlandıktan sonra)
- Sosyal medya linklerinin aktif hale getirilmesi
- Site haritası (sitemap) oluşturulması

