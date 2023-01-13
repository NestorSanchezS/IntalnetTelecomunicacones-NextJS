import Link from 'next/link'
import React from 'react'

export const HeaderCitie = ({citie}) => {
    const {id, name} = citie;
  return (
    <li><Link href={`/services/${id}`}><a>{name}</a></Link></li>
  )
}
