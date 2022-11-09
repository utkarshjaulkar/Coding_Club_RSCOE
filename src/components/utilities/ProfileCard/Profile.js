import "./Profile.css";
import "animate.css";

const Profile = (props) => {
  const name = props.name;
  const position = props.position;
  return (
    <>
      <div class="profile">
        <div class="img-container">
          <div class="skewed">
            <div id="img"></div>
          </div>
        </div>
        <div class="content">
          <h3>{name}</h3>
          <p>{position}</p>
          <div class="links">
            <a href="#">
              <i class="fab fa-linkedin "></i>
            </a>
            <a href="#">
              <i class="fab fa-github "></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
