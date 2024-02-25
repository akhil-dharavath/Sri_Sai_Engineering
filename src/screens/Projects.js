import React from "react";
import "../assets/Projects.css";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/VRKP.webp')}
        name="VRKP SPONGE & POWER PLANT LLP"
        titles={["Year", "Work Order Value"]}
        values={["2013 – Present", "12.5 Cr"]}
        desc={["2 X 350 TPD Sponge iron Civil work", "25 MW Power Plant"]}
        />
      <ProjectCard
        direction="left"
        img={require('../assets/company_logos/smiore.png')}
        name="SMIORE MANGANESE & ORES LTD"
        titles={["Year", "Work Order Value"]}
        values={["2023 – 2024", "25.7 Cr"]}
        desc={[
          "380 cum Blast Furnace civil work",
          "Railway Under Bridge civil work",
        ]}
      />
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/jai_raj.jpeg')}
        name="JAI RAJ ISPAT LIMITED"
        titles={["Year", "Work Order Value"]}
        values={["2019 – Present", "75 Cr"]}
        desc={[
          "0.4 M T Rolling Mill civil work",
          "75 sqm Sinter plant civil work",
          "680 cum oxygen plant civil work",
          "Central store building",
          "Water Reservoir 25 Lacs CUM capacity",
          "7 km RCC compound wall",
          "Roads",
        ]}
      />
      <ProjectCard
        direction="left"
        img={require('../assets/company_logos/sks.png')}
        name="SKS STEELS TRIVISTA STEEL AND POWER PLANT PVT LTD A1 GOLD"
        titles={["Year", "Work Order Value"]}
        values={["2016 – 2018", "17.5 C"]}
        desc={[
          "2 x 100 TPD Sponge iron Unit",
          "1 x 150 TPD Sponge iron Unit",
          "Rolling mill & Furnace work",
        ]}
      />
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/mukand.png')}
        name="MUKAND SUMI SPECIAL STEEL LTD"
        titles={["Year", "Work Order Value", "Consultancy"]}
        values={["2013 – Present", "12.5 Cr", "Korus Delhi"]}
        desc={[
          "0.6 M T rolling mill Accessories",
          "Water complex,Thickner, Raw Water reservoir, ECR building, 200 KVA Substation.",
        ]}
      />
      <ProjectCard
        direction="left"
        img={require('../assets/company_logos/kalyani.png')}
        name="KALYANI STEELS A1 STEELS RAMANJANEYA ISPAT SRIHARI SPONGE IRON VANYA STEELS ILC SPONGE & POWER LTD"
        titles={["Year", "Work Order Value"]}
        values={["2015 – 2018", "18.5 cr"]}
        desc={["Rolling Mill work, GI pipe-line mill, Sponge iron work."]}
      />
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/slr.png')}
        name="SLR METALIKS LTD"
        titles={["Works", "Year", "Work Order Value"]}
        values={[
          "Re-Heating mill, Intermediate mill, Finishing mill 1, 2 & 3, Cooling bed, Scale pit, Water complex, ECR 2, Power plant AFBC, Ground hoppers, Coal shed & Main security building, Garret coiler",
          "2014 – 2017",
          "22.5 cr",
        ]}
        desc={["Rolling Mill (0.4 Million Tons)"]}
      />
      <ProjectCard
        direction="left"
        img={require('../assets/company_logos/minera.png')}
        name="MINERA STEEL & POWER PVT LTD"
        titles={["Year", "Work Order Value"]}
        values={["2013", "3.5 cr"]}
        desc={["Gas Fire Unit"]}
      />
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/salasar.png')}
        name="SALASAR IRON & STEEL PVT LTD"
        titles={["Year", "Work Order Value"]}
        values={["2013", "2.3 cr"]}
        desc={["Rolling Mill", "500 TPD"]}
      />
      <ProjectCard
        direction="left"
        img={require('../assets/company_logos/helicon.jpeg')}
        name="HELICON AGRO CHEMICALS PVT LTD (RAICHUR)"
        titles={["MD", "Year", "Work Order Value"]}
        values={["Mr. Moolimani", "2013", "6.5 Cr"]}
        desc={["Foundations Building", "Equipment shed"]}
      />
      <ProjectCard
        direction="right"
        img={require('../assets/company_logos/apple.jpeg')}
        name="APPLE SPONGE IRON & POWER PVT LTD"
        titles={["Year", "Work Order Value"]}
        values={["2012", "2.3 Cr"]}
        desc={["D Hirehal, Obulapura, Ananthapur Dist, AP","Rolling Mill 500 TPD"]}
        />
    </div>
    <Footer/>
    </>
  );
};

export default Projects;
