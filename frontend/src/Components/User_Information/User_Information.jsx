import React, { useState } from 'react';
import './User_Information.css';
import {useNavigate} from 'react-router-dom';
function prepareResume(selectedSections,links,experiences,projects,achievements,extraCurricularActivities,name,contactNo,email,summary,education,skills){
const sectionsData={};
if(selectedSections.includes("Full Name")){
  sectionsData.FullName=name;
}
if(selectedSections.includes("Contact No")){
  sectionsData.ContactNo=contactNo;
}
if(selectedSections.includes("Email")){
  sectionsData.Email=email;
}
if(selectedSections.includes("Social Links")){
  sectionsData.Social_Links=links.map(link=>({
  Platform:link.platform,
  Hyperlink:link.url
  }));
}
if(selectedSections.includes("Summary")){
  sectionsData.Summary=summary;
}
if(selectedSections.includes("Education")){
sectionsData.Education=({
  College_Name:education[0].college,
  Graduation_Duration:education[0].Graduation_Duration,
  Degree:education[0].Degree,
  CGPA:education[0].CGPA,
})
}
if(selectedSections.includes("Experience")){
  sectionsData.Experiences=experiences.map(experience=>({
    Company_Name:experience.name,
    Job_Duration:experience.duration,
    Job_Role:experience.role,
    Job_Description:experience.description
  }))
}
if(selectedSections.includes("Projects")){
  sectionsData.Projects=projects.map(project=>({
  Project_Name:project.name,
  Projects_HyperLink:project.link,
  Projects_Description:project.description,
  Project_Technology_Used:project.technologyUsed
  }))
}
if(selectedSections.includes("Skills")){
  sectionsData.Skills=skills
}
if(selectedSections.includes("Achievements")){
  sectionsData.Achievements=achievements.map(achievement=>({
  Achievement:achievement.text
  }))
}
if(selectedSections.includes("ExtraCurricular Activities")){
  sectionsData.ExtraCurricularActivities=extraCurricularActivities.map(extra=>({
    ExtraCurricularActivitiy:extra.text
  }))
}
return sectionsData;
}
function User_Information() {
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showRemoveDropdown, setShowRemoveDropdown] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);
  const [links,setLinks]=useState([{platform:"",url:""}]);
  const [experiences,setExperiences]=useState([{name:"",duration:"",role:"",description:""}])
  const [projects,setProjects]=useState([{name:"",link:"",description:"",technologyUsed:""}])
  const [achievements,setAchievements]=useState([{text:""}]);
  const [extraCurricularActivities,setExtraCurricularActivities]=useState([{text:""}]);
  const [name,setName]=useState("");
  const [contactNo,setContact]=useState("");
  const [email,setEmail]=useState("");
  const [summary,setSummary]=useState("");
  const [education,setEducation]=useState([{college:"",Graduation_Duration:"",Degree:"",CGPA:""}]);
  const [skills,setSkills]=useState("")
  const navigate=useNavigate();
  const handleAddExtraCurricularActivities=()=>{
    setExtraCurricularActivities([...extraCurricularActivities,{text:""}]);
  }
  const handleSubmit=()=>{
  const data=prepareResume(selectedSections,links,experiences,projects,achievements,extraCurricularActivities,name,contactNo,email,summary,education,skills);
  navigate('/templates',{state:{data:data,selectedSections:selectedSections}});
  }
  const handleRemoveExtraCurricularActivities=(index)=>{
    const newExtra=[...extraCurricularActivities];
    newExtra.splice(index,1);
    setExtraCurricularActivities(newExtra);
  }
  const handleAddAchievemetns=()=>{
    setAchievements([...achievements,{text:""}])
  }
  const handleRemoveAchievements=(ind)=>{
    const newAchievements=[...achievements];
    newAchievements.splice(ind,1);
    setAchievements(newAchievements);
  }
  const handleAddProjects=()=>{
    setProjects([...projects,{name:"",link:"",description:"",technologyUsed:""}])
  }
  const handleRemoveProjects=(index)=>{
    const newProjects=[...projects];
    newProjects.splice(index,1);
    setProjects(newProjects);
  }
  const handleAddExperiences=()=>{
    setExperiences([...experiences,{name:"",duration:"",role:"",description:""}])
  }
  const handleRemoveExperiences=(index)=>{
  const newExperience=[...experiences];
  newExperience.splice(index,1);
  setExperiences(newExperience);
  }
  const handleAddLink=()=>{
    setLinks([...links,{platform:"",url:""}]);
  }
  const handleRemoveLink=(index)=>{
  const newLinks=[...links];
  newLinks.splice(index,1);
  setLinks(newLinks);
  }
  const handleAdd = (e) => {
    const section = e.target.name;
    setSelectedSections((prev) => {
      if (!prev.includes(section)) {
        return [...prev, section];
      }
      return prev;
    });
    setShowAddDropdown(false); 
  };

  const handleRemove = (section) => {
    setSelectedSections((prev) => prev.filter((s) => s !== section));
    setShowRemoveDropdown(false); 
  };

  return (
    <div className="User_Information">
      <div className="controlsPanel">
        <div className="addSections">
          <button
            className="Add_Sections_Button"
            onClick={() => setShowAddDropdown(!showAddDropdown)}
          >
            ➕ Add Sections
          </button>

          {showAddDropdown && (
            <div className="Dropdown">
              {[
                'Full Name',
                'Contact No',
                'Email',
                'Social Links',
                'Summary',
                'Education',
                'Experience',
                'Projects',
                'Skills',
                'Achievements',
                'ExtraCurricular Activities',
              ].map((section) => (
                <button key={section} name={section} onClick={handleAdd}>
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedSections.length > 0 && (
          <div className="removeSections">
            <button
              className="Remove_Sections_Button"
              onClick={() => setShowRemoveDropdown(!showRemoveDropdown)}
            >
              🗑️ Remove Sections
            </button>

            {showRemoveDropdown && (
              <div className="Dropdown">
                {selectedSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => handleRemove(section)}
                    className="removeButton"
                  >
                    ❌ {section}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="resumePreview">
        {selectedSections.length === 0 ? (
          <p className="placeholderText">
            Add sections from the left panel to start building your resume 👇
          </p>
        ) : (<>
              {selectedSections.includes('Full Name') && (
                <>
                <h2>Full Name</h2>
                <input
                  className="inputField"
                  placeholder="Enter your full name"
                  onChange={(e)=>setName(e.target.value)}
                />
                </>
              )
              }
              {
                selectedSections.includes('Contact No') && (
                  <>
                  <h2>Contact No</h2>
                  <input
                  className='inputField'
                  placeholder='Enter your ContactNo.'
                    onChange={(e)=>setContact(e.target.value)}
                  />
                  </>
                )
              }
              {
                selectedSections.includes('Email') && (
                  <>
                  <h2>Email</h2>
                  <input
                  className='inputField'
                  placeholder='Enter your Email'
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                  </>
                )
              }
              {selectedSections.includes('Social Links') && (
               <>
               <div className="socialLinksHeader">
              <h2>Social Links</h2>
              <button className="Add_Inputs" onClick={handleAddLink}>
              + Add Link
              </button>
              </div>
             {links.map((link, index) => (
             <div className="socialLinkInput" key={index}>
             <input
             type="text"
             placeholder="Platform e.g. LinkedIn"
             value={link.platform}
            onChange={(e) => {
            const updated = [...links];
            updated[index].platform = e.target.value;
            setLinks(updated);
            }}
            />
           <input
           type="text"
           placeholder="Profile URL"
           value={link.url}
           onChange={(e) => {
           const updated = [...links];
           updated[index].url = e.target.value;
           setLinks(updated);
          }}
         />
         <button onClick={() => handleRemoveLink(index)}>Remove</button>
        </div>
       ))}
       </>
       )}
       {
        selectedSections.includes('Summary') && (
          <>
          <h2>Summary</h2>
          <textarea
          className='inputField'
          type="text"
          placeholder='Enter the summary'
          onChange={(e)=>setSummary(e.target.value)}
          />
          </>
        )
       }
       {selectedSections.includes('Education') && (
        <>
        <h2>Education</h2>
        <input
        className='inputField'
         type="text"
         placeholder='Enter your college name'
         onChange={(e)=>{
         const updated=[...education]
         updated[0].college=e.target.value;
         setEducation(updated);
         }}
         />
         <input
         className='inputField'
         type='text'
         placeholder='Enter you Graduation Duration (e.g 2023-2027)'
         onChange={(e)=>{
         const updated=[...education]
         updated[0].Graduation_Duration=e.target.value;
         setEducation(updated);
         }}
         />
         <input
         className='inputField'
         placeholder='Enter your degree (e.g B.TECH-Computer Science and Engineering)'
         type='text'
         onChange={(e)=>{
         const updated=[...education]
         updated[0].Degree=e.target.value;
         setEducation(updated);
         }} 
         />
         <input
         className='inputField'
         placeholder='Enter your CGPA'
         onChange={(e)=>{
         const updated=[...education]
         updated[0].CGPA=e.target.value;
         setEducation(updated);
         }}
         type='text'/>
        </>
       )}
      {selectedSections.includes('Experience') && (
  <>
    <div className="experienceHeader">
      <h2>Experience</h2>
      <button className="Add_Inputs" onClick={handleAddExperiences}>
        + Add Experience
      </button>
    </div>
    {experiences.map((exp, ind) => (
      <div className="experienceCard" key={ind}>
        <textarea
          className="inputField"
          placeholder="Enter the Company name (e.g. Google)"
          type="text"
          value={exp.name}
          onChange={(e)=>{
            const updated=[...experiences];
            updated[ind].name=e.target.value;
            setExperiences(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the duration (e.g. Aug 2025 - Sept 2025)"
          type="text"
          value={exp.duration}
          onChange={(e)=>{
            const updated=[...experiences];
            updated[ind].duration=e.target.value;
            setExperiences(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the job role (e.g. Intern)"
          type="text"
          value={exp.role}
          onChange={(e)=>{
            const updated=[...experiences];
            updated[ind].role=e.target.value;
            setExperiences(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the job description"
          type="text"
          value={exp.description}
          onChange={(e)=>{
            const updated=[...experiences];
            updated[ind].description=e.target.value;
            setExperiences(updated);
          }}
        />
        <button
          className="removeExperienceBtn"
          onClick={() => handleRemoveExperiences(ind)}
        >
          Remove
        </button>
      </div>
      ))}
      </>
       )}
       {selectedSections.includes('Projects') && (
  <>
    <div className="projectsHeader">
      <h2>Projects</h2>
      <button className="Add_Inputs" onClick={handleAddProjects}>
        + Add Project
      </button>
    </div>
    {projects.map((proj, ind) => (
      <div className="projectCard" key={ind}>
        <textarea
          className="inputField"
          placeholder="Enter the project name"
          value={proj.name}
          onChange={(e)=>{
            const updated=[...projects];
            updated[ind].name=e.target.value;
            setProjects(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the description of the project"
          value={proj.description}
          onChange={(e)=>{
            const updated=[...projects];
            updated[ind].description=e.target.value;
            setProjects(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the link of the project"
          value={proj.link}
          onChange={(e)=>{
            const updated=[...projects];
            updated[ind].link=e.target.value;
            setProjects(updated);
          }}
        />
        <textarea
          className="inputField"
          placeholder="Enter the skills used (e.g. HTML, CSS)"
          value={proj.technologyUsed}
          onChange={(e)=>{
            const updated=[...projects];
            updated[ind].technologyUsed=e.target.value;
            setProjects(updated);
          }}
        />
        <button
          className="removeProjectBtn"
          onClick={() => handleRemoveProjects(ind)}
        >
          Remove
        </button>
      </div>
      ))}
     </>
     )}
     {selectedSections.includes('Skills') &&(
      <>
      <h2>Skills</h2>
      <textarea
      className='inputField'
      placeholder='Enter the skills (e.g HTML,CSS)'
      onChange={(e)=>setSkills(e.target.value)}
      />
      </>
     )}
      {selectedSections.includes('Achievements') && (
  <>
    <div className="Achievement-Header">
      <h2>Achievements</h2>
      <button className="Add_Inputs" onClick={handleAddAchievemetns}>
        + Add Achievement
      </button>
    </div>

    <div className="Achievement-Cards">
      {achievements.map((ach, ind) => (
        <div className="Achievement-Card" key={ind}>
          <textarea
            className="inputField"
            placeholder="Enter the Achievement"
            value={ach.text}
            onChange={(e) => {
              const updated = [...achievements];
              updated[ind].text = e.target.value;
              setAchievements(updated);
            }}
         />
         <button onClick={() => handleRemoveAchievements(ind)}>
         Remove Achievement
         </button>
         </div>
         ))}
         </div>
         </>
          )} 
       {selectedSections.includes('ExtraCurricular Activities') && (
  <>
    <div className='Extra_Curricular_Activities_Header'>
      <h2>ExtraCurricular Activities</h2>
      <button className="Add_Inputs" onClick={handleAddExtraCurricularActivities}>
        + Add ExtraCurricular Activities
      </button>
    </div>

    <div className="Extra_Curricular_Activities_Cards">
      {extraCurricularActivities.map((ext, ind) => (
        <div className='Extra_Curricular_Activities_Card' key={ind}>
          <textarea
            placeholder='Enter the ExtraCurricular Activity'
            className='inputField'
            value={ext.text}
            onChange={(e)=>{
              const updated=[...extraCurricularActivities]
              updated[ind].text=e.target.value;
              setExtraCurricularActivities(updated);
            }}
          />
          <button onClick={() => handleRemoveExtraCurricularActivities(ind)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  </>
)}
        </>
        )
        }
      {selectedSections.length>3 &&
      <div className='submit'>
      <button className='submit_button' onClick={handleSubmit}>Choose Templates</button>
      </div>
      }
      </div>
    </div>
  );
}

export default User_Information;
