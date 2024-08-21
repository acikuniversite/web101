# React’e Giriş, Bileşenler, Props ve State
## **React Nedir?**

- **Tanım**: React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmiştir.
- **Avantajlar**:
  - **Bileşen Tabanlı Mimari**: Uygulamaları küçük, bağımsız bileşenlere ayırarak yönetimi kolaylaştırır.
  - **Virtual DOM**: Performansı artırır ve daha hızlı güncellemeler sağlar.
  - **Geniş Ekosistem**: React Router, Redux gibi birçok yardımcı kütüphane ile genişletilebilir.

### **Virtual Dom**

React, tarayıcının DOM yapısına doğrudan manipüle etmek yerine bellek içi sanal bir DOM oluşturarak çalışır. Değişiklikleri gerçek tarayıcı DOM üzerine uygulamadan önce bu sanal temsil içinde gerekli manipülasyonları gerçekleştirir. React verimlidir, yalnızca değiştirilmesi gerekenleri değiştirir.

!['Virtual Dom Sample'](https://media.geeksforgeeks.org/wp-content/uploads/20230725135348/Browser-DOM-Virtual-DOM-copy.webp)

### **JSX**

- **Tanım**: JSX, JavaScript içinde HTML benzeri sözdizimi kullanmamızı sağlar.
- **Kullanım**:
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```
- **Avantajlar**:
  - **Okunabilirlik**: HTML ve JavaScript’in bir arada kullanılması, bileşenlerin okunmasını kolaylaştırır.
  - **Güçlü**: JavaScript’in tüm gücünü kullanarak dinamik içerikler oluşturulabilir.

## **İlk React Uygulaması**

- **Adımlar**:
  1. **Proje Oluşturma**: `npx create-react-app my-app` ya da `npm create vite`
  2. **Proje Yapısı**: `src` klasöründe `App.js` dosyasını inceleme.
  3. **Çalıştırma**: `npm start` / `npm run dev` komutu ile uygulamayı başlatma.
- **Örnek**:
  ```jsx
  function App() {
    return (
      <div className="App">
        <h1>Merhaba, React!</h1>
      </div>
    );
  }

  export default App;
  ```

### **Bileşenler (Components)**

Bileşenler(Components), her bir React Uygulamasının kalbidir. Bileşenleri (Components) yapı taşları olarak düşünebilirsiniz. Bu yapı taşlarını kullanarak güzel bir yapı oluşturabilirsiniz. Aynı şey React'teki bileşenler için de geçerlidir. Bu bir kullanıcı arayüzü parçasıdır. Bu bileşenleri birleştirerek bütün bir kullanıcı arayüzü oluşturabilirsiniz. Bunları özel HTML öğeleri olarak düşünebilirsiniz. Birbirlerinden bağımsız ve yalıtılmışlardır ve bu nedenle çok kolay bir şekilde korunabilir ve yönetilebilirler. Ancak en önemli şey, yeniden kullanılabilir olmalarıdır. Yani, bir React bileşenini bir kez oluşturabilir ve istediğiniz kadar kullanabilirsiniz. Bu, React uygulamalarına esneklik kazandırır.

!['Components'](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*V3ZOFh5Ed4MLCIgi6FnLmA.jpeg)

```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}</h1>;
}
```

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Merhaba, {this.props.name}</h1>;
  }
}
```

### **Props**

Props, özellikler(properties) anlamına gelir. React uygulamalarınızda ilgili verileri görüntülemek için bileşenler arasında geçirilebilen salt okunur değerlerdir.

Basit bir JavaScript fonksiyonu örneğini ele alalım. Bu fonksiyonda, a ve b olmak üzere iki parametreyi fonksiyon içinde işlemek ve her iki parametrenin toplamını döndürmek için geçiriyoruz.

```jsx
const add = (a, b) => {
  const sum = a + b;
  return sum;
};

add(5, 2);
```

> Bir bileşene veri aktarma
> Bu doğal gelmeli çünkü HTML öğrendiğinizden beri benzer bir şey yapıyorsunuz. Bir React bileşenine, bir HTML öğesi üzerinde bir öznitelik ayarladığınız gibi veri aktarırsınız.
>
> ```jsx
> <img src='' />
> <Hello name='Tyler' />
> ```

Bir bileşene(component e) bir prop ilettiğimizde, aynı şey bileşenin içinde de gerçekleşir. Prop'ları alırız, manipüle ederiz ve bir şey döndürürüz.

```jsx
export default function App() {
  return <DummyComponent name="AçıkUniversite" a={5} b={2} />;
}

const DummyComponent = (props) => {
  const sum = props.a + props.b;

  return (
    <>
      <p>My name is {props.name}</p>
      <p>The sum of the numeric props I received is {sum}</p>
    </>
  );
};
```

Buradaki React kodunda neler oluyor? DummyComponent döndüren bir App bileşenimiz var ve bu bileşene üç prop (özellik) aktardık: name, a ve b.

DummyComponent'te, bu prop'ları fonksiyon parametreleri olarak alırız ve a ile b arasında basit bir toplama işlemi gerçekleştiririz. prop'lar, bileşenimize aktardığımız özelliklere eşit özelliklere sahip bir nesne olarak alınır.

Örneğimiz için props nesnesi `{name: “AçıkUniversite”, a: 5, b: 2}` gibi görünecektir. Bu nedenle, tıpkı normal JavaScript nesnelerinde yaptığımız gibi ihtiyacımız olan özellikleri almamız gerekir.

```jsx
function Greeting(props) {
  return <h1>Merhaba, {props.name}</h1>;
}

function App() {
  return <Greeting name="Dünya" />;
}
```

### **State**

React'te state, bir bileşenin mevcut durumunu veya değerlerini temsil eden verileri ifade eder. State, React bileşenlerinin kullanıcı girdisi, API yanıtları veya bileşenin dahili durumundaki değişiklikler gibi dinamik bilgileri takip etmesini ve yönetmesini sağlar.

İşte React'in state'i hakkında önemli noktalar:

- **Dinamik Veri (Dynamic Data):** State, bir React bileşeninin yaşam döngüsü boyunca zaman içinde değişebilen verileri yönetmek için kullanılır. Bileşenlerin dinamik ve kullanıcı etkileşimlerine duyarlı olmasını sağlar.
- **Bileşene Yerel (Local to Component):** React'teki her bileşen, diğer bileşenlerin durumundan bağımsız olan kendi durumuna sahip olabilir. Bu durum kapsüllemesi, modüler ve yeniden kullanılabilir bileşenler oluşturmaya yardımcı olur.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayım: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}
```

**`useState` Kullanımında Dikkat Edilmesi Gerekenler**

- `set` fonksiyonu **state değişkenini sadece _sonraki_ render için günceller.** Eğer state değişkenini `set` fonksiyonunu çağırdıktan sonra okursanız, [hala çağrınızdan önce ekranda gördüğünüz değeri](https://tr.react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value) alacaksınız.
- Eğer sağladığınız yeni değer şu anki `state` değeri ile aynıysa, ki bu [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) karşılaştırması ile belirlenir, React **bileşeni ve alt elemanlarını yeniden render etmeyecektir.** Bu bir optimizasyon işlemidir. Her ne kadar bazı durumlarda React’in alt elemanları atlamadan önce bileşeninizi çağırması gerekse de bu durum kodunuzu etkilememelidir.
- React [state güncellemelerini toplu halde(batches) yapar.](https://tr.react.dev/learn/queueing-a-series-of-state-updates) React, ekranı **tüm olay yöneticileri çalıştıktan** ve `set` fonksyionlarını çağırdıktan sonra günceller. Böylelikle tek bir olay sırasında olacak birden fazla yeniden render engellenmiş olur. Nadiren de olsa, örneğin DOM’a erişmek istediğinizde, React’ı ekranı erken güncellemeye zorlamak için [`flushSync`](https://tr.react.dev/reference/react-dom/flushSync) kullanabilirsiniz.
- _Render sırasında_ `set` fonksiyonu yalnızca mevcut render edilen bileşenin içinde çağırılabilir. React, bileşenin çıktısını görmezden gelecektir ve hemen yeni state ile birlikte render etmeyi deneyecektir. Bu modele nadiren ihtiyaç duyulur ama bunu _önceki render’lardan gelen bilgileri saklamak_ için kullanabilirsiniz. [Aşağıdaki örneği inceleyin.](https://tr.react.dev/reference/react/useState#storing-information-from-previous-renders)
- Strict Modda React, [kazara oluşan saf olmayan şeyleri bulmanıza yardımcı olmak için](https://tr.react.dev/reference/react/useState#my-initializer-or-updater-function-runs-twice) **güncelleyici fonksiyonunuzu iki defa** çağıracaktır. Bu sadece geliştirme sırasında görülen bir davranıştır ve son ürünü etkilemez. Eğer güncelleyici fonksiyonunuz saf ise (ki öyle olmalı), bu olması gereken davranışı etkilememelidir. Yapılan çağrılardan birinin sonucu görmezden gelinecektir.

`set` fonksiyonunu çağırmak [şu anda çalışan koddaki mevcut state’i **değiştirmez**](https://tr.react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value):

```jsx
function handleClick() {
  setName("Robin");
  console.log(name); // Hala "Taylor"!
}
```

Bu fonksiyon yalnızca _sonraki_ render etme işleminden başlayarak `useState`’in ne döndüreceğini etkiler.

- **State’i bir önceki state’e göre güncelleme**
  Varsayalım `age` state’i `42` olsun. Bu yönetici `setAge(age + 1)` fonksiyonunu üç defa çağırır:
  ```jsx
  function handleClick() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
  }
  ```
  Ancak bir tıklamadan sonra `age` değeri `45` yerine `43` olacak! Bunun nedeni ise `set` fonksiyonunu çağırmanın zaten çalışmakta olan kodda `age` state değişkenini [güncellememesidir.](https://tr.react.dev/learn/state-as-a-snapshot) Yani her `setAge(age + 1)` çağrısı `setAge(43)` olur.
  Bu problemi çözmek için `setAge`’e bir sonraki state yerine **_güncelleyici fonksiyon_ iletebilirsiniz:**
  ```jsx
  function handleClick() {
    setAge((a) => a + 1); // setAge(42 => 43)
    setAge((a) => a + 1); // setAge(43 => 44)
    setAge((a) => a + 1); // setAge(44 => 45)
  }
  ```
  Burada, `a => a + 1` sizin güncelleyici fonksiyonunuzdur. Bekleyen state’i alır ve ondan bir sonraki state’i hesaplar.
- **State’teki nesneleri ve dizileri güncelleme**
  State içine nesneleri ve dizileri koyabilirsiniz. React’te, state salt-okunur olarak kabul edilir bu yüzden **mevcut nesnelerinizi _mutasyona uğratmak_ yerine _değiştirmelisiniz_**. Örneğin, state’inizde bir `form` nesnesi varsa, onu mutasyona uğratmayın:
  ```jsx
  // 🚩 State'teki nesneyi böyle mutasyona uğratmayın:
  form.firstName = "Taylor";
  ```
  Onun yerine tüm nesneyi yenisiyle değiştirin:
  ```jsx
  // ✅ State'i yeni bir nesne ile değiştirin
  setForm({ ...form, firstName: "Taylor" });
  ```

> [useState – React](https://tr.react.dev/reference/react/useState) Daha detaylı bilgi için

### **Bileşenler Arası İletişim (Props)**

- **Parent to Child**:
  ```jsx
  function Parent() {
    return <Child message="Merhaba!" />;
  }

  function Child(props) {
    return <p>{props.message}</p>;
  }
  ```
- **Child to Parent**:
  ```jsx
  function Parent() {
    const [message, setMessage] = useState("");

    return (
      <div>
        <Child onMessageChange={setMessage} />
        <p>Mesaj: {message}</p>
      </div>
    );
  }

  function Child(props) {
    return (
      <input
        type="text"
        onChange={(e) => props.onMessageChange(e.target.value)}
      />
    );
  }
  ```
  !['Props vs State'](https://1.bp.blogspot.com/-Kw0DZQeWtyk/X1ifN6WKRUI/AAAAAAAAADE/yFTazq8MGjw38wT9a_UEDNSQ0a1CT1hYwCLcBGAsYHQ/s700/statevsprops.jpg)
