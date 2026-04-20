import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="email"
                placeholder="image url"
                className="input input-bordered"
                {...register("image")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <label>
              <Link to="/login">Please Login</Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React from "react";

// const Register = () => {
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword.value;
//     console.log(name, photo, email, password, confirmPassword);
//   };
//   return (
//     <div className="w-[40%] mx-auto min-w[500px] border-2 border-red-500 p-2 rounded-xl text-left">
//       <form onSubmit={handleRegister}>
//         <div>
//           <p>Name</p>
//           <input
//             name="name"
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <p>Photo</p>
//           <input
//             name="photo"
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <p>Email</p>
//           <input
//             name="email"
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <p>Password</p>
//           <input
//             name="password"
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <div>
//           <p>Confirm password</p>
//           <input
//             name="confirm password"
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered w-full"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-full">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
