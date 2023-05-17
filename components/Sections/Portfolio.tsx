import { Project, projects } from '@/utils/projects'
import Image from 'next/image'
import { styled } from 'styled-components'

interface Props {
  setModalActive: (value: boolean) => void
  setCurrentProject: (project: Project) => void
}

const StyledPortfolio = styled.section`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;

  & article::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      139deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.primary}
    );
    transform: scale(1.03);
    z-index: -2;
    border-radius: 16px;
  }

  & article::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      139deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.primary}
    );
    transform: scale(1.03);
    z-index: -1;
    border-radius: 16px;
    filter: blur(1px);
    animation: ${({ theme }) => theme.animations.blur} 3s infinite;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`

const Card = styled.article`
  width: 100%;
  height: 13rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.onPrimary};
  padding: 0.75rem;
  position: relative;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 22rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Display = styled.h3`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`

const Portfolio = ({ setModalActive, setCurrentProject }: Props) => (
  <StyledPortfolio id='portfolio'>
    {projects.map((project) => (
      <Card
        key={project.alt}
        onClick={() => {
          setModalActive(true), setCurrentProject(project)
        }}
      >
        <ImageContainer>
          <Image
            src={project.src}
            alt={project.alt}
            fill
            style={{ filter: 'brightness(0.5)' }}
            sizes={'100%'}
          />
        </ImageContainer>
        <Display>{project.display}</Display>
      </Card>
    ))}
  </StyledPortfolio>
)

export default Portfolio
