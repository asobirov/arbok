import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
    children: React.ReactNode
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled">

const Button: React.FC<ButtonProps> = ({ children, type, onClick, disabled }) => {
    return (
        <button
            type={type}
            className="
                inline-flex
                relative
                px-6 py-3
                border border-neutral-400 rounded-2xl
                hover:bg-whiteAlpha-100 hover:text-white
                transition-all duration-300
            "
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>

    )
}

export default Button;