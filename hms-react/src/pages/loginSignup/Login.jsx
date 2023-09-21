import "./LoginSignup.css";
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
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>

      <div className="forgot-password">
        Need an account? <Link to={"/register"}>Register Here</Link>
      </div>

      <div className="submit-container">
        <div className={"submit"} onClick={handleSubmit(onSubmit)}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
