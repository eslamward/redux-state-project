

const Button = ({ children, color, hoverColor, ...props }) => {

    return (
        <button {...props} className={`
        text-white ${color} hover:${hoverColor} px-5 rounded-md
        `}>
            {children}
        </button>
    )
}


export default Button