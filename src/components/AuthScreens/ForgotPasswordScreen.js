import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../Css/ForgotPassword.css"
import { BsArrowBarLeft } from 'react-icons/bs'
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/auth/forgotpassword",
        { email }
      );

      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="Inclusive-forgotPassword-page">

      <div className="forgotPassword-big-wrapper">
        <Link to="/" className="back_home">
          <BsArrowBarLeft />
        </Link>
        <form
          onSubmit={forgotPasswordHandler}
        >
          <div className="top-forgotpassword-explain">
            <h3 ></h3>
            <p >

            </p>
          </div>

          {error && <div className="error_message">{error}</div>}
          {success && <div className="success_message  ">{success}  -
            <Link to="/" className="ml-3">Домой</Link></div>}

          <div className="input-wrapper">

            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">E-mail</label>

          </div>

          <button type="submit">
           
          </button>

        </form>

      </div>

    </div>

  );
};

export default ForgotPasswordScreen;