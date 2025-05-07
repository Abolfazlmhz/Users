import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/endpoints/authApi";
import { loginSuccess, setError } from "./authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ username, password }).unwrap();
      dispatch(loginSuccess({ user: result, token: result.token }));
    } catch (err) {
        dispatch(setError("ورود ناموفق بود"));
        console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        ورود
      </button>
      {error && <p>{error.toString()}</p>}
    </form>
  );
};
export default LoginForm;