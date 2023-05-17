import { styled } from 'styled-components'

const Button = styled.button`
  width: 9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
  margin: 0 0.5rem 0.5rem 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverAccent};
    border: 2px solid ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 12rem;
    font-size: 1rem;
  }
`

export default Button
