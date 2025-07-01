import React from 'react'
import './Home.css'
import { Carousel, Row, Col, Button } from 'antd'
import Doc1 from '../Images/doc1.png'
import Doc2 from '../Images/Doc2.png'
import Doc3 from '../Images/Doc3.png'
import Doc4 from '../Images/Doc4.png'
import Doc5 from '../Images/Doc5.png'

function Home() {
  const DocDetails = [
    {
      id: 1,
      p1: 'We Provide',
      p2: 'Medical',
      p3: 'Services That You Can',
      p4: 'Trust!',
      p5: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores nihil! Eius illumperspiciatis maxime!',
      image: Doc1
    },
    {
      id: 2,
      p1: 'Care,',
      p2: 'trust our hospital',
      p3: 'serves with',
      p4: 'excellence.!',
      p5: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores nihil! Eius illumperspiciatis maxime!',
      image: Doc2
    },
    {
      id: 3,
      p1: 'Expert care,',
      p2: 'trusted hands,',
      p3: 'always here for',
      p4: 'you.',
      p5: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores nihil! Eius illumperspiciatis maxime!',
      image: Doc3
    },
    {
      id: 4,
      p1: 'Committed',
      p2: 'to',
      p3: 'exceptional',
      p4: 'medical care.!',
      p5: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores nihil! Eius illumperspiciatis maxime!',
      image: Doc4
    },
    {
      id: 5,
      p1: 'Healing  ',
      p2: 'with trust, ',
      p3: 'serving with',
      p4: 'compassion and care.',
      p5: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores nihil! Eius illumperspiciatis maxime!',
      image: Doc5
    },
  ]

  return (
    <div>
      <Carousel className='slider' autoplay={{dotDuration:true}} autoplaySpeed={5000} arrows infinite={true}>
        {DocDetails.map(i => (
          <div>
            <Row className='row1'>
              <Col span={10} id='sub_slider1_cont'>
                <span className="slider_para1">{i.p1}</span><span class="slider_para2"> {i.p2}</span><span
                  className="slider_para1"> {i.p3} </span><span class="slider_para2">{i.p4}</span>
                <br></br>
                <p className='para_crcl'>
                  {i.p5}</p>
                <br></br>
                <Button id="Slider_button1" type='primary'>Get Appointment</Button>
                <Button id="Slider_button2" type='primary'>About Us</Button>
              </Col>
              <Col span={9} id='sub_slider1_img'>
                <img src={i.image} alt='DocImg' className='img_crcl'></img>
              </Col>
            </Row>
          </div>
        )

        )}


      </Carousel>

    </div>
  )
}

export default Home