import React, { useState } from 'react';
import './TemplatesDisplay.css';
import Template1 from '../../Templates/Template1/Template1.jsx';
import Template2 from '../../Templates/Template2/Template2.jsx';
import Template3 from '../../Templates/Template3/Template3.jsx';
import axios from "axios";
function TemplatesDisplay() {
  const templates = [<Template1 />, <Template2 />, <Template3 />];
  const [showPreview, setShowPreview] = useState(null);
  const [selected, setSelected] = useState(null);

  const showPreviewFunction = (index) => {
    setShowPreview(templates[index]);
  };

  const selectFunction = (index) => {
    setSelected(index);
  };

  const closePreview = () => {
    setShowPreview(null);
  };

  return (
    <div className="Templates_Display">
      {showPreview ? (
        <div className="preview_mode">
          <div className="preview_content">{showPreview}</div>
          <button className="close_btn" onClick={closePreview}>
            Close Preview
          </button>
        </div>
      ) : (
        <>
          <div className="Templates_Cards">
            {templates.map((temp, ind) => (
              <div
                className={`TemplateCard ${selected === ind ? 'selected' : ''}`}
                key={ind}
              >
                {temp}
                <div className="TemplateCard_Buttons">
                  <button onClick={() => showPreviewFunction(ind)}>
                    Show Preview
                  </button>
                  <button onClick={() => selectFunction(ind)}>
                    {selected === ind ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selected!=null && (
            <div className="submit">
              <button>Generate Resume</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TemplatesDisplay;
