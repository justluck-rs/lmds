import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink, Download, Code, Zap, Users, Trophy, GraduationCap, Globe, ArrowRight, Send, Star, Sparkles, Cpu, Terminal, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

// Declaração do Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Traduções para diferentes idiomas
const translations = {
  'pt-BR': {
    softwareEngineer: 'Engenheiro de Software',
    name: 'Lucas Mateus',
    subtitle: 'Engenheiro de Software especializado em desenvolvimento web e mobile',
    tagline: 'Building the future',
    contactBtn: 'Vamos Conversar',
    downloadCV: 'Download CV',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    stats: {
      projects: 'Projetos Entregues',
      teamExp: 'Experiência em Equipe',
      yearsExp: 'Anos de Experiência',
      technologies: 'Tecnologias Dominadas'
    },
    aboutDesc1: 'Sou um Engenheiro de Software com mais de 3 anos de experiência em desenvolvimento web e mobile. Proficiente em criação de interfaces modernas e responsivas.',
    aboutDesc2: 'Focado em desenvolver soluções de alta qualidade, seguindo princípios de Arquitetura de Software, Design Patterns e práticas de código limpo.',
    jobTitle: 'Software Engineering Manager',
    jobPeriod: 'Nov 2022 - Presente',
    jobDesc: 'Lider Tecnico e Desenvolvedor Full-Stack, desenvolvimento de APIs RESTful robustas utilizando PHP e Laravel, criação de interfaces interativas e responsivas com Vue.js e JavaScript.',
    techStack: 'Tech Stack',
    contactTitle: 'Vamos trabalhar juntos',
    contactDesc: 'Estou sempre aberto a discutir novos projetos e oportunidades.',
    sendMessage: 'Enviar Mensagem',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    downloadingCV: 'Baixando CV...',
    cvDownloaded: 'CV baixado com sucesso!'
  },
  'en': {
    softwareEngineer: 'Software Engineer',
    name: 'Lucas Mateus',
    subtitle: 'Software Engineer specialized in web and mobile development',
    tagline: 'Building the future',
    contactBtn: 'Let\'s Talk',
    downloadCV: 'Download CV',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    stats: {
      projects: 'Delivered Projects',
      teamExp: 'Team Experience',
      yearsExp: 'Years of Experience',
      technologies: 'Mastered Technologies'
    },
    aboutDesc1: 'I am a Software Engineer with over 3 years of experience in web and mobile development. Proficient in creating modern and responsive interfaces.',
    aboutDesc2: 'Focused on developing high-quality solutions, following Software Architecture principles, Design Patterns and clean code practices.',
    jobTitle: 'Software Engineering Manager',
    jobPeriod: 'Nov 2022 - Present',
    jobDesc: 'Technical Leader and Full-Stack Developer, developing robust RESTful APIs using PHP and Laravel, creating interactive and responsive interfaces with Vue.js and JavaScript.',
    techStack: 'Tech Stack',
    contactTitle: 'Let\'s work together',
    contactDesc: 'I\'m always open to discussing new projects and opportunities.',
    sendMessage: 'Send Message',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    downloadingCV: 'Downloading CV...',
    cvDownloaded: 'CV downloaded successfully!'
  },
  'ja': {
    softwareEngineer: 'ソフトウェアエンジニア',
    name: 'Lucas Mateus',
    subtitle: 'ウェブとモバイル開発を専門とするソフトウェアエンジニア',
    tagline: '未来を創造する',
    contactBtn: 'コンタクト',
    downloadCV: 'ダウンロード CV',
    about: 'について',
    projects: 'プロジェクト',
    contact: '連絡',
    stats: {
      projects: '配信プロジェクト',
      teamExp: 'チーム経験',
      yearsExp: '経験年数',
      technologies: '習得技術'
    },
    aboutDesc1: 'ウェブとモバイル開発で3年以上の経験を持つソフトウェアエンジニアです。モダンでレスポンシブなインターフェースの作成に精通しています。',
    aboutDesc2: 'ソフトウェアアーキテクチャの原則、デザインパターン、クリーンコードの実践に従って、高品質なソリューションの開発に焦点を当てています。',
    jobTitle: 'ソフトウェアエンジニアリングマネージャー',
    jobPeriod: '2022年11月 - 現在',
    jobDesc: 'テクニカルリーダーおよびフルスタック開発者として、PHPとLaravelを使用したロバストなRESTful APIの開発、Vue.jsとJavaScriptを使用したインタラクティブでレスポンシブなインターフェースの作成を行っています。',
    techStack: '技術スタック',
    contactTitle: '一緒に働きましょう',
    contactDesc: '新しいプロジェクトや機会について話し合うことをいつでも歓迎します。',
    sendMessage: 'メッセージを送信',
    email: 'メール',
    phone: '電話',
    location: '場所',
    downloadingCV: 'CVをダウンロード中...',
    cvDownloaded: 'CVのダウンロードが完了しました！'
  },
  'zh': {
    softwareEngineer: '软件工程师',
    name: 'Lucas Mateus',
    subtitle: '专门从事网络和移动开发的软件工程师',
    tagline: '构建未来',
    contactBtn: '联系我们',
    downloadCV: '下载简历',
    about: '关于',
    projects: '项目',
    contact: '联系',
    stats: {
      projects: '已交付项目',
      teamExp: '团队经验',
      yearsExp: '工作年限',
      technologies: '掌握技术'
    },
    aboutDesc1: '我是一名拥有3年以上网络和移动开发经验的软件工程师。精通创建现代化和响应式界面。',
    aboutDesc2: '专注于开发高质量解决方案，遵循软件架构原理、设计模式和清洁代码实践。',
    jobTitle: '软件工程经理',
    jobPeriod: '2022年11月 - 至今',
    jobDesc: '技术负责人和全栈开发人员，使用PHP和Laravel开发强大的RESTful API，使用Vue.js和JavaScript创建交互式和响应式界面。',
    techStack: '技术栈',
    contactTitle: '让我们一起工作',
    contactDesc: '我总是愿意讨论新项目和机会。',
    sendMessage: '发送消息',
    email: '邮箱',
    phone: '电话',
    location: '位置',
    downloadingCV: '正在下载简历...',
    cvDownloaded: '简历下载成功！'
  }
};

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('pt-BR');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Função para obter tradução
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Idiomas disponíveis
  const availableLanguages = [
    { code: 'pt-BR', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ja', name: 'JA', flag: '🇯🇵' },
    { code: 'zh', name: 'ZH', flag: '🇨🇳' }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Atualizar meta tags dinâmicas baseadas no idioma
    updateMetaTags(language);
  }, [language]);

  // Função para atualizar meta tags dinamicamente
  const updateMetaTags = (lang: string) => {
    const head = document.head;
    
    // Atualizar title
    document.title = `${t('name')} | ${t('softwareEngineer')} - ${t('subtitle')}`;
    
    // Atualizar meta description
    let metaDesc = head.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.content = `${t('name')} - ${t('aboutDesc1')}`;
    }
    
    // Atualizar lang do HTML
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : lang === 'en' ? 'en' : lang === 'ja' ? 'ja' : 'zh';
    
    // Atualizar Open Graph
    let ogTitle = head.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (ogTitle) {
      ogTitle.content = `${t('name')} | ${t('softwareEngineer')}`;
    }
    
    let ogDesc = head.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (ogDesc) {
      ogDesc.content = `${t('aboutDesc1')}`;
    }
    
    // Atualizar Twitter Card
    let twitterTitle = head.querySelector('meta[name="twitter:title"]') as HTMLMetaElement;
    if (twitterTitle) {
      twitterTitle.content = `${t('name')} | ${t('softwareEngineer')}`;
    }
    
    let twitterDesc = head.querySelector('meta[name="twitter:description"]') as HTMLMetaElement;
    if (twitterDesc) {
      twitterDesc.content = `${t('aboutDesc1')}`;
    }
  };

  // Função para download do CV
  const downloadCV = async () => {
    try {
      setIsDownloading(true);

      // Track download event for analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'cv_download', {
          event_category: 'engagement',
          event_label: 'CV Download',
          language: language
        });
      }

      // Simulr pequeno delay para feedback visual
      await new Promise(resolve => setTimeout(resolve, 500));

      // Criar elemento de link temporário para download
      const link = document.createElement('a');
      link.href = '/cv-lucas-mateus.pdf';
      link.download = `CV-Lucas-Mateus-${language === 'pt-BR' ? 'PT' : language === 'en' ? 'EN' : language === 'ja' ? 'JA' : 'ZH'}.pdf`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Adicionar ao DOM temporariamente
      document.body.appendChild(link);
      
      // Disparar download
      link.click();
      
      // Remover do DOM
      document.body.removeChild(link);
      
      // Feedback de sucesso
      console.log('CV download iniciado');
      
      // Reset do estado após um tempo
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Erro no download do CV:', error);
      setIsDownloading(false);
      
      // Fallback: abrir em nova aba
      window.open('/cv-lucas-mateus.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  // Partículas flutuantes
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  const fadeInUp = {
    initial: { opacity: 0, y: 60, rotateX: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const float3D = {
    animate: {
      y: [-10, 10, -10],
      rotateY: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const neonGlow = {
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.1)',
    border: '1px solid rgba(0, 255, 255, 0.6)'
  };

  const skills = {
    languages: ['PHP', 'JavaScript', 'TypeScript', 'Node.js'],
    frameworks: ['Laravel', 'NestJS', 'Vue.js', 'React'],
    databases: ['MySQL', 'PostgreSQL', 'NoSQL'],
    devops: ['Docker', 'Git', 'VPS'],
    mobile: ['Tauri', 'Capacitor'],
    methodologies: ['Scrum', 'Kanban']
  };

  const projects = [
    {
      title: 'Infrabets - White Label',
      description: 'Infraestrutura SaaS completa para plataformas de bets com arquitetura escalável e alta performance',
      technologies: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL'],
      url: 'demo.mybetserver.com',
      category: 'SaaS',
      gradient: 'from-cyan-500 via-purple-500 to-pink-500'
    },
    {
      title: 'SkyFort - Gestão de Condomínios',
      description: 'Sistema integrado para administração condominial com gestão financeira e comunicação',
      technologies: ['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'MySQL'],
      url: 'skyfort.com.br',
      category: 'Management',
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },
    {
      title: 'Interágil - Multiatendimento',
      description: 'Solução para gestão de atendimentos em múltiplos canais com IA integrada',
      technologies: ['React', 'Node.js', 'TypeScript', 'Sequelize', 'PostgreSQL'],
      url: 'interagil.com.br',
      category: 'Customer Service',
      gradient: 'from-orange-400 via-red-500 to-pink-600'
    }
  ];

  const stats = [
    { icon: Code, label: 'stats.projects', value: '10+', color: 'cyan' },
    { icon: Users, label: 'stats.teamExp', value: '3+', color: 'purple' },
    { icon: Zap, label: 'stats.yearsExp', value: '3+', color: 'pink' },
    { icon: Trophy, label: 'stats.technologies', value: '15+', color: 'green' }
  ];



  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background com grade cyberpunk */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Partículas flutuantes */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Cursor personalizado */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="w-full h-full border-2 border-cyan-400 rounded-full bg-cyan-400/20" />
      </motion.div>

      <Navigation />

      {/* Seletor de Idioma */}
      <div className="fixed top-20 right-4 md:top-24 md:right-6 z-50">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Botão Principal (Mobile) */}
          <div className="md:hidden">
            <motion.button
              className="w-12 h-12 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <Globe className="h-5 w-5 text-cyan-400" />
            </motion.button>
            
            {/* Menu Dropdown Mobile */}
            {isLanguageMenuOpen && (
              <motion.div
                className="absolute top-14 right-0 p-2 rounded-lg border border-cyan-500/50 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-1">
                  {availableLanguages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      className={`
                        px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 min-w-[120px]
                        ${language === lang.code 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
                          : 'text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20'
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageMenuOpen(false);
                      }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Versão Desktop */}
          <div className="hidden md:block">
            <div className="p-2 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm">
              <div className="flex gap-1">
                {availableLanguages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    className={`
                      px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1
                      ${language === lang.code 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLanguage(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Overlay para fechar menu mobile */}
      {isLanguageMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}

      {/* Hero Section Futurista */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20" itemScope itemType="https://schema.org/Person">
        {/* Background radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="perspective-1000"
          >
            {/* Badge futurista */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
                             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm">
                 <Cpu className="h-4 w-4 text-cyan-400" />
                 <span className="text-cyan-400 font-medium text-sm tracking-wider">
                   {t('softwareEngineer')}
                 </span>
                 <Sparkles className="h-4 w-4 text-purple-400" />
               </div>
            </motion.div>

            {/* Nome com efeito 3D */}
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-8 tracking-tight relative"
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 3s ease infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0,255,255,0.5)',
              }}
              itemProp="name"
            >
                             {t('name')}
            </motion.h1>

            {/* Subtítulo com efeito typewriter */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
                             <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light text-gray-300">
                 <span className="text-cyan-400">{'<'}</span>
                 {t('subtitle')}
                 <span className="text-cyan-400">{'/>'}</span>
               </p>
               <p className="text-lg mt-4 text-purple-400">
                 {t('tagline')}
               </p>
            </motion.div>

            {/* Botões futuristas */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="group relative px-8 py-4 rounded-full font-medium overflow-hidden"
                style={neonGlow}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80" />
                                 <div className="relative flex items-center gap-2 text-white font-bold">
                   <Terminal className="h-4 w-4" />
                   {t('contactBtn')}
                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </div>
              </motion.button>

              <motion.button
                className={`group relative px-8 py-4 rounded-full font-medium border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm transition-all duration-300 ${isDownloading ? 'opacity-80 cursor-wait' : ''}`}
                whileHover={!isDownloading ? { 
                  scale: 1.05, 
                  rotateY: -5,
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
                } : {}}
                whileTap={!isDownloading ? { scale: 0.95 } : {}}
                onClick={downloadCV}
                disabled={isDownloading}
              >
                                 <div className="relative flex items-center gap-2 text-purple-400 font-bold">
                   <motion.div
                     animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
                     transition={isDownloading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                   >
                     <Download className="h-4 w-4" />
                   </motion.div>
                   {isDownloading ? t('downloadingCV') : t('downloadCV')}
                 </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Elementos decorativos flutuantes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-500/30"
          variants={float3D}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-500/30 rotate-45"
          variants={float3D}
          animate="animate"
        />
      </section>

      {/* Stats Section com animações 3D */}
      <section className="py-24 px-6 border-t border-cyan-500/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center relative group"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: 45 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`
                  p-6 border backdrop-blur-sm relative overflow-hidden
                  ${stat.color === 'cyan' ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' : ''}
                  ${stat.color === 'purple' ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' : ''}
                  ${stat.color === 'pink' ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-red-500/10' : ''}
                  ${stat.color === 'green' ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-teal-500/10' : ''}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className={`
                    text-4xl md:text-5xl font-black mb-2
                    ${stat.color === 'cyan' ? 'text-cyan-400' : ''}
                    ${stat.color === 'purple' ? 'text-purple-400' : ''}
                    ${stat.color === 'pink' ? 'text-pink-400' : ''}
                    ${stat.color === 'green' ? 'text-green-400' : ''}
                  `}>
                    {stat.value}
                  </div>
                                     <p className="text-gray-400 text-sm font-medium">
                     {t(stat.label)}
                   </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section Cyberpunk */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
                         <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
               {t('about')}
             </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500" />
          </motion.div>

          {/* Descrição pessoal com efeitos */}
          <motion.div
            className="w-full mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="p-8 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
              
                             <p className="text-lg md:text-xl leading-relaxed font-light mb-6 text-gray-300">
                 <span className="text-cyan-400">const </span>
                 <span className="text-purple-400">engineer</span>
                 <span className="text-white"> = </span>
                 <span className="text-green-400">"</span>
                 {t('aboutDesc1')}
                 <span className="text-green-400">"</span>
               </p>
               <p className="text-lg leading-relaxed font-light text-gray-400">
                 {t('aboutDesc2')}
               </p>
            </div>
          </motion.div>

          {/* Experiência com hologram effect */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="p-8 border border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                <div>
                                     <h3 className="text-2xl font-bold mb-2 text-white">
                     {t('jobTitle')}
                   </h3>
                  <a href="https://pharol.tech" target="_blank" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                    PHAROL TECNOLOGIA LTDA
                  </a>
                </div>
                                 <div className="flex items-center gap-2 mt-4 md:mt-0 text-purple-400">
                   <Calendar className="h-5 w-5" />
                   <span className="font-medium">{t('jobPeriod')}</span>
                 </div>
              </div>
              
                             <p className="leading-relaxed mb-6 font-light text-gray-300 relative z-10">
                 {t('jobDesc')}
               </p>
              
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {[
                  'Desenvolvimento de APIs RESTful com PHP e Laravel',
                  'Interfaces responsivas com Vue.js e JavaScript',
                  'Otimização de bancos de dados MySQL',
                  'Liderança técnica em projetos SaaS',
                  'Coordenação de equipes e entregas',
                  'Implementação de soluções white-label'
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 animate-pulse" />
                    <p className="text-sm font-light text-gray-400">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills com efeito matrix */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
                         <h3 className="text-3xl font-black mb-12 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
               {t('techStack')}
             </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div 
                  key={category} 
                  className="group relative"
                  initial={{ opacity: 0, rotateX: 45 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-center p-8 border border-green-500/50 bg-gradient-to-br from-green-500/10 to-teal-500/5 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h4 className="text-xl font-bold mb-6 text-green-400 relative z-10">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h4>
                    
                    <div className="flex flex-wrap gap-3 justify-center relative z-10">
                      {skillList.map((skill, skillIndex) => (
                        <motion.span 
                          key={skill} 
                          className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-300 border border-green-500/30 hover:border-green-400 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section com hologramas */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
                         <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
               {t('projects')}
             </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </motion.div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="group cursor-pointer p-8 border border-gradient bg-gradient-to-br backdrop-blur-sm relative overflow-hidden transform-gpu"
                  style={{
                    borderImage: `linear-gradient(135deg, rgba(0,255,255,0.5), rgba(255,0,255,0.5)) 1`,
                    background: `linear-gradient(135deg, rgba(0,255,255,0.05), rgba(255,0,255,0.05))`
                  }}
                  onClick={() => window.open(`https://${project.url}`, '_blank')}
                >
                  {/* Efeito hologram */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div>
                      <span className={`inline-block px-4 py-2 text-xs font-bold rounded-full mb-4 bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-black mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                  </div>
                  
                  <p className="mb-8 leading-relaxed font-light text-gray-300 text-lg relative z-10">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-4 py-2 text-sm font-bold rounded-full bg-gray-900/50 text-gray-300 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <p className="text-sm font-bold text-cyan-400 relative z-10">
                    🌐 {project.url}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section com efeitos futuristas */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
                         <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               {t('contact')}
             </h2>
             <p className="text-xl mb-12 font-light text-gray-300">
               {t('contactDesc')}
             </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
                         {[
               { icon: Mail, label: 'email', value: 'lmateus920@gmail.com', color: 'cyan' },
               { icon: Phone, label: 'phone', value: '+55 (86) 9 8130-4658', color: 'purple' },
               { icon: MapPin, label: 'location', value: 'Fortaleza, Ceará', color: 'pink' }
             ].map((contact, index) => (
              <motion.div 
                key={index}
                className="text-center relative group"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: 45 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: { duration: 0.8 }
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`
                  p-6 border backdrop-blur-sm relative overflow-hidden
                  ${contact.color === 'cyan' ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' : ''}
                  ${contact.color === 'purple' ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' : ''}
                  ${contact.color === 'pink' ? 'border-pink-500/50 bg-gradient-to-br from-pink-500/10 to-red-500/10' : ''}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <motion.div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10
                      ${contact.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' : ''}
                      ${contact.color === 'purple' ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20' : ''}
                      ${contact.color === 'pink' ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20' : ''}
                    `}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <contact.icon className={`
                      h-6 w-6
                      ${contact.color === 'cyan' ? 'text-cyan-400' : ''}
                      ${contact.color === 'purple' ? 'text-purple-400' : ''}
                      ${contact.color === 'pink' ? 'text-pink-400' : ''}
                    `} />
                  </motion.div>
                  <h3 className="font-bold mb-2 text-white relative z-10">
                    {t(contact.label)}
                  </h3>
                  <p className="text-sm text-gray-400 relative z-10">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button futurista */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
                          <motion.button
                className="group relative px-12 py-4 rounded-full font-bold overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                  boxShadow: '0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(255,0,255,0.3)'
                }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.5)',
                  rotate: [0, -1, 1, 0]
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5586981304658')}
              >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80" />
              <div className="relative flex items-center gap-3 text-white">
                <Send className="h-5 w-5" />
                {t('sendMessage')}
              </div>
            </motion.button>
          </motion.div>

          {/* Social Links futuristas */}
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Github, url: 'https://github.com/justluck-rs', color: 'cyan' },
              { icon: Linkedin, url: 'https://linkedin.com/in/lucas-mateus-077b82220', color: 'purple' }
            ].map((social, index) => (
              <motion.button
                key={index}
                className={`
                  relative w-16 h-16 rounded-full border backdrop-blur-sm overflow-hidden
                  ${social.color === 'cyan' ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' : 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10'}
                `}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: social.color === 'cyan' ? 
                    '0 0 20px rgba(0,255,255,0.5)' : 
                    '0 0 20px rgba(147,51,234,0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(social.url, '_blank')}
              >
                <social.icon className={`
                  h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  ${social.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}
                `} />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer futurista */}
      <footer className="py-8 px-6 border-t border-cyan-500/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm text-gray-200">
            © 2024 Lucas Mateus Alves da Silva.
          </p>
        </div>
      </footer>

             <style>{`
         @keyframes gradient-shift {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
         }
         
         @keyframes grid-move {
           0% { transform: translate(0, 0); }
           100% { transform: translate(50px, 50px); }
         }
         
         .perspective-1000 {
           perspective: 1000px;
         }
         
         .transform-gpu {
           transform: translateZ(0);
         }
       `}</style>
    </div>
  );
};

export default Index;
