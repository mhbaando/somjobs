import { AiOutlineLoading3Quarters } from 'react-icons/ai'
interface IButton {
  type: 'button' | 'reset' | 'submit'
  children: any
  disabled?: boolean
  additionalClasses?: string
  handleClick?: () => void
}

const Button: React.FC<IButton> = ({
  type,
  children,
  additionalClasses,
  handleClick,
  disabled
}): React.ReactElement => {
  return (
    <button
      type={type}
      className={`bg-primaryDark text-white flex items-center justify-center ${additionalClasses} ${
        disabled === true && 'opacity-50 cursor-not-allowed'
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {disabled === true ? <AiOutlineLoading3Quarters /> : children}
    </button>
  )
}

export default Button
