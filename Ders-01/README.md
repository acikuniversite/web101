# Ders-01: Frontend Geliştirme ve Html-Css'e Giriş

## Frontend Geliştirme Nedir?

**Tanım ve Genel Bakış:**
Frontend geliştirme, bir web sitesinin veya web uygulamasının kullanıcı ile doğrudan etkileşime geçtiği kısmını oluşturma sürecidir. Bu, kullanıcıların tarayıcılarında gördükleri ve kullandıkları her şeyi içerir. HTML, CSS ve JavaScript kullanarak kullanıcı arayüzleri oluşturur.

**Temel Teknolojiler:**

- **HTML (HyperText Markup Language):** Web sayfalarının iskeletini oluşturur. Yapı ve içerik sağlamak için kullanılır.
    
    ```html
    <h1>Merhaba Dünya</h1>
    <p>Bu bir paragraftır.</p>
    
    ```
    
- **CSS (Cascading Style Sheets):** Web sayfalarının görünümünü ve düzenini tasarlamak için kullanılır. Renkler, yazı tipleri, düzenler ve diğer stil özelliklerini belirler.
    
    ```css
    h1 {
      color: blue;
      text-align: center;
    }
    
    p {
      font-size: 16px;
    }
    
    ```
    
- **JavaScript:** Web sayfalarına dinamik özellikler ve etkileşim eklemek için kullanılır. Olaylar, animasyonlar ve veri işleme gibi işlemleri gerçekleştirir.
    
    ```jsx
    document.querySelector('h1').addEventListener('click', function() {
      alert('Başlık tıklandı!');
    });
    
    ```
    

**Frontend Geliştiricinin Rolü:**
Frontend geliştiriciler, kullanıcı arayüzlerini tasarlar ve kodlar. Bu, hem estetik hem de işlevsel açıdan kullanıcı deneyimini optimize etmek anlamına gelir. Ayrıca, tarayıcılar arası uyumluluk ve erişilebilirlik gibi konulara da dikkat ederler.

**Araçlar ve Çerçeveler:**

- **Çerçeveler:** React, Angular, Vue.js gibi JavaScript çerçeveleri, frontend geliştirmeyi hızlandırır ve daha ölçeklenebilir hale getirir.
- **Araçlar:** Webpack, Babel, npm, Yarn gibi araçlar, kodun derlenmesini, paketlenmesini ve yönetilmesini kolaylaştırır.

### Dizaynın Frontend Geliştirmedeki Önemi

**Kullanıcı Deneyimi (UX) ve Kullanılabilirlik:**

- **Kullanıcı Merkezli Tasarım:** İyi bir tasarım, kullanıcıların ihtiyaçlarını ve beklentilerini karşılar. Kullanıcı dostu arayüzler, kullanıcıların web sitesinde rahatça gezinmesini ve istediklerini kolayca bulmalarını sağlar.
- **Kullanılabilirlik:** Tasarım, kullanıcıların siteyi etkin ve verimli bir şekilde kullanabilmesini sağlamalıdır. Bu, net navigasyon, okunabilir metinler ve anlaşılır görseller gibi özellikleri içerir.

**Görsel Çekicilik ve Markalaşma:**

- **İlk İzlenim:** Web sitesinin görsel tasarımı, kullanıcıların site hakkında ilk izlenimini oluşturur. Çekici ve profesyonel bir tasarım, kullanıcıları siteye çekebilir ve sitenin güvenilir olduğunu hissettirebilir.
- **Marka Kimliği:** Renkler, yazı tipleri, logo ve genel stil, bir markanın kimliğini yansıtır. Tutarlı bir tasarım, markanın tanınabilirliğini artırır.

**Duyarlı Tasarım (Responsive Design):**

- **Mobil Uyum:** Günümüzde kullanıcılar farklı cihazlardan (telefon, tablet, bilgisayar) web sitelerine erişiyor. Duyarlı tasarım, sitenin tüm cihazlarda iyi görünmesini ve işlevsel olmasını sağlar.
- **Medya Sorguları:** CSS medya sorguları, farklı ekran boyutlarına ve çözünürlüklere uyum sağlamak için kullanılır.
    
    ```css
    @media (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }
    
    ```
    

**Erişilebilirlik:**

- **Web Erişilebilirlik:** Tüm kullanıcıların, engelli bireyler dahil, web sitelerini kullanabilmesini sağlamak önemlidir. Bu, ekran okuyucularla uyumluluk, klavye navigasyonu ve renk kontrastı gibi unsurları içerir.
- **WAI-ARIA:** Web erişilebilirlik standartlarına uygun olarak ek açıklamalar ve etiketler sağlamak için kullanılır.
    
    ```html
    <button aria-label="Close">X</button>
    
    ```
    

**Performans ve Hız:**

- **Hızlı Yükleme:** İyi tasarlanmış bir web sitesi, hızlı yüklenir ve kullanıcıların bekleme süresini minimize eder. Görsellerin optimize edilmesi, kodun minimize edilmesi ve gereksiz kaynakların kaldırılması bu konuda yardımcı olur.
- **İnteraktiflik:** Dinamik ve etkileşimli öğeler, kullanıcı deneyimini zenginleştirir. Bu, animasyonlar, geçişler ve kullanıcı geri bildirimlerini içerebilir.

### Kullanıcı Arayüzü (UI) Tasarımının Önemi

**Kullanıcı Arayüzü (UI) Nedir?**

- **Tanım:** Kullanıcı arayüzü (UI), bir kullanıcı ile bir sistem arasındaki etkileşimi sağlayan görsel ve etkileşimli öğelerin toplamıdır. UI tasarımı, bu öğelerin estetik ve işlevsel olarak nasıl düzenleneceğini belirler.
- **Amacı:** UI, kullanıcılara sistemi kullanmaları için sezgisel ve etkili yollar sunmayı amaçlar. Kullanıcı deneyimini (UX) desteklemek için tasarlanır ve optimize edilir.

**UI Tasarımının Temel İlkeleri:**

- **Tutarlılık:** UI tasarımı, kullanıcıların daha önce karşılaştıkları öğelerle tutarlı olmalıdır. Bu, kullanıcıların arayüzü daha kolay öğrenmelerine ve kullanmalarına yardımcı olur.
    
    ```
    - Benzer işlevlere sahip butonlar, aynı stil ve renklerde olmalıdır.
    - Navigasyon menüleri, tüm sayfalarda aynı konumda ve görünümde olmalıdır.
    
    ```
    
- **Basitlik:** Arayüz, karmaşıklığı en aza indirmelidir. Kullanıcıların ihtiyaç duydukları bilgiye ve işlevlere kolayca erişebilmesi sağlanmalıdır.
    
    ```
    - Gereksiz öğeler ve süslemeler arayüzden çıkarılmalıdır.
    - Kullanıcıların tek bir işlemle amacına ulaşabilmesi için iş akışları sadeleştirilmelidir.
    
    ```
    
- **Görsel Hiyerarşi:** Bilgi ve işlevler, kullanıcıların önem sırasına göre algılamalarını kolaylaştıracak şekilde düzenlenmelidir. Bu, boyut, renk, kontrast ve yerleşim gibi görsel ipuçlarıyla sağlanır.
    
    ```
    - Başlıklar, alt başlıklardan daha büyük ve belirgin olmalıdır.
    - Önemli butonlar, daha dikkat çekici renklerde ve daha büyük boyutlarda olmalıdır.
    
    ```
    
- **Erişilebilirlik:** Arayüz, tüm kullanıcılar için erişilebilir olmalıdır. Bu, engelli kullanıcılar için ekran okuyucularla uyumlu, klavye ile kullanılabilir ve renk kontrastı yüksek tasarımlar anlamına gelir.
    
    ```
    - Görsel öğelerin yanı sıra metin alternatifleri kullanılmalıdır.
    - Tüm etkileşimli öğeler, klavye navigasyonuyla erişilebilir olmalıdır.
    
    ```
    
- **Geri Bildirim:** Kullanıcılar, gerçekleştirdikleri eylemler hakkında anında ve açık geri bildirim almalıdır. Bu, işlemin başarıyla tamamlandığını veya bir hatanın meydana geldiğini anlamalarına yardımcı olur.
    
    ```
    - Form gönderiminden sonra başarı veya hata mesajları gösterilmelidir.
    - Buton tıklandığında, butonun durumu (örneğin, tıklandığını belirten bir animasyon) kullanıcıya gösterilmelidir.
    
    ```
    

**UI Tasarım Araçları:**

- **Sketch:** UI/UX tasarımcıları için popüler bir vektör grafik düzenleme aracı.
- **Figma:** Gerçek zamanlı işbirliği ve prototipleme için kullanılan bir tasarım aracı.
- **Adobe XD:** UI/UX tasarımı ve prototipleme için kullanılan kapsamlı bir araç.

**UI ve UX İlişkisi:**

- **Farklı Roller:** UI, kullanıcı arayüzünün görsel ve etkileşimli tasarımıyla ilgilenirken, UX, genel kullanıcı deneyimiyle ilgilenir. UI, UX'in bir parçasıdır ve UX'i destekler.
- **Etkileşim:** İyi bir UI tasarımı, kullanıcıların site veya uygulama ile etkileşime geçerken olumlu bir deneyim yaşamalarını sağlar. Bu, UX'in kalitesini artırır.



## Html ve Css Temelleri
### HTML Yapısı ve Semantiği

**1. HTML Nedir?**

- **Tanım:** HyperText Markup Language, web sayfalarının iskeletini oluşturan işaretleme dilidir.
- **Tarihçe:** 1991'de Tim Berners-Lee tarafından geliştirildi.
- **Doğası:** HTML, web tarayıcılarının web sayfalarını görüntülemek için anladığı bir dil.

**2. HTML Belgelerinin Yapısı**

- **DOCTYPE:** HTML belgesinin türünü belirtir. Örneğin: `<!DOCTYPE html>`
- **html Etiketi:** Bu eleman sayfadaki tüm içeriği sarar. Bazen kök öğe olarak da bilinir.
- **head Etiketi:** HTML sayfasına dahil etmek istediğiniz ve sayfanın izleyicilere göstereceği içerik olmayan her şey için bir kap görevi görür. Buna anahtar kelimeler ve arama sonuçlarında görünecek bir sayfa açıklaması (SEO), içeriği şekillendirmek için CSS, karakter seti bildirimleri ve daha fazlası dahildir. Serinin bir sonraki makalesinde bu konuda daha fazla bilgi edineceksiniz.
- **body Etiketi: Bu, metin, resim, video, oyun, çalınabilir ses parçaları veya başka her şey dahil olmak üzere sayfada görüntülenen tüm içeriği içerir.**

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		
		<h1>My First Heading</h1>
		<p>My first paragraph.</p>
		
	</body>
</html> 
```

**3. Temel HTML Etiketleri**

- **Başlık Etiketleri:** `<h1>` - `<h6>` (Başlık seviyeleri)
- **Paragraf Etiketi:** `<p>`
- **Bağlantı Etiketi:** `<a href="URL">Link</a>`
- **Görsel Etiketi:** `<img src="image.jpg" alt="Description">`
- **Liste Etiketleri:** Sırasız `<ul><li></li></ul>`, Sıralı `<ol><li></li></ol>`

    ![Tag Yapısı](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png)

**4. HTML Elementlerinin Özellikler**

- Özellikler, öğe hakkında bilgi sağlar. Açılış etiketinin geri kalanı gibi bu özellik de içerikte görünmez ancak hem gören hem de görme engelli (yardımcı teknolojiler ve arama motorları) kullanıcılarınıza içeriğin nasıl görüneceğini tanımlamaya yardımcı olur.

    ![Attribute Yapısı](https://web.dev/static/learn/html/overview/image/an-opening-tag-attribute-363effa33af66_1920.png)


**5. HTML Semantiği**

- **Semantik HTML:** Tarayıcılar ve geliştiriciler için daha anlamlı hale getirir.
- **Örnekler:**
    - **Article:** `<article></article>`
    - **Section:** `<section></section>`
    - **Nav:** `<nav></nav>`
    - **Aside:** `<aside></aside>`
    - **Footer:** `<footer></footer>`
    - **Header:** `<header></header>`

    ![Semantic Html Örneği](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJnp5jBUlXTjj-AgoqYdPNAH0i4XvyOWeJLl3IVYwLzApd5vonev2Z5NPNggLRtp7GbseNUjKb8B5b0mzdvT3o_GS-3g-NGgcxdsUEjbVFWwbC4dp7n71k0w_GWl-qH_voeHf-LZfMjjKpdW8OEDpMIhG0azdNt9FAJEy5vBclZepigSPH7QdvXV-wpc4/s627/SemanticHTML.jpg)

### CSS Temelleri

**1. CSS Nedir?**

- **Tanım:** Cascading Style Sheets, HTML belgelerinin stil ve düzenini kontrol eden stil dilidir.
- **Doğası:** Renk, yazı tipi, yerleşim ve diğer görsel efektleri tanımlar.

**2. CSS'in HTML ile Entegrasyonu**

- **Inline CSS:** HTML etiketi içinde `style` özelliği kullanılır. Örneğin: `<p style="color: red;">Text</p>`
- **Internal CSS:** HTML belgesinin `<head>` kısmında `<style>` etiketi içinde tanımlanır.
    
    ```html
    <style>
    p { color: red; }
    </style>
    
    ```
    
- **External CSS:** Ayrı bir `.css` dosyasında tanımlanır ve `<link>` etiketi ile bağlanır.
    
    ```html
    <link rel="stylesheet" href="styles.css">
    
    ```
    

**3. Temel CSS Seçicileri**

- **Element Seçiciler:** `p { }`, `h1 { }`
- **Class Seçiciler:** `.className { }`
- **ID Seçiciler:** `#idName { }`
- **Gruplama Seçiciler:** `h1, p { }`
- **Descendant Seçiciler:** `div p { }`

**4. CSS Özellikleri**

- **Renk:** `color`, `background-color`
- **Yazı Tipi:** `font-family`, `font-size`, `font-weight`
- **Kutu Modeli:** `margin`, `padding`, `border`
- **Yerleşim:** `display`, `position`, `float`, `flex`, `grid`



## Html Yapıları için Eğlenceli Bir Kaynak
[HTML Cheat Sheet](https://htmlcheatsheet.com/)