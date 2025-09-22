import { useEffect, useRef, useState } from "react"
import { createBlendy, type Blendy } from "blendy"
import Modal from "./Modal"
import { createPortal } from "react-dom"
interface ImageProps {
  src: string
  width: number
  height: number
  index: number
}

const Image = ({ src, width, height, index }: ImageProps) => {
  const blendy = useRef<Blendy | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    blendy.current = createBlendy({ animation: "dynamic" })
  }, [])

  function handleClose() {
    blendy.current?.untoggle(`example-${index}`, () => {
      setShowModal(false)
    })
  }
  return (
    <div>
      {showModal &&
        createPortal(
          <Modal onClose={handleClose} name={`example-${index}`}>
            <div className="flex justify-center max-h-[80vh] overflow-hidden">
              <img src={src} className="w-full" alt={`Random ${index}`} />
            </div>
          </Modal>,
          document.body
        )}
      <button
        className="button"
        data-blendy-from={`example-${index}`}
        onClick={() => {
          setShowModal(true)
          blendy.current?.toggle(`example-${index}`)
        }}
      >
        <div className={`flex justify-center min-w-[${width}px] min-h-[${height}px]`}>
          <img
            src={src}
            width={width}
            height={height}
            alt={`Random ${index}`}
          />
        </div>
      </button>
    </div>
  )
}
export default Image
