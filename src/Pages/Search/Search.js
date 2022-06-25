import React from 'react';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from 'react';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import axios from 'axios';
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination"




const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function Search() {

    const [type , setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();


    const fetchSearch = async() =>{
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        );

        setContent(data.results);
        setNumOfPages(data.total_pages)
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [page, type]);


    const val = "";
    return (
        <div>
        <ThemeProvider theme={darkTheme}>
            {/* <span className="pageTitle"> Search</span> */}
        <div style= {{display: 'flex' , margin: "15px 0"}}>
            
            <TextField id="outlined-basic" 
            label="Search" variant="outlined"  
            style = {{ flex : 1}}
            className = "searchBox"
            
            onChange = {(e) => setSearchText(e.target.value)}/>

            <Button variant ="contained" onClick = {fetchSearch}> <SearchIcon /></Button>
        </div>

        <Tabs  
            value = {type} 
            centered
            onChange = {(event, newValue) => {
                setType(newValue);
                setPage(1);
            }}
        >
            
            <Tab style={{ width: "50%"}} label="Search Movies"></Tab>
            <Tab style= {{width: "50%"}} label="Search TV Series"> </Tab>
        </Tabs>
        </ThemeProvider>

        <div className ="trending">
                {
                    content && content.map((c)=> (<SingleContent 
                    key = {c.id}
                    id = {c.id} 
                    poster={c.poster_path} 
                    title = {c.title || c.name} 
                    date ={c.first_air_date || c.release_date} 
                    media_type ={type ? "tv" : "movie"}
                    vote_average = {c.vote_average}
                    />)
                    )
                }
                {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>

        </div>
    )
}

export default Search
