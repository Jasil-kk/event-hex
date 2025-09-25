import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const VALID_CODES = ["AV1234", "AV0001", "DEMO"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const entered = code.trim();
    if (!entered) {
      setError("Please enter your AV Code.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (VALID_CODES.includes(entered.toUpperCase())) {
        localStorage.setItem("fake_auth_token", `fake:${Date.now()}`);
        localStorage.setItem("fake_user_av_code", entered.toUpperCase());

        router.push("/sessions");
      } else {
        setError("Invalid AV Code. Try: AV1234 or DEMO");
        setLoading(false);
      }
    }, 700);
  };

  const logout = () => {
    localStorage.removeItem("fake_auth_token");
    localStorage.removeItem("fake_user_av_code");
    router.push("/login");
  };
  return {
    code,
    setCode,
    error,
    loading,
    handleSubmit,
    logout
  };
};
