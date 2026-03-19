import React from 'react'

const About = () => {
  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ]

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold text-sm uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Crafting Digital{' '}
            <span className="text-sky-500">
              Excellence
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              I'm a passionate <span className="font-semibold text-slate-900">MERN Stack Developer</span> with a
              strong focus on creating efficient, scalable, and user-friendly web
              applications. With expertise in both frontend and backend development,
              I bring ideas to life through clean code and modern technologies.
            </p>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              I specialize in building full-stack applications using{' '}
              <span className="font-semibold text-sky-600">MongoDB</span> for
              database management, <span className="font-semibold text-sky-600">Express.js</span> and{' '}
              <span className="font-semibold text-sky-600">Node.js</span> for robust server-side
              development, and <span className="font-semibold text-sky-600">React</span> for creating
              dynamic and responsive user interfaces.
            </p>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              My goal is to deliver high-quality solutions that exceed client
              expectations and create memorable digital experiences.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-500 transform hover:-translate-y-3 border-2 border-slate-300 hover:border-sky-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Decorative Background Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/15 transition-colors duration-500" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-colors duration-500" />
                
                <div className="relative z-10 w-full">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2 md:mb-3 drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-700 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Preview - Midnight Premium Redesign */}
        <div className="relative bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden border border-slate-800">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white tracking-tight">
              What I <span className="text-sky-400">Bring</span> to the Table
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1: Fast Development */}
              <div className="group relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-sky-500/5 group-hover:shadow-sky-500/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-sky-400">Fast Development</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                  Optimized workflows to deliver high-quality solutions with exceptional speed.
                </p>
              
              </div>

              {/* Feature 2: Innovative Solutions */}
              <div className="group relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-500/5 group-hover:shadow-emerald-500/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-emerald-400">Smart Architecture</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                  Future-proof systems designed with scalability and performance in mind.
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
              </div>

              {/* Feature 3: Quality Code */}
              <div className="group relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/5 group-hover:shadow-indigo-500/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-indigo-400">Clean Practice</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                  Maintainable, readable, and highly efficient code standards.
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
              </div>

              {/* Feature 4: Collaboration */}
              <div className="group relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(244,63,94,0.15)] flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-rose-500/5 group-hover:shadow-rose-500/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-rose-400">Expertise Sync</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                  Transparent communication and seamless integration with your development goals.
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

