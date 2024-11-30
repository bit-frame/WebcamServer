const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 13000;

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'video/webm');

<<<<<<< HEAD
    const ffmpeg = spawn('ffmpeg', [
        '-f', 'v4l2',
        '-i', '/dev/video0',
        '-vcodec', 'libvpx',
        '-f', 'webm',
=======
    // Use FFmpeg to stream the webcam
    const ffmpeg = spawn('ffmpeg', [
        '-f', 'v4l2',          // Video4Linux2 input
        '-i', '/dev/video0',   // Webcam device
        '-vcodec', 'libvpx',   // Video codec
        '-f', 'webm',          // Output format
>>>>>>> 1c5c8b1 (Initial commit with all files)
        '-'
    ]);

    ffmpeg.stdout.pipe(res);

    req.on('close', () => {
<<<<<<< HEAD
        ffmpeg.kill();
=======
        ffmpeg.kill(); // Stop the process if the client disconnects
>>>>>>> 1c5c8b1 (Initial commit with all files)
    });
});

app.listen(port, '0.0.0.0', () => {
<<<<<<< HEAD
    console.log(`Server running at port ${port}/stream`);
=======
    console.log(`Server running at http://localhost:${port}/stream`);
>>>>>>> 1c5c8b1 (Initial commit with all files)
});
