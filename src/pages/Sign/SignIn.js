import React from "react";
import { useState } from "react";
import { signIn, signUp } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";
import "./css/Signin.scss";
import { AuthContext } from "../../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = AuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      if ((user.status = 200)) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);

      if (user?.accessToken) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="giris">
        <h3>Siteye Erişebilmek için Giriş Yapınız.</h3>
        <form className="input-group">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            autoComplete="true"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            autoComplete="true"
          />
          <div className="buttons">
            <button onClick={handleLogIn} disabled={!email || !password}>
              Giriş Yap
            </button>
            <button onClick={handleRegister} disabled={!email || !password}>
              Kayıt ol
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
