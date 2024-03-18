import Image from 'next/image'
import React from 'react'
import { CgMathPlus, CgShoppingCart } from 'react-icons/cg';
import { IoSearch } from "react-icons/io5";
import { MdPlusOne } from 'react-icons/md';

export default function MenuCard(props) {
  return (
    <div className='menuCard'>
      <div className="menuImg-con">

        <Image src={props.src} fill={true} />
      </div>
      <div className="menu-text">
        <h4 className='menu-name'>{props.name}</h4>
        <p className='menu-desc'>{props.desc}</p>
        <p className='menu-fee'>{props.fee}</p>


        <div className='menu-icons'>
          <p className="plus"><CgMathPlus /></p>
          <p className="shopping"><CgShoppingCart /></p>
        </div>
      </div>
      <p className='menu-price'>{props.price}</p>
      <p className="line"></p>
    </div>
  )
}
