import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from "../Products"
import products from "../../products"
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row style={{ background: "red" }}>
                {products.map((product) => {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default HomeScreen
