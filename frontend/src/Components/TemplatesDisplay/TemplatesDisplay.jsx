import React, { useState, useContext } from 'react';
import './TemplatesDisplay.css';
import Template1 from '../../Templates/Template1/Template1.jsx';
import Template2 from '../../Templates/Template2/Template2.jsx';
import Template3 from '../../Templates/Template3/Template3.jsx';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import { toast } from 'react-toastify';

const downloadPdf = (pdfBase64, fileName = "resume.pdf") => {
  // Directly use data URL to avoid atob errors
  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${pdfBase64}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function TemplatesDisplay() {
  const { url } = useContext(StoreContext);
  const templates = [<Template1 />, <Template2 />, <Template3 />];
  const [showPreview, setShowPreview] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { data, selectedSections } = location.state;

  const showPreviewFunction = (index) => setShowPreview(templates[index]);
  const selectFunction = (index) => setSelected(index);
  const closePreview = () => setShowPreview(null);

  const handleSubmit = async () => {
    if (selected === null) return toast.error("Please select a template first");

    setLoading(true);
    try {
      const response = await axios.post(url + "/api/resume/generator", {
        information: data,
        sections: selectedSections,
        template: selected
      });

      if (response.data.success) {
        toast.success(response.data.message);
        downloadPdf(response.data.pdf, "My_Resume.pdf");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Templates_Display">
      {showPreview ? (
        <div className="preview_mode">
          <div className="preview_content">{showPreview}</div>
          <button className="close_btn" onClick={closePreview}>Close Preview</button>
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
                  <button onClick={() => showPreviewFunction(ind)}>Show Preview</button>
                  <button onClick={() => selectFunction(ind)}>
                    {selected === ind ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selected != null && (
            <div className="submit">
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Generating..." : "Generate Resume"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TemplatesDisplay;
