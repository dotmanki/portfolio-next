import { styled } from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2em;
  padding: 0;

  & li {
    font-size: 1.125rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    list-style: none;
  }

  & li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    & li {
      font-size: 1.25rem;
    }
  }
`

const Nav = styled.nav`
  width: 100%;
  margin-bottom: 1rem;
`

const Navbar = ({ children }: Props) => (
  <Nav>
    <Ul>{children}</Ul>
  </Nav>
)

export default Navbar
