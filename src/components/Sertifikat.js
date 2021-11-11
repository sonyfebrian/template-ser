import React from 'react'
import ReactToPrint from "react-to-print";
import Template from "../images/sertifikat.jpg"


class ComponentToPrint extends React.Component {
    render() {
      return (
        <header>
      <div className="w-full bg-center bg-cover h-screen" style={{backgroundImage: 'url('+Template+')',}}>
          
        <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Certificate of Appreciation</h1>
                <br />
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">14.U/MMXXI-0170</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Presented with our deepest gratitude to</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Luisa Munster, M.Psi., Psikolog</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">for you informative sharing at Wardaya Festival titled</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">"Webinar Parenting"</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">on behalf of Kayross Consulting</h1>
                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">on August 6th, 2021</h1>
                
                
                <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>
</header>
      );
    }
  }
  
  class Example extends React.Component {
    render() {
      return (
        <React.Fragment>
          <container maxWidth="md">
            <ComponentToPrint ref={(el) => (this.componentRef = el)} />
            <ReactToPrint
              trigger={() => (
                <button
                  variant="outlined"
                  style={{
                    margin:10,
                  }}
                >
                  Export PDF
                </button>
              )}
              content={() => this.componentRef}
            />
            <button
              variant="outlined"
              style={{
                textDecoration: "none",
                color: "#18A0FB",
                margin: 10,
              }}
              href="/repo"
            >
              Home
            </button>
          </container>
        </React.Fragment>
      );
    }
  }
  
  export default Example;