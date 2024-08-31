import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import ImgPage from './cropperImg'

export default function App() {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)




  return (
    <div className="flex justify-center pt-20 ">
      <div className='relative flex items-center text-center'>

        <div className='flex flex-col'>
          <h1 className='w-24 h-24 text-xl font-bold pt-10'>Cropper</h1>

          <div className=''>
            <ImgPage />
          </div>
        </div>

      </div>
    </div>
  )
}

