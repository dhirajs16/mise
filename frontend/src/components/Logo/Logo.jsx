const Logo = (props) => {
  const { className } = props;

  return (
    <>
      <img className={className} src="/images/logo.svg" alt="logo" />
    </>
  );
};

export default Logo;
