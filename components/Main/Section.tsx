import { styled } from 'styled-components'

interface Props {
  title: string
  children: React.ReactNode
}

const StyledSection = styled.section`
  margin-bottom: 5rem;
`

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
  }
`

const Section = ({ title, children }: Props) => (
  <StyledSection>
    <Title>{title}</Title>
    {children}
  </StyledSection>
)

export default Section
