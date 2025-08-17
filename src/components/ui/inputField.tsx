import { useState, type Dispatch, type SetStateAction } from "react";
import Eye from "../../icons/eye";
import EyeSlash from "../../icons/eyeSlash";

interface InputFieldProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    disabled?: boolean;
    invalid?: boolean;
    variant?: 'filled' | 'outlined' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    darkMode?: boolean;
    loading?: boolean;
    setValue?: Dispatch<SetStateAction<string>>
}
export default function InputField(props : InputFieldProps) {
    const size = props.size == "sm" ? "w-40" : props.size == "md" ? "w-60" : props.size == "lg" ? "w-80" : "";
    
    const variant = props.variant == "filled" ? "border-1 border-neutral-200" : props.variant == "outlined" ? "border-2 border-black" : props.variant == "ghost" ? "border-1 border-red-500" : "border-1";

    const mode = props.darkMode ? "bg-[#101828] text-white placeholder:text-white" : ""
    
    const [hidden , setHidden] = useState(true);

    return <div className={`${mode}`}>
        <form>
            
            <label>{props.label} :</label> <br />
            
            <input type={hidden ? "password" : "text"} onChange={props.onChange} value={props.value} placeholder={props.loading ? "Loading..." : props.placeholder } disabled={props.disabled} className={`${mode ? `${mode} border-white border-1` : ""} ${size} ${variant} px-2 p-1 text-sm rounded-sm z-[0]`} />

            <span className={`absolute cursor-pointer -translate-x-5 translate-y-2 z-[99] max-h-5 max-w-5`} onClick={() => setHidden(!hidden)}>{hidden ? <Eye /> : <EyeSlash />}</span>

            {props.helperText && <div className="text-xs py-2">{props.helperText}</div>} 
            
            {props.invalid && <div className="text-xs text-red-500 border-1 w-fit p-1 rounded my-2">{props.errorMessage}</div>}
            
            <button className={`${props.darkMode ? "border-white border-1" : ""} bg-black text-white border-1 border-black hover:bg-white hover:text-black duration-300 rounded-sm px-1 cursor-pointer block mt-2`} type="reset" onClick={() => {
                {props.setValue && props.setValue("")}
            }}>Clear</button>
        </form>
    </div>
}