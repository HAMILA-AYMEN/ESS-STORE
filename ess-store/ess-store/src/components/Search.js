
import IconButton from "@material-ui/core/IconButton";
import {TextField,InputAdornment }from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";


function search(){
  return (
    <div className="main">
      
      
<TextField
  label=""
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>

</div>
      
    
  )

}
export default search

