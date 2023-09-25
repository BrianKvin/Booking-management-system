import styles from "./login.module.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const form = useForm({ defaultValues: { email: "", password: "" } });

  const { register, handleSubmit, formState: errors } = form;

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/login/", data, {
        headers: { "Content-Type": "application/json" },
      });

      const decoded = jwtDecode(res.data.access);
      const accessToken = res.data.access;
      const refreshToken = res.data.refresh;
      const userId = decoded.user_id;

      setAuth({ userId, accessToken, refreshToken });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Login</div>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
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
        Lost Password? <span>Click here</span>
      </div>

      <div className={styles.forgotpassword}>
        Need an account? <Link to={"/register"}>Register Here</Link>
      </div>

      <div className={styles.submitcontainer}>
        <div className={styles.submit} onClick={handleSubmit(onSubmit)}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
