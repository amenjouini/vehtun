import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react'; 

import { ChevronDown, Menu, X, MapPin, Mail, Phone, Building, Wrench, Truck, Lightbulb, Users, Target, Award, TrendingUp, CheckCircle, Dot } from 'lucide-react';

// Helper component for section titles
const SectionTitle = ({ title, icon: Icon }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-8 sm:mb-12 flex items-center justify-center">
    {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 mr-3" />}
    {title}
  </h2>
);

// Navigation Links Data
const navLinks = [
  { href: '#about', text: 'À propos' },
  { href: '#products', text: 'Produits' },
  { href: '#workshop', text: 'Atelier' },
  { href: '#values', text: 'Valeurs' },
  { href: '#clients', text: 'Clients' },
  { href: '#achievements', text: 'Réalisations' },
  { href: '#goals', text: 'Objectifs' },
  { href: '#contact', text: 'Contact' },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-300"
    >
      {children}
    </a>
  );

  // Placeholder image URL generator
  const placeholderImg = (width, height, text, bgColor = '374151', textColor = 'E5E7EB') =>
    `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}&font=Inter`;


  return (
    <div className="bg-slate-900 text-gray-200 font-sans leading-relaxed antialiased">
      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-cyan-400">VehTun</h1>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(link => (
                  <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.text}</NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex flex-col justify-center items-center text-center p-6 pt-20 sm:pt-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
            Veh<span className="text-cyan-400">Tun</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            🔧 La Mobilité Intelligente pour les Véhicules Utilitaires en Tunisie
          </p>
          <p className="text-md text-gray-400 mb-12">
            Depuis 2022 | Fondée par Amine Trabelsi
          </p>
          <a
            href="#about"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
          >
            Découvrir Plus <ChevronDown className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-32">
        {/* About Section */}
        <section id="about" className="scroll-mt-16">
          <SectionTitle title="À propos de VehTun" icon={Building} />
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">🏭 Qui sommes-nous ?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" /> Fondée en 2022</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" /> PME tunisienne de 10 personnes</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" /> Spécialisée dans la fabrication d’équipements de transport sur camions</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" /> Atelier équipé de machines industrielles complètes</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-1 flex-shrink-0" /> Basée sur un savoir-faire local et une vision tournée vers l’innovation</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                    src={placeholderImg(600, 400, "Atelier VehTun Moderne")} 
                    alt="Atelier VehTun Moderne" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.target.src = placeholderImg(600, 400, "Image Indisponible")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="scroll-mt-16">
          <SectionTitle title="Nos Produits" icon={Truck} />
          <p className="text-center text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
            Équipements pour camions porteurs de différents tonnages :
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Plateaux simples", icon: "PS" },
              { name: "Ridelles fixes ou amovibles", icon: "RF" },
              { name: "Plateaux bâchés", icon: "PB" },
              { name: "Bennes basculantes (BTP, déchets, agriculture...)", icon: "BB" },
              { name: "Citernes (liquides industriels ou alimentaires)", icon: "CI" },
            ].map((product) => (
              <div key={product.name} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-white text-2xl font-bold mb-4 mx-auto">
                  {product.icon}
                </div>
                <h4 className="text-xl font-semibold text-center text-cyan-200">{product.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Workshop Section */}
        <section id="workshop" className="scroll-mt-16">
          <SectionTitle title="Notre Atelier" icon={Wrench} />
          <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center sm:text-left">🔧 Capacités techniques :</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Soudure MIG/MAG",
                "Pliage, découpe, perçage, usinage",
                "Peinture industrielle",
                "Contrôle qualité sur site",
                "Production sur mesure selon cahier des charges client",
              ].map((cap) => (
                <div key={cap} className="flex items-center">
                  <Dot className="w-6 h-6 text-cyan-400 mr-2 flex-shrink-0" />
                  <p className="text-gray-300">{cap}</p>
                </div>
              ))}
            </div>
             <div className="mt-8 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                    src={placeholderImg(800, 400, "Machines Atelier VehTun")} 
                    alt="Machines Atelier VehTun" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = placeholderImg(800, 400, "Image Indisponible")}
                />
                <div className="absolute inset-0 bg-slate-900/30"></div>
            </div>
          </div>
        </section>

        {/* Added Values Section */}
        <section id="values" className="scroll-mt-16">
          <SectionTitle title="Nos Valeurs Ajoutées" icon={Lightbulb} />
          <p className="text-center text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
            🚀 Pourquoi VehTun ?
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Innovation continue", desc: "Conception des équipements à la pointe." },
              { title: "Allégement des structures", desc: "Matériaux optimisés pour plus de charge utile." },
              { title: "Optimisation des coûts et performance", desc: "Solutions rentables pour les transporteurs." },
              { title: "Flexibilité", desc: "Production sur mesure selon les besoins spécifiques." },
            ].map((value) => (
              <div key={value.title} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">{value.title}</h4>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Clients Section */}
        <section id="clients" className="scroll-mt-16">
          <SectionTitle title="Nos Clients Cibles" icon={Target} />
          <p className="text-center text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
            🎯 Secteurs desservis :
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              "Transport & logistique",
              "Bâtiment et travaux publics (BTP)",
              "Agriculture",
              "Collectivités locales & services publics",
              "Industriels et distributeurs",
            ].map((client) => (
              <span key={client} className="bg-cyan-600/30 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                {client}
              </span>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="scroll-mt-16">
          <SectionTitle title="Témoignage de Réalisations" icon={Award} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Bennes pour gravats", desc: "Camions porteurs 10T", imgText: "Benne Gravats 10T" },
              { title: "Plateaux bâchés", desc: "Livrés pour société de distribution", imgText: "Plateau Bâché" },
              { title: "Citerne 15 000 L", desc: "Conçue pour produits chimiques", imgText: "Citerne Chimique" },
              { title: "Ridelles renforcées", desc: "Pour transport agricole", imgText: "Ridelles Agricoles" },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col group">
                <div className="relative h-48 sm:h-56">
                    <img 
                        src={placeholderImg(400, 300, item.imgText, '475569', '9CA3AF')} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => e.target.src = placeholderImg(400, 300, "Image Indisponible")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
           <p className="text-center text-gray-500 mt-8 text-sm">(Photos réelles à insérer ici si disponibles)</p>
        </section>

        {/* Development Goals Section */}
        <section id="goals" className="scroll-mt-16">
          <SectionTitle title="Objectifs de Développement" icon={TrendingUp} />
          <p className="text-center text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
            📈 Nos ambitions :
          </p>
          <div className="max-w-2xl mx-auto bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
            <ul className="space-y-3">
              {[
                "Étendre notre atelier et nos capacités de production",
                "Développer de nouvelles gammes allégées et modulables",
                "Nouer des partenariats avec des constructeurs et distributeurs",
                "Intégrer la digitalisation dans la gestion des commandes et SAV",
              ].map((goal) => (
                <li key={goal} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16">
          <SectionTitle title="Contact" icon={Users} />
          <div className="max-w-3xl mx-auto bg-slate-800 p-6 sm:p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-center text-cyan-300 mb-8">🤝 Travaillons ensemble !</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-200">Adresse atelier :</span>
                  <span className="text-gray-400 ml-2">[À remplir]</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-200">Email :</span>
                  <a href="mailto:amine.trabelsi@email.com" className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors">
                    amine.trabelsi@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-200">Téléphone :</span>
                  <a href="tel:+216XXXXXXXXX" className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors">
                    +216 XX XXX XXX
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" /> {/* Assuming Globe icon exists or using a similar one */}
                <div>
                  <span className="font-semibold text-gray-200">Site web :</span>
                  <span className="text-gray-400 ml-2">En cours de développement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VehTun. Tous droits réservés.</p>
          <p className="text-sm mt-1">Conçu avec passion en Tunisie.</p>
        </div>
      </footer>
    </div>
  );
};
export default App;
