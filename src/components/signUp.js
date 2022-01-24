import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useAuth } from "../auth/authContext";

export const SignUp = () => {
  const { status, signUpUserWithCredentials } = useAuth();
  const { userDispatch } = useUser();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    msg: "",
  });

  const signUpUser = async () => {
    if (
      signUpCredentials.email &&
      signUpCredentials.username &&
      signUpCredentials.password
    ) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          signUpCredentials.email
        )
      ) {
        if (signUpCredentials.password === signUpCredentials.confirmPassword) {
          const result = await signUpUserWithCredentials(
            signUpCredentials.username,
            signUpCredentials.password,
            signUpCredentials.email
          );
          if (result.success) {
            userDispatch({ type: "ADD_USER", payload: result.user._id });
            navigate(state?.from ? state.from : "/");
          }
        } else {
          setSignUpCredentials({
            ...signUpCredentials,
            msg: "Passwords doesn't Match",
          });
        }
      } else {
        setSignUpCredentials({
          ...signUpCredentials,
          msg: "Enter a valid email id",
        });
      }
    } else {
      setSignUpCredentials({
        ...signUpCredentials,
        msg: "Every field is required",
      });
    }
  };

  return (
    <div className="login-form">
      <h2>Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} className="signup-form">
        <div className="login-input">
          <label>
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-input"
            required
            value={signUpCredentials.email}
            onChange={(e) =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                msg: "",
                email: e.target.value,
              }))
            }
          />
        </div>

        <div className="login-input">
          <label>
            <i className="fas fa-user"></i> Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="form-input"
            required
            value={signUpCredentials.username}
            onChange={(e) =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                msg: "",
                username: e.target.value,
              }))
            }
          />
        </div>

        <div className="login-input">
          <label>
            <i className="fas fa-lock"></i> Password
          </label>
          <input
            className="form-input"
            placeholder="Enter password"
            required
            type={signUpCredentials.showPassword ? "text" : "password"}
            value={signUpCredentials.password}
            onChange={(e) =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                msg: "",
                password: e.target.value,
              }))
            }
          />

          <button
            className="login-show-password"
            onClick={() =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                showPassword: !signUpCredentials.showPassword,
              }))
            }
          >
            {signUpCredentials.showPassword ? (
              <i className="far fa-lg fa-eye"></i>
            ) : (
              <i className="far fa-lg fa-eye-slash"></i>
            )}
          </button>
        </div>

        <div className="login-input">
          <label>
            <i className="fas fa-lock"></i> Confirm Password
          </label>
          <input
            className="form-input"
            placeholder="Confirm Password"
            required
            type={signUpCredentials.showConfirmPassword ? "text" : "password"}
            value={signUpCredentials.confirmPassword}
            onChange={(e) =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                msg: "",
                confirmPassword: e.target.value,
              }))
            }
          />

          <button
            className="login-show-password"
            onClick={() =>
              setSignUpCredentials(() => ({
                ...signUpCredentials,
                showConfirmPassword: !signUpCredentials.showConfirmPassword,
              }))
            }
          >
            {signUpCredentials.showConfirmPassword ? (
              <i className="far fa-lg fa-eye"></i>
            ) : (
              <i className="far fa-lg fa-eye-slash"></i>
            )}
          </button>
        </div>

        <p>{signUpCredentials.msg}</p>

        <button
          className="button button-primary login-button"
          onClick={signUpUser}
        >
          Sign Up
        </button>

        <small className="mg">
          Already have an account?{" "}
          <Link to="/login">
            <span className="login-signup">Login!</span>
          </Link>
        </small>
      </form>
      <h3>
        {status.loading && (
          <img src="/images/loading.svg" alt="loading" className="loading" />
        )}
      </h3>
    </div>
  );
};
