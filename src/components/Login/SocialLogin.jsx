import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  return (
    <>
      <div className="divider">Continue With</div>
      <div>
        <button
          onClick={() => googleLogin()}
          className="btn btn-primary btn-outline"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
