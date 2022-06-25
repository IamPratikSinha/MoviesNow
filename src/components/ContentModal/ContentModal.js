// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import {img_500, unavailable , unavailableLandscape} from '../../config/config'
// // import './ContentModal.css';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '70%',
//   height: '70%',
//   bgcolor: 'paper.#0d1117',
// //   opacity: '0.1',
  
//   color: 'white',
//   border: '2px solid #000',
//   boxShadow: '0px 5px 50px #42e3f5',
// //   bgcolor: 'white',
//   p: 4,
// };

// export default function ContentModal({children, media_type , id}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [content, setContent] = useState();
//   const [video, setVideo] = useState();

//   const fetchData = async ()=>{
//     const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
//     setContent(data);
//   };

//   const fetchVideo = async () =>{
//       const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
//       console.log(data);
//       setVideo(data.results[0]?.key);
//   }

//   useEffect(() => {
      
//     //   fetchData();
//       fetchVideo();
//       // eslint-disable-next-line
//   }, []);
//   return (
//     <div>
//       <Button  target="__blank" href={`https://www.youtube.com/watch?v=${video}`} className="media">{children}</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//               {content && 
//           <div className="ContentModal">
//                 {/* <img
//                   src={
//                     content.poster_path
//                       ? `${img_500}/${content.poster_path}`
//                       : unavailable
//                   }
//                   alt={content.name || content.title}
//                   className="ContentModal__portrait"
//                 /> */}
//                 <img
//                   src={
//                     content.backdrop_path
//                       ? `${img_500}/${content.backdrop_path}`
//                       : unavailableLandscape
//                   }
//                   alt={content.name || content.title}
//                   className="ContentModal__landscape"
//                 />
//                 <div className= "ContentModal_about">
//                     <span "ContentModal_title">
//                         {
//                             conten
//                         }
//                     </span>
//                 </div>
//                 </div>
// }
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }