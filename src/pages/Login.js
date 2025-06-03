import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Login() {
  const navigate = useNavigate(0);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // it's useful for forms with multiple inputs
  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard/users");
    }, 1000);
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-green-700">Login</h1>
        <img src="/sibtorsh-logo.svg" alt="logo" />
      </div>
      <div className="shadow-md w-full max-w-[450px]  p-7">
        <form
          action=""
          className="flex flex-col gap-6 just"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            className="w-full border p-3 rounded-md"
            onChange={handleChangeInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="w-full border p-3 rounded-md"
            onChange={handleChangeInput}
          />

          <Button
            text={isLoading ? <Spinner /> : "Login"}
            disabled={isLoading}
          />
        </form>
      </div>
    </section>
  );
}
