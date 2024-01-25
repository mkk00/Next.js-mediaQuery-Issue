import { useIsMobile } from "@/hooks/useMediaQuery"
import styled from "@emotion/styled"

export default function Issue() {
  const isMobile = useIsMobile()

  return (
    <Div isMobile={isMobile}>
      <div>
        이슈 페이지입니다.
        <br />
        모바일 브라우저로 변경한 후 새로고침하면
        <br />
        미디어쿼리 이슈가 발생합니다.
      </div>
    </Div>
  )
}

interface Style {
  isMobile?: boolean
}

const Div = styled.div<Style>`
  background-color: #eaeaea;
  padding: ${(props) => (props.isMobile ? "20px" : "0")};
  & > div {
    margin-bottom: 10px;
  }
`
