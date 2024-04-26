import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GalleryImage({params}) {
    console.log(params)
  return (
    <div>
      <Link href='/'>
        hiii
        {params.id}
      </Link>
    </div>
  )
}
