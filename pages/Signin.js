import styles from "../styles/authorization.module.css";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { cartcontext } from "../context/store";
import * as types from "../context/types";

const SignIn = () => {
  const { state, dispatch } = useContext(cartcontext);
  const router = useRouter();
  const [register, setregister] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setregister({ ...register, [e.target.name]: e.target.value });
  };

  const handleformsubmit = async (e) => {
    e.preventDefault();
    if (register.email && register.password) {
      if (state.user.token) {
        dispatch({
          type: types.LOGIN,
          payload: register,
        });

        setregister({
          email: "",
          password: "",
        });
        console.log(state);
        router.push("/");
      } else {
        setTimeout(() => {
          window.location.href = "/Signup";
        }, 1000);
      }
    } else {
      setregister({ ...register, email: "", password: "" });
      setErrors({
        ...errors,
        password: "all fields required",
      });
    }
  };

  return (
    <section className="register-wrapper mb-2">
      <article className="register-container">
        <strong>
          <h3 className=" mb-2">Log In</h3>
        </strong>

        <div>We do not share your personal details</div>
      </article>
      <div className="register-container">
        <Form>
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
          <button
            className={`${styles.button} hover:bg-red-500 hover:scale-125 focus:bg-black`}
            onClick={handleformsubmit}
          >
            Login
          </button>
        </Form>
        {errors.password ? (
          <p className="  p-2 text-red-400">{errors.password}</p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SignIn;
