# Ders-03: JavaScript Temelleri ve ES6

## JavaScript Temelleri

**1. Değişkenler ve Veri Tipleri**

- **Değişken Tanımlama:** `var`, `let`, `const`

  ```jsx
  var name = "John";
  let age = 25;
  const isStudent = true;
  ```

- **Veri Tipleri:** Number, String, Boolean, Object, Array, Null, Undefined

  ```jsx
  let str = "Hello";
  let num = 123;
  let bool = true;
  let arr = [1, 2, 3];
  let obj = { name: "John", age: 25 };
  let nothing = null;
  let notDefined;
  ```

**2. Operatörler**

- **Aritmetik Operatörler:** `+`, `-`, `*`, `/`, `%`
  ```jsx
  let sum = 5 + 3; // 8
  let product = 4 * 2; // 8
  ```
- **Karşılaştırma Operatörleri:** `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
  ```jsx
  console.log(5 == "5"); // true
  console.log(5 === "5"); // false
  let isEqual = 5 == "5"; // true
  let isStrictEqual = 5 === "5"; // false
  ```
- **Mantıksal Operatörler:** `&&`, `||`, `!`
  ```jsx
  let a = true;
  let b = false;
  console.log(a && b); // false
  console.log(a || b); // true
  console.log(!a); // false
  let result = 5 > 3 && 2 < 4; // true
  ```

**3. Kontrol Yapıları**

- **If-Else:**
  ```jsx
  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  ```
- **Switch:**
  ```jsx
  let day = new Date().getDay();
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Other day");
  }
  ```
- **For Loop:**
  ```jsx
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```
- **While Loop:**
  ```jsx
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

## ES6+ Özellikleri

**1. Let ve Const**

- **let:** Blok kapsamlı değişken tanımlamak için kullanılır.
  ```jsx
  let x = 10;
  if (true) {
    let x = 20; // Farklı bir blokta tanımlı olduğu için farklı bir değişken
  }
  console.log(x); // 10
  ```
- **const:** Sabit değerler için kullanılır ve yeniden atanamaz.

  ```jsx
  const y = 30;
  y = 40; // Hata: const değişkenlerine yeniden atama yapılamaz
  ```

  ```jsx
  const PI = 3.141592653589793;
  PI = 3.14; // This will give an error
  PI = PI + 10; // This will also give an error

  // You can create a constant array:
  const cars = ["Saab", "Volvo", "BMW"];

  // You can change an element:
  cars[0] = "Toyota";

  // You can add an element:
  cars.push("Audi");
  ```

**2. Ok Fonksiyonları (Arrow Functions) ve Normal fonksiyonlar (ES5)**

- **Tanım:** Daha kısa sözdizimine sahip fonksiyonlar.

  ```jsx
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // 5
  ```

- **Normal Fonksiyonlar**

  ```jsx
  function add(a, b) {
  return a + b;
  }
  const multiply = function(a, b) {
  return a \* b;
  };
  ```

**3. Template Literals**

- **Tanım:** Çok satırlı stringler ve değişken interpolasyonu için kullanılır.

  ```jsx
  const name = "John";
  const greeting = `Hello, ${name}!`;
  console.log(greeting); // Hello, John!
  ```

**4. Destructuring Assignment**

- **Tanım:** Dizileri veya nesneleri kolayca parçalamak için kullanılır.

  ```jsx
  const [a, b] = [1, 2];
  console.log(a); // 1
  console.log(b); // 2

  const { name, age } = { name: "Jane", age: 25 };
  console.log(name); // Jane
  console.log(age); // 25
  ```

- **Array De-structure**

  ```jsx
  const getScores = () => {
    return [70, 80, 90];
  };

  // Normally it would go like this
  let scores = getScores();
  console.log(scores[0]); // 70
  console.log(scores[1]); // 80
  console.log(scores[2]); // 90

  //But with this it's easier
  let [x, y, z] = getScores();
  console.log(x); // 70
  console.log(y); // 80
  console.log(z); // 90
  ```

  ```jsx
  const getScores = () => {
    return [70, 80];
  };

  let [x, y, z] = getScores();

  console.log(x); // 70
  console.log(y); // 80
  console.log(z); // undefined
  ```

  ```jsx
  function getScores() {
    return [70, 80, 90, 100];
  }

  let [x, y, z] = getScores();

  console.log(x); // 70
  console.log(y); // 80
  console.log(z); // 90

  //OR
  let [x, y, ...args] = getScores();
  console.log(x); // 70
  console.log(y); // 80
  console.log(args); // [90, 100]
  ```

- **Object De-structure**

  ```jsx
  let person = {
    firstName: "John",
    lastName: "Doe",
    middleName: "C.",
    currentAge: 28,
  };

  let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;

  console.log(middleName); // 'C.'
  console.log(age); // 28
  ```

  ```jsx
  const getPerson = () => return null;

  let { firstName, lastName } = getPerson();
  console.log(firstName, lastName);
  ```

  ```jsx
  //Above code throw error like this.
  TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
  ```

  ```jsx
  //To avoid this, you can use the OR operator (||) to
  //fallback the null object to an empty object:
  let { firstName, lastName } = getPerson() || {};

  //Now, no error will occur. And the firstName and lastName will be undefined.
  ```

**5. Default Parameters**

- **Tanım:** Fonksiyon parametrelerine varsayılan değerler atamak için kullanılır.

  ```jsx
  const multiply = (a, b = 1) => a * b;
  console.log(multiply(5)); // 5
  console.log(multiply(5, 2)); // 10

  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  greet(); // Hello, Guest
  ```

**6. Spread Operators**

- **Spread:** Bu operatör üç noktadır (...). Yayma(Spread) operatörü, dizi(array), harita(map) veya küme(set) gibi yinelenebilir bir nesnenin öğelerini yaymanıza olanak tanır.
  ```jsx
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5];
  console.log(newArr); // [1, 2, 3, 4, 5]
  ```

**7. Dizi Fonksiyonları (Array Functions)**

Dizi fonksiyonları, diziler üzerinde çeşitli işlemler yapmamıza olanak tanır ve kodumuzu daha temiz ve okunabilir hale getirir.

- **forEach**
  `forEach`, bir dizi üzerinde döngü yaparak her bir eleman için belirtilen işlemi gerçekleştirir.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number) => {
    console.log(number * 2);
  });
  // Çıktı: 2, 4, 6, 8, 10
  ```

- **map**
  `map`, her bir eleman üzerinde belirtilen işlemi gerçekleştirir ve yeni bir dizi döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let doubled = numbers.map((number) => number * 2);
  console.log(doubled);
  // Çıktı: [2, 4, 6, 8, 10]
  ```

- **filter**
  `filter`, belirtilen koşulu sağlayan elemanları içeren yeni bir dizi döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log(evenNumbers);
  // Çıktı: [2, 4]
  ```

- **reduce**
  `reduce`, diziyi tek bir değere indirger. Bu, toplama, çarpma gibi işlemler için kullanılabilir.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);
  // Çıktı: 15
  ```

- **find**
  `find`, belirtilen koşulu sağlayan ilk elemanı döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let found = numbers.find((number) => number > 3);
  console.log(found);
  // Çıktı: 4
  ```

- **findIndex**
  `findIndex`, belirtilen koşulu sağlayan ilk elemanın indeksini döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let index = numbers.findIndex((number) => number > 3);
  console.log(index);
  // Çıktı: 3
  ```

- **some**
  `some`, dizide belirtilen koşulu sağlayan en az bir eleman olup olmadığını kontrol eder ve boolean bir değer döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let hasEven = numbers.some((number) => number % 2 === 0);
  console.log(hasEven);
  // Çıktı: true
  ```

- **every**
  `every`, dizideki tüm elemanların belirtilen koşulu sağlayıp sağlamadığını kontrol eder ve boolean bir değer döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let allPositive = numbers.every((number) => number > 0);
  console.log(allPositive);
  // Çıktı: true
  ```

- **includes**
  `includes`, dizinin belirtilen elemanı içerip içermediğini kontrol eder ve boolean bir değer döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let containsThree = numbers.includes(3);
  console.log(containsThree);
  // Çıktı: true
  ```

- **sort**
  `sort`, diziyi belirtilen sıraya göre sıralar. Varsayılan olarak, elemanları string olarak sıralar.

  ```jsx
  let numbers = [5, 3, 8, 1, 2];
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  // Çıktı: [1, 2, 3, 5, 8]
  ```

- **concat**
  `concat`, iki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.

  ```jsx
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let combined = arr1.concat(arr2);
  console.log(combined);
  // Çıktı: [1, 2, 3, 4, 5, 6]
  ```

- **slice**
  `slice`, dizinin belirtilen bir kısmını yeni bir dizi olarak döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let sliced = numbers.slice(1, 3);
  console.log(sliced);
  // Çıktı: [2, 3]
  ```

- **splice**
  `splice`, diziden eleman ekler veya çıkarır ve çıkarılan elemanları döner.

  ```jsx
  let numbers = [1, 2, 3, 4, 5];
  let removed = numbers.splice(2, 2);
  console.log(numbers);
  // Çıktı: [1, 2, 5]
  console.log(removed);
  // Çıktı: [3, 4]
  ```

## DOM Manipülasyonu

**DOM (Document Object Model)**, HTML ve XML belgelerinin programlanabilir bir arayüzüdür. Web sayfasındaki her öğe, belge ağacında bir düğüm olarak temsil edilir ve JavaScript kullanarak bu düğümler üzerinde değişiklikler yapabiliriz.

**1. DOM Nedir?**

- **Tanım:** DOM, bir web sayfasının yapısını temsil eden bir ağaç modelidir. Her HTML etiketi, bir düğüm (node) olarak temsil edilir ve bu düğümler arasında ebeveyn-çocuk ilişkileri vardır.
- **Doğası:** HTML belgesini düğümlerden oluşan bir ağaç olarak temsil eder.

**2. Element Seçimi**
DOM’daki öğeleri seçmek için çeşitli yöntemler kullanabiliriz:

- **getElementById**: Belirli bir ID’ye sahip öğeyi seçer.
  ```jsx
  let element = document.getElementById("myElement");
  ```
- **getElementsByClassName**: Belirli bir sınıfa sahip öğeleri seçer.
  ```jsx
  let elements = document.getElementsByClassName("myClass");
  ```
- **getElementsByTagName**: Belirli bir etiket adına sahip öğeleri seçer.
  ```jsx
  let elements = document.getElementsByTagName("div");
  ```
- **querySelector**: CSS seçicileri kullanarak ilk eşleşen öğeyi seçer.
  ```jsx
  let element = document.querySelector(".myClass");
  ```
- **querySelectorAll**: CSS seçicileri kullanarak tüm eşleşen öğeleri seçer.

  ```jsx
  let elements = document.querySelectorAll(".myClass");
  ```

**3. İçerik ve Stil Değiştirme**

- **İçerik Değiştirme:**
  ```jsx
  const element = document.getElementById("myId");
  element.textContent = "Yeni İçerik";
  element.innerHTML = "<strong>Yeni İçerik</strong>";
  ```
- **Stil Değiştirme:**
  ```jsx
  const element = document.getElementById("myId");
  element.style.color = "red";
  element.style.fontSize = "20px";
  ```

**4. Olaylar (Events)**

- **Olay Dinleyicisi Ekleme:**

  ```jsx
  const button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
  ```

- **Olay Dinleyici Kaldırma:**

  ```jsx
  function handleClick() {
    alert("Element tıklandı!");
  }

  element.addEventListener("click", handleClick);
  element.removeEventListener("click", handleClick);
  ```

- **Örnek:**

  ```html
  <button id="myButton">Click Me</button>
  <p id="myParagraph">Hello World</p>
  ```

  ```jsx
  const button = document.getElementById("myButton");
  const paragraph = document.getElementById("myParagraph");

  button.addEventListener("click", function () {
    paragraph.textContent = "Button was clicked!";
    paragraph.style.color = "blue";
  });
  ```

## Local Storage ve Session Storage

**Local Storage**

**Local Storage**, web tarayıcısında veri depolamak için kullanılan bir API’dir. Veriler tarayıcı kapatıldığında bile kalıcıdır ve yalnızca manuel olarak silindiğinde veya tarayıcı önbelleği temizlendiğinde kaybolur.

**Özellikler**:

- **Kalıcı Depolama**: Veriler tarayıcı kapatıldığında bile kalır.
- **Anahtar-Değer Çifti**: Veriler anahtar-değer çiftleri olarak saklanır.
- **5MB Depolama Alanı**: Çoğu tarayıcıda yaklaşık 5MB depolama alanı sunar.

**Kullanım Örnekleri:**

1. **Veri Kaydetme**

   ```jsx
   localStorage.setItem("username", "JohnDoe");
   ```

2. **Veri Okuma**

   ```jsx
   let username = localStorage.getItem("username");
   console.log(username); // JohnDoe
   ```

3. **Veri Silme**

   ```jsx
   localStorage.removeItem("username");
   ```

4. **Tüm Verileri Silme**

   ```jsx
   localStorage.clear();
   ```

**Session Storage**

**Session Storage**, web tarayıcısında veri depolamak için kullanılan bir diğer API’dir. Veriler yalnızca tarayıcı sekmesi veya penceresi açık olduğu sürece kalıcıdır. Sekme veya pencere kapatıldığında veriler silinir.

### Özellikler:

- **Geçici Depolama**: Veriler tarayıcı sekmesi veya penceresi kapatıldığında silinir.
- **Anahtar-Değer Çifti**: Veriler anahtar-değer çiftleri olarak saklanır.
- **5MB Depolama Alanı**: Çoğu tarayıcıda yaklaşık 5MB depolama alanı sunar.

### Kullanım Örnekleri:

1. **Veri Kaydetme**

   ```jsx
   sessionStorage.setItem("sessionID", "12345");
   ```

2. **Veri Okuma**

   ```jsx
   let sessionID = sessionStorage.getItem("sessionID");
   console.log(sessionID); // 12345
   ```

3. **Veri Silme**

   ```jsx
   sessionStorage.removeItem("sessionID");
   ```

4. **Tüm Verileri Silme**

   ```jsx
   sessionStorage.clear();
   ```

**Karşılaştırma**

| Özellik         | Local Storage                       | Session Storage                           |
| --------------- | ----------------------------------- | ----------------------------------------- |
| Kalıcılık       | Tarayıcı kapatıldığında bile kalıcı | Sekme veya pencere kapatıldığında silinir |
| Depolama Alanı  | Yaklaşık 5MB                        | Yaklaşık 5MB                              |
| Kullanım Durumu | Uzun süreli veri saklama            | Geçici veri saklama                       |

**Örnek Senaryo**

Bir kullanıcı giriş yaptıktan sonra kullanıcı adını ve oturum kimliğini saklamak isteyebilirsiniz. Kullanıcı adı Local Storage’da, oturum kimliği ise Session Storage’da saklanabilir.

```jsx
// Kullanıcı adı Local Storage'da saklanır
localStorage.setItem("username", "JohnDoe");

// Oturum kimliği Session Storage'da saklanır
sessionStorage.setItem("sessionID", "12345");

// Verileri okuma
let username = localStorage.getItem("username");
let sessionID = sessionStorage.getItem("sessionID");

console.log(`Username: ${username}, Session ID: ${sessionID}`);

// Çıkış yapıldığında verileri silme
localStorage.removeItem("username");
sessionStorage.removeItem("sessionID");
```
