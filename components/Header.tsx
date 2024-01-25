import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

const NAV_LIST = [
  { page: "이슈 페이지", link: "/issue" },
  { page: "이슈 해결", link: "/solution" },
  { page: "Other", link: "/other" },
]

function Header() {
  const router = useRouter()

  return (
    <header>
      <Nav>
        <a onClick={() => router.push("/")}>홈</a>
        <MenuList>
          {NAV_LIST.map((item, idx) => (
            <Li key={idx} isActive={router.pathname.includes(item.link)}>
              <Link href={item.link}>{item.page}</Link>
            </Li>
          ))}
        </MenuList>
      </Nav>
    </header>
  )
}

export default Header

const Nav = styled.nav`
  padding: 10px 0;
  border-bottom: 1px solid #aeaeae;
  display: flex;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
`

const Li = styled.li<{ isActive: boolean }>`
  a {
    color: ${(props) => (props.isActive ? "blue" : "black")};
    text-decoration: ${(props) => (props.isActive ? "underline" : "inherit")};
  }
`
