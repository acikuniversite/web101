# Ders-06: React’ta Context API, React-Router ve State Management

## Context API

Componentler arasında veri paylaşımını kolaylaştıran ve prop drilling sorununu çözen güçlü bir araçtır.

### Context API Nedir?

Context API, React uygulamalarında global veri yönetimini kolaylaştırır. Özellikle, birden fazla componentin aynı veriye ihtiyaç duyduğu durumlarda kullanışlıdır. Context API, veriyi doğrudan component ağacının herhangi bir seviyesine geçirmemize olanak tanır, böylece prop drilling (veriyi birçok ara component üzerinden geçirme) sorununu ortadan kaldırır.

### Context API’nin Temel Componentleri

1. **Context Oluşturma**: `React.createContext` fonksiyonu ile bir context oluşturulur.
2. **Provider**: Context sağlayıcısı, veriyi component ağacına yerleştirir.
3. **Consumer**: Context tüketicisi, veriyi context’ten alır.

### Adım Adım Kullanım

### 1. Context Oluşturma

Öncelikle, bir context oluşturmalıyız. Bu, genellikle ayrı bir dosyada yapılır.

```tsx
import React, { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
```

### 2. Provider Kullanımı

Provider, context verisini component ağacına yerleştirir. Bu örnekte, tema bilgisini sağlayan bir provider oluşturacağız.

```tsx
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

### 3. Consumer Kullanımı

Consumer, context verisini kullanır. `useContext` hook’u ile context verisini alabiliriz.

```tsx
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedComponent = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemedComponent must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
```

### 4. Uygulama Yapısı

Context API’yi kullanarak temayı yönetmek için componentleri bir araya getirelim.

```tsx
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./ThemeProvider";
import ThemedComponent from "./ThemedComponent";

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

### Context API’nin Faydaları

1. [**Prop Drilling’i Önler**: Veriyi birçok ara component üzerinden geçirme ihtiyacını ortadan kaldırır](https://www.freecodecamp.org/news/react-context-api-explained-with-examples/).
2. [**Global State Yönetimi**: Uygulama genelinde kullanılacak verileri merkezi bir yerden yönetmeyi sağlar](https://www.freecodecamp.org/news/react-context-api-explained-with-examples/).
3. [**Kolay Entegrasyon**: React’in bir parçası olduğu için ek bir kütüphane yüklemeye gerek yoktur](https://www.freecodecamp.org/news/react-context-api-explained-with-examples/).

### Context API’nin Dezavantajları

1. [**Performans Sorunları**: Büyük ve sık değişen veriler için kullanıldığında performans sorunlarına yol açabilir](https://www.freecodecamp.org/news/react-context-api-tutorial-examples/).
2. [**Kompleks Yapılar**: Çok sayıda context kullanımı, kodun karmaşık hale gelmesine neden olabilir](https://www.freecodecamp.org/news/react-context-api-tutorial-examples/).

## React-Router

React uygulamalarında yönlendirme (routing) işlemlerini yönetmek için kullanılan popüler bir kütüphanedir. Tek sayfa uygulamalarında (SPA) farklı sayfalara veya componentlere yönlendirme yapmamızı sağlar.

### React Router Nedir?

React Router, URL’leri componentlerle eşleştirerek kullanıcıların farklı sayfalara veya componentlere yönlendirilmesini sağlar. Bu, uygulamanızın URL’sinin kullanıcı etkileşimlerine göre güncellenmesini ve belirli componentlerin render edilmesini sağlar.

### React Router’ın Temel Componentleri

1. **BrowserRouter**: Uygulamanızı sarmalar ve HTML5 history API’sini kullanarak URL’leri yönetir.
2. **Routes**: Yönlendirme kurallarını tanımlar.
3. **Route**: Belirli bir URL ile eşleşen componenti render eder.
4. **Link**: Kullanıcıların belirli bir URL’ye gitmesini sağlar.
5. **NavLink**: Aktif durumu belirlemek için kullanılan bir Link componentidir.
6. **useNavigate**: Programatik olarak yönlendirme yapmanızı sağlar.

### Adım Adım Kullanım

### 1. Kurulum

Öncelikle, [React Router](https://reactrouter.com/en/main/start/tutorial)’ı projenize ekleyin:

```bash
npm install react-router-dom
```

### 2. Temel Yapı

Uygulamanızın ana componentini `BrowserRouter` ile sarmalayın ve `Routes` ve `Route` componentlerini kullanarak yönlendirme kurallarını tanımlayın.

```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```

```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```

Bu örnekte, `BrowserRouter` componenti uygulamanızı sarmalar ve `Routes` componenti içinde yönlendirme kurallarını tanımlarız. `Route` componentleri, belirli URL’lerle eşleşen componentleri render eder.

### 3. Dinamik Yönlendirme

Dinamik parametreler kullanarak URL’leri daha esnek hale getirebilirsiniz.

```tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const User = () => {
  const { id } = useParams<{ id: string }>();
  return <h2>User ID: {id}</h2>;
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
```

Bu örnekte, `useParams` hook’u ile URL parametrelerini alıyoruz ve dinamik olarak kullanıcı ID’sini gösteriyoruz.

### 4. Programatik Yönlendirme

`useNavigate` hook’u ile programatik olarak yönlendirme yapabilirsiniz.

```tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

const About = () => <h2>About</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
```

Bu örnekte, `useNavigate` hook’u ile bir butona tıklanıldığında programatik olarak `/about` sayfasına yönlendiriyoruz.

### React Router’ın Faydaları

1. [**Kolay Yönlendirme**: URL’leri componentlerle eşleştirerek yönlendirme işlemlerini kolaylaştırır](https://orangeable.com/react/router).
2. [**Dinamik Parametreler**: URL parametreleri ile dinamik yönlendirme yapmayı sağlar](https://ui.dev/react-router-tutorial).
3. [**Programatik Yönlendirme**: `useNavigate` gibi hook’lar ile programatik yönlendirme yapmayı kolaylaştırır](https://ui.dev/react-router-tutorial).
4. [**Nested Routes**: İç içe yönlendirme kuralları tanımlayarak daha karmaşık yönlendirme yapıları oluşturmayı sağlar](https://ui.dev/react-router-tutorial).

### React Router’ın Dezavantajları

1. [**Öğrenme Eğrisi**: İlk başta karmaşık gelebilir ve öğrenme süreci zaman alabilir](https://ui.dev/react-router-tutorial).
2. [**Ekstra Bağımlılık**: React Router, projeye ek bir bağımlılık getirir](https://ui.dev/react-router-tutorial).

## State Yönetimi (State Management)

Uygulamanızın durumunu (state) yönetmek için kullanılan çeşitli teknikler ve araçları kapsar. State management, componentlerin nasıl render edileceğini ve kullanıcı etkileşimlerine nasıl tepki vereceğini belirler.

### Yerel State Yönetimi

Yerel state, bir componentin kendi içinde yönetilen durumudur. React’ta yerel state yönetimi için en yaygın kullanılan hook `useState`’dir. Bu, componentlerin kendi durumlarını yönetmelerini sağlar. Daha karmaşık state mantığı için **`useReducer`** hook’u kullanılabilir. Bu hook, Redux’a benzer bir şekilde çalışır ve state geçişlerini belirli eylemler (actions) üzerinden yönetir.

### Global State Yönetimi

Global state yönetimi, uygulamanın farklı componentleri arasında paylaşılan verilerin yönetimini sağlar. Bu, özellikle büyük ve karmaşık uygulamalarda önemlidir. Global state yönetimi için Context API ve üçüncü parti kütüphaneler kullanılabilir.

### **Context API**

Context API, componentler arasında veri paylaşımını kolaylaştırır ve prop drilling sorununu çözer. İşte Context API’nin kullanımı:

1. **Context Oluşturma**

   ```tsx
   import React, { createContext, useContext, useState } from "react";

   interface ThemeContextType {
     theme: string;
     toggleTheme: () => void;
   }

   const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

   export default ThemeContext;
   ```

2. **Provider Kullanımı**

   ```tsx
   import React, { useState } from "react";
   import ThemeContext from "./ThemeContext";

   const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState<string>("light");

     const toggleTheme = () => {
       setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
     };

     return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   };

   export default ThemeProvider;
   ```

3. **Consumer Kullanımı**

   ```tsx
   import React, { useContext } from "react";
   import ThemeContext from "./ThemeContext";

   const ThemedComponent = () => {
     const context = useContext(ThemeContext);

     if (!context) {
       throw new Error("ThemedComponent must be used within a ThemeProvider");
     }

     const { theme, toggleTheme } = context;

     return (
       <div
         style={{
           background: theme === "light" ? "#fff" : "#333",
           color: theme === "light" ? "#000" : "#fff",
         }}
       >
         <h1>Current Theme: {theme}</h1>
         <button onClick={toggleTheme}>Toggle Theme</button>
       </div>
     );
   };

   export default ThemedComponent;
   ```

### Üçüncü Parti Kütüphaneler ile Global State Yönetimi

**1. Redux Toolkit**

[Redux Toolkit](https://redux-toolkit.js.org/), Redux ile state yönetimini basitleştiren bir araç setidir. İşte temel adımlar:

1. **Kurulum**

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Slice Oluşturma**

   ```tsx
   import { createSlice, PayloadAction } from "@reduxjs/toolkit";

   interface CounterState {
     value: number;
   }

   const initialState: CounterState = { value: 0 };

   const counterSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
       increment: (state) => {
         state.value += 1;
       },
       decrement: (state) => {
         state.value -= 1;
       },
     },
   });

   export const { increment, decrement } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

3. **Store Yapılandırma**

   ```tsx
   import { configureStore } from "@reduxjs/toolkit";
   import counterReducer from "./counterSlice";

   const store = configureStore({
     reducer: { counter: counterReducer },
   });

   export default store;
   ```

4. **Provider Kullanımı**

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom";
   import { Provider } from "react-redux";
   import store from "./store";
   import App from "./App";

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   );
   ```

5. **Componentlerde Kullanım**

   ```tsx
   import React from "react";
   import { useSelector, useDispatch } from "react-redux";
   import { increment, decrement } from "./counterSlice";

   const Counter = () => {
     const count = useSelector(
       (state: { counter: { value: number } }) => state.counter.value
     );
     const dispatch = useDispatch();

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
       </div>
     );
   };

   export default Counter;
   ```

**2. Zustand**

[Zustand](https://zustand-demo.pmnd.rs/), hafif ve basit bir state management kütüphanesidir. İşte temel adımlar:

1. **Kurulum**

   ```bash
   npm install zustand
   ```

2. **Store Oluşturma**

   ```tsx
   import create from "zustand";

   interface CounterState {
     count: number;
     increment: () => void;
     decrement: () => void;
   }

   const useStore = create<CounterState>((set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
     decrement: () => set((state) => ({ count: state.count - 1 })),
   }));

   export default useStore;
   ```

3. **Componentlerde Kullanım**

   ```tsx
   import React from "react";
   import useStore from "./store";

   const Counter = () => {
     const { count, increment, decrement } = useStore();

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
       </div>
     );
   };

   export default Counter;
   ```

> Global state yönetimi için Context API ve üçüncü parti kütüphaneler kullanılabilir. Bu üçüncü parti kütüphaneler içinde Redux Toolkit ve Zustand dışında, Recoil, Jotai, ve MobX gibi kütüphaneler de yaygın olarak kullanılır.
