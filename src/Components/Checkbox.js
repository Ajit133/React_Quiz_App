export default function Checkbox({text,...rest}){
    return(
        <label>
            <input type="checkbox" {...rest}></input>
            <span>{text}</span>
        </label>
    )

}