// ==========================================
// EXISTING STANDARD SCRIPT FUNCTIONALITY
// ==========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Typing animation effect
window.addEventListener('load', () => {
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let index = 0;
        
        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        };
        
        type();
    });
});

// Add glow effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            section.style.opacity = '1';
        }
    });
});


// ==========================================
// EASTER EGGS (Hacker Edition)
// ==========================================

// 1. Console Snoop (Welcome message inside developer inspector console)
console.log(
    "%c>>> SYSTEM ACCESS GRANTED \n%cHey! Welcome to the backend of my digital playground. Try looking around the page, there are secrets hidden everywhere...", 
    "color: #f85149; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #f85149;", 
    "color: #3fb950; font-size: 13px; font-family: monospace;"
);

// 2. The Self-Destruct Red Button
let clickCount = 0;
const redDot = document.getElementById('self-destruct');

if (redDot) {
    redDot.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
            alert("Terminal: Operation not permitted. Warning issued.");
        } else if (clickCount === 2) {
            alert("Terminal: Seriously. Do not push that system button again.");
        } else if (clickCount === 3) {
            // Initiate full structural crash
            document.body.innerHTML = `
                <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background: black; flex-direction: column; text-align: center; padding: 20px;">
                    <h1 style="color: #f85149; font-family: 'Courier New', monospace; text-shadow: 0 0 20px red; margin-bottom: 10px;">FATAL ERROR: KERNEL PANIC</h1>
                    <p style="color: #3fb950; font-family: 'Courier New', monospace; font-size: 1.2rem;">System overcharged. Rebooting local server in 3 seconds...</p>
                </div>
            `;
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    });
}

// 3. Konami Code (Inverts UI color scheme to an "Anti-Matrix" mode)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
            activateAntiMatrix();
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
    }
});

function activateAntiMatrix() {
    alert(">>> BYPASSING SECURITY: SYSTEM STABILITY REDUCED (LIGHT MODE ACTIVE) <<<");
    document.body.style.transition = "filter 2.5s cubic-bezier(0.1, 0.8, 0.3, 1)";
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    
    // Auto-revert design safely after 15 seconds
    setTimeout(() => {
        document.body.style.filter = "none";
    }, 15000);
}

// 4. Whoami Interactive Click Identification Card
const whoAmIEgg = document.getElementById('whoami-egg');
if (whoAmIEgg) {
    whoAmIEgg.addEventListener('click', () => {
        alert(
            "--- CLASSIFIED DOSSIER ---\n\n" +
            "Subject: Alex Lin\n" +
            "Type: Organic Human Entity (Carbon-based)\n" +
            "Current Activity: Simulating standard human protocols on Planet Earth.\n" +
            "Compute Limit: Throttled by Google Colab's Free Tier T4 GPU runtime queues.\n" +
            "Status: System integrity normal."
        );
    });
}

// 5. Logo Double-Click: Full Canvas Matrix Digital Rain
const logoEgg = document.getElementById('logo-egg');
let matrixActive = false;

if (logoEgg) {
    logoEgg.addEventListener('dblclick', () => {
        if (matrixActive) return; // Prevent spawning duplicate canvases
        matrixActive = true;
        triggerMatrixRain();
    });
}

function triggerMatrixRain() {
    // Generate fullscreen overlay canvas element
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none'; // Click-through enabled
    canvas.style.background = 'rgba(0, 0, 0, 0.05)';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const charArray = matrixChars.split('');

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#3fb950'; // Vibrant green
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    const interval = setInterval(draw, 33);

    // End matrix sequence, fade canvas down, cleanup memory
    setTimeout(() => {
        clearInterval(interval);
        canvas.style.transition = 'opacity 1.5s ease';
        canvas.style.opacity = '0';
        setTimeout(() => {
            canvas.remove();
            matrixActive = false;
        }, 1500);
    }, 6000);
}

// 6. Violin Audio Synthesizer (Generates classic synthesis without audio files)
const violinEgg = document.getElementById('violin-egg');
let audioPlaying = false;

if (violinEgg) {
    violinEgg.addEventListener('click', () => {
        if (audioPlaying) return;
        audioPlaying = true;
        playViolinSynthesizer();
    });
}

function playViolinSynthesizer() {
    // Check for browser support
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        alert("Web Audio API is not supported on your browser.");
        audioPlaying = false;
        return;
    }

    const audioCtx = new AudioContextClass();
    
    // Notes of Paganini Caprice No. 24 (A minor simplified theme)
    const notes = [
        { f: 440.00, d: 200 }, // A4
        { f: 493.88, d: 200 }, // B4
        { f: 523.25, d: 200 }, // C5
        { f: 587.33, d: 200 }, // D5
        { f: 659.25, d: 400 }, // E5
        { f: 587.33, d: 200 }, // D5
        { f: 659.25, d: 200 }, // E5
        { f: 698.46, d: 200 }, // F5
        { f: 783.99, d: 200 }, // G5
        { f: 880.00, d: 400 }, // A5
        { f: 0, d: 100 },      // Brief silence rest
        { f: 880.00, d: 200 }, // A5
        { f: 783.99, d: 200 }, // G5
        { f: 698.46, d: 200 }, // F5
        { f: 587.33, d: 200 }, // D5
        { f: 659.25, d: 600 }  // E5
    ];
    
    let time = audioCtx.currentTime;
    
    notes.forEach((note) => {
        if (note.f === 0) {
            time += note.d / 1000;
            return;
        }

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        // Sawtooth wave outputs a raw string-like tone structure
        osc.type = 'sawtooth'; 
        osc.frequency.setValueAtTime(note.f, time);
        
        // Clean envelope generator (simulates subtle string bowing dynamic)
        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(0.08, time + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, time + (note.d / 1000) - 0.02);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start(time);
        osc.stop(time + (note.d / 1000));
        
        time += (note.d / 1000);
    });

    // Reset lock once the note progression concludes
    setTimeout(() => {
        audioPlaying = false;
        audioCtx.close();
    }, (time - audioCtx.currentTime) * 1000 + 200);
}
