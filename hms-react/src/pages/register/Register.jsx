import styles from "./register.module.css";
import user_icon from "../../assets/images/utilities/person.png";
import email_icon from "../../assets/images/utilities/email.png";
import password_icon from "../../assets/images/utilities/password.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    const user = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone_number: data.phone,
      password: data.password,
      is_patient: "True",
    };

    const addUser = async () => {
      try {
        await axios.post("http://127.0.0.1:8000/auth/register/", user, {
          headers: { "Content-Type": "application/json" },
        });

        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };

    addUser();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Register</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="FirstName"
            {...register("firstName")}
          />
        </div>

        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input type="text" placeholder="LastName" {...register("lastName")} />
        </div>

        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Mobile" {...register("phone")} />
        </div>

        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="email@email.com"
            {...register("email")}
          />
        </div>

        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
      </div>

      <div className={styles.forgotpassword}>
        Already Have an account? <Link to={"/login"}>Login</Link>
      </div>

      <div className={styles.submitcontainer}>
        <div className={styles.submit} onClick={handleSubmit(onSubmit)}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Register;
