interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
    return (
        <button type={type} className="w-15 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-slate-900" onClick={onClick}>
            <p className="mb-0.5">{text}</p>
        </button>
    );
};

export default Button;
