'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const [message, setMessage] = useState<string>("");
  const [favoriteBook, setFavoriteBook] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const welcomeMsg = localStorage.getItem("welcomeMessage");
    const book = localStorage.getItem("favoriteBook");

    if (!welcomeMsg || !book) {
      router.push("/");
    } else {
      setMessage(welcomeMsg);
      setFavoriteBook(book);
    }
  }, [router]);

  return (
    <main style={{ backgroundColor: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "500px", backgroundColor: "white", color: "black" }}>
        <h2>{message}</h2>
        <p><strong>Tu libro favorito es: {favoriteBook}</strong></p>
      </div>
    </main>
  );
}
