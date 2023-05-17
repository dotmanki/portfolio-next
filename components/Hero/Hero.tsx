import { styled } from 'styled-components'

const HeroImg = styled.div`
  background-image: url('/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 13rem;
  height: 13rem;
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5%, 5%);
  transition: ${({ theme }) => theme.transition.card};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 15rem;
    height: 15rem;
  }
`

const HeroLine = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 16px;
  border: 8px solid ${({ theme }) => theme.colors.primary};
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 15rem;
    height: 15rem;
  }
`

const Hero = () => (
  <HeroLine>
    <HeroImg />
  </HeroLine>
)

export default Hero
