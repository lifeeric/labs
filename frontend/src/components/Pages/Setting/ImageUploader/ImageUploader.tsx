import * as React from "react"
import { useState, useEffect } from "react"
import { CloudinaryContext, Image } from "cloudinary-react"
import { fetchPhotos, openUploadWidget } from "./CloudinaryService"
import Limage from "../../../../images/login.jpg"
import { HelmetComp } from "../../../UI/Helmet/Helmet"

export const ImageUploader = () => {
  const [images, setImages] = useState()

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "zainshahzadfelt",
      tags: [tag, "anImage"],
      uploadPreset: "ml_default",
    }
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos, " =>> Photos")
        console.log(
          photos.info.public_id + "." + photos.info.format,
          " =>> Photos ID"
        )
        if (photos.event === "success") {
          setImages(photos.info.public_id, " Success")
        }
      } else {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    fetchPhotos("inpoge_jzptg0.jpg", setImages)
  }, [])

  console.log(images, " =>>>> Images")

  return (
    <>
      <HelmetComp />
      <CloudinaryContext cloudName="zainshahzadfelt">
        <div className="App">
          <button onClick={() => beginUpload("image")}>Upload Image</button>
          <section>
            <Image
              key={images}
              publicId="724485592579512"
              fetch-format="auto"
              quality="auto"
            />
          </section>
        </div>
      </CloudinaryContext>
    </>
  )
}
