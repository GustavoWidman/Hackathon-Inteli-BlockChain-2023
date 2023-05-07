import React from 'react'
import Navbarra from '../../components/nav'
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
export default function Home(props){
    return (
        <>
            <body>
                <Navbarra/>
                                <div className="container">
                <div className="row">
                    <div className="col">
                    First in DOM, no order applied
                    </div>
                    <div className="col order-5">
                    Second in DOM, with a larger order
                    </div>
                    <div className="col order-1">
                    Third in DOM, with an order of 1
                    </div>
                </div>
                </div>

            </body>
        </>
    )

}