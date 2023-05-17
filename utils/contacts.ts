export interface Contact {
  src: string
  display: string
  image: {
    src: string
    alt: string
  }
}

export const contacts: Contact[] = [
  {
    src: 'https://www.linkedin.com/in/damian-orzusa-9975a5217/',
    display: 'Linkedin',
    image: { src: 'contacts/linkedin.svg', alt: 'linkedin' },
  },
  {
    src: 'mailto:damianorzusa2016@gmail.com',
    display: 'Email',
    image: { src: 'contacts/email.svg', alt: 'email' },
  },
  {
    src: 'https://discordapp.com/users/Manki#9453',
    display: 'Discord',
    image: { src: 'contacts/discord.svg', alt: 'discord' },
  },
  {
    src: 'https://www.instagram.com/dotmanki/',
    display: 'Instagram',
    image: { src: 'contacts/instagram.svg', alt: 'instagram' },
  },
  {
    src: 'https://github.com/dotmanki',
    display: 'Github',
    image: { src: 'contacts/github.svg', alt: 'github' },
  },
]

/* export const imageSize = { xs: 224, md: 180 }
 */
