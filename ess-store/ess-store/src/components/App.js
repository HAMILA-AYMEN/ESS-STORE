import React from 'react';
import Header from './Header'
import Show from './Show'








import Footer from './Footer'
import ReactAudioPlayer from 'react-audio-player'




  function App() {
    
    return (

      
      <div>
       
             
           <Header />
              <Show /> 
              
                
           
        
       
        
        <div className='music'> <ReactAudioPlayer
  src="ESSson.mp3"
  autoPlay
  controls
/></div>

        <Footer />
        
       

        
        
        
      </div>
    )
  }




export default App



