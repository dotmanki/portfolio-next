import { styled } from 'styled-components'
import Button from '../Button'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  description: string
}

const StyledDisplay = styled.div`
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 65%;
    order: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 55%;
    & h1 {
      font-size: 3rem;
    }

    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.25rem;
    }
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2.25rem;
`

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin-bottom: 1.25rem;
`

const Display = ({ title, subtitle, description }: Props) => (
  <StyledDisplay>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
    <Description>{description}</Description>
    <a href='#contact'>
      <Button>Contactame</Button>
    </a>
  </StyledDisplay>
)

export default Display
