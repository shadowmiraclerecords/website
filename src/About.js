import React from "react";
import DesktopScreenEPK from './DesktopScreenEPK';
import SmallScreenEPK from './SmallScreenEPK';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDesktopDisplay: false
    };

    this.updateDisplayStyle = this.updateDisplayStyle.bind(this);
  }

  componentDidMount() {
    this.updateDisplayStyle();
    console.log('sweet');
    window.addEventListener("resize", this.updateDisplayStyle)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDisplayStyle)
  }

  updateDisplayStyle() {
    console.log('awesome');
    // this.setState({isDesktopDisplay: window.innerWidth > 768})
    this.setState({isDesktopDisplay: window.innerWidth > 561})
    console.log(this.state);
    console.log(window.innerWidth);
  }

  render() {
    const { isDesktopDisplay } = this.state;
    return (
      <div>
        {isDesktopDisplay && <DesktopScreenEPK />}
        {!isDesktopDisplay && <SmallScreenEPK />}
      </div>
    );
  }
}

export default About;
