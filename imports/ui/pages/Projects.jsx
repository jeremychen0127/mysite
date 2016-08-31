import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ItemExternalDetails from '../components/experience/ItemExternalDetails';

const styles = {
  paperSpacingBottom: {
    marginBottom: '30px'
  }
};

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {windowWidth: window.innerWidth};

    this.handleResize = (event) => {
      this.setState({windowWidth: window.innerWidth});
    };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  renderTwoColumns() {
    return (
      <div className="row">
        <div className="col l6">
          <div style={styles.paperSpacingBottom}>
            <div className="center">
              <ItemExternalDetails
                imgSrc="/img/json2xml2csv.png"
                title="JSON/XML/CSV Converter"
                link="https://github.com/jeremychen0127/Json2Xml2Csv"/>
            </div>
          </div>
          <div style={styles.paperSpacingBottom}>
            <div className="center">
              <ItemExternalDetails
                imgSrc="/img/sim4chat.png"
                title="Simple 4 Chat Messaging App"
                link="https://github.com/jeremychen0127/Simple4Chat"/>
            </div>
          </div>
          <div style={styles.paperSpacingBottom}>
            <div className="center">
              <ItemExternalDetails
                imgSrc="/img/tote.png"
                imgHeight={200}
                marginBelowPic={20}
                title="Tote - Personal Stylist"
                link="https://github.com/jeremychen0127/tote"/>
            </div>
          </div>
        </div>
        <div className="col l6">
          <div style={styles.paperSpacingBottom}>
            <div className="center">
              <ItemExternalDetails
                imgSrc="/img/pokemon-go-tsp.png"
                title="Pokemon Go TSP (Contributor)"
                link="https://github.com/jeremychen0127/PokemonGo-TSP"/>
            </div>
          </div>
          <div style={styles.paperSpacingBottom}>
            <div className="center">
              <ItemExternalDetails
                imgSrc="/img/tic-tac-toe.png"
                marginBelowPic={20}
                title="Tic-Tac-Toe with Unbeatable AI Player"
                link="https://github.com/jeremychen0127/Tic_Tac_Toe"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderOneColumn() {
    return (
      <div>
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/json2xml2csv.png"
              title="JSON/XML/CSV Converter"
              link="https://github.com/jeremychen0127/Json2Xml2Csv"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/pokemon-go-tsp.png"
              title="Pokemon Go TSP (Contributor)"
              link="https://github.com/jeremychen0127/PokemonGo-TSP"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/sim4chat.png"
              title="Simple 4 Chat Messaging App"
              link="https://github.com/jeremychen0127/Simple4Chat"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/tic-tac-toe.png"
              marginBelowPic={20}
              title="Tic-Tac-Toe with Unbeatable AI Player"
              link="https://github.com/jeremychen0127/Tic_Tac_Toe"/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center">
            <ItemExternalDetails
              imgSrc="/img/tote.png"
              imgHeight={200}
              marginBelowPic={20}
              title="Tote - Personal Stylist"
              link="https://github.com/jeremychen0127/tote"/>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="experience center fadeIn">
        <div>
          <h2 className="title center">Projects</h2>
          <p className="quote center"><i>"The purpose of life is to contribute in some way to making things better" - Robert F. Kennedy</i></p>
        </div>
        <br />
        {
          this.state.windowWidth >= 1400 ?
            this.renderTwoColumns()
          :
            this.renderOneColumn()
        }
        <br />
      </div>
    );
  }
}

Projects.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};