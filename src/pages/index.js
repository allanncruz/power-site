import React from 'react'
import {Link} from 'gatsby'
import Header from '../pages/components/Header'

const Index = () => {
    return (
        <div>
            <Header />
            <Link to='/contato'>Contato</Link>
        </div>
    )
} 

export default Index