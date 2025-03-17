import React from 'react'
import Link from "next/link"
import {FaTwitter, FaInstagram} from 'react-icons/fa'

type Props = {
    containerStyles: string,
    iconStyles: string
}

const socials = [
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/officialherbode'},
    {icon: <FaTwitter/>, path: 'https://x.com/herbode'},    
]

export default function Socials({containerStyles, iconStyles}: Props) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return(
          <Link key={index} href={social.path} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={iconStyles}>{social.icon}</a>
          </Link>
        )
      })}
    </div>
  )
}