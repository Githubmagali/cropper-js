import React, { useState } from 'react'
import Cropper from 'react-easy-crop'

export default function ImgPage (){
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)


  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }



  return (
    <div className="flex flex-col gap-y-4 items-center">
      <div className="relative w-96 h-96 ">
        <Cropper
          image="Fot-IA.jpg"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
    
      <div className="w-96">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value)
          }}
          className="zoom-range z-10"
        />
      </div>
    </div>
  )
}

