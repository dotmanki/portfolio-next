import Image from 'next/image'
import { styled } from 'styled-components'
import Button from '../Button'
import { Project, projects } from '@/utils/projects'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Link from 'next/link'
import { breakpoints } from '@/styles/globalStyles'

interface Props {
  modalActive: boolean
  setModalActive: (active: boolean) => void
  project: Project
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  & h3,
  & p {
    margin-bottom: 0.75rem;
  }
`

const ModalContent = styled.div`
  width: 18rem;
  height: 95vh;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.onPrimary};
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
    height: auto;
    padding: 1.5rem;

    & h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    overflow: hidden;
    & h3 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.1rem;
    }
  }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 18rem;
  position: relative;
  margin-bottom: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 30rem;
  }
`

const CustomButton = styled(Button)`
  color: ${({ theme }) => theme.colors.accent};
  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`

const Close = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const Modal = ({ setModalActive, modalActive, project }: Props) => {
  return (
    <>
      {modalActive && (
        <ModalContainer onClick={() => setModalActive(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Close size={26} onClick={() => setModalActive(false)} />
            <h3>{project.display}</h3>
            <p>{project.description}</p>
            <ImgContainer>
              <Image src={project.src} alt={project.alt} fill />
            </ImgContainer>
            <Link href={project.srcRepo} target='_blank'>
              <CustomButton>Ver Repo</CustomButton>
            </Link>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}
export default Modal
