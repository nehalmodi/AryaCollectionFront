import React from 'react'
import ContentCard from '../Component/Card/ContentCard'
import './Content.css'

export default function Content() {
  return (
    <>
      <div className='Content-div'>
        <ContentCard name="Black" price="950"></ContentCard>
        <ContentCard name="white" price="800"></ContentCard>
        <ContentCard name="green" price="250"></ContentCard>
        <ContentCard name="blue" price="500"></ContentCard>
        <ContentCard name="red" price="725"></ContentCard>
        <ContentCard name="purple" price="1050"></ContentCard>
        <ContentCard name="orange" price="1100"></ContentCard>
        <ContentCard name="magenta" price="150"></ContentCard>
        <ContentCard name="fushia" price="375"></ContentCard>
      </div>
    </>
  )
}
