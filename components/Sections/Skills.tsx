import { imageSize, images } from '@/utils/skillImages'
import Image from 'next/image'
import { styled } from 'styled-components'

const StyledSkills = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const Article = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h3 {
    text-align: center;
    padding: 0.25rem;
  }
`

const ImgContainer = styled.div`
  width: ${imageSize.xs}px;
  height: ${imageSize.xs}px;
  position: relative;

  &:before {
    content: '';
    width: ${imageSize.xs}px;
    height: ${imageSize.xs}px;
    position: absolute;
    top: 0;
    top: 0;
    transform: translate(-5%, 5%);
    border: 8px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${imageSize.md}px;
    height: ${imageSize.md}px;

    &:before {
      width: ${imageSize.md}px;
      height: ${imageSize.md}px;
    }
  }
`

const StyledImage = styled(Image)`
  background-color: ${({ theme }) => theme.colors.onPrimary};
  transform: translate(5%, -5%);
  transition: ${({ theme }) => theme.transition.card};
  border-radius: 16px;
`

const Skills = () => (
  <StyledSkills id='skills'>
    {images.map((image) => (
      <Article key={image.alt}>
        <ImgContainer>
          <StyledImage src={image.src} alt={image.alt} fill />
        </ImgContainer>

        <h3>{image.display}</h3>
      </Article>
    ))}
  </StyledSkills>
)

export default Skills
