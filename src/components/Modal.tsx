export default function Modal({
  onClose,
  children,
  name,
}: {
  onClose: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
  name: string
}) {
  return (
    <div className="fixed top-0 w-full h-screen flex justify-center items-center bg-black/50 z-50">
      <button className="bg-transparent w-6 h-6 border-none cursor-pointer absolute top-6 right-6" onClick={onClose}>
        <img src="./close.svg" alt="close" />
      </button>
      <div className="max-h-[80vh]" data-blendy-to={name}>{children}</div>
    </div>
  )
}
