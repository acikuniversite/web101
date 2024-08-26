# React’ta TypeScript, Yaşam Döngüsü (Lifecycle) ve Hooklar

## TypeScript

TypeScript, JavaScript’in bir üst kümesi olup, statik tip kontrolü sağlar. Bu, kodun derleme aşamasında hataların yakalanmasına yardımcı olur ve daha güvenilir ve sürdürülebilir kod yazmayı kolaylaştırır. React ile TypeScript kullanımı, özellikle büyük ve karmaşık projelerde birçok avantaj sağlar.

### **React ile TypeScript Kullanımının Önemi**

1. **Tip Güvenliği**: TypeScript, değişkenlerin ve fonksiyonların hangi türde veri alacağını ve döndüreceğini belirlemenize olanak tanır. Bu, hataların erken aşamada yakalanmasını sağlar ve runtime hatalarını azaltır.
2. **Geliştirilmiş IDE Desteği**: TypeScript, kod tamamlama, hata kontrolü ve refactoring gibi özelliklerle IDE’lerin daha etkili çalışmasını sağlar. Bu, özellikle Visual Studio Code gibi editörlerde büyük avantaj sağlar.
3. **Daha İyi Dokümantasyon**: Tip tanımlamaları, kodun kendini dokümante etmesini sağlar. Bu, özellikle büyük ekiplerde çalışırken kodun anlaşılmasını kolaylaştırır.
4. **Kolay Refactoring**: TypeScript, kodun yeniden düzenlenmesini ve değişikliklerin güvenli bir şekilde yapılmasını kolaylaştırır. Tip kontrolü sayesinde, değişikliklerin tüm kod tabanında doğru bir şekilde uygulanmasını sağlar.

### **React ile TypeScript Kullanımının Faydaları**

1. **Hata Yakalama**: Derleme aşamasında hataların yakalanması, runtime hatalarını azaltır ve daha güvenilir bir uygulama sağlar.
2. **Kod Tamamlama ve IntelliSense**: IDE’ler, TypeScript ile daha iyi kod tamamlama ve IntelliSense desteği sunar, bu da geliştirici verimliliğini artırır.
3. **Daha İyi Kod Kalitesi**: TypeScript, kodun daha düzenli ve okunabilir olmasını sağlar. Tip tanımlamaları, kodun anlaşılmasını ve bakımını kolaylaştırır.
4. **Geliştirilmiş İşbirliği**: Büyük ekiplerde çalışırken, TypeScript’in sağladığı tip güvenliği ve dokümantasyon, ekip üyelerinin kodu daha kolay anlamasını ve üzerinde çalışmasını sağlar.
5. **Scalability**: TypeScript, büyük ve karmaşık projelerin yönetimini kolaylaştırır. Tip güvenliği ve modüler yapı, projelerin büyüdükçe daha yönetilebilir olmasını sağlar.

### **React ile TypeScript Kullanımının Dezavantajları**

1. **Öğrenme Eğrisi**: TypeScript, JavaScript’e göre daha karmaşık olabilir ve öğrenme süreci zaman alabilir.
2. **Ekstra Yapılandırma**: TypeScript projeleri, ek yapılandırma ve derleme adımları gerektirir. Bu, başlangıçta biraz daha fazla zaman ve çaba gerektirebilir.
3. **Boilerplate Kod**: Tip tanımlamaları ve interface’ler, bazen ekstra kod yazmayı gerektirebilir. Bu, küçük projelerde gereksiz gibi görünebilir.

### **Örnekler ve Uygulamalar**

```tsx
import React from "react";

interface Props {
  name: string;
  age: number;
}

const Greeting = ({ name, age }: Props) => {
  return (
    <div>
      <p>
        Hello, {name}! You are {age} years old.
      </p>
    </div>
  );
};

export default Greeting;
```

**Custom Hook Kullanımı**

```tsx
import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

### Sonuç

React ile TypeScript kullanımı, özellikle büyük ve karmaşık projelerde birçok avantaj sağlar. Tip güvenliği, geliştirilmiş IDE desteği, daha iyi dokümantasyon ve kolay refactoring gibi faydalar, projelerin daha sürdürülebilir ve yönetilebilir olmasını sağlar. Ancak, öğrenme eğrisi ve ek yapılandırma gereksinimleri gibi bazı dezavantajları da vardır. Bu nedenle, projenizin ihtiyaçlarına göre TypeScript kullanımı değerlendirilmelidir.

## **Yaşam Döngüsü Metotları**

React'ta Componentler, farklı aşamalardan oluşan bir yaşam döngüsünden(lifecycle) geçer. Bu aşamaların her biri, bir componentin varlığı sırasında çeşitli anlarda kod çalıştırmak için özelleştirebileceğiniz belirli yöntemler sunar.

Bu yöntemler, verileri başlatma, güncellemeleri yönetme ve gerektiğinde kaynakları toplama gibi görevleri gerçekleştirmenize yardımcı olur.

Component yaşam döngüsü yöntemlerini `useEffect` hook’u ile yönetebiliriz. `useEffect`, bileşenlerin mount, update ve unmount aşamalarında çalıştırılacak kodları tanımlamamıza olanak tanır.

Componentler için 3 temel life cycle metodumuz var:

- **componentDidMount**: Bu, bir component DOM'a eklendikten sonra çağrılır. Bir API'den veri almak veya olay dinleyicileri ayarlamak gibi ilk kurulum görevlerini gerçekleştirmek için harika bir yerdir.
- **componentDidUpdate**: Bu, bir componentin state veya props değişiklikleri nedeniyle yeniden oluşturulduktan(re-render) sonra çağrılır. Yan etkileri işlemek veya bu değişikliklere dayalı ek eylemler gerçekleştirmek için harika bir yerdir.
- **componentWillUnmount**: Bu, bir component DOM'dan kaldırılmadan hemen önce çağrılır. Zamanlayıcıları temizleme, olaylardan aboneliği kaldırma veya bellek sızıntılarını önlemek için kaynakları serbest bırakma gibi temizleme görevlerini gerçekleştirmek için çok önemli bir yerdir.

```tsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Bileşen yüklendi");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Bileşen güncellendi");
  }

  componentWillUnmount() {
    console.log("Bileşen kaldırılıyor");
  }

  render() {
    return <div>Merhaba, Dünya!</div>;
  }
}
```

```tsx
import React, { useEffect } from "react";

const BasicEffect: React.FC = () => {
  useEffect(() => {
    console.log("Component yüklendi veya yenilendi");

    return () => {
      console.log("Component kaldırılıyor");
    };
  }, []);
  return <div>Merhaba, Dünya!</div>;
};

export default BasicEffect;
```

## **Hooks**

### **useState:**

React'te state, bir bileşenin mevcut durumunu veya değerlerini temsil eden verileri ifade eder.

```tsx
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

### **useEffect:**

`useEffect` hook’u, fonksiyonel bileşenlerde yan etkileri yönetmek için kullanılır. Yan etkiler, veri çekme, DOM manipülasyonu, abonelikler ve zamanlayıcılar gibi işlemleri içerir.

1. **Temel Kullanım**

   ```tsx
   import React, { useEffect, useState } from "react";

   const BasicEffect: React.FC = () => {
     const [count, setCount] = useState<number>(0);

     useEffect(() => {
       console.log("Component mounted or updated");

       return () => {
         console.log("Component will unmount");
       };
     }, [count]); // count değiştiğinde çalışır

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   };

   export default BasicEffect;
   ```

2. **Veri Çekme**

   Veri çekme işlemlerini bileşen mount olduğunda gerçekleştirmek için `useEffect` kullanabiliriz.

   ```tsx
   import React, { useEffect, useState } from "react";

   interface Data {
     id: number;
     title: string;
   }

   const FetchData: React.FC = () => {
     const [data, setData] = useState<Data | null>(null);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch(
           "https://jsonplaceholder.typicode.com/posts/1"
         );
         const result = await response.json();
         setData(result);
         setLoading(false);
       };

       fetchData();
     }, []); // Boş bağımlılık dizisi sadece mount olduğunda çalışır

     return <div>{loading ? <p>Loading...</p> : <p>{data?.title}</p>}</div>;
   };

   export default FetchData;
   ```

3. **Abonelikler, Zamanlayıcılar ve Temizleme**

   Abonelikler ve zamanlayıcılar gibi işlemleri yönetmek için `useEffect`’in temizleme fonksiyonunu kullanabiliriz. (Aboneliklerden kasıt js içerisinde bulunan `addEventListener` tarzı yapılardır.)

   ```tsx
   import React, { useEffect, useState } from "react";

   const Timer: React.FC = () => {
     const [seconds, setSeconds] = useState<number>(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setSeconds((prevSeconds) => prevSeconds + 1);
       }, 1000);

       return () => {
         clearInterval(interval); // Temizleme işlemi
       };
     }, []); // Boş bağımlılık dizisi sadece mount ve unmount olduğunda çalışır

     return (
       <div>
         <p>Seconds: {seconds}</p>
       </div>
     );
   };

   export default Timer;
   ```

4. **Birden Fazla `useEffect` Kullanımı**

   Bir bileşende birden fazla `useEffect` kullanarak farklı yan etkileri yönetebiliriz.

   ```tsx
   import React, { useEffect, useState } from "react";

   const MultipleEffects: React.FC = () => {
     const [count, setCount] = useState<number>(0);
     const [data, setData] = useState<string | null>(null);

     useEffect(() => {
       console.log("Component mounted");
     }, []); // Sadece mount olduğunda çalışır

     useEffect(() => {
       console.log("Count updated:", count);
     }, [count]); // count değiştiğinde çalışır

     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch(
           "https://jsonplaceholder.typicode.com/posts/1"
         );
         const result = await response.json();
         setData(result.title);
       };

       fetchData();
     }, []); // Sadece mount olduğunda çalışır

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <p>Data: {data}</p>
       </div>
     );
   };

   export default MultipleEffects;
   ```

### **useReducer:**

`useReducer` hook’u, React’te karmaşık state yönetimi için kullanılan güçlü bir araçtır. `useState` hook’una benzer şekilde state yönetimi sağlar, ancak daha karmaşık state mantığı veya önceki state’e bağlı olarak yeni state gerektiğinde tercih edilir.

`useReducer`, bir reducer fonksiyonu ve başlangıç state’i alır ve bir state objesi ile dispatch fonksiyonu döner. Reducer fonksiyonu, state ve action parametrelerini alır ve yeni state’i döner.

```tsx
import React, { useReducer } from "react";

// Action türlerini tanımlama
enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

// Action arayüzü
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// State arayüzü
interface CountState {
  count: number;
}

// Reducer fonksiyonu
const counterReducer = (state: CountState, action: CountAction): CountState => {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return { ...state, count: state.count + payload };
    case CountActionKind.DECREASE:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

// Bileşen
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 1 })}
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 1 })}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
```

`useReducer` Kullanım Senaryoları

1. **Karmaşık State Mantığı**: Birden fazla state değişikliğinin bir arada yapılması gerektiğinde.
2. **State Geçmişine Bağlı Değişiklikler**: Yeni state’in önceki state’e bağlı olduğu durumlarda.
3. **Büyük Uygulamalar**: Redux gibi state yönetim kütüphanelerine benzer bir yapı kurmak istediğinizde.

**Daha Karmaşık Bir Örnek**

Bir alışveriş sepeti uygulaması düşünelim. Bu uygulamada ürün ekleme, çıkarma ve sepeti temizleme işlemleri yapacağız.

```tsx
import React, { useReducer } from "react";

// Ürün obje yapısı
interface Product {
  id: number;
  name: string;
  price: number;
}

// Sepet state yapısı
interface CartState {
  products: Product[];
}

// Action türleri
enum CartActionKind {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

// Action yapısı
interface CartAction {
  type: CartActionKind;
  payload?: Product;
}

// Reducer fonksiyonu
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionKind.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload!] };
    case CartActionKind.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload!.id
        ),
      };
    case CartActionKind.CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
};

// Component
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });

  const addProduct = (product: Product) => {
    dispatch({ type: CartActionKind.ADD_PRODUCT, payload: product });
  };

  const removeProduct = (product: Product) => {
    dispatch({ type: CartActionKind.REMOVE_PRODUCT, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CartActionKind.CLEAR_CART });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addProduct({ id: 1, name: "Product 1", price: 100 })}
      >
        Add Product 1
      </button>
      <button
        onClick={() => addProduct({ id: 2, name: "Product 2", price: 200 })}
      >
        Add Product 2
      </button>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
```

### **useMemo:**

`useMemo` hook’u, React’te performans optimizasyonu için kullanılan güçlü bir araçtır. Pahalı hesaplamaların sonucunu hatırlayarak (memoize ederek) gereksiz yeniden hesaplamaları önler. Bu, özellikle büyük veri setleri veya karmaşık hesaplamalar içeren bileşenlerde faydalıdır.

`useMemo`, bir hesaplama fonksiyonu ve bağımlılık dizisi alır. Bağımlılıklar değişmediği sürece, hesaplama fonksiyonunun sonucunu hatırlar ve yeniden hesaplamaz. Bu, bileşenin her render edildiğinde aynı hesaplamayı tekrar yapmasını önler.

```tsx
import React, { useMemo } from "react";

const ExpensiveCalculationComponent = ({ data }: { data: number[] }) => {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return data.reduce((acc, val) => acc + val, 0);
  }, [data]);

  return <p>Sum: {sum}</p>;
};

export default ExpensiveCalculationComponent;
```

Bu örnekte, `sum` değişkeni yalnızca `data` bağımlılığı değiştiğinde yeniden hesaplanır. Bu, gereksiz hesaplamaları önler ve performansı artırır.

**`useMemo` Kullanım Senaryoları**

1. **Performans Optimizasyonu**: Pahalı hesaplamaların sonucunu hatırlayarak performansı artırır.
2. **Kompleks Bileşenlerin Memoize Edilmesi**: Şartlı olarak render edilen bileşenlerin yeniden oluşturulmasını önler.
3. **Gereksiz Propagation’ı Önleme**: Çocuk bileşenlere geçirilen hesaplanmış veya türetilmiş değerlerin gereksiz güncellemelerini önler.

**Daha Karmaşık Bir Örnek**

Bir alışveriş sepeti uygulamasında, toplam fiyatı hesaplamak için `useMemo` kullanabiliriz.

```tsx
import React, { useMemo } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart = ({ products }: { products: Product[] }) => {
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
```

Bu örnekte, `totalPrice` yalnızca `products` bağımlılığı değiştiğinde yeniden hesaplanır. Bu, her render işleminde toplam fiyatın yeniden hesaplanmasını önler ve performansı artırır.

**`useMemo` ile İlgili İpuçları**

- **Doğru Bağımlılıkları Seçin**: Yanlış bağımlılıklar, gereksiz yeniden hesaplamalara veya hatalara yol açabilir.
- **Gereksiz Memoizasyonu Önleyin**: Her hesaplama için `useMemo` kullanmak performansı artırmaz, aksine karmaşıklığı artırabilir. Sadece pahalı hesaplamalar için kullanın.

### **useCallback:**

`useCallback` hook’u, React’te performans optimizasyonu için kullanılan önemli bir araçtır. Bir fonksiyonun referansını hatırlayarak (memoize ederek) gereksiz yeniden oluşturulmasını önler. Bu, özellikle fonksiyonları çocuk bileşenlere prop olarak geçirdiğimizde faydalıdır.

`useCallback`, bir fonksiyon ve bağımlılık dizisi alır. Bağımlılıklar değişmediği sürece, aynı fonksiyon referansını döner. Bu, bileşenin her render edildiğinde aynı fonksiyonun yeniden oluşturulmasını önler.

```tsx
import React, { useState, useCallback } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Boş bağımlılık dizisi, fonksiyonun sadece ilk render'da oluşturulmasını sağlar

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

Bu örnekte, `increment` fonksiyonu sadece bileşen ilk render edildiğinde oluşturulur ve sonraki render’larda aynı referans kullanılır.

**`useCallback` Kullanım Senaryoları**

1. **Çocuk Bileşenlerde Gereksiz Yeniden Render’ları Önleme**: Fonksiyonları prop olarak geçerken, her render’da yeni bir fonksiyon oluşturulmasını önler.
2. **Performans Optimizasyonu**: Pahalı hesaplamalar içeren fonksiyonların gereksiz yere yeniden oluşturulmasını önler.
3. **Memoize Edilmiş Fonksiyonlar**: `useMemo` ile birlikte kullanılarak, memoize edilmiş fonksiyonların performansını artırır.

**Daha Karmaşık Bir Örnek**

Bir alışveriş sepeti uygulamasında, ürün ekleme ve çıkarma işlemlerini optimize etmek için `useCallback` kullanabiliriz.

```tsx
import React, { useState, useCallback } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = useCallback((product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  }, []);

  const removeProduct = useCallback((productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addProduct({ id: 1, name: "Product 1", price: 100 })}
      >
        Add Product 1
      </button>
      <button
        onClick={() => addProduct({ id: 2, name: "Product 2", price: 200 })}
      >
        Add Product 2
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
```

Bu örnekte, `addProduct` ve `removeProduct` fonksiyonları sadece bağımlılıkları değiştiğinde yeniden oluşturulur. Bu, bileşenin her render edildiğinde aynı fonksiyon referanslarını kullanmasını sağlar ve performansı artırır.

`useCallback` ile İlgili İpuçları

- **Doğru Bağımlılıkları Seçin**: Yanlış bağımlılıklar, gereksiz yeniden oluşturmalara veya hatalara yol açabilir.
- **Gereksiz Kullanımı Önleyin**: Her fonksiyon için `useCallback` kullanmak performansı artırmaz, aksine karmaşıklığı artırabilir. Sadece pahalı hesaplamalar veya sıkça değişen fonksiyonlar için kullanın.

### **useRef:**

`useRef` hook’u, React’te mutable değerleri yönetmek ve DOM elemanlarına doğrudan erişim sağlamak için kullanılır. Componentler arasında **yeniden render edilmeden** değerlerin saklanmasını sağlar. Bu, özellikle DOM manipülasyonları, zamanlayıcılar ve önceki değerlerin saklanması gibi durumlarda faydalıdır.

`useRef`, bir mutable obje döner ve bu obje, bileşenler arasında yeniden render edilmeden değerleri saklayabilir. `useRef` ile oluşturulan referanslar, componentlerin yaşam döngüsü boyunca kalıcıdır ve `current` özelliği üzerinden erişilebilir.

```tsx
import React, { useRef } from "react";

const MyComponent: React.FC = () => {
  const myRef = useRef<HTMLDivElement | null>(null);

  return <div ref={myRef}>Hello, useRef!</div>;
};

export default MyComponent;
```

Bu örnekte, `myRef` adında bir referans oluşturduk ve bunu bir `div` elemanına bağladık. `myRef.current` ile bu `div` elemanına erişebiliriz.

`useRef` Kullanım Senaryoları

1. **DOM Elemanlarına Erişim**

   `useRef`, DOM elemanlarına doğrudan erişim sağlamak için kullanılır. Örneğin, bir input elemanını odaklamak için:

   ```tsx
   import React, { useRef, useEffect } from "react";

   const AutoFocusInput: React.FC = () => {
     const inputRef = useRef<HTMLInputElement | null>(null);

     useEffect(() => {
       inputRef.current?.focus();
     }, []);

     return <input ref={inputRef} />;
   };

   export default AutoFocusInput;
   ```

   Bu örnekte, `inputRef` ile input elemanına erişip, bileşen mount olduğunda odaklanmasını sağladık.

2. **Önceki Değerleri Saklama**

   `useRef`, önceki değerleri saklamak ve karşılaştırmak için kullanılabilir:

   ```tsx
   import React, { useRef, useEffect } from "react";

   interface Props {
     value: number;
   }

   const ValueChangeDetector: React.FC<Props> = ({ value }) => {
     const prevValueRef = useRef<number | undefined>();

     useEffect(() => {
       if (
         prevValueRef.current !== undefined &&
         prevValueRef.current !== value
       ) {
         console.log("Value changed:", prevValueRef.current, "->", value);
       }
       prevValueRef.current = value;
     }, [value]);

     return <div>{value}</div>;
   };

   export default ValueChangeDetector;
   ```

   Bu örnekte, `prevValueRef` ile önceki `value` değerini saklayıp, değişiklikleri tespit ettik.

3. **Zamanlayıcılar ve Abonelikler**

   `useRef`, zamanlayıcılar ve abonelikler gibi mutable değerleri saklamak için kullanılabilir:

   ```tsx
   import React, { useRef, useEffect } from "react";

   const Timer: React.FC = () => {
     const intervalRef = useRef<number | null>(null);

     useEffect(() => {
       intervalRef.current = window.setInterval(() => {
         console.log("Tick");
       }, 1000);

       return () => {
         if (intervalRef.current) {
           clearInterval(intervalRef.current);
         }
       };
     }, []);

     return <div>Timer</div>;
   };

   export default Timer;
   ```

   Bu örnekte, `intervalRef` ile bir zamanlayıcıyı saklayıp, bileşen unmount olduğunda temizledik.

4. **Mutable Değerlerin Saklanması**

   `useRef`, mutable değerleri saklamak için kullanılabilir:

   ```tsx
   import React, { useRef, useState } from "react";

   const RenderCounter: React.FC = () => {
     const renderCount = useRef<number>(0);
     const [count, setCount] = useState<number>(0);

     renderCount.current += 1;

     return (
       <div>
         <p>Render Count: {renderCount.current}</p>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   };

   export default RenderCounter;
   ```

   Bu örnekte, `renderCount` ile bileşenin kaç kez render edildiğini sakladık.

`useRef` ile İlgili İpuçları

- **Doğru Tipleri Kullanın**: TypeScript ile `useRef` kullanırken doğru tipleri belirlemek önemlidir.
- **Gereksiz Kullanımı Önleyin**: `useRef` her durumda kullanılmamalıdır. Sadece mutable değerler veya DOM manipülasyonları için kullanın.

### **useLayoutEffect:**

Bu iki hook ile ilgili her şey neredeyse aynıdır. Syntaxları tamamen aynıdır ve her ikisi de bir componentde bir şeyler değiştiğinde yan etkileri çalıştırmak için kullanılır. Tek gerçek fark, hook içindeki kodun gerçekte ne zaman çalıştırıldığıdır.

`useEffect` hookunda kod, component oluşturduktan sonra async(asynchronous) olarak çalıştırılır. Bu, bu hookun kodunun DOM ekrana boyandıktan sonra çalışabileceği anlamına gelir.

`useLayoutEffect` hooku, React DOM değişikliklerini hesapladıktan hemen sonra ancak bu değişiklikleri ekrana boyamadan (render yapmadan) önce senkronize olarak çalışır. Bu, `useLayoutEffect` kodunun boyamadan(renderdan) önce senkronize olarak çalıştığı için bir componentin boyanmasını geciktireceği, `useEffect`'in ise asenkron olduğu ve boyamayı geciktirmeyeceği anlamına gelir.

**Neden `useLayoutEffect` Kullanılmalı?**

Peki `useLayoutEffect` bir componentin render süresini geciktirecekse neden onu kullanmak isteyelim. `useLayoutEffect`'i kullanmanın en büyük nedeni, çalıştırılan kodun DOM'u kullanıcı tarafından gözlemlenebilecek şekilde doğrudan değiştirmesidir.

Örneğin, bir DOM öğesinin arka plan rengini yan etki olarak değiştirmem gerekirse, DOM'u doğrudan değiştirdiğimiz ve değişiklikler kullanıcı tarafından gözlemlenebildiği için `useLayoutEffect`'i kullanmak en iyisi olacaktır. Eğer `useEffect` kullansaydık, `useEffect` kodu çalıştırılmadan önce DOM'un render olduğu bir sorunla karşılaşabilirdik. Bu, DOM öğesinin ilk başta yanlış renkte olmasına ve daha sonra `useEffect` kodu nedeniyle doğru renge dönüşmesine neden olur.

**Muhtemelen `useLayoutEffect`'e İhtiyacınız Yok**

Önceki örnekten de görebileceğiniz gibi, `useLayoutEffect`'in kullanım alanları oldukça sınırlıdır. Genel olarak en iyisi her zaman `useEffect` kullanmak ve `useLayoutEffect`'e yalnızca `useEffect`'in DOM'unuzda titremelere veya yanlış sonuçlara neden olmasıyla ilgili bir sorunla karşılaştığınızda geçmektir.

### **Custom Hooks**

React’te custom hook’lar, tekrar eden mantığı componentlerden ayırarak daha temiz ve yeniden kullanılabilir hale getirmek için kullanılır. Custom hook’lar, diğer hook’ları kullanarak oluşturulabilir ve genellikle belirli bir işlevi yerine getiren fonksiyonlar olarak tanımlanır.
**Temel Özellikler:**

- **Fonksiyon**: Custom hook’lar bir fonksiyon olarak tanımlanır ve `use` ile başlar.
- **Hook Kullanımı**: Diğer hook’ları (veya custom hook’ları) kullanabilir.
- **tsx Döndürmez**: Custom hook’lar tsx döndürmez, sadece veri veya fonksiyon döndürür.
  **Custom Hook Yazma**
  Bir custom hook yazarken, genellikle belirli bir işlevi yerine getiren mantığı soyutlarız. Örneğin, bir veri çekme işlemi için bir custom hook yazalım.

```tsx
import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

Bu örnekte, `useFetch` adında bir custom hook oluşturduk. Bu hook, verilen URL’den veri çekmek için kullanılır ve veri, yüklenme durumu ve hata durumunu döner.
**Custom Hook Kullanımı**
Custom hook’ları componentlerde kullanmak oldukça basittir.

```tsx
import React from "react";
import useFetch from "./useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```

Bu örnekte, `useFetch` hook’unu kullanarak bir API’den veri çekiyoruz ve bu veriyi bileşende görüntülüyoruz.
**Custom Hook’ların Avantajları**

1. **Yeniden Kullanılabilirlik**: Aynı mantığı birden fazla bileşende kullanabilirsiniz.
2. **Kodun Temizlenmesi**: Bileşenlerdeki karmaşık mantığı soyutlayarak kodun okunabilirliğini artırır.
3. **Test Edilebilirlik**: Mantığı ayrı bir fonksiyona ayırarak test etmeyi kolaylaştırır.
   **Daha Karmaşık Bir Örnek**
   Bir form yönetimi için custom hook yazalım:

```tsx
import { useState } from "react";

interface FormState<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
}

const useForm = <T extends {}>(initialValues: T): FormState<T> => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
};

export default useForm;
```

Bu örnekte, `useForm` adında bir custom hook oluşturduk. Bu hook, form değerlerini yönetmek için kullanılır.
**Kullanım:**

```tsx
import React from "react";
import useForm from "./useForm";

interface FormValues {
  username: string;
  email: string;
}

const MyForm: React.FC = () => {
  const { values, handleChange, resetForm } = useForm<FormValues>({
    username: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

Bu örnekte, `useForm` hook’unu kullanarak form değerlerini yönetiyoruz ve form gönderildiğinde değerleri konsola yazdırıyoruz.
