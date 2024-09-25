"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For routing
import { Button } from '@mantine/core';

const AudioPage = () => {
  const router = useRouter();
  const [audioFile, setAudioFile] = useState(null);
  const [audioSrc, setAudioSrc] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAudioFile(file);
      setAudioSrc(fileURL);
    }
  };

  const handlePlay = () => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <>
      <div>
        <h1>Audio Processing Page</h1>
        <input 
          type="file" 
          accept="audio/*" 
          onChange={handleFileChange} 
        />
        {audioSrc && (
          <div>
            <audio id="audioPlayer" controls>
              <source src={audioSrc} type={audioFile.type} />
              Your browser does not support the audio element.
            </audio>
            <Button onClick={handlePlay}>Play Audio</Button>
          </div>
        )}
        <Button onClick={() => router.push(`/AudioPage?file=${encodeURIComponent(file.name)}`)}>Go Back</Button>
      </div>
      
    </>
  );
};

export default AudioPage;

