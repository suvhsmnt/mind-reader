import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import { FaBeer } from 'react-icons/fa';
import Card from '@material-ui/core/Card';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Grid } from '@material-ui/core/';

const min = 1;
const max = 25;
class Header extends Component {
  componentWillMount() {
    this.setState({ alert: false, ico: Array.from({ length: 100 }, () => Math.floor(Math.random() * 20)), lastIcon: 0 });
  }

  showAlert = () => {
    this.setState({
      alert: !this.state.alert,
      lastIcon: this.state.ico[9],
      ico: Array.from({ length: 100 }, () => Math.floor(Math.random() * 20)),
    });
  };
  hideAlert = () => {
    this.setState({
      alert: !this.state.alert,
    });
  };

  render() {
    if (!this.props.data) return null;
    const src = '/images/wireframe/image.png';
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const icons = this.props.data.icons;
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        {/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}

        <div className="banner" style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', padding: '5px' }}>
          <SweetAlert
            show={this.state.alert}
            title={<i className={'fa ' + icons[this.state.lastIcon] + ' fa-3x '} style={{ color: 'blue' }}></i>}
            onConfirm={this.hideAlert}
          >
            <div style={{ color: 'black' }}> It's déjà vu</div>
          </SweetAlert>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ overflowY: 'auto', padding: 'auto' }}
          >
            {[...Array(99)].map((elementInArray, index) => (
              <Grid item xs={4} sm={3} md={1} key={index}>
                <Card
                  style={{
                    width: 100,

                    backgroundColor: 'rgba(255, 0, 0, 0.4)',
                  }}
                >
                  <Grid container direction="row" style={{ padding: 'auto' }}>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      style={{ fontSize: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
                    >
                      {index + 1}
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div>
                        {(index + 1) % 9 === 0 ? (
                          <i className={'fa ' + icons[this.state.ico[9]] + ' fa-3x '} style={{ color: '#3CB371' }}></i>
                        ) : (
                          // <i className={'fa fa-thumbs-up   fa-3x '} style={{ color: 'blue' }}></i>
                          <i className={'fa ' + icons[this.state.ico[index + 1]] + ' fa-3x '} style={{ color: '#3CB371' }}></i>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div style={{ color: 'white', marginTop: '10px' }}>
            Rules for playing this gamne guess any 2 digit number XY then evaluate XY - (X+Y) = new number and check the Icon that is
            associated with new number We can tell you the exact icon
          </div>

          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <button className="button btn project-btn" onClick={() => this.showAlert()}>
                <i className="fa fa-play"></i>Start
              </button>
              {/* <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a> */}
            </ul>
          </Fade>
          {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div> */}
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
