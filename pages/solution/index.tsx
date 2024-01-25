import { useIsMobile } from "@/hooks/useMediaQuery-Refact"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

export default function Solution() {
  const isMobile = useIsMobile()

  return (
    <Div isMobile={isMobile}>
      <div>
        이슈가 해결된 페이지입니다.
        <br />
        isMount 가 true 일 때만 컴포넌트를 렌더링합니다.
        <br />
        모바일 브라우저로 변경한 후 새로고침해보세요.
      </div>
    </Div>
  )
}

const Div = styled.div<{ isMobile: boolean }>`
  background-color: #eaeaea;
  padding: ${(props) => (props.isMobile ? "20px" : "0")};
  & > div {
    margin-bottom: 10px;
  }
`

export function Solution2() {
  const isMobile = useIsMobile()
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  return (
    <>{isMount && <Div isMobile={isMobile}>두번째 해결 방법입니다.</Div>}</>
  )
}
