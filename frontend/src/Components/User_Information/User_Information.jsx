import React, { useState } from 'react';
import './User_Information.css';

function User_Information() {
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showRemoveDropdown, setShowRemoveDropdown] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);

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
                  placeholder='Enter your ContactNo.'/>
                  </>
                )
              }

            </>
          )
        }
      </div>
    </div>
  );
}

export default User_Information;
