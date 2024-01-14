import styled from "@emotion/styled"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`
