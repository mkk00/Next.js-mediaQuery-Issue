import styled from "@emotion/styled"

export default function Other() {
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
