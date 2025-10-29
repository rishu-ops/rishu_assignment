import Header from "../components/header/Header";
import "./SignIn.css";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import leftLogo from "../assets/images/signin.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Email is required";
    if (!password.trim()) next.password = "Password is required";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Show success toast
      toast.success("Login successful! Welcome back.");
      // Navigate to home after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  return (
    <div>
      <Header />
      <main className="signin">
        <div className="signin-card container">
          <div className="signin-grid">
            <div className="signin-illustration">
              <img src={leftLogo} alt="Welcome illustration" />
            </div>
            <div className="signin-form">
              <h1 className="signin-title">
                <span className="accent">Login</span> to account
              </h1>
              <p className="signin-subtitle">
                Access your tasks, notes, and projects anytime, anywhere - and
                keep everything flowing in one place.{" "}
              </p>
              <form onSubmit={onSubmit} noValidate>
                <label className="fi">
                  <span className="fi-label">Email Id</span>
                  <div className="fi-wrap">
                    <span className="fi-icon" aria-hidden>
                      ✉️
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                    />
                  </div>
                  {errors.email ? (
                    <div className="fi-error" role="alert">
                      {errors.email}
                    </div>
                  ) : null}
                </label>

                <label className="fi">
                  <span className="fi-label">Password</span>
                  <div className="fi-wrap">
                    <span className="fi-icon" aria-hidden>
                      🔒
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••"
                      aria-invalid={!!errors.password}
                    />
                  </div>
                  {errors.password ? (
                    <div className="fi-error" role="alert">
                      {errors.password}
                    </div>
                  ) : null}
                </label>

                <div className="signin-actions">
                  <a className="forgot" href="#">
                    Forgot your password?
                  </a>
                </div>

                <button type="submit" className="signin-btn">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
