"use client"
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface LinkType{
    id: string
    text: string
}
export default function OnPage({htmlContent, classname}: {htmlContent: string, classname: string}) {

    const [links, setLinks] = useState<null | LinkType[]>(null)

    useEffect(() => {
      const temp = document.createElement('div')
      temp.innerHTML = htmlContent

      const headings = temp.querySelectorAll('h2, h3')

      const generatedLinks:LinkType[] = []

      headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`
        heading.id = id
        
        generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText
        })
        
      })

      setLinks(generatedLinks)

    }, [htmlContent])

    
    
  return (
    <div className={cn('hidden md:block ', classname)}>
        <div className="sticky top-6">
            <h2>On this page</h2>
            <ul className='not-prose'>
                {links && links.map((link) => {
                    return(<li key={link.id} className='pt-1'>
                        <a href={`#${link.id}`}>{link.text}</a>
                    </li>
                )})}
            </ul>
        </div>
    </div>
  )
}