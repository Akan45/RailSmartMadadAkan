import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [pmode, setPmode] = useState('');
  const [fileInfo, setFileInfo] = useState({});

  useEffect(() => {
    if (pmode === 'PNR') {
      document.getElementById('PNR').style.display = 'block';
      document.getElementById('Trainno1').style.display = 'none';
      document.getElementById('UTS').style.display = 'none';
      document.getElementById('uts_error').style.display = 'none';
      document.getElementById('pnr_error').style.display = 'block';
    } else if (pmode === 'UTS') {
      document.getElementById('PNR').style.display = 'none';
      document.getElementById('Trainno1').style.display = 'block';
      document.getElementById('UTS').style.display = 'block';
      document.getElementById('uts_error').style.display = 'block';
      document.getElementById('pnr_error').style.display = 'none';
    } else {
      document.getElementById('PNR').style.display = 'none';
      document.getElementById('pnr_desc').style.display = 'none';
      document.getElementById('uts_error').style.display = 'none';
      document.getElementById('pnr_error').style.display = 'block';
    }
  }, [pmode]);

  const handleFileChange = (event) => {
    const inputfile = event.target;
    const fileName = inputfile.value;
    const ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'mp4', 'pdf'];

    if (!allowedExtensions.includes(ext)) {
      alert('Upload JPG, JPEG, PNG, MP4, or PDF files only');
      return;
    }

    if (inputfile.files[0].size > 5000000) {
      alert('File size should be less than 5MB');
      return;
    }

    if (['jpg', 'jpeg', 'png'].includes(ext)) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileInfo({ src: reader.result, showImage: true, showUploadMessage: false });
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setFileInfo({ showImage: false, showUploadMessage: true });
    }
  };

  return (
    <div>
      <select id="pmode" onChange={(e) => setPmode(e.target.value)}>
        <option value="">Select Mode</option>
        <option value="PNR">PNR</option>
        <option value="UTS">UTS</option>
        {/* Add other options as needed */}
      </select>

      <div id="PNR" style={{ display: 'none' }}>PNR Content</div>
      <div id="Trainno1" style={{ display: 'none' }}>Train No. Content</div>
      <div id="UTS" style={{ display: 'none' }}>UTS Content</div>
      <div id="uts_error" style={{ display: 'none' }}>UTS Error</div>
      <div id="pnr_error" style={{ display: 'none' }}>PNR Error</div>

      <input type="file" onChange={handleFileChange} />

      {fileInfo.showImage && (
        <img id="output_image" src={fileInfo.src} alt="Output" style={{ display: 'block' }} />
      )}

      {fileInfo.showUploadMessage && (
        <div id="uploadmessage" style={{ display: 'block' }}>Upload Successful</div>
      )}
    </div>
  );
};

export default MyComponent;
