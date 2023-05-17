import { styled } from 'styled-components'

const Header = styled.header`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 5rem;
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 2rem;
    margin-bottom: 7rem;
  }
`

export default Header
