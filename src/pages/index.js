"use client"
import Image from 'next/image'
import Rating from '../components/Rating.jsx'
import { useState } from 'react'
import ThankYou from '@/components/Thanks.js'

export default function Home() {
       const [showThanks,setShowThanks] = useState(false)
       const [rating,setRating] = useState(null);
  return (
    <>
    {showThanks ? (
    <ThankYou rating={rating}/>
    ) : (
    <Rating 
    rating={rating}
    setRating={setRating}
    setShowThanks={setShowThanks}
    />)}
    </>
  )
}
