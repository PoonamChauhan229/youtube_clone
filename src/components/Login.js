
const Login = () => {
  return (
    <div className="flex rounded-full border w-28 px-2 py-1">
        
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <a href='/auth'>
        <div className="py-1 font-bold">Sign In</div>
        </a>
        </div>
  );
};

export default Login;
