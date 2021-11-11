import styles from "../styles/authorization.module.css";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { cartcontext } from "../context/store";
import InputField from "../components/InputField";
import * as types from "../context/types"
const Signup = () => {
  const{state,dispatch}=useContext(cartcontext)
  const router = useRouter();
  const [register, setregister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };

  const handleformsubmit = async (e) => {
    e.preventDefault();
    if (register.password == register.confirmpassword) {
      
      let response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ user: register }),
      });
      let data = await response.json();
      if (data.user.token) {
        
        dispatch({
          type: types.USER,
          payload: data.user,
        });
        

        setregister({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
       
        router.push("/Signin");
      }
    } else {
      setregister({ ...register, password: "", confirmpassword: "" });
      setErrors({
        ...errors,
        password: "password and confirm password should match",
      });
    }
  };
  return (
    <section className="register-wrapper mb-2">
      <article className="register-container">
        <strong>
          <h3 className=" mb-2">SignUp</h3>
        </strong>

        <div>We do not share your personal details</div>
      </article>
      <div className="register-container">
        <Form>
          <InputField
            label="First Name"
            type="text"
            name="firstname"
            isrequired={true}
            method={handleChange}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastname"
            isrequired={true}
            method={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            isrequired={true}
            method={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            isrequired={true}
            method={handleChange}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmpassword"
            isrequired={true}
            method={handleChange}
          />
          <button
            className={`${styles.button} hover:bg-red-500 hover:scale-125 focus:bg-black`}
            onClick={handleformsubmit}
          >
            Sign Up
          </button>
        </Form>
        {errors.password ? <p className="  p-2 text-red-400">{errors.password}</p> : ""}
      </div>
    </section>
  );
};

export default Signup;
