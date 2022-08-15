import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Addtocart from './Addtocart';






function DarkVariantExample() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2= () => setShow2(true)

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3= () => setShow3(true);


  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4= () => setShow4(true);
  

  

  
  
    return (
      
      
      <Carousel variant="dark">
        <Carousel.Item>
        <div class="zoom">
          <img style={{width:350,marginLeft:"auto",marginRight:"auto",padding:"20px"}} onClick={handleShow}
            className="d-block w-80"
            src="/img/ESS1-2022.jpg"
            alt=""
           
            
          />
          
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maillot de match domicile </Modal.Title>
        </Modal.Header>
        <Modal.Body > price:34,50 € </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to cart <Addtocart />
          </Button>
        </Modal.Footer>
      </Modal>

          </div>
          
           
        

          
             
           
        
           
          <Carousel.Caption>

            
          
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
        <div class="zoom">
          <img style={{width:350,marginLeft:"auto",marginRight:"auto",padding:"20px"}} onClick={handleShow2}
            className="d-block w-80"
            src="/img/ESS2-2022.jpg"
            alt="Second slide"
          />

<Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Maillot de match extérieur </Modal.Title>
        </Modal.Header>
        <Modal.Body > price:34,50 € </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Add to cart <Addtocart />
          </Button>
        </Modal.Footer>
      </Modal>
          </div>


          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div class="zoom">
          <img style={{width:350,marginLeft:"auto",marginRight:"auto",padding:"20px"}} onClick={handleShow3}
            className="d-block w-80"
            src="/img/ESS3-2022.jpg"
            alt="Third slide"
          />


<Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Troisième maillot</Modal.Title>
        </Modal.Header>
        <Modal.Body > price:34,50 € </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose3}>
            Add to cart <Addtocart />
          </Button>
        </Modal.Footer>
      </Modal>
          </div>



          <Carousel.Caption>
          
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div class="zoom">
          <img style={{width:350,marginLeft:"auto",marginRight:"auto",padding:"20px"}} onClick={handleShow4}
            className="d-block w-80"
            src="/img/ESS4-vintage.jpg"
            alt="Fourth slide"
          />

<Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Maillot vintage </Modal.Title>
        </Modal.Header>
        <Modal.Body > price:18,50 € </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose4}>
            Add to cart<Addtocart />
          </Button>
        </Modal.Footer>
      </Modal>
          </div>


          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

 

  export default DarkVariantExample
  

 
    






  