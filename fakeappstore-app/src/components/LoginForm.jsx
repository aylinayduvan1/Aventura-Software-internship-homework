import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const correctUsername = "aylin";
  const correctPassword = "123";

  const navigate = useNavigate(); // sayfalar arası gezinmek için


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === correctUsername && password === correctPassword) {
        navigate("/siparis");
        alert("Giriş başarılı");
    } else {
        alert("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="login-container">
            <div className="login-title">
                <h2>Fake Store App Giriş Ekranı</h2>
                <div className="login">
                  {/* onChange özelliği, input alanı değeri değiştiğinde ne yapılacağını belirler. */}
                <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={handleUsernameChange} /> 
                <input type="password" placeholder="Şifre" value={password} onChange={handlePasswordChange} />
                    <button className="login-b" type="submit">Giriş</button>
                </div>
            </div>
        </div>
    </form>
  );
}

export default LoginForm;

