'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";  

interface LoginSuccess {
  message: string;
  libroFavorito: string;
}

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter(); 

  const fetchLogin = (user: string, pass: string) => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/api/login?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Usuario o contraseña incorrectos");
        }
        return res.json();
      })
      .then((data: LoginSuccess) => {
        setLoading(false);
        localStorage.setItem("welcomeMessage", data.message);
        localStorage.setItem("favoriteBook", data.libroFavorito);
        router.push("/welcome");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <main style={{ backgroundColor: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "400px", backgroundColor: "white", color: "black" }}>
        <h2>Login NovaLearn</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
          style={{ padding: "8px", marginBottom: "8px", width: "100%" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          style={{ padding: "8px", marginBottom: "8px", width: "100%" }}
        />
        <button
          onClick={() => fetchLogin(username, password)}
          style={{ padding: "10px", width: "100%", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </main>
  );
}
