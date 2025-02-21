"use client";
import { useEffect, useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../../middlewares/AuthMiddlewares";
import FloatingBar from "../../../components/common/FloatingInfoBar/FloatingBar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await dispatch(login({ email, password }));
    } else {
      if (confirmPassword !== password) {
        setPasswordMismatch(true);
        return;
      }
      dispatch(signup({ name, email, password }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-center text-gray-600 mb-4">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill in your details to get started"}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordMismatch(false);
                }}
              />
              {passwordMismatch && (
                <span className="text-xs text-red-600">
                  Passwords does not match
                </span>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded-md transition-all"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-gray-600 hover:text-orange-500 text-sm font-medium transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
        {error && (
          <FloatingBar
            duration={0}
            isVisible={true}
            message={error.message}
            type="error"
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
