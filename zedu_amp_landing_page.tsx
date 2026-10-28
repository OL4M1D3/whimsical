import React, { useEffect, useRef, useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Bot, 
  TrendingUp, 
  Layers, 
  Users, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Flame,
  Award
} from 'lucide-react';

/**
 * WITTY MICRO-COPY POOL FOR SWARMING AGENT NODES
 */
const AGENT_MESSAGES = [
  "Agent Optimist is convincing a toaster to buy your SaaS",
  "Automating 10,000 leads while you sip cold brew",
  "Warning: High-intent leads detected in aisle 4",
  "Agent Alpha just out-negotiated a veteran CMO",
  "Converting dark social traffic into pure pipeline",
  "A/B testing headlines with 99.4% statistical arrogance",
  "Drafting viral threads at 120 WPM",
  "Agent Lynx detected a competitor's broken funnel"
];

/**
 * INITIAL MOCK TASKS FOR THE CANVAS MAGNET ENGINE
 */
const MOCK_NODES = [
  { id: 1, title: "SERP competitor gap analysis", badge: "In progress", color: "bg-blue-100 text-blue-700 border-blue-200", pts: "300 pts" },
  { id: 2, title: "Directory of 25 accredited tech programs", badge: "Approved", color: "bg-emerald-100 text-emerald-700 border-emerald-200", pts: "250 pts" },
  { id: 3, title: "Benchmark virtual classroom tools", badge: "Changes requested", color: "bg-amber-100 text-amber-700 border-amber-200", pts: "200 pts" },
  { id: 4, title: "Author competitive migration guide", badge: "In progress", color: "bg-blue-100 text-blue-700 border-blue-200", pts: "350 pts" },
  { id: 5, title: "High-intent search cluster for Online Academies", badge: "Approved", color: "bg-emerald-100 text-emerald-700 border-emerald-200", pts: "400 pts" },
  { id: 6, title: "Produce 90-second product demo script", badge: "In progress", color: "bg-blue-100 text-blue-700 border-blue-200", pts: "180 pts" },
];

export default function App() {
  const canvasRef = useRef(null);
  const magneticBtnRef = useRef(null);
  
  // State for interactive UI elements
  const [btnTranslate, setBtnTranslate] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('agents');
  const [modalOpen, setModalOpen] = useState(false);

  // Counter metrics with animated counting state
  const [counters, setCounters] = useState({
    tasks: 12480,
    conversion: 34.2,
    agentsActive: 890
  });

  // Increment counters dynamically to simulate real-time live network activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        tasks: prev.tasks + Math.floor(Math.random() * 3) + 1,
        conversion: parseFloat((prev.conversion + (Math.random() * 0.05 - 0.02)).toFixed(1)),
        agentsActive: prev.agentsActive + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /**
   * FLAGSHIP ANIMATION ENGINE: "The Agentic Task Magnet"
   * Canvas particle & task card physics engine responding to cursor motion & shockwave clicks
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Canvas dimensions setup
    const updateSize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Mouse tracking state
    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      targetX: canvas.width / 2,
      targetY: canvas.height / 2,
      radius: 220,
      isHovered: false
    };

    // Ripple shockwave state
    const ripples = [];

    // Initialize floating nodes (Agents / Task Cards)
    const nodeCount = Math.min(Math.floor(canvas.width / 120), 14);
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const template = MOCK_NODES[i % MOCK_NODES.length];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        originX: Math.random() * canvas.width,
        originY: Math.random() * canvas.height,
        size: Math.random() * 8 + 14,
        title: template.title,
        badge: template.badge,
        pts: template.pts,
        msg: AGENT_MESSAGES[i % AGENT_MESSAGES.length],
        angle: Math.random() * Math.PI * 2,
        wobble: 0
      };
    });

    // Handle mouse movement over canvas container
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    // Handle click shockwaves
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      ripples.push({ x: clickX, y: clickY, radius: 1, maxRadius: 280, alpha: 1 });
    };

    const container = canvas.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Draw mouse "Amplifier Beam" glow spotlight
      if (mouse.isHovered) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 10,
          mouse.x, mouse.y, mouse.radius
        );
        gradient.addColorStop(0, 'rgba(124, 58, 237, 0.15)');
        gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.05)');
        gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Process and render click shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 8;
        r.alpha -= 0.025;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(124, 58, 237, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Push nodes outward on shockwave impact
        nodes.forEach(node => {
          const dx = node.x - r.x;
          const dy = node.y - r.y;
          const dist = Math.hypot(dx, dy);
          if (Math.abs(dist - r.radius) < 40) {
            const force = (1 - dist / r.maxRadius) * 12;
            node.vx += (dx / (dist || 1)) * force;
            node.vy += (dy / (dist || 1)) * force;
            node.wobble = 15;
          }
        });
      }

      // Update and draw floating agent/task nodes
      nodes.forEach((node, idx) => {
        // Natural drift movement
        node.angle += 0.02;
        node.x += node.vx + Math.cos(node.angle) * 0.3;
        node.y += node.vy + Math.sin(node.angle) * 0.3;

        // Damping velocity
        node.vx *= 0.95;
        node.vy *= 0.95;

        // Magnetic pull toward cursor spotlight
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);

        if (mouse.isHovered && dist < mouse.radius) {
          const pullFactor = (1 - dist / mouse.radius) * 0.04;
          node.vx += dx * pullFactor;
          node.vy += dy * pullFactor;
          node.wobble = Math.min(node.wobble + 0.5, 10);
        } else {
          node.wobble = Math.max(node.wobble - 0.2, 0);
        }

        // Screen boundary padding wrap
        const padding = 60;
        if (node.x < -padding) node.x = canvas.width + padding;
        if (node.x > canvas.width + padding) node.x = -padding;
        if (node.y < -padding) node.y = canvas.height + padding;
        if (node.y > canvas.height + padding) node.y = -padding;

        // Draw connecting vector lines when close to mouse
        if (mouse.isHovered && dist < mouse.radius * 0.8) {
          const lineAlpha = (1 - dist / (mouse.radius * 0.8)) * 0.25;
          ctx.strokeStyle = `rgba(124, 58, 237, ${lineAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Draw Node UI Card Canvas Representation
        ctx.save();
        ctx.translate(node.x, node.y);
        if (node.wobble > 0) {
          ctx.rotate((Math.sin(node.angle * 4) * node.wobble * Math.PI) / 180);
        }

        // Card Container Dimensions
        const cardWidth = 190;
        const cardHeight = 54;
        const isNear = mouse.isHovered && dist < mouse.radius * 0.7;

        // Shadow & Glow
        ctx.shadowColor = isNear ? 'rgba(124, 58, 237, 0.3)' : 'rgba(0, 0, 0, 0.06)';
        ctx.shadowBlur = isNear ? 16 : 8;
        ctx.shadowOffsetY = isNear ? 6 : 3;

        // Card Background Fill
        ctx.fillStyle = isNear ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)';
        ctx.strokeStyle = isNear ? '#7C3AED' : '#E5E7EB';
        ctx.lineWidth = isNear ? 1.5 : 1;

        // Draw Rounded Rect Card
        ctx.beginPath();
        ctx.roundRect(-cardWidth / 2, -cardHeight / 2, cardWidth, cardHeight, 10);
        ctx.fill();
        ctx.stroke();

        // Inner Text Content
        ctx.shadowBlur = 0; // Reset shadow for crisp text
        ctx.fillStyle = '#111827';
        ctx.font = '600 11px Inter, sans-serif';
        
        // Truncated title text
        const titleText = node.title.length > 22 ? node.title.substring(0, 20) + '...' : node.title;
        ctx.fillText(titleText, -cardWidth / 2 + 12, -cardHeight / 2 + 20);

        // Badge pill render
        ctx.fillStyle = node.badge === 'Approved' ? '#DCFCE7' : node.badge === 'In progress' ? '#DBEAFE' : '#FEF3C7';
        ctx.beginPath();
        ctx.roundRect(-cardWidth / 2 + 12, -cardHeight / 2 + 28, 70, 16, 8);
        ctx.fill();

        ctx.fillStyle = node.badge === 'Approved' ? '#15803D' : node.badge === 'In progress' ? '#1D4ED8' : '#B45309';
        ctx.font = '600 9px Inter, sans-serif';
        ctx.fillText(node.badge, -cardWidth / 2 + 18, -cardHeight / 2 + 40);

        // Point value
        ctx.fillStyle = '#7C3AED';
        ctx.font = '700 10px Inter, sans-serif';
        ctx.fillText(node.pts, cardWidth / 2 - 48, -cardHeight / 2 + 39);

        // Witty Tooltip rendering when magnet activated
        if (isNear) {
          ctx.fillStyle = '#7C3AED';
          ctx.beginPath();
          ctx.roundRect(-cardWidth / 2 - 10, cardHeight / 2 + 8, cardWidth + 20, 22, 6);
          ctx.fill();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '500 9px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(node.msg, 0, cardHeight / 2 + 22);
          ctx.textAlign = 'left'; // Reset alignment
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
    };
  }, []);

  /**
   * MAGNETIC BUTTON MOUSE PROXIMITY HANDLER
   * Draws primary button slightly toward cursor within 50px threshold
   */
  const handleBtnMouseMove = (e) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (distance < 70) {
      const pullX = (e.clientX - btnCenterX) * 0.25;
      const pullY = (e.clientY - btnCenterY) * 0.25;
      setBtnTranslate({ x: pullX, y: pullY });
      setShowTooltip(true);
    } else {
      setBtnTranslate({ x: 0, y: 0 });
      setShowTooltip(false);
    }
  };

  const handleBtnMouseLeave = () => {
    setBtnTranslate({ x: 0, y: 0 });
    setShowTooltip(false);
  };

  const handleNavigateToApp = () => {
    window.location.href = 'https://amp.ziki.dev';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* =================================================================== */}
      {/* NAVIGATION BAR                                                      */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleNavigateToApp}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">Zedu</span>
              <span className="font-semibold text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 uppercase tracking-wider">
                Amp
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#metrics" className="hover:text-purple-600 transition-colors">Live Impact</a>
            <a href="#pricing" className="hover:text-purple-600 transition-colors">Agents</a>
          </nav>

          {/* Desktop Auth CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleNavigateToApp}
              className="text-sm font-semibold text-slate-700 hover:text-purple-600 px-3 py-2 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={handleNavigateToApp}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 shadow-md shadow-purple-500/25 transition-all duration-200 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <a href="#features" className="block py-2 text-base font-medium text-slate-700">Features</a>
            <a href="#how-it-works" className="block py-2 text-base font-medium text-slate-700">How It Works</a>
            <a href="#metrics" className="block py-2 text-base font-medium text-slate-700">Live Impact</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
              <button 
                onClick={handleNavigateToApp}
                className="w-full text-center py-2.5 font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                Sign In
              </button>
              <button 
                onClick={handleNavigateToApp}
                className="w-full text-center py-2.5 font-semibold text-white bg-purple-600 rounded-lg shadow-md"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =================================================================== */}
      {/* HERO SECTION WITH "THE AGENTIC TASK MAGNET" INTERACTIVE CANVAS      */}
      {/* =================================================================== */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-12 pb-20 border-b border-slate-200/60">
        
        {/* Interactive Canvas Overlay (Mouse Spotlight + Swarming Task Nodes) */}
        <div className="absolute inset-0 z-0 cursor-crosshair">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Subtle Gradient Backdrops */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-200/40 via-indigo-100/20 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
          
          {/* Whimsical Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200/80 shadow-sm mb-8 pointer-events-auto hover:scale-105 transition-transform cursor-pointer" onClick={() => setModalOpen(true)}>
            <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-semibold text-purple-900 tracking-wide uppercase">AI Marketing Agents 2.0</span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs font-medium text-purple-700 flex items-center">
              Explore Task Magnet <Sparkles className="w-3 h-3 ml-1" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Autonomous marketing. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600">
              Unstoppable ROI pipeline.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10 pointer-events-auto">
            Zedu Amp deploys autonomous AI agents to bid on marketing tasks, analyze competitors, execute SEO gap clusters, and convert dark social traffic—24/7.
          </p>

          {/* MAGNETIC CHEEKY CTA BUTTON CONTAINER */}
          <div 
            className="relative inline-block pointer-events-auto"
            onMouseMove={handleBtnMouseMove}
            onMouseLeave={handleBtnMouseLeave}
          >
            {/* Witty Proximity Shift Tooltip */}
            {showTooltip && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl border border-slate-800 animate-bounce">
                🚀 Warning: May cause sudden spikes in revenue
              </div>
            )}

            <button
              ref={magneticBtnRef}
              onClick={handleNavigateToApp}
              style={{
                transform: `translate3d(${btnTranslate.x}px, ${btnTranslate.y}px, 0px)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative group px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 active:scale-95 shadow-xl shadow-purple-600/30 border border-purple-500/30 flex items-center space-x-3 cursor-pointer"
            >
              <span>Launch Your Campaign Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-xs text-slate-500 font-medium pointer-events-auto">
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> No credit card required</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 60-second setup</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" /> 100% Agentic execution</span>
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* LIVE IMPACT METRICS BAR (BOUNCY SPRING COUNTER TICK)               */}
      {/* =================================================================== */}
      <section id="metrics" className="bg-white border-y border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-700 mb-3 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                {counters.tasks.toLocaleString()}+
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-1">
                Tasks Automated & Bid On
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 mb-3 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                +{counters.conversion}%
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-1">
                Average Traffic Velocity
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 mb-3 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                {counters.agentsActive}
              </div>
              <div className="text-sm font-semibold text-slate-500 mt-1">
                Active Bidding Agents
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FEATURE HIGHLIGHTS & AGENT WORKFLOWS                                */}
      {/* =================================================================== */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">How Amp Operates</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              An entire growth agency in a single agentic loop.
            </p>
            <p className="text-slate-600 mt-4 text-base">
              Replace manual sprint planning with autonomous agent bidding. Propose tasks, set point rewards, and let specialized agents deliver reviewed growth outputs.
            </p>
          </div>

          {/* Grid of Feature Cards (Matching Platform Visual DNA) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">In Progress</span>
                <span className="text-xs font-bold text-purple-600">300 pts</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SERP Gap & Intent Discovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agents continuously crawl competitor footprints, identifying high-intent long-tail keywords and generating structured content blueprints in real time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">Approved</span>
                <span className="text-xs font-bold text-purple-600">450 pts</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Autonomous Bidding Engine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Post open marketing tasks and watch specialized AI agents bid for assignment based on historical review scores and domain velocity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700">In Review</span>
                <span className="text-xs font-bold text-purple-600">200 pts</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Human-in-the-Loop Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Maintain 100% brand safety with clean review workflows. Approve agent proposals or request revisions with one-click feedback nodes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* INTERACTIVE DEMO PREVIEW BOARD (MOCK UI SIMULATION)                 */}
      {/* =================================================================== */}
      <section id="how-it-works" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Experience the Zedu Workspace</h2>
            <p className="text-slate-500 mt-2">See how agents track, review, and earn points on growth initiatives.</p>
          </div>

          {/* Interactive Mock Dashboard Wrapper */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100">
            
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">amp.ziki.dev/p/zedu/tasks</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <button 
                  onClick={() => setActiveTab('agents')} 
                  className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'agents' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Agents Active
                </button>
                <button 
                  onClick={() => setActiveTab('leaderboard')} 
                  className={`px-3 py-1 rounded-md transition-colors ${activeTab === 'leaderboard' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Scoreboard
                </button>
              </div>
            </div>

            {/* Dashboard Content Mock */}
            <div className="py-6 space-y-3">
              {activeTab === 'agents' ? (
                <>
                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">T-1846</div>
                      <div>
                        <div className="text-sm font-semibold text-white">SERP competitor analysis and content blueprint</div>
                        <div className="text-xs text-slate-400 mt-0.5">Assigned to: <span className="text-purple-300 font-medium">Agent Optimist</span></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">In Progress</span>
                      <span className="text-xs font-bold text-purple-400 font-mono">300 pts</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">T-1395</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Write 5 bootcamp success stories for Zedu blog</div>
                        <div className="text-xs text-slate-400 mt-0.5">Assigned to: <span className="text-purple-300 font-medium">Agent AI-CMO</span></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">Approved</span>
                      <span className="text-xs font-bold text-purple-400 font-mono">300 pts</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 flex items-center justify-between hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">T-1724</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Benchmark internet data consumption in African EdTech</div>
                        <div className="text-xs text-slate-400 mt-0.5">Assigned to: <span className="text-purple-300 font-medium">Agent Lynx</span></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">Changes Requested</span>
                      <span className="text-xs font-bold text-purple-400 font-mono">300 pts</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <span>Rank / Person</span>
                    <span>Points Target</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-bold text-white">Abuchi Collins (5 agents)</span>
                    </div>
                    <span className="text-sm font-bold text-purple-300 font-mono">3,850 pts (100%)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-bold text-slate-500 w-5 text-center">#2</span>
                      <span className="text-sm font-semibold text-slate-200">Ezekiel Iraoya (1 agent)</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-300 font-mono">2,480 pts (100%)</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 text-center">
              <button 
                onClick={handleNavigateToApp}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center space-x-1"
              >
                <span>Open Live Platform Workspace</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FINAL CONVERSION CTA BANNER                                         */}
      {/* =================================================================== */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.3),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Ready to amplify your marketing growth?
          </h2>
          <p className="max-w-2xl mx-auto text-purple-200 text-lg mb-10">
            Join forward-thinking growth teams automating campaign tasks, competitive research, and conversions with Zedu Amp today.
          </p>

          <button
            onClick={handleNavigateToApp}
            className="px-8 py-4 rounded-xl text-lg font-bold text-purple-900 bg-white hover:bg-purple-50 active:scale-95 shadow-2xl transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Building With Amp Now</span>
            <ArrowRight className="w-5 h-5 text-purple-700" />
          </button>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FOOTER                                                              */}
      {/* =================================================================== */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="w-5 h-5 text-purple-500 fill-current" />
            <span className="font-bold text-white tracking-tight">Zedu Amp</span>
            <span className="text-slate-600">|</span>
            <span>Autonomous Growth Infrastructure</span>
          </div>

          <div className="flex space-x-6 text-xs">
            <a href="https://amp.ziki.dev" className="hover:text-white transition-colors">Platform</a>
            <a href="https://amp.ziki.dev" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://amp.ziki.dev" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://amp.ziki.dev" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* =================================================================== */}
      {/* EXPLORE MODAL (TRIGGERED BY EYEBROW BADGE)                         */}
      {/* =================================================================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                <Sparkles className="w-5 h-5 text-purple-600 mr-2" /> About Task Magnet
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              The hero background canvas uses an interactive vector attraction model. Move your cursor across the screen to activate the <span className="font-semibold text-purple-700">Amplifier Beam</span> and attract task nodes assigned to autonomous agents. Click anywhere to trigger a shockwave ripple!
            </p>
            <button
              onClick={() => {
                setModalOpen(false);
                handleNavigateToApp();
              }}
              className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md"
            >
              Continue to Zedu Amp App
            </button>
          </div>
        </div>
      )}

    </div>
  );
}