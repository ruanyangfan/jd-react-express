
import '@/lib/swiper.min.css'
import React from 'react'
import Swiper from '@/lib/swiper.min.js'
import Jsonp from '@/func/jsonp'


class Carousel extends React.Component{
    constructor(){
        super()
        this.state = {
            imgUrl : []
        }
    }
    componentDidMount(){
        Jsonp(this.props.source,(data) => {
            if(data.status) {
                this.setState({
                    imgUrl: data.img
                })
                new Swiper ('.swiper-container', {
                    loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay : 3000,
					autoplayDisableOnInteraction : false,
                  })  
            }else {
                alert(data.msg)
            }
        })
        
    }
    render(){
        return <div className="swiper-container">
			        <div className="swiper-wrapper">
                        {
			    		    this.state.imgUrl.map((url,index) => {
			    		        return <div className="swiper-slide" key={index} >
			    					    <img className='img' src={url} />
			    			        </div>
			    		    })
                        }
                        
			        </div>
				<div className="swiper-pagination"></div>
			</div>
     
    }
}
export default Carousel