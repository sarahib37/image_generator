"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { 
    NavigationMenu, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    navigationMenuTriggerStyle 
} from './ui/navigation-menu'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type Props = {}

export default function Header({}: Props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='fixed top-0 w-full p-6 md:p-2 lg:px-12 text-white flex justify-between items-center z-50 bg-transparent backdrop-blur-sm'>
        <div className='flex items-center gap-3 cursor-pointer hover:text-primary-hover'>
            <Image src='/Logo.webp' alt='Herbode Logo' width='100' height='100' className='rounded'/>
        </div>

        <nav className='hidden md:flex items-center space-x-6'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href='/' legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href='/about' legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href='/blog' legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href='/contact' legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none"
        >
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
        
        {isOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center gap-8 transition-all duration-300">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} 
              className="text-2xl text-white font-semibold hover:text-accent transition-all p-3"
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)} 
              className="text-2xl text-white font-semibold hover:text-accent transition-all p-3"
            >
              About
            </Link> 

            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)} 
              className="text-2xl text-white font-semibold hover:text-accent transition-all p-3"
            >
              Blog
            </Link> 

            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="text-2xl text-white font-semibold hover:text-accent transition-all p-3"
            >
              Contact
            </Link> 

            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              ✕
            </button>
          </nav>
        )}

    </header>
  ) 
}