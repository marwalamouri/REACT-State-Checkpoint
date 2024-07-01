import React from "react";
import Profile from "./Components/Profile";
import { Button } from "react-bootstrap";
import Timer from "./Components/Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Marwa Lamouri",
      bio: "Born in Tunisia",
      imgSrc:
        "https://cdn-icons-png.freepik.com/256/147/147135.png?semt=ais_hybrid",
      profession: "Developer",
      show: false,
    };
  }

  showProfile = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="m-3">
        {this.state.show && (
          <>
            <Profile
              fullName={this.state.fullName}
              bio={this.state.bio}
              imgSrc={this.state.imgSrc}
              profession={this.state.profession}
            />
            <Timer />
          </>
        )}

        <Button
          className="mt-3"
          variant={this.state.show ? "warning" : "primary"}
          onClick={this.showProfile}
        >
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </Button>
      </div>
    );
  }
}

export default App;
