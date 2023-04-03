import React from 'react'
import './estilo.carrossel.css'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../../assets1/corrossel/1.jpg'
import img2 from '../../assets1/corrossel/2.jpg'
import img3 from '../../assets1/corrossel/3.jpg'
import img4 from '../../assets1/corrossel/4.jpg'

export default function Inicio() {
    return (  
            <div className='containerCarrossel'>
                <Carousel fade>
                    <Carousel.Item className='itemCarrossel' interval={5000}>
                        <img src={img1} alt="Imagem 1" />
                    </Carousel.Item>
                    <Carousel.Item className='itemCarrossel' interval={5000}>
                        <img  src={img2} alt="Imagem 2" />
                    </Carousel.Item>
                    <Carousel.Item className='itemCarrossel' interval={5000}>
                        <img  src={img3} alt="Imagem 3" />
                    </Carousel.Item>
                    <Carousel.Item className='itemCarrossel' interval={5000}>
                        <img  src={img4} alt="Imagem 4" />
                    </Carousel.Item>
                </Carousel>
            </div>       
    )
}