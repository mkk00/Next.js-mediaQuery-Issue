# Next.js 에서 발생하는 반응형 문제 해결 과정

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcEFkL4%2FbtsD1bOTjLo%2FZdXBM04Ki0BkXmzetJMqS1%2Fimg.png" alt="모바일 반응형 문제" />

## 0. 시작하기

### install

```bash
npm i
```

### start

```bash
npm run dev
```

<br/>

\*\* 해당 이슈는 [기술블로그](https://ramincoding.tistory.com/entry/Nextjs-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EC%B4%88%EA%B8%B0-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8B%9C-%EB%AF%B8%EB%94%94%EC%96%B4%EC%BF%BC%EB%A6%AC-%EC%A0%81%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%ED%98%84%EC%83%81)에 자세히 작성되어있습니다. 해당 블로그 글을 참고해주세요.

## 1. 이슈

### 환경

`next.js`, `emotion/styled`, `react-responsive`, `vercel`

### 문제

react-responsive 라이브러리 사용 도중 `useMediaQuery` 함수의 미디어 쿼리가 초기 렌더링 시 적용되지 않는 현상 확인

## 2. 원인

### next.js 의 pre-rendering

정적 페이지에서 초기 렌더링 시 서버 측에서는 클라이언트 측의 뷰포트 크기를 알 수 없어 미디어 쿼리를 평가할 수 없다.

반면, 동적 페이지에서는 클라이언트 측에서 렌더링이 되기 때문에 미디어쿼리가 적용된다.

## 3. 해결

### useEffect

`useEffect` 를 이용해서 컴포넌트가 렌더링된 이후에 클라이언트 측에서 미디어쿼리를 추가적으로 확인해주는 방법이다. mediaQuery 훅을 다음과 같이 수정한다.

- isMobile state 추가
- useEffect 에서 모바일일 경우 isMobile state 를 업데이트
- isMobile state 반환

<br/>

> 기존 코드

```typescript
import { useMediaQuery } from "react-responsive"

const useIsMobile = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  return isMobile
}
```

<br/>

> 수정 코드

```typescript
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const mobile = useMediaQuery({ query: "(max-width: 767px)" })

  useEffect(() => {
    setIsMobile(mobile)
  }, [mobile])

  return isMobile
}
```

단점 : 새로고침 시 레이아웃이 깜빡이는 현상이 발생
(하지만 `styled-components` 를 사용한다면 `ServerStyleSheet` 를 이용해서 렌더링 이전에 스타일을 적용할 수 있다.)

<br/>

### 마운트 이후 컴포넌트 렌더링

```typescript
function Solution() {
  const isMobile = useIsMobile()
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  return <>{isMount && <Div isMobile={isMobile}>마운트된 이후에 컴포넌트를 렌더링합니다.</Div>}</>
}
```

단점 : 문제가 발생하는 모든 페이지에 코드를 삽입해야 함

<br/>

### css 미디어 쿼리

```typescript
function Other() {
  return (
    <Wrapper className="wrapper">css 미디어쿼리를 반영한 페이지입니다.</Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eaeaea;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
```

단점 : 미디어쿼리 문제가 발생하는 곳 각각에 해당하는 스타일 코드를 추가해야 함
