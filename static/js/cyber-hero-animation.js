document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('cyber-hero-animation');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Device nodes
    const devices = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, label: 'iOS', pulse: 0 },
        { x: canvas.width * 0.8, y: canvas.height * 0.3, label: 'Android', pulse: 0.2 },
        { x: canvas.width * 0.2, y: canvas.height * 0.7, label: 'Windows', pulse: 0.4 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, label: 'Linux', pulse: 0.6 }
    ];

    // Exploit particles
    const particles = [];
    for (let i = 0; i < 8; i++) {
        const startDevice = devices[Math.floor(Math.random() * devices.length)];
        const endDevice = devices[Math.floor(Math.random() * devices.length)];
        particles.push({
            start: startDevice,
            end: endDevice,
            progress: Math.random(),
            speed: 0.01 + Math.random() * 0.01
        });
    }

    // SQL code stream
    const sqlStream = {
        queries: [
            'SELECT * FROM users',
            'SELECT * FROM users WHERE id=1',
            'SELECT * FROM users OR 1=1 --'
        ],
        y: canvas.height,
        speed: 1,
        injection: false,
        injectionTimer: 0,
        opacity: 0.5
    };

    // Cybersecurity glyph
    const glyph = {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        angle: 0,
        radius: 30
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Transparent background

        // Draw SQL code stream
        ctx.font = '14px Roboto';
        ctx.textAlign = 'left';
        for (let i = 0; i < 10; i++) {
            const query = sqlStream.injection && i === 0 ? sqlStream.queries[2] : sqlStream.queries[Math.floor(Math.random() * 2)];
            const y = sqlStream.y - i * 30;
            ctx.fillStyle = sqlStream.injection && i === 0 ? `rgba(51, 51, 51, ${sqlStream.opacity})` : `rgba(0, 0, 0, 0.3)`;
            ctx.fillText(query, canvas.width * 0.05, y);
        }
        sqlStream.y += sqlStream.speed;
        if (sqlStream.y > canvas.height + 300) sqlStream.y = canvas.height;
        sqlStream.injectionTimer++;
        if (sqlStream.injectionTimer > 100) {
            sqlStream.injection = !sqlStream.injection;
            sqlStream.injectionTimer = 0;
            sqlStream.opacity = sqlStream.injection ? 1 : 0.5;
        }

        // Draw exploit paths
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.moveTo(particle.start.x, particle.start.y);
            ctx.lineTo(particle.end.x, particle.end.y);
            ctx.strokeStyle = `rgba(0, 0, 0, 0.3)`;
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        // Draw device nodes
        devices.forEach(device => {
            // Pulse effect
            device.pulse += 0.02;
            if (device.pulse > 1) device.pulse = 0;
            const radius = 10 + Math.sin(device.pulse * Math.PI) * 3;

            ctx.beginPath();
            ctx.arc(device.x, device.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#000000';
            ctx.fill();

            // Label
            ctx.font = '16px Roboto';
            ctx.fillStyle = `rgba(0, 0, 0, ${Math.abs(Math.sin(device.pulse * Math.PI))})`;
            ctx.textAlign = 'center';
            ctx.fillText(device.label, device.x, device.y - 20);
        });

        // Draw exploit particles
        particles.forEach(particle => {
            particle.progress += particle.speed;
            if (particle.progress > 1) {
                particle.progress = 0;
                particle.start = particle.end;
                particle.end = devices[Math.floor(Math.random() * devices.length)];
            }

            const x = particle.start.x + (particle.end.x - particle.start.x) * particle.progress;
            const y = particle.start.y + (particle.end.y - particle.start.y) * particle.progress;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 8, y);
            ctx.lineTo(x + 4, y + 7);
            ctx.closePath();
            ctx.fillStyle = '#000000';
            ctx.fill();
        });

        // Draw cybersecurity glyph (shield)
        ctx.save();
        ctx.translate(glyph.x, glyph.y);
        ctx.rotate(glyph.angle);
        ctx.beginPath();
        ctx.moveTo(0, -glyph.radius);
        ctx.lineTo(glyph.radius * 0.5, glyph.radius * 0.3);
        ctx.lineTo(0, glyph.radius);
        ctx.lineTo(-glyph.radius * 0.5, glyph.radius * 0.3);
        ctx.closePath();
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.restore();
        glyph.angle += 0.01;

        requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        devices[0].x = canvas.width * 0.2;
        devices[0].y = canvas.height * 0.3;
        devices[1].x = canvas.width * 0.8;
        devices[1].y = canvas.height * 0.3;
        devices[2].x = canvas.width * 0.2;
        devices[2].y = canvas.height * 0.7;
        devices[3].x = canvas.width * 0.8;
        devices[3].y = canvas.height * 0.7;
        glyph.x = canvas.width * 0.5;
        glyph.y = canvas.height * 0.5;
    });
});