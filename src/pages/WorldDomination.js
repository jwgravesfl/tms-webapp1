import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import Header from '../components/Header';

var sectionStyle = {

};

const buttonStyle = {
  margin: 12,
};

export default class WorldDomination extends Component {
  render() {
    return (
      <div>
        <Header />
        <section style={sectionStyle}>
          <Image src='https://cowboydr.com/images/testImages/worldDomination.jpg'/>
          )
        </section>
      </div>

    )
  }
}