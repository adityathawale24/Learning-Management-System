import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import { authService } from "../../api/auth.service";
import { LogIn } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const result = await authService.login(email, password);
      if (result.success) {
        if (result.user?.role === "ROLE_ADMIN") {
          navigate("/admin");
        } else {
          navigate("/courses");
        }
      } else {
        setError(result.error || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <div className="flex items-center justify-center py-8 px-4">
        <div className="max-w-md w-full space-y-4">
          <div className="text-center">
            <div className="mx-auto h-14 w-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
            <form autoComplete="off" onSubmit={login} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                  <p className="text-red-800 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg ${
                  isLoading
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Create account here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
