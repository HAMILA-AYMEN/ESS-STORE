import { Component } from "react";
import{connect} from 'react-redux'
import Button from 'react-bootstrap/Button';

class Addtocart extends Component{

    render(){
            
          
        return(
    <Button
                 onClick={this.props.increase}
              ></Button>
        )}
}
function mapStateToProps(state){
    return {
      count: state.count
    }
  
  }
  
  function mapDispatchToProps(dispatch){
    return{
      increase :() =>dispatch({type:'INCREASE'})

      
    }
   
  }
export default connect (mapStateToProps,mapDispatchToProps)(Addtocart)