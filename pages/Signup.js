import styles from "../styles/authorization.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
function Signup() {
    const router=useRouter()
  const [Form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleformsubmit=(e)=>{
      router.push("/")

  }
  return (
    <div className={styles.signup}>
      <div className={styles.col1}>
        <strong>
          <h1>SignUp</h1>
        </strong>

        <p>we do not share your personal details with anyone</p>
      </div>
      <div className={styles.col2}>
        <form className={styles.form}>

            
          <div className={styles.inputwrapper}>
            <label htmlFor="firstname" className={styles.label}>
              firstname
            </label>
            <input
              type={"text"}
              value={Form.firstname}
              onChange={handleChange}
              name="firstname"
              id="firstname"
              className={styles.input}
            />
            <hr className={styles.hr}></hr>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="lastname" className={styles.label}>
              lastname
            </label>
            <input
              type={"text"}
              value={Form.lastname}
              onChange={handleChange}
              name="lastname"
              id="lastname"
              className={styles.input}
            />
            <hr className={styles.hr}></hr>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type={"email"}
              value={Form.email}
              onChange={handleChange}
              name="email"
              id="email"
              className={styles.input}
            />
            <hr className={styles.hr}></hr>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input
              type={"password"}
              value={Form.password}
              onChange={handleChange}
              name="password"
              id="password"
              className={styles.input}
            />
            <hr className={styles.hr}></hr>
          </div>
          <div className={styles.inputwrapper}>
            <label htmlFor="confirmpassword" className={styles.label}>
              confirm password
            </label>
            <input
              type={"password"}
              value={Form.confirmpassword}
              onChange={handleChange}
              name="confirmpassword"
              id="confirmpassword"
              onFocus={(e) => (e.target.placeholder = "")}
              className={styles.input}
            />
            <hr className={styles.hr}></hr>
          </div>
        </form>
        <button className={styles.button} onClick={handleformsubmit}>Sign Un</button>
      </div>
    </div>
  );
}

export default Signup;
