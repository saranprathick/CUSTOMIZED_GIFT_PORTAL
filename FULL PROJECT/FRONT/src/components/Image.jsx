import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

function Image() {

  const [imageFiles, setImageFiles] = useState([]);

  
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles(prevFiles => [...prevFiles, ...files]);
  };

  const handleUpload = () => {
    if (imageFiles.length > 0) {
      console.log('Uploading files:', imageFiles.map(file => file.name));
      // Perform upload action here if needed
    } else {
      console.log('No images selected for upload.');
    }
  };

  const handleDeleteImage = (index) => {
    setImageFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageFiles.map((file, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={URL.createObjectURL(file)}
              alt={`Uploaded Image ${index + 1}`}
              style={{ width: 300, height: 300, marginTop: 10, objectFit: 'cover', marginRight: 10 }}
            />
            <IconButton
              onClick={() => handleDeleteImage(index)}
              style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'white' }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      
      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          id="upload-input"
          multiple
        />
        <label htmlFor="upload-input">
          <Button component="span" variant="contained" color="primary">
            Upload Theme
          </Button>
        </label>
        {imageFiles.length > 0 && (
          <Button variant="contained" color="secondary" onClick={handleUpload}>
            Confirm Theme
          </Button>
        )}
      </div>
    </>
  );
}

export default Image;
