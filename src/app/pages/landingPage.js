"use client";
import { useRef } from 'react';
import { useRouter } from 'next/navigation'; // For routing in Next.js
import "./landingpage.css";
import { Button } from "@mantine/core";

const LandingPage = () => {
  const fileInputRef = useRef(null);
  const router = useRouter(); // Initialize useRouter for navigation

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file processing or pass the file name to the new page
      console.log("Selected file:", file);
      // Navigate to the AudioPage (can pass the file name via URL query if needed)
      router.push('/AudioPage');
    }
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <h3>How It Work</h3>
          <h3>Joiner</h3>
        </div>
        <div className="heading">
          <h1>Audio Cutter</h1>
          <p>Free editor to trim and cut any audio file online</p>
        </div>

        <div className="button">
          <Button onClick={handleButtonClick}>Browse My Files</Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // Hide the input
            accept="audio/*" // Restrict file selection to audio files only
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
