// import './tailWind.css'
import Button from "./Button.jsx";

const Input = ({placeholder, value, onChange}) => {
    return (
        <div className="flex items-center border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden max-w-md w-full pr-3">
            <input type="text" className="w-full h-full outline-none text-gray-500 placeholder-stone-400 text-x" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;