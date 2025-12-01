import React, { useState, useEffect, useRef } from 'react';
import { Shield, Users, Lightbulb, ArrowRight, Menu, X, Linkedin, Twitter, Target, Heart, Zap, ChevronRight, ChevronDown } from 'lucide-react';

// --- Helper for Plasma Component (Vanilla WebGL2) ---
const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [1, 0.5, 0.2];
    return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertexShaderSource = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}
`;

const Plasma = ({
    color = '#ffffff',
    speed = 1,
    direction = 'forward',
    scale = 1,
    opacity = 1,
    mouseInteractive = true
}) => {
    const containerRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const containerEl = containerRef.current;

        const canvas = document.createElement('canvas');
        canvas.style.display = 'block';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        containerEl.appendChild(canvas);

        const gl = canvas.getContext('webgl2', { alpha: true, antialias: false });
        if (!gl) {
            console.error("WebGL2 not supported");
            return;
        }

        const createShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = gl.createProgram();
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

        const positionAttributeLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        const uTimeLoc = gl.getUniformLocation(program, "iTime");
        const uResolutionLoc = gl.getUniformLocation(program, "iResolution");
        const uCustomColorLoc = gl.getUniformLocation(program, "uCustomColor");
        const uUseCustomColorLoc = gl.getUniformLocation(program, "uUseCustomColor");
        const uSpeedLoc = gl.getUniformLocation(program, "uSpeed");
        const uDirectionLoc = gl.getUniformLocation(program, "uDirection");
        const uScaleLoc = gl.getUniformLocation(program, "uScale");
        const uOpacityLoc = gl.getUniformLocation(program, "uOpacity");
        const uMouseLoc = gl.getUniformLocation(program, "uMouse");
        const uMouseInteractiveLoc = gl.getUniformLocation(program, "uMouseInteractive");

        const handleMouseMove = e => {
            if (!mouseInteractive) return;
            const rect = containerEl.getBoundingClientRect();
            mousePos.current.x = e.clientX - rect.left;
            mousePos.current.y = (rect.height - (e.clientY - rect.top));
        };

        if (mouseInteractive) {
            containerEl.addEventListener('mousemove', handleMouseMove);
        }

        let rafId;
        const t0 = performance.now();
        const customColorRgb = hexToRgb(color);
        const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

        const render = (t) => {
            const displayWidth = containerEl.clientWidth;
            const displayHeight = containerEl.clientHeight;
            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, displayWidth, displayHeight);
            }

            let timeValue = (t - t0) * 0.001;

            gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
            gl.uniform1f(uTimeLoc, timeValue);
            gl.uniform3f(uCustomColorLoc, customColorRgb[0], customColorRgb[1], customColorRgb[2]);
            gl.uniform1f(uUseCustomColorLoc, color ? 1.0 : 0.0);
            gl.uniform1f(uSpeedLoc, speed * 0.4);
            gl.uniform1f(uDirectionLoc, directionMultiplier);
            gl.uniform1f(uScaleLoc, scale);
            gl.uniform1f(uOpacityLoc, opacity);
            gl.uniform2f(uMouseLoc, mousePos.current.x, mousePos.current.y);
            gl.uniform1f(uMouseInteractiveLoc, mouseInteractive ? 1.0 : 0.0);

            gl.drawArrays(gl.TRIANGLES, 0, 3);
            rafId = requestAnimationFrame(render);
        };

        rafId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(rafId);
            if (mouseInteractive && containerEl) {
                containerEl.removeEventListener('mousemove', handleMouseMove);
            }
            try { containerEl.removeChild(canvas); } catch (e) { }
            gl.deleteProgram(program);
        };
    }, [color, speed, direction, scale, opacity, mouseInteractive]);

    return <div ref={containerRef} className="w-full h-full" />;
};


// --- Main Component ---
const AboutPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0B0C10] text-gray-300 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">

            {/* --- Immersive Hero Section --- */}
            <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Plasma
                        color="#eab308"
                        speed={0.5}
                        direction="forward"
                        scale={1.5}
                        opacity={0.7}
                        mouseInteractive={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0B0C10]"></div>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">System Active • Est. 2024</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
                        OUR MISSION <br />
                        TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg">EMPOWER</span> YOU
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10 font-light drop-shadow-md">
                        We're dedicated to providing human-centric tools and genuine guidance, helping you navigate your financial journey with confidence and clarity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                            Start Your Journey
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 group">
                            Watch Showreel <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* --- Guiding Principles (Updated Style) --- */}
            <section className="py-32 bg-[#0B0C10] relative overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-yellow-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Core Values</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">OUR GUIDING PRINCIPLES</h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            These values are the heart of our company, shaping how we work, innovate, and connect with our community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <PrincipleCard
                            icon={<Shield className="w-8 h-8 text-yellow-400" />}
                            title="Integrity First"
                            desc="We uphold the highest standards of integrity in all we act."
                        />
                        <PrincipleCard
                            icon={<Users className="w-8 h-8 text-yellow-400" />}
                            title="Human Connection"
                            desc="Our aim is to access the heart of empathy in every digital interaction."
                        />
                        <PrincipleCard
                            icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
                            title="Creative Innovation"
                            desc="We create not just cloud developing, but imperative people real essence."
                        />
                    </div>
                </div>
            </section>

            {/* --- Our Story (Fixed Winding Path & Grid) --- */}
            <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16 md:mb-32 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Our Story</h2>
                        <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">From a simple idea to a thriving community, our journey has been one of passion, persistence, and a commitment to making a real difference.</p>
                    </div>

                    <div className="relative">
                        {/* Desktop Winding Dashed Line (Visible lg+) */}
                        {/* The SVG viewbox and path are now calculated to perfectly intersect the grid centers of the items below */}
                        <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                            <svg className="w-full h-full" viewBox="0 0 1000 1200" preserveAspectRatio="none">
                                {/* Path Logic: 
                      Starts at x=250 (Left col center), y=100 (approx row 1 center)
                      Down, Curve Right to x=750 (Right col center)
                      Down, Curve Left to x=250 
                      Down, Curve Right to x=750
                  */}
                                <path
                                    d="M 250 100 
                       L 250 250 
                       Q 250 350 350 350 
                       L 650 350 
                       Q 750 350 750 450 
                       L 750 550
                       Q 750 650 650 650
                       L 350 650
                       Q 250 650 250 750
                       L 250 850
                       Q 250 950 350 950
                       L 650 950
                       Q 750 950 750 1050
                       L 750 1150"
                                    fill="none"
                                    stroke="#2A2B30"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 250 100 
                       L 250 250 
                       Q 250 350 350 350 
                       L 650 350 
                       Q 750 350 750 450 
                       L 750 550
                       Q 750 650 650 650
                       L 350 650
                       Q 250 650 250 750
                       L 250 850
                       Q 250 950 350 950
                       L 650 950
                       Q 750 950 750 1050
                       L 750 1150"
                                    fill="none"
                                    stroke="#FACC15"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="12 12"
                                    className="opacity-80 animate-dash-flow"
                                />
                            </svg>
                        </div>

                        {/* Mobile Vertical Line (Visible < lg) */}
                        <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-gray-800 rounded-full"></div>
                        <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-yellow-400/30 rounded-full" style={{ backgroundImage: 'linear-gradient(to bottom, #FACC15 50%, transparent 50%)', backgroundSize: '4px 20px' }}></div>

                        {/* Timeline Items Grid - Standardized Grid instead of custom margins */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0">

                            {/* Row 1: 2018 (Left) */}
                            <div className="lg:h-[300px] flex items-center lg:justify-end lg:pr-16 pl-16 lg:pl-0 relative">
                                <TimelineMarker className="lg:absolute lg:right-[calc(50%-28px)] lg:translate-x-1/2" icon={<Target size={20} />} />
                                <TimelineContent year="2018" title="The Spark of an Idea" desc="Amidst strict infrastructure, a vision to simplify personal finance for everyone arose." align="right" />
                            </div>
                            <div className="hidden lg:block"></div> {/* Spacer Right */}

                            {/* Row 2: 2020 (Right) */}
                            <div className="hidden lg:block"></div> {/* Spacer Left */}
                            <div className="lg:h-[300px] flex items-center lg:justify-start lg:pl-16 pl-16 lg:pl-0 relative">
                                <TimelineMarker className="lg:absolute lg:left-[calc(50%-28px)] lg:-translate-x-1/2" icon={<Zap size={20} />} />
                                <TimelineContent year="2020" title="First Steps" desc="We assembled our first platform, getting our first 1000 users and validating our human-first approach." align="left" />
                            </div>

                            {/* Row 3: 2022 (Left) */}
                            <div className="lg:h-[300px] flex items-center lg:justify-end lg:pr-16 pl-16 lg:pl-0 relative">
                                <TimelineMarker className="lg:absolute lg:right-[calc(50%-28px)] lg:translate-x-1/2" icon={<Users size={20} />} />
                                <TimelineContent year="2022" title="Growing Together" desc="Reached 50k users and secured Series A funding to expand our services and our team." align="right" />
                            </div>
                            <div className="hidden lg:block"></div> {/* Spacer Right */}

                            {/* Row 4: Today (Right) */}
                            <div className="hidden lg:block"></div> {/* Spacer Left */}
                            <div className="lg:h-[300px] flex items-center lg:justify-start lg:pl-16 pl-16 lg:pl-0 relative">
                                <TimelineMarker className="lg:absolute lg:left-[calc(50%-28px)] lg:-translate-x-1/2" icon={<Heart size={20} />} />
                                <TimelineContent year="Today" title="Looking Ahead" desc="Continuously innovating to build the future of financial wellness for nations worldwide." align="left" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --- Team Section --- */}
            <section className="py-24 bg-[#0F1014] relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px] opacity-70 animate-pulse-subtle pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">The People Behind The Purpose</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
                            Our diverse team of experts is united by a shared passion for innovation and a commitment to our mission.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <TeamMember
                            name="Jane Doe"
                            role="Chief Executive Officer"
                            icon={<Shield size={16} />}
                        />
                        <TeamMember
                            name="John Smith"
                            role="Chief Technology Officer"
                            icon={<Zap size={16} />}
                        />
                        <TeamMember
                            name="Emily White"
                            role="Head of Product"
                            icon={<Users size={16} />}
                        />
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="bg-[#16171C] border border-white/5 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden group">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">Join Our Journey</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                                Ready to take control of your financial health? Explore our services or consider a career with a team that's making a difference.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                                    Explore Careers <ArrowRight size={20} />
                                </button>
                                <button className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                                    Our Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Sub Components ---

const PrincipleCard = ({ icon, title, desc }) => (
    <div className="group bg-[#16171C] p-8 rounded-[2rem] border border-white/5 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden">
        {/* Top Accent Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/0 to-transparent group-hover:via-yellow-400/50 transition-all duration-500"></div>

        <div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
            <div className="text-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
            {desc}
        </p>
    </div>
);

const TimelineMarker = ({ className, icon }) => (
    <div className={`absolute left-[-20px] lg:static w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#0B0C10] border-2 border-yellow-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(250,204,21,0.3)] ${className}`}>
        <div className="text-yellow-400 scale-75 lg:scale-100">
            {icon}
        </div>
    </div>
);

const TimelineContent = ({ year, title, desc, align }) => (
    <div className={`bg-[#16171C] p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-all duration-300 w-full max-w-md group ${align === 'right' ? 'text-left lg:text-right' : 'text-left'}`}>
        <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-2 block">{year}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

const TeamMember = ({ name, role, icon }) => (
    <div className="group relative bg-[#16171C] p-8 rounded-[2rem] border border-white/5 hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Background Glow Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-transparent group-hover:from-yellow-400/5 transition-all duration-500"></div>

        {/* Abstract Avatar Sphere */}
        <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Outer rotating ring effect */}
            <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-yellow-400/30 border-dashed animate-[spin_10s_linear_infinite] opacity-30"></div>

            {/* Inner Sphere */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-yellow-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-gray-500 group-hover:text-yellow-400 transition-colors duration-300 transform group-hover:scale-110">
                    {/* Render icon larger here */}
                    {React.cloneElement(icon, { size: 40 })}
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-0 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <div className="scale-75">{icon}</div>
            </div>
        </div>

        <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{name}</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">{role}</p>
        </div>
    </div>
);

export default AboutPage;
