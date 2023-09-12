import { FC, useState, useRef, DragEvent, ChangeEvent } from 'react'

export const SingleImage: FC = () => {

  const [error, setError] = useState<string>('')

  const [isImage, setIsImage] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)
  // Maximum possible file size
  const maxFileSize = 1000 * 1024 // Bytes

  // Allowed file formats
  const acceptedFile = ["image/gif", "image/png", "image/webp", "image/jpeg"]

  const processFile = (file: File) => {
    if (acceptedFile.includes(file.type)) {
      if (file?.size <= maxFileSize) {
        const reader = new FileReader();

        reader.onload = function (event: any) {
          if (ref.current) {
            ref.current.style.backgroundImage = `url(${event.target.result})`
            setIsImage(true)
          }
          
          handleUpload(file)
        };
        reader.onerror = function (event) {
          setError('Unexpected file upload error')
          reader.abort();
        };
        reader.readAsDataURL(file)
        if (error) {
          setError('')
        }
      } else {
        setError(`Maximum file size ${maxFileSize}`)
      }

    } else {
      setError('Only JPEG, GIF, WEBP, PNG docomments are allowed.')
    }
  }


  const chooseFile = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const file = event.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  // Upload file in server
  const handleUpload = (file: File) => {
    console.log(file)

  }

  // Drop file and upload
  const onDropFile = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    var files = event.dataTransfer?.files;
    if (files.length > 0) {

      var file = files[0];

      processFile(file)
    }
  };

  return (

    <div className='w-full flex justify-center w-full h-full bg-contain bg-center bg-no-repeat' ref={ref}>
      {
        !isImage ? (
          <div className="w-[325px] space-y-4 py-4 px-2 shrink-0 flex justify-center items-center flex-col" onDrop={(event) => onDropFile(event)}>
            <div className="text-red-500">{error}</div>
          <div className="text-red-500"></div>
          <label htmlFor="upload" className="cursor-pointer">
            <figure>
              <img src='images/icons/uploads.png' alt="uploads" />
            </figure>
            <span className="inline-block w-full text-brand-gray text-base text-center">
              Drop images here or
            </span>
            <br />
            <span className="inline-block w-full text-center text-base text-brandBlueDark">
              Click Here to Upload
            </span>
            <input type="file" id="upload" className="hidden" onChange={(event) => chooseFile(event)} accept={acceptedFile.join(',')} />
          </label>
          <div className="flex gap-4 items-center">
            <button type="button" className="bg-g2 rounded-xl p-[2px]">
              <span className="flex gap-1 p-2 items-center rounded-[10px] bg-white">
                <img src='images/icons/file-icon.svg' alt="folder" />
                <span className="font-semibold text-base text-brand-blue-dark">
                  Open Folder
                </span>
              </span>
            </button>
            <button type="button" className="bg-g2 p-[2px] rounded-xl">
              <span className="flex gap-1 p-2 items-center rounded-[10px] bg-white">
                <img src='images/icons/share-icon.svg' alt="share" />
                <span className="font-semibold text-base text-brand-blue-dark">
                  Open Folder
                </span>
              </span>
            </button>
          </div>
        </div>
        ) : (
          <></>
        )
      }
     
    </div>

  )
}


