// import { BrowserRouter } from 'react-router-dom';
// import {
//   About,
//   Contact,
//   Experience,
//   Hero,
//   Navbar,
//   Tech,
// } from './components';
// import Certificates from './components/Certificates';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0">
//         <div>
//           <Navbar />
//           <Hero />
//         </div>

//         <div className="bg-about bg-cover bg-center bg-no-repeat">
//           <About />
//         </div>

//         <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
//           <Tech />
//         </div>

//         { /*rojects /> <Certificates/> */ }
        

//         <div
//           className="bg-experience bg-cover bg-center bg-no-repeat 
//             rounded-tl-[150px] rounded-br-[150px]">
//           <div
//             className="bg-experienceLight bg-cover bg-center 
//             bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
//             <Experience />
//           </div>
//         </div>
//         <div className="relative z-0">
//           <Contact />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Certificates,
  Projects

} from './components';
// import Certificates from './components/Certificates';
// import Projects from './components/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* Navbar and Hero Section */}
        <div>
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        {/* Tech Section */}
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        {/* Projects and Certificates Section */}
        <div>
          <Projects />
          <Certificates />
        </div>

        {/* Experience Section */}
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
