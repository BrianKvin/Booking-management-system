import "../loginSignup/LoginSignup.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
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
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="FirstName"
            {...register("firstName")}
          />
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="LastName" {...register("lastName")} />
        </div>

        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Mobile" {...register("phone")} />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" {...register("email")} />
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
        Already Have an account? <Link to={"/login"}>Login</Link>
      </div>

      <div className="submit-container">
        <div className={"submit"} onClick={handleSubmit(onSubmit)}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Register;
