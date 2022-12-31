import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Singup.module.css"
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
export default function Singup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.singup}`}>
          <TextInput type="text"
                     placeholder="Enter email" 
                     icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput 
            type="password" 
            placeholder="Enter password" 
            icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text=" i agree to the Terms & Conditions"/>
          <Button>Submit Now</Button>
           
           <div className="info">
            Already have an account? <a href="login.html">Login</a> instand.
           </div>

        </Form>
      </div>
    </div>
  );
}
