import React from 'react'
import '@/css/search.css'

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            bg: 'transparent'
        }
    }
    componentDidMount(){
        window.onscroll = () => {
            const scrollHeight = document.documentElement.scrollTop||document.body.scrollTop
            let opactiy = 0.9*(scrollHeight/142)
            if(opactiy <= 0.9){
                this.setState({
                    bg:'rgba(234,44,44,'+opactiy+')'
                })
            }
        }
    }
    render(){
        let bgColor = this.state.bg?this.state.bg: 'transparent' 
        return <div className='search' style={{background:bgColor}}>
                    <div className='container'>
                        <div className='logo'></div>
                        <div className='login'>登录</div>
                        <input className='searchinput' type='text' placeholder='搜点想要的'/>
                    </div>
        </div>
    }
}
export default Search