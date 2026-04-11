react
import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Code, 
  Layout, 
  BarChart3, 
  Smartphone, 
  FileText, 
  ChevronRight, 
  CheckCircle2, 
  Circle,
  Award,
  Star,
  Zap
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const profile = {
    name: "P. Raj Gopinath",
    age: 12,
    target: "Data Scientist"
  };

  const fullRoadmap = [
    {
      category: "Foundation: MS Office",
      skills: ["Word", "Excel", "PowerPoint"],
      status: "Mastered",
      icon: <FileText className="text-green-400" />,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
      status: "Next Step",
      icon: <Layout className="text-orange-400" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "Database Mastery",
      skills: ["SQL", "Data Architecture"],
      status: "Learning",
      icon: <Database className="text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      category: "Mobile App Dev",
      skills: ["React Native"],
      status: "Planned",
      icon: <Smartphone className="text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Company Charts"],
      status: "Planned",
      icon: <BarChart3 className="text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      category: "The Core: Data Science",
      skills: ["Python Coding", "Algorithms"],
      status: "Goal",
      icon: <Code className="text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className={`relative max-w-4xl mx-auto px-6 py-10 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="inline-block p-1 px-3 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Zap size={14} fill="currentColor" /> Future Data Scientist
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2 bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            {profile.age} Years Old • Data Enthusiast • Builder
          </p>
        </header>

        {/* Tab Selection */}
        <div className="flex bg-slate-900/50 backdrop-blur-xl border border-white/5 p-1 rounded-2xl mb-10 w-fit mx-auto shadow-2xl">
          <button 
            onClick={() => setActiveTab('roadmap')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'roadmap' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            My Roadmap
          </button>
          <button 
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'stats' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Skill Stats
          </button>
        </div>

        {/* Roadmap Display */}
        {activeTab === 'roadmap' && (
          <div className="grid gap-6 md:grid-cols-2">
            {fullRoadmap.map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl transition-all hover:border-blue-500/30 hover:bg-slate-900/60`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-800 rounded-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-md tracking-tighter uppercase ${
                      item.status === 'Mastered' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      item.status === 'Learning' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      'bg-slate-800 text-slate-500 border border-white/5'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{item.category}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-full text-slate-300 flex items-center gap-1.5">
                        {item.status === 'Mastered' ? <CheckCircle2 size={12} className="text-green-500" /> : <Circle size={12} className="text-slate-600" />}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats View */}
        {activeTab === 'stats' && (
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 animate-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-yellow-500" /> Current Mastery
            </h2>
            <div className="space-y-8">
              {[
                { name: "MS Office", val: 100, color: "bg-green-500" },
                { name: "SQL (Databases)", val: 40, color: "bg-blue-500" },
                { name: "HTML/CSS", val: 15, color: "bg-orange-500" },
                { name: "Python", val: 5, color: "bg-cyan-500" }
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-300">{skill.name}</span>
                    <span className="text-xs font-mono text-slate-500">{skill.val}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <p className="text-sm text-blue-200/70 leading-relaxed italic">
                "Data science is not just about coding; it's about asking the right questions. At 12, your curiosity is your biggest asset!"
              </p>
            </div>
          </div>
        )}

        {/* Footer info */}
        <footer className="mt-16 text-center border-t border-white/5 pt-8">
          <div className="flex justify-center gap-6 mb-4">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">03</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Mastered</span>
             </div>
             <div className="w-[1px] bg-white/5 h-10" />
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-blue-500">01</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Learning</span>
             </div>
             <div className="w-[1px] bg-white/5 h-10" />
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-slate-600">02</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Planned</span>
             </div>
          </div>
          <p className="text-slate-500 text-xs mt-4">P. Raj Gopinath Portfolio © 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default App;