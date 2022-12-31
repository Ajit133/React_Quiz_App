import classes from "../styles/Illustration.module.css"
import singUpImage from "../assets/images/signup.svg";
export default function Illustration(){
    return(
        <div className={classes.Illustration}>
               <img src={singUpImage} alt="Singup" />
        </div>
    )
}