'use strict';

class Resume extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: ['Profile', 'Mastered Concepts', 'Work Experience', 'Education', 'Skills Overview' ],
      visible: null,
      resumeShift: this.getClicked.bind(this),
      setWidth: this.getClicked.bind(this)
    }
  }

    componentDidUpdate() {
      this.setWidth()
    }

    setWidth() {
      const itemList = document.querySelectorAll('.resumeItem')
      itemList.forEach((item) => {
        item.style.width = null;
      })
      let activeResID = this.state.visible;
      document.getElementById(`${activeResID}`)
      .style.width = '40%';
      //document.getElementById(`${activeResID}`).classList.add('activeResumeItem')
    }

    getClicked(e) {
      clickedArrow = e.target.parentNode.id;
      console.log(clickedArrow)
      this.resumeShift(clickedArrow);
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
        case '4':
          this.setState({ visible: '4'})
          break;
      }
    }

   render() {
      return (
        <div style={resumeStyle}>
                  <h1 style={headerStyle}>Larry Young</h1>
                  <h2 style={headerStyleB}>Web Developer</h2>
                  <div className='resumeItem' id='0' style={itemStyle}>{this.state.category[0]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='1' style={itemStyle}>{this.state.category[1]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='2' style={itemStyle}>{this.state.category[2]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='3' style={itemStyle}>{this.state.category[3]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
                  <div className='resumeItem' id='4' style={itemStyle}>{this.state.category[4]}<i  onClick={this.getClicked.bind(this)} style={arrowStyle} className='fas fa-angle-left resumeArrow'></i></div>
               </div>
      )
    }
}

const imgArr = [];
let clickedArrow;
let currentDiv;
let activeResID;


const arrowStyle = {
  position: 'relative',
  top: '8px',
  left: '10px',
  color: '#424548',
  fontSize: '2em',
  margin: '0'
}

const resumeStyle = {
  height: '71.5%',
  lineHeight: '10px',
  border: 'solid #424548 1px',
  position: 'relative',
  top: '25%',
  width: '100%'
}

const headerStyle = {
  margin: '0',
  paddingLeft: '5%',
  paddingTop: '5px',
  fontFamily: 'Open Sans Condensed',
  color: '#91690d',
  fontSize: '1.5em',
  lineHeight: '25px'
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
  border: 'solid #424548 1px',
  fontSize: '1.3em',
  lineHeight: '70px'
}


const domContainer = document.querySelector('#resume-container');
ReactDOM.render(<Resume/>, domContainer);
