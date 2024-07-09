# Ders-03: JavaScript Temelleri ve ES6
## JavaScript Temelleri
**1. Değişkenler ve Veri Tipleri**

- **Değişken Tanımlama:** `var`, `let`, `const`
    
    ```jsx
    var a = 10;
    let b = 20;
    const c = 30;
    
    ```
    
- **Veri Tipleri:** Number, String, Boolean, Object, Array, Null, Undefined
    
    ```jsx
    let num = 42;
    let str = 'Hello';
    let bool = true;
    let obj = {name: 'Alice', age: 30};
    let arr = [1, 2, 3];
    let n = null;
    let u;
    
    ```
    

**2. Operatörler**

- **Aritmetik Operatörler:** `+`, ``, ``, `/`, `%`
    
    ```jsx
    let sum = 5 + 10;
    let diff = 10 - 5;
    
    ```
    
- **Karşılaştırma Operatörleri:** `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
    
    ```jsx
    console.log(5 == '5'); // true
    console.log(5 === '5'); // false
    
    ```
    
- **Mantıksal Operatörler:** `&&`, `||`, `!`
    
    ```jsx
    let a = true;
    let b = false;
    console.log(a && b); // false
    console.log(a || b); // true
    console.log(!a); // false
    
    ```
    

**3. Kontrol Yapıları**

- **If-Else:**
    
    ```jsx
    if (a > b) {
      console.log('a is greater than b');
    } else {
      console.log('a is not greater than b');
    }
    
    ```
    
- **Switch:**
    
    ```jsx
    let fruit = 'apple';
    switch (fruit) {
      case 'apple':
        console.log('Apple is good');
        break;
      case 'banana':
        console.log('Banana is yellow');
        break;
      default:
        console.log('Unknown fruit');
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
    

**2. Arrow Functions**

- **Tanım:** Daha kısa sözdizimine sahip fonksiyonlar.
    
    ```jsx
    const add = (a, b) => a + b;
    console.log(add(2, 3)); // 5
    
    ```
    

**3. Template Literals**

- **Tanım:** Çok satırlı stringler ve değişken interpolasyonu için kullanılır.
    
    ```jsx
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Hello, John!
    
    ```
    

**4. Destructuring Assignment**

- **Tanım:** Dizileri veya nesneleri kolayca parçalamak için kullanılır.
    
    ```jsx
    const [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2
    
    const {name, age} = {name: 'Jane', age: 25};
    console.log(name); // Jane
    console.log(age); // 25
    
    ```
    

**5. Default Parameters**

- **Tanım:** Fonksiyon parametrelerine varsayılan değerler atamak için kullanılır.
    
    ```jsx
    const multiply = (a, b = 1) => a * b;
    console.log(multiply(5)); // 5
    console.log(multiply(5, 2)); // 10
    
    ```
    

**6. Spread and Rest Operators**

- **Spread:** Bir diziyi veya nesneyi genişletir.
    
    ```jsx
    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5];
    console.log(newArr); // [1, 2, 3, 4, 5]
    
    ```
    
- **Rest:** Fonksiyon parametrelerini bir diziye toplar.
    
    ```jsx
    const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum(1, 2, 3, 4)); // 10
    
    ```
## DOM Manipülasyonu

**1. DOM Nedir?**

- **Tanım:** Document Object Model, web sayfasının yapısını temsil eden bir programlama arayüzüdür.
- **Doğası:** HTML belgesini düğümlerden oluşan bir ağaç olarak temsil eder.

**2. Element Seçimi**

- **getElementById:**
    
    ```jsx
    const element = document.getElementById('myId');
    
    ```
    
- **getElementsByClassName:**
    
    ```jsx
    const elements = document.getElementsByClassName('myClass');
    
    ```
    
- **querySelector:**
    
    ```jsx
    const element = document.querySelector('.myClass');
    
    ```
    
- **querySelectorAll:**
    
    ```jsx
    const elements = document.querySelectorAll('.myClass');
    
    ```
    

**3. İçerik ve Stil Değiştirme**

- **İçerik Değiştirme:**
    
    ```jsx
    const element = document.getElementById('myId');
    element.textContent = 'New Content';
    
    ```
    
- **Stil Değiştirme:**
    
    ```jsx
    const element = document.getElementById('myId');
    element.style.color = 'red';
    
    ```
    

**4. Olaylar (Events)**

- **Olay Dinleyicisi Ekleme:**
    
    ```jsx
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
    
    ```
    
- **Örnek:**
    
    ```html
    <button id="myButton">Click Me</button>
    <p id="myParagraph">Hello World</p>
    
    ```
    
    ```jsx
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');
    
    button.addEventListener('click', function() {
      paragraph.textContent = 'Button was clicked!';
      paragraph.style.color = 'blue';
    });
    
    ```
