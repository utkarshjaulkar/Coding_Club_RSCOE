import "./Letter.css";

const Letter = () => {
  return (
    <>
      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title">Hello Everyone Welcome</div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <img src="./images/logo.png" alt="" />
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
};

export default Letter;
