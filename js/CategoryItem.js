'use strict';

class CategoryItem extends React.Component{
  constructor(props){
    super(props)


   render() {
      return <div category={{this.props.category[0]}}>
                {this.props.children}
             </div>
      }
}



ReactDOM.render(<CategoryItem/>, <Resume/>);
ReactDOM.render(<CategoryItem/>, domContainer);
ReactDOM.render(<CategoryItem/>, domContainer);
