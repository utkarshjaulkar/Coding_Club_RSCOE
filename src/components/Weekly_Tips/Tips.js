import "./Tips.css";
import "animate.css";

const Tips = () => {
  return (
    <>
      <div className="title">
        <img src="./images/tips.png" alt="" />
      </div>
      <div className="container">
        <div className="topic aanimate__animated animate__flipInX">
          <h3>
            {" "}
            <span role="img" aria-label="face">
              👩🏻‍💻
            </span>{" "}
            Topic{" "}
            <span role="img" aria-label="fACE">
              👩🏻‍💻
            </span>
          </h3>
          <h5>
            Problem: Given an array of integers, every element appears twice
            except one. Find that element.{" "}
            <span role="img" aria-label="bullseye">
              🎯🎯
            </span>
          </h5>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=Sample%2520input%253A%2520%255B1%252C%25200%252C%25208%252C%25201%252C%25208%255D%250AOutput%253A%25200%2520%252F%252F%2520the%2520number%2520that%2520doesn%27t%2520repeat"
            sandbox="allow-scripts allow-same-origin"
            className="carbon"
            title="2"
          ></iframe>
        </div>
        <div className="sol">
          <h3>
            {" "}
            <span role="img" aria-label="mag-glass">
              🔎
            </span>{" "}
            Solution{" "}
            <span role="img" aria-label="mag-glass">
              🔎
            </span>
          </h3>
          <p>
            There are many data structures you can use to solve this operation
            such as hash-maps, trees. Which all will take at least O(n) time and
            O(n) memory. Can you think of a solution that takes O(1) memory?
          </p>
          <p>Well, you guessed right. We can use bit operations.</p>
          <p>
            What do we know so far: x ^ 0 = x and x ^ x = 0 . If you XOR all the
            elements of the array, the ones that repeat will cancel each other
            (x ^ x = 0) and at the end, you will have the number that doesn’t
            repeat:
          </p>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=27px&dsblur=66px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=arr%2520%253D%2520%255B1%252C%25200%252C%25208%252C%25201%252C%25208%255D%250Aresult%2520%253D%25200%250Afor%2520num%2520in%2520arr%253A%250A%2520%2520result%2520%255E%253D%2520num%250Areturn%2520result"
            sandbox="allow-scripts allow-same-origin"
            className="carbon"
            title="2"
          ></iframe>
          <p>This will take O(n) time and O(1) memory. As good as it gets!</p>
        </div>
      </div>
    </>
  );
};

export default Tips;
