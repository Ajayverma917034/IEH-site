import React, { useState } from "react";

import "./dashboard.css";
import "./banner.css"

// import { useDispatch } from "react-redux";
import MetaData from "../metaData/MetaData.jsx";
import Sidebar from "./Sidebar";
import { Button, Typography } from "@mui/material";
import { bannerData } from "../../constant/carousel";
import { Delete } from "@mui/icons-material";


const Banner = () => {
    // const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    console.log(imagesPreview)
    const createBannerImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });


    };

    const handleAddImage = () => {
        const myForm = new FormData();
        images.forEach((image) => {
            myForm.append("images", image);
        })
        console.log(myForm)
    }

    return (
        <div className="dashboard">
            <MetaData title="Banner - Admin Panel" />
            <Sidebar />
            <div className="dashboardContainer">
                <Typography component="h1">Banner</Typography>
                <Typography component="h1">Old image</Typography>
                <div className="oldimg">

                    {
                        bannerData && bannerData.map((item, index) => (
                            <div className="imgBox">
                                <img src={item.url} alt="img" className="imgStyle" key={index} />
                                <Delete />
                            </div>

                        ))
                    }
                </div>

                {
                    imagesPreview.length > 0 && <><Typography component="h1">Added image</Typography>
                        <div className="oldimg">

                            {imagesPreview.map((image, index) => (
                                <div className="imgBox">
                                    <img key={index} src={image} alt="Product Preview" className="imgStyle" />
                                </div>
                            ))}
                        </div>
                    </>
                }

                <div id="addBannerimg">
                    <input
                        type="file"
                        name='avatar'
                        accept="image/*"
                        onChange={createBannerImagesChange}
                        multiple
                    />

                </div>

                {
                    images.length > 0 &&
                    <Button style={{ backgroundColor: 'tomato', color: '#fff' }} className="StyleButton" onClick={handleAddImage}>Add Now</Button>
                }


            </div>

        </div>
    );
};

export default Banner;