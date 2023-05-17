import { contacts } from '@/utils/contacts'
import { imageSize } from '@/utils/skillImages'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from 'styled-components'

const StyledContact = styled.section`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    & h3 {
      margin-bottom: 2rem;
    }
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
  transition: ${({ theme }) => theme.transition.card};
  transition-duration: 0.5s;
  border-radius: 16px;
  color: red;

  &:hover {
    transform: translate(5%, -5%);
  }
`

const Contact = () => (
  <StyledContact id='contact'>
    {contacts.map((contact) => (
      <Article key={contact.src}>
        <Link href={contact.src} target='_blank'>
          <ImgContainer>
            <StyledImage src={contact.image.src} alt={contact.image.alt} fill />
          </ImgContainer>
        </Link>

        <h3>{contact.display}</h3>
      </Article>
    ))}
  </StyledContact>
)

export default Contact
