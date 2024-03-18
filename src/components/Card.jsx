import Link from 'next/link'
import React from 'react'
import { CgShapeRhombus } from "react-icons/cg";
import './card.css'
import Image from 'next/image';

export default function Card(props) {
  return (
    <div className='card' >
        <div className="card-body">
          <Image src={props.icon} width={100} height={100} alt="icon" />
            <p className='title'>{props.title} </p>

            <p className='body'>{props.body}</p>

          <p  style={{textAlign:"center"}}><Link href="/"> <CgShapeRhombus className='rhombus'/> Discover More <CgShapeRhombus className='rhombus'/></Link></p> 
        </div>

    </div>
  )
}
