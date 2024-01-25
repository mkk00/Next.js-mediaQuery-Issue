import styled from "@emotion/styled"
import Link from "next/link"

const Home = () => {
  return (
    <Container>
      Next.js 에서 react-responsive 라이브러리 사용 중 발생한 미디어쿼리 에러를
      해결하기 위한 페이지입니다.
      <br />
      해당 페이지로 이동해서 이슈를 확인하세요.
      <List>
        <li>
          <Link href="/issue">이슈 페이지</Link> 이슈를 확인할 수 있는
          페이지입니다.
        </li>
        <li>
          <Link href="/solution">이슈 해결</Link> 이슈를 해결한 페이지입니다.
        </li>
        <li>
          <Link href="/other">other</Link> 이슈 해결 페이지와 다른 방법으로
          이슈를 해결한 페이지입니다.
        </li>
      </List>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding: 10px;
`

const List = styled.ul`
  margin-top: 25px;

  li {
    margin-bottom: 5px;
    display: flex;
    gap: 15px;
  }
  a {
    font-size: 17px;
    font-weight: 600;
  }
`
