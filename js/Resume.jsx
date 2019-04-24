import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

export default class Resume extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: ['Profile', 'Skills', 'Exp', 'Edu'],
      visible: null,
      resumeShift: this.getClicked.bind(this),
      setWidth: this.getClicked.bind(this),
      fadeInInfo: this.getClicked.bind(this)
    }
  }

    componentDidUpdate() {
      this.setWidth();
      this.fadeInInfo(clickedArrow);
    }

    setWidth() {
      let activeResID = this.state.visible;
      document.getElementById(`${activeResID}`)
      .style.width = '30%';
      //document.getElementById(`${activeResID}`).classList.add('activeResumeItem')
    }

    getClicked(e) {
      clickedArrow = e.target.parentNode.id;
      console.log(clickedArrow)
      let itemList = document.querySelectorAll('.infoItem');
      let resumeItemList = document.querySelectorAll('.resumeItem');
      for (let item of itemList) {
        item.style.display = 'none';
      }
      for (let item of resumeItemList) {
        item.style.width = '100%';
      }
      this.resumeShift(clickedArrow);

    }

    getInfo(clickedArrow) {
      return infoArr[clickedArrow];
    }

    fadeInInfo(clickedArrow) {
      const position = (this.state.visible === '0') ? 85 : (this.state.visible === '1') ? 155 : (this.state.visible === '2') ? 205 : (this.state.visible === '3') ? 205 : null;
      const infoDiv = document.createElement('p');
      infoDiv.setAttribute('class', `infoItem`);
      infoDiv.innerHTML = this.getInfo(clickedArrow);
      infoDiv.style.cssText =
        `display:inline-block;position:absolute;font-size:1rem;width:60%;height:60px;color:#91690d;left:40%;top:${position}px;line-height:20px;z-index:1;overflow-wrap:break-word;`;
      document.getElementById('resumeBox').appendChild(infoDiv);
      console.log('Appended child..');
      console.log(position)
    }

    resumeShift (clickedArrow) {
      switch(clickedArrow) {
        case '0':
          console.log('caseDetected');
          this.setState({ visible: '0'})
          break;
        case '1':
          this.setState({ visible: '1'})
          break;
        case '2':
          this.setState({ visible: '2'})
          break;
        case '3':
          this.setState({ visible: '3'})
          break;
      }
    }

   render() {
      return (
        <div id='resumeBox' style={resumeStyle}>
                  <h1 style={headerStyle}>Larry Young</h1>
                  <h2 style={headerStyleB}>Web Developer</h2>
                  <div className='resumeItem' id='0' style={itemStyle}>{this.state.category[0]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='1' style={itemStyle}>{this.state.category[1]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='2' style={itemStyle}>{this.state.category[2]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='3' style={itemStyle}>{this.state.category[3]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div id="pdfDownloadBox">
                    <p>Resume PDF:</p><p>View</p><p>Download</p>
                  </div>
               </div>
      )
    }
}

const imgArr = [];
let clickedArrow;
let currentDiv;
let activeResID;

const infoArr = [
  "Dedicated Web Developer. 3 years experience. Passionate about working with UX/UI and API",
  "JavaScript(ES2015)/HTML5/CSS3(SASS, Keyframes, Bootstrap) - UX/UI Design - Advanced Problem Solving - Animation - React - Webpack"
];


const arrowStyle = {
  position: 'relative',
  top: '8px',
  left: '10px',
  color: '#424548',
  fontSize: '2em',
  margin: '0'
}

const resumeStyle = {
  height: '430px',
  lineHeight: '10px',
  border: 'solid #424548 1px',
  position: 'relative',
  top: '15%',
  width: '90%',
  marginLeft: '5%',
}

const headerStyle = {
  margin: '0',
  paddingLeft: '5%',
  paddingTop: '5px',
  fontFamily: 'Open Sans Condensed',
  color: '#91690d',
  fontSize: '1.5em',
  lineHeight: '35px'
}

const headerStyleB = {
  margin: '0',
  paddingLeft: '5%',
  paddingBottom: '3px',
  fontFamily: 'Open Sans Condensed',
  color: '#91690d',
  fontSize: '1.2em',
  lineHeight: '35px',
  borderBottom: 'solid #424548 1px'
}

const itemStyle = {
  paddingLeft: '5%',
  fontFamily: 'Open Sans Condensed',
  color: '#91690d',
  backgroundColor: '#24292d',
  border: 'solid #424548 1px',
  fontSize: '1.3em',
  lineHeight: '70px',
  zIndex: '2'
}


const domContainer = document.getElementById('resume-container');
ReactDOM.render(<Resume/>, domContainer);
