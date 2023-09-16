// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import car1 from "../img/car1.png";
// import car2 from "../img/car2.png";
// import car3 from "../img/car3.png";
// import car4 from "../img/car4.png";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: "Балдарды өнүктүрүүгө оңой жол",
//     text: "Балдардын иш-аракеттери жөнүндө маалыматты жеткиликтүү кылуу менен, бакчадагы бардык иш-чаралар  боюнча маалымдуулукту жогорулатуу.",
//     cover: car1,
//   },
//   {
//     label: "Администрация",
//     par: "Бала бакчада кандай жанылыктар",
//     cover: car2,
//   },
//   {
//     label: "Тарбиячыларга",
//     par: "Баардык маалыматтар сиздин колунузда",
//     cover: car3,
//   },
//   {
//     label: "Ата энелер",
//     par: "Баардык маалыматтар сиздин колунузда",
//     cover: car4,
//   },
// ];

// function Carousel() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           pl: 2,
//           bgcolor: "background.default",
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//         <p>{images.text}</p>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: "block",
//                   maxWidth: 400,
//                   overflow: "hidden",
//                   width: "100%",
//                 }}
//                 src={step.cover}
//                 alt={step.cover}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default Carousel;
