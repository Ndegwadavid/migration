"use client"
import { motion } from "framer-motion"
import {
  FaRobot,
  FaWallet,
  FaChalkboardTeacher,
  FaAward,
  FaShieldAlt,
  FaChartLine,
  FaBolt,
  FaCheck,
  FaArrowRight,
  FaDiscord,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa"

export default function Home() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-cyan-400" />,
      title: "AI-Powered Trading Bots",
      description: "Advanced machine learning algorithms that adapt to market conditions in real-time.",
      highlight: "99.7% Accuracy",
    },
    {
      icon: <FaWallet className="text-4xl text-emerald-400" />,
      title: "Multi-Chain Wallet",
      description: "Seamless integration with 50+ cryptocurrencies and instant settlements.",
      highlight: "Zero Fees",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-purple-400" />,
      title: "Expert Mentorship",
      description: "1-on-1 sessions with professional traders and comprehensive learning paths.",
      highlight: "24/7 Support",
    },
    {
      icon: <FaAward className="text-4xl text-amber-400" />,
      title: "Merit Rewards System",
      description: "Earn exclusive NFTs, trading credits, and unlock premium features.",
      highlight: "Up to 50% Bonus",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption with cold storage and insurance protection.",
      highlight: "$100M Insured",
    },
    {
      icon: <FaChartLine className="text-4xl text-rose-400" />,
      title: "Advanced Analytics",
      description: "Real-time market insights with predictive analytics and custom indicators.",
      highlight: "Live Data",
    },
  ]

  const roadmapItems = [
    { phase: "Phase 1", title: "Core Migration", status: "completed", date: "Q1 2024" },
    { phase: "Phase 2", title: "AI Integration", status: "in-progress", date: "Q2 2024" },
    { phase: "Phase 3", title: "Advanced Risk Management", status: "upcoming", date: "Q3 2024" },
    { phase: "Phase 4", title: "DeFi Integration", status: "upcoming", date: "Q4 2024" },
  ]

  const stats = [
    { value: "500K+", label: "Active Traders" },
    { value: "$2.5B", label: "Trading Volume" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Video Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/assets/migvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 font-semibold backdrop-blur-sm">
                🚀 Next Generation Trading Platform
              </span>
            </motion.div>

            <h1 className="hero-title mb-8">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                TrendX 2.0 Migration
              </span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Experience the future of trading with AI-powered automation, advanced analytics, and a community of
              professional traders. The migration brings revolutionary features that will transform your trading
              journey.
            </motion.p>
          </motion.div>

          {/* Simple Status Indicator */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="status-container">
              <div className="status-dot">
                <div className="status-dot-pulse"></div>
              </div>
              <div className="status-text">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Migration in Progress</h2>
                <p className="text-xl text-slate-400 mt-2">System upgrade active</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Revolutionary Features</h2>
              <p className="section-subtitle">
                Discover the cutting-edge tools that make TrendX 2.0 the ultimate trading platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-enhanced group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="feature-icon-container">
                    {feature.icon}
                    <div className="feature-highlight">{feature.highlight}</div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-arrow">
                    <FaArrowRight className="text-cyan-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Migration Roadmap</h2>
              <p className="section-subtitle">Follow our journey as we build the future of trading</p>
            </motion.div>

            <div className="roadmap-container">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`roadmap-item ${item.status}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="roadmap-marker" />
                  <div className="roadmap-content">
                    <div className="roadmap-phase">{item.phase}</div>
                    <h3 className="roadmap-title">{item.title}</h3>
                    <div className="roadmap-date">{item.date}</div>
                    <div className={`roadmap-status ${item.status}`}>
                      {item.status === "completed" && <FaCheck />}
                      {item.status === "in-progress" && <FaBolt />}
                      {item.status === "upcoming" && <FaArrowRight />}
                      {item.status.replace("-", " ")}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-container">
              <h2 className="cta-title">Ready for the Future?</h2>
              <p className="cta-subtitle">
                Join the TrendX 2.0 revolution and experience trading like never before. Get early access to exclusive
                features and premium support.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">
                  Get Early Access
                  <FaArrowRight className="ml-2" />
                </button>
                <button className="cta-button secondary">Learn More</button>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaDiscord />
                </a>
                <a href="#" className="social-link">
                  <FaTelegram />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="footer-content">
              <div className="footer-logo">TrendX 2.0</div>
              <p className="footer-text">
                The next generation trading platform. Built for professionals, designed for everyone.
              </p>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
                <a href="#" className="footer-link">
                  Support
                </a>
                <a href="#" className="footer-link">
                  Documentation
                </a>
              </div>
              <p className="footer-copyright">© 2024 TrendX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
