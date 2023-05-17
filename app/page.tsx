'use client'

import Display from '@/components/Hero/Display'
import Header from '@/components/Hero/Header'
import Hero from '@/components/Hero/Hero'
import Section from '@/components/Main/Section'
import Modal from '@/components/Modal/Modal'
import Navbar from '@/components/Nav/Navbar'
import Contact from '@/components/Sections/Contact'
import Portfolio from '@/components/Sections/Portfolio'
import Skills from '@/components/Sections/Skills'
import {
  GlobalStyle,
  colorPalette,
  blurAnimation,
  breakpoints,
  transitionCard,
} from '@/styles/globalStyles'
import { projects } from '@/utils/projects'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  const [modalActive, setModalActive] = useState(false)
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <ThemeProvider
      theme={{
        colors: colorPalette,
        animations: { blur: blurAnimation },
        breakpoints,
        transition: { card: transitionCard },
      }}
    >
      <GlobalStyle />
      <Navbar>
        <li>
          <a href='#home'>Inicio</a>
        </li>
        <li>
          <a href='#skills'>Habilidades</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contacto</a>
        </li>
      </Navbar>
      <Header>
        <Display
          title='Damian Orzusa'
          subtitle='Desarrollador Web Frontend'
          description='Soy un programador web con suma creatividad y profesionalidad,
          aplicando buenas practicas en cada proyecto realizado.'
        />
        <Hero />
      </Header>
      <main>
        <Section title='Habilidades'>
          <Skills />
        </Section>
        <Section title='Portfolio'>
          <Portfolio
            setModalActive={setModalActive}
            setCurrentProject={setCurrentProject}
          />
        </Section>

        <Section title='Contacto'>
          <Contact></Contact>
        </Section>
      </main>

      <Modal
        setModalActive={setModalActive}
        modalActive={modalActive}
        project={currentProject}
      />
    </ThemeProvider>
  )
}
