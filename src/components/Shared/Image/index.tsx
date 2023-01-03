/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useRef } from 'react'

interface IImageUpploader {
  imageFile: any
  imageUpploadError: string

  setImageFile: (imageFile: any) => void
  setImageUpploadError: (err: string) => void

  parentStyle?: string
  imgStyle?: string

  setFieldValue: (field: string, value: any) => void
}

const ImageUpploader: React.FC<IImageUpploader> = ({
  imageFile,
  setImageFile,
  parentStyle,
  imgStyle,
  setImageUpploadError,
  imageUpploadError,
  setFieldValue
}): JSX.Element => {
  const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 1024000
  const fileInputField = useRef<HTMLInputElement>(null)

  // fires the hidden input click event
  const handleClick = (): void => {
    if (fileInputField.current != null) {
      fileInputField.current.click()
    }
  }

  return (
    <div className={`${parentStyle}`}>
      <img src={imageFile as string} className={`${imgStyle} border-none`} />
      <input
        name='file'
        type='file'
        accept='image/png, image/jpeg'
        hidden
        ref={fileInputField}
        onChange={(e) => {
          const fileReader = new FileReader()
          const { size } = e.target.files![0]
          if (size > DEFAULT_MAX_FILE_SIZE_IN_BYTES) {
            //   if the size exceeds the allowed size
            setImageUpploadError('Image Exceeded max allowed size')
            return
          }

          fileReader.onload = () => {
            if (fileReader.readyState === 2) {
              setImageFile(fileReader.result!)
              setFieldValue('image', fileReader.result!)
            }
          }
          fileReader.readAsDataURL(e.target.files![0])
        }}
      />
      <div>
        <button type='button' onClick={handleClick} className='px-3 py-2 bg-whiteBlue rounded-md'>
          Browse
        </button>
        <p className='text-sm text-garyish mt-3'>
          Max file size is 1MB, and Suitable files are .jpg & .png
        </p>
        <p className='text-red-500'>{imageUpploadError}</p>
      </div>
    </div>
  )
}

export default ImageUpploader
