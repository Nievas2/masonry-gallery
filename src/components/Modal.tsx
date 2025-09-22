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
    <div className="modal">
      <button className="modal__close" onClick={onClose}>
        <img src="./close.svg" alt="close" />
      </button>
      <div className="modal__content" data-blendy-to={name}>{children}</div>
    </div>
  )
}
