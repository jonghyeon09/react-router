# React와 History API 사용하여 SPA Router 기능 구현하기

## 1. 요구사항

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```ts
const { push } = useRouter();
```

## 2. 구현

### RouterContext.ts

```ts
export const RouterContext = createContext<ContextValue | null>(null);
```

Router 경로를 관리 하기 위한 Context를 만들고 `Router`, `Route` 컴포넌트에서 사용합니다.

### Router.tsx

```tsx
function Router({ children }: Props) {
  const [path, setPath] = useState(location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    history.pushState("", "", path);
  };
  const contextValue = {
    path,
    changePath,
  };

  useEffect(() => {
    const handleOnpopstate = () => setPath(location.pathname);

    window.addEventListener("popstate", handleOnpopstate);

    return () => {
      window.removeEventListener("popstate", handleOnpopstate);
    };
  }, []);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}
```

`RouterContext.Provider` 컴포넌트를 사용하여 하위 컴포넌트에 `contextValue`를 전달합니다.

### Route.tsx

```tsx
function Route({ path, component }: Props) {
  const router = useContext(RouterContext);

  return router?.path === path ? component : null;
}
```

### useRouter.ts

```ts
const useRouter = () => {
  const router = useContext(RouterContext);

  const push = useCallback(
    (nextPath: string) => {
      if (router?.path === nextPath) return;

      router?.changePath(nextPath);
    },
    [router]
  );

  return { push };
};
```

`push`메서드에 path를 전달해서 `RouterContext`를 업데이트 합니다.

### 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜Route.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📂context
 ┃ ┗ 📜RouterContext.ts
 ┣ 📂hooks
 ┃ ┗ 📜useRouter.ts
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┗ 📜Root.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
