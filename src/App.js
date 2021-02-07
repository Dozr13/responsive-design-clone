import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

      this.state = {
        // toggleShow: false,
        dropMenu: 'close-menu'
      }

  }

  // toggleShow = () => {
  //   this.setState({
  //     toggleShow: !this.state.toggleShow
  //   })
// }

dropMenuHandler = () => { 
  let menu
  if( this.state.dropMenu === 'close-menu' ) {
    menu = 'open-menu'
  } else {
    menu = 'close-menu'
  }
  this.setState({
    dropMenu: menu
  })
 }

componentDidUpdate(prevProps, prevState) {
  if( prevState.dropMenu !== this.state.dropMenu )
  console.log(prevState, this.state.dropMenu)
}

render() {
  return (

    <div>

      <header className="top-container fixed-top">

          <nav id="nav-bar">
            <div className="nav-bar-left">

              <section className="nav-logo-container">
                <a href="#page-top"><img
                className="nav-logo"
                src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                alt="logo" />
                </a>
              </section>
            </div>
            <div className="nav-bar-right">
              <section className={`nav-items-container ${this.state.dropMenu}`} >
                {/* <ul className={ `transition-medium conceal ${ !this.state.toggleShow ? 'hidden' : '' }` }> */}
                <ul className={ `drop-down` }>
                  <li className={ `nav-li` }><a href="#services">SERVICES</a></li>
                  <li className={ `nav-li` }><a href="#portfolio">PORTFOLIO</a></li>
                  <li className={ `nav-li` }><a href="#about">ABOUT</a></li>
                  <li className={ `nav-li` }><a href="#team">TEAM</a></li>
                  <li className={ `nav-li` }><a href="#contact">CONTACT</a></li>
                </ul>
              </section>
              <button className="hamburger" onClick={ () => this.dropMenuHandler() } >
                Menu <svg className="svg-inline--fa fa-bars fa-w-14 ml-1 hammy" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path></svg>
              </button>
            </div>
          </nav>
      </header>

      <main className="top-bg">
        <div className="main-container">
          <section className="welcome-container">
            <p className="welcome">Welcome To Out Studio!</p>
          </section>
          <section className="message-container">
            <p className="message">IT'S NICE TO MEET YOU</p>
          </section>
          <section className="btn-container">
            <button className="btn-1 btn-1-size btn-1-color"><a href="#services">TELL ME MORE</a></button>
          </section>
        </div>
      </main>

      <section id="services" className="page-section">
        <section className="services-section">
          <p className="services">SERVICES</p>
          <p className="lorem">Lorem ipsum dolo sit amet consectetur</p>
        </section>
      </section>



    </div>

    );
  }
}
export default App;
