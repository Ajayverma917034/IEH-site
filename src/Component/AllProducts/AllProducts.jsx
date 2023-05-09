import React, { Fragment } from 'react'
import Loading from '../Loading/Loading';
import { Box, Typography } from '@mui/material';
import SingleProduct from '../Product/SingleProduct';
import './AllProducts.css'
import ProductDummy from '../LoadingPage/ProductsDummy';



const AllProducts = ({ loading, products, count, setCurrentPage, currentPage }) => {



    return (
        <Fragment>
            {
                loading ? <>
                    <ProductDummy />
                    <Loading />
                </> :
                    <Fragment>
                        <Typography style={{ fontSize: '33px', fontWeight: '600' }} className='productHeading'> Products </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            {
                                products && products.map((product) => (
                                    <SingleProduct product={product} key={product._id} />
                                ))
                            }
                        </Box>

                    </Fragment>
            }



        </Fragment>
    )
}

export default AllProducts