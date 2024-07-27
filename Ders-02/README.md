# Ders-02: İleri Seviye Css Teknikleri
## Flexbox ve Grid Layouts

**1. Flexbox (Flexible Box Layout)**

**Tanım:** Flexbox, kutu düzenlemeyi kolaylaştıran ve esnek bir yerleşim sistemi sunan CSS3 modülüdür. Tek boyutlu (sütun veya satır) yerleşimler için idealdir.

**Özellikler ve Kullanım:**

- **Konteyner ve Öğeler:** Flexbox, bir konteyner ve içindeki öğelerden oluşur. Konteyner `display: flex;` ile tanımlanır.
    
    ```css
    .flex-container {
      display: flex;
    }
    
    ```
    
- **Esnek Yön (Flex Direction):** Öğelerin yerleşim yönünü belirler (`row`, `column`, `row-reverse`, `column-reverse`).
    
    ```css
    .flex-container {
      flex-direction: row; /* Varsayılan */
    }
    
    ```
    
- **Öğelerin Sarılması (Flex Wrap):** Öğelerin satırda taşma durumunda sarılmasını sağlar.
    
    ```css
    .flex-container {
      flex-wrap: wrap;
    }
    
    ```
    
- **Hizalama (Justify Content):** Öğelerin ana eksen boyunca hizalanmasını sağlar.
    
    ```css
    .flex-container {
      justify-content: center; /* flex-start, flex-end, space-between, space-around, space-evenly */
    }
    
    ```
    
- **Öğelerin Hizalanması (Align Items):** Öğelerin çapraz eksen boyunca hizalanmasını sağlar.
    
    ```css
    .flex-container {
      align-items: center; /* flex-start, flex-end, stretch, baseline */
    }
    
    ```
    
- **Örnek:**
    
    ```html
    <div class="flex-container">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
    </div>
    
    ```
    
    ```css
    .flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    
    .flex-item {
      background-color: lightcoral;
      padding: 20px;
      margin: 10px;
    }
    
    ```

**2. CSS Grid Layout**

**Tanım:** CSS Grid Layout, iki boyutlu (satır ve sütun) yerleşim düzeni oluşturmaya olanak tanıyan CSS modülüdür.

**Özellikler ve Kullanım:**

- **Konteyner ve Öğeler:** Grid düzeni bir konteyner ve içindeki öğelerden oluşur. Konteyner `display: grid;` ile tanımlanır.
    
    ```css
    .grid-container {
      display: grid;
    }
    
    ```
    
- **Grid Şablonları (Grid Templates):** Satır ve sütun şablonlarını belirler.
    
    ```css
    .grid-container {
      grid-template-columns: repeat(3, 1fr); /* Üç eşit sütun */
      grid-template-rows: 100px 200px; /* İlk satır 100px, ikinci satır 200px */
    }
    
    ```
    
- **Boşluklar (Gap):** Satır ve sütunlar arasındaki boşlukları ayarlar.
    
    ```css
    .grid-container {
      gap: 10px;
    }
    
    ```
    
- **Öğelerin Yerleşimi (Grid Item Placement):** Öğelerin grid içinde belirli hücrelerde yerleşmesini sağlar.
    
    ```css
    .grid-item {
      grid-column: 1 / 3; /* 1. sütundan başlayıp 3. sütuna kadar uzanır */
      grid-row: 1 / 2; /* 1. satırda yer alır */
    }
    
    ```
    
- **Örnek:**
    
    ```html
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
    
    ```
    
    ```css
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 100px 200px;
      gap: 10px;
    }
    
    .grid-item {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }
    
    ```


## CSS Animasyonları ve Geçişler

**1. CSS Geçişler (Transitions)**

**Tanım:** CSS geçişler, CSS özelliklerinin zaman içinde değişimini pürüzsüz bir şekilde gerçekleştirir.

**Özellikler ve Kullanım:**

- **transition-property:** Hangi CSS özelliğinin geçiş yapacağını belirtir.
    
    ```css
    .box {
      transition-property: width;
    }
    
    ```
    
- **transition-duration:** Geçişin ne kadar süreceğini belirtir.
    
    ```css
    .box {
      transition-duration: 2s;
    }
    
    ```
    
- **transition-timing-function:** Geçişin hız eğrisini belirtir (ease, linear, ease-in, ease-out, ease-in-out).
    
    ```css
    .box {
      transition-timing-function: ease;
    }
    
    ```
    
- **transition-delay:** Geçişin ne kadar süre sonra başlayacağını belirtir.
    
    ```css
    .box {
      transition-delay: 1s;
    }
    
    ```
    
- **Örnek:**
    
    ```html
    <div class="box"></div>
    
    ```
    
    ```css
    .box {
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      transition: width 2s ease;
    }
    
    .box:hover {
      width: 200px;
    }
    
    ```
    
**2. CSS Animasyonları (Animations)**

**Tanım:** CSS animasyonları, HTML öğelerinin belirli bir süre içinde animasyonlu bir şekilde değişmesini sağlar.

**Özellikler ve Kullanım:**

- **@keyframes:** Animasyonun adımlarını tanımlar.
    
    ```css
    @keyframes example {
      from { background-color: red; }
      to { background-color: yellow; }
    }
    
    ```
    
- **animation-name:** Kullanılacak animasyonun adını belirtir.
    
    ```css
    .box {
      animation-name: example;
    }
    
    ```
    
- **animation-duration:** Animasyonun süresini belirtir.
    
    ```css
    .box {
      animation-duration: 4s;
    }
    
    ```
    
- **animation-timing-function:** Animasyonun hız eğrisini belirtir.
    
    ```css
    .box {
      animation-timing-function: ease;
    }
    
    ```
    
- **animation-delay:** Animasyonun ne kadar süre sonra başlayacağını belirtir.
    
    ```css
    .box {
      animation-delay: 1s;
    }
    
    ```
    
- **animation-iteration-count:** Animasyonun kaç kez tekrarlanacağını belirtir.
    
    ```css
    .box {
      animation-iteration-count: infinite;
    }
    
    ```
    
- **animation-direction:** Animasyonun yönünü belirtir (normal, reverse, alternate, alternate-reverse).
    
    ```css
    .box {
      animation-direction: alternate;
    }
    
    ```
    
- **Örnek:**
    
    ```html
    <div class="box"></div>
    
    ```
    
    ```css
    @keyframes example {
      0% { transform: translateX(0); }
      50% { transform: translateX(100px); }
      100% { transform: translateX(0); }
    }
    
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      animation: example 4s infinite;
    }
    
    ```

## Responsive Tasarımın Temelleri

**1. Responsive Tasarım Nedir?**

- **Tanım:** Farklı ekran boyutlarına ve cihazlara uyum sağlayan web tasarımı.
- **Doğası:** Kullanıcı deneyimini iyileştirmek için esnek ve dinamik yerleşim düzenleri kullanır.

![Ekran Boyutları](https://i.pinimg.com/originals/74/71/f1/7471f15602f673c1c58b235e11439e1e.png)


**2. Media Queries Kullanımı**

- **Tanım:** Ekran boyutlarına göre stil tanımlamayı sağlar.
- **Örnek:**
    
    ```css
    @media (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }
    
    ```
    

**3. Flexbox ve Grid Layout Sistemleri**

- **Flexbox:** Tek boyutlu (satır veya sütun) yerleşim sistemi.
    - **Örnek:**
        
        ```css
        .container {
          display: flex;
          flex-direction: row;
        }
        
        ```
        
- **Grid:** İki boyutlu yerleşim sistemi.
    - **Örnek:**
        
        ```css
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        
        ```
        

**4. Responsive İmajlar ve Yazı Tipleri**

- **İmajlar:** Yüzde veya viewport birimleri ile boyutlandırma.
    - **Örnek:**
        
        ```css
        img {
          max-width: 100%;
          height: auto;
        }
        
        ```
        
- **Yazı Tipleri:** Responsive birimler (em, rem, vw, vh) kullanma.
    - **Örnek:**
        
        ```css
        body {
          font-size: 2vw;
        }
        
        ```


## Css için Eğlenceli Kaynaklar
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
