import React from 'react';
import {img_300, unavailable} from "../../config/config";
import './SingleContent.css';
import {Badge} from "@mui/material";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SingleContent= ({

    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {

    const [video, setVideo] = useState();

    const fetchVideo = async () =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        console.log(data);
        setVideo(data.results[0]?.key);
    }
  
    useEffect(() => {
        
        fetchVideo();
        // eslint-disable-next-line
    }, []);
    return (
    <div className="media"> 
    
        <Badge badgeContent ={vote_average.toFixed(1)} color = {vote_average > 6 ? 'primary': 'secondary'}/>
        <img
        src={poster ? `${img_300}/${poster}`: unavailable}
        alt={title}
        
        />
        
        <b className="title">{title}</b>
        
        <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
        
      </span>
      <Button className="btn"
          style={{
            // borderRadius: 35,
            // backgroundColor: "#21b6ae",
            size: '10px',
            color: "red",
            padding: "5px 6px",
            margin:'0px',
            border:'0px',
            width:"100%"
            
            // fontSize: "18px"
        }} size="small"startIcon={<YouTubeIcon />} target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}>Watch Now</Button>
        {/* {console.log(media_type)} */}
        </div>
    );
};

export default SingleContent;