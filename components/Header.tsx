import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"

const NAV_LIST = [
  { page: "이슈 페이지", link: "/" },
  { page: "이슈 해결", link: "/solution" },
]

function Header() {
  return (
    <header>
      <Nav>
        <MenuList>
          {NAV_LIST.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link}>{item.page}</Link>
            </li>
          ))}
        </MenuList>
      </Nav>
    </header>
  )
}

export default Header

const Nav = styled.nav`
  padding: 20px 0;
  border-bottom: 1px solid #aeaeae;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`
