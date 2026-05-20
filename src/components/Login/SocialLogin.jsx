import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = useAuth();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigation(form);
      }
    });
  };
;

return (
  <>
    <div className="divider">Continue With</div>
    <div className="flex justify-around">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn btn-primary btn-sm btn-outline"
      >
        Google
      </button>

      <button
        onClick={() => githubLogin()}
        className="btn btn-secondary btn-sm btn-outline"
      >
        Github
      </button>
      <button
        onClick={() => twitterLogin()}
        className="btn btn-success btn-sm btn-outline"
      >
        Twitter
      </button>
    </div>
  </>
);
}

export default SocialLogin;
