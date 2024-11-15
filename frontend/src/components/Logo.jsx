import logo from "/src/assets/images/logo.svg";

const Logo = (props) => {
    const {className} = props

  return (
    <>
      <img
        className={`${className}`}
        src={logo} 
        alt="logo" 
        />
    </>
  );
};

export default Logo;
