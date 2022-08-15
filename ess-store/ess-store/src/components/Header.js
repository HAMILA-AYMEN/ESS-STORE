import React, { Component } from 'react'
import Search from "./Search.js"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import{connect} from 'react-redux'






class Header extends Component {
    
   
        render(){
            
          
            return(
                <div className="navbar  bg-danger rounded text-white ">
                    
                    <h2 >ESS STORE </h2>
                    <Search />
                    <div style={{ display: "block", padding: 10}}>
          
          <div>
            <Badge color="secondary" badgeContent={this.props.count} >
              <ShoppingCartIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={this.props.decrease}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                 onClick={this.props.increase}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      
    
                   
                    
                  
                    
                    
                    
    
                </div>
            )

        }
        
    }

    function mapStateToProps(state){
        return {
          count: state.count
        }
      
      }
      
      function mapDispatchToProps(dispatch){
        return{
          increase :() =>dispatch({type:'INCREASE'}),
          decrease :() =>dispatch({type:'DECREASE'})
        }
       
      }
    export default connect (mapStateToProps,mapDispatchToProps)(Header)


    