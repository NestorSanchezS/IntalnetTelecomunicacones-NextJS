import Link from 'next/link'
import React from 'react'

export const HeaderCitie = ({citie}) => {
    const {id, name} = citie;
    if (name !== "Los Córdoba -Córdoba") {
      return (
        <li><Link href={`/services/${id}`}><a>{name}</a></Link></li>
      )
    } else {
      return null;
    }
}
