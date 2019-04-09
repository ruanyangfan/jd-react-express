import './css/common.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Search from '@/components/Search'
import Carousel from '@/components/Carousel'

ReactDOM.render(<div>
    <Search />
    <Carousel source='http://localhost:3001/data/carousel'/>
</div>,document.getElementById('app'))