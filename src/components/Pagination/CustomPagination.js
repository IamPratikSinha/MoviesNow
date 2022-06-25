import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme , ThemeProvider} from '@mui/material/styles';
// import { red , white} from '@mui/material/colors';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
// const darkTheme = createMuiTheme({
//     palette: {
//       type: "dark",
//     },
//   });

const CustomPagination = ({setPage, numberofPages = 10}) => {

    const handelPageChange = (page) => {
        setPage(page);
        window.scroll(0,0); 
    };
    return (
        <div 
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination count = {numberofPages} color="primary" onChange = {(e) => handelPageChange(e.target.textContent)}/>
            </ThemeProvider>
            
        </div>
    );
};

export default CustomPagination;
