import React from "react";

const Login = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 rounded-xl text-left">
      <form onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm password</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Login;
