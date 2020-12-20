import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Nav, NavItem, NavLink } from 'reactstrap'

const StyledLink = styled(NavLink)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2E58B3 !important;

  .nav-item:not(:last-child) & {
    margin-right: 15px;
  }

  &.active {
    color: #2E58B3 !important;
    border-bottom: 4px solid #2E58B3 !important;
  }
  
  &:hover {
    color: #5C98FF !important;
  }
`

const itens = [
  { name: "Início", link: '/' },
  { name: "Sobre a Empresa", link: "/sobre" },
  { name: "Contato", link: '/contato' },
  { name: "Web Mail", link: '/webmail' },
  { name: "Área Cliente", link: '/areacliente' },
]


export const Menu = () => {

  return (
    <Nav className="mr-0 ml-auto" navbar>
      {itens.map(link => {
        return (
          <NavItem key={link.name}>
            <StyledLink tag={Link} to={link.link} activeClassName="active">
              {link.name}
            </StyledLink>
          </NavItem>
        )
      })}
    </Nav>

  )
}
