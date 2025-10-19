import { IButtonProps } from "@/types/types"

const buttonStyles = {
  primary: "bg-purple-600 text-white px-6 py-2 rounded-lg shadow-2xs border-2 border-white shadow-black hover:bg-purple-700 cursor-pointer",
  secondary: "bg-gray-100 text-black px-6 py-2 rounded-lg shadow-2xs border-2 border-gray-500 shadow-black hover:bg-gray-200 hover:text-purple-800 cursor-pointer",
};

function Button({text,type,onClickDo,icon}: IButtonProps) {
  return (
    <button onClick={onClickDo} className={buttonStyles[type]}>
        {text}
    </button>
  )
}

export default Button