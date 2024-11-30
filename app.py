const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = 13000;

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'video/webm');

    const ffmpeg = spawn('ffmpeg', [
        '-f', 'v4l2',
        '-i', '/dev/video0',
        '-vcodec', 'libvpx',
        '-f', 'webm',
        '-'
    ]);

    ffmpeg.stdout.pipe(res);

    req.on('close', () => {
        ffmpeg.kill();
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at port ${port}/stream`);
});
