interface IButton {
  type: 'button' | 'reset' | 'submit'
  children: any
  additionalClasses?: string
  handleClick?: () => void
}

const Button: React.FC<IButton> = ({
  type,
  children,
  additionalClasses,
  handleClick
}): React.ReactElement => {
  return (
    <button
      type={type}
      className={`bg-primaryDark text-white ${additionalClasses}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
