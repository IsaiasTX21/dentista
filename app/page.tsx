import Image from "next/image";
import type { ReactNode } from "react";
import Sorriso from "../public/images/sorriso.jpg"
import dentista from "../public/images/dentista.jpg"
import dentista2 from "../public/images/dentista2.jpg"
import dentista3 from "../public/images/dentista3.jpg"
import dentista4 from "../public/images/dentista4.webp"
import checkup from "../public/images/checkup.webp"
import clareamento from "../public/images/clareamento.jpeg"
import alinhadores from "../public/images/alinhadores.jpg"
import implante from "../public/images/implante.jpg"



const PHONE_LABEL = "(21) 233 0215";
const PHONE_DIGITS = "555802330215"; 
const PHONE_HREF = `tel:+${PHONE_DIGITS}`;
const WHATSAPP_HREF = `https://wa.me/${PHONE_DIGITS}`;
const EMAIL = "contato@dentora.com.br";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
];

const stats = [
  { value: "12k+", label: "Pacientes atendidos" },
  { value: "15+", label: "Anos de experiência" },
  { value: "4,9", label: "Avaliação média" },
];

const services = [
  { title: "Check-up e limpeza", image: checkup, text: "Prevenção, remoção de tártaro e avaliação completa da saúde bucal." },
  { title: "Clareamento dental", image: clareamento, text: "Mais brilho no sorriso com protocolos seguros para o seu esmalte." },
  { title: "Aparelhos e alinhadores", image: alinhadores, text: "Alinhamento discreto, com acompanhamento de perto a cada ajuste." },
  { title: "Implantes dentários", image: implante, text: "Reposição de dentes perdidos com planejamento digital e resultado duradouro." },
];

const dentists = [
  { name: "Dr. Rafael Moura", role: "Ortodontista", photo: dentista },
  { name: "Dr. André Lopes", role: "Periodontista", photo: dentista2 },
  { name: "Dra. Sarah Khan", role: "Implantodontista", photo: dentista3 },
  { name: "Dr. Marcos Reis", role: "Clínico geral", photo: dentista4 },
];

const reviews = [
  { name: "Kelly Williams", tag: "Paciente de clareamento", text: "Fui atendida na hora marcada e explicaram tudo antes de começar. Saí com o sorriso que queria." },
  { name: "Robert Mill", tag: "Paciente de implante", text: "O orçamento foi claro e o implante ficou natural. Recomendo a toda a minha família." },
  { name: "Jane Alexander", tag: "Paciente de ortodontia", text: "Equipe gentil, consultório tranquilo e acompanhamento de verdade a cada ajuste." },
];

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);


const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_HREF,
    icon: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>

      <header className="header">
        <a href="#inicio" className="logo">Dentista</a>
        <nav className="nav" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href={PHONE_HREF} className="header-phone">
            <PhoneIcon />
            {PHONE_LABEL}
          </a>
          <a href="#contato" className="pill pill-cream">Agendar consulta</a>
        </div>
      </header>


      <section id="inicio" className="hero">
        <Image
          src={Sorriso}
          alt="Close de um sorriso saudável"
          fill
          priority
          sizes="100vw"
          className="cover"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <h1>Sorrisos saudáveis começam aqui</h1>
          <div className="hero-ctas">
            <a href="#contato" className="pill pill-cream">Agendar consulta</a>
            <a href={PHONE_HREF} className="pill pill-ghost">
              <PhoneIcon />
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

  
      <section id="sobre" className="intro">
        <h2>
          Acreditamos que todo sorriso merece <mark>um cuidado excepcional</mark>
        </h2>
        <p>
          Combinamos diagnóstico preciso e conversa franca para que você entenda cada procedimento,
          escolha com segurança e saia da cadeira confortável.
        </p>
        <a href={PHONE_HREF} className="phone-card">
          <span>Ligue para agendar</span>
          <strong>{PHONE_LABEL}</strong>
        </a>
      </section>

 
      <section id="servicos" className="services">
        <h2>Tudo o que o seu sorriso precisa</h2>
        <p className="services-sub">Do cuidado de rotina aos tratamentos mais complexos, no mesmo lugar.</p>
        <ul className="service-grid">
          {services.map((s) => (
            <li key={s.title} className="service-card">
              <div className="service-img">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 350px"
                  className="cover"
                />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contato" className="service-link" aria-label={`Saiba mais sobre ${s.title}`}>
                Saiba mais
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="team">
        <h2>Conheça seus dentistas</h2>
        <p className="team-sub">
          Especialistas em implantes, ortodontia e periodontia, com formação continuada e atendimento humano.
        </p>
        <ul className="team-grid">
          {dentists.map((d) => (
            <li key={d.name} className="dentist-card">
              <Image
                src={d.photo}
                alt={`${d.name}, ${d.role}`}
                fill
                sizes="(max-width: 480px) 90vw, (max-width: 1000px) 45vw, 300px"
                className="cover"
              />
              <div className="dentist-chip">
                <strong>{d.name}</strong>
                <span>{d.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="reviews">
        <h2>Amada pelos pacientes</h2>
        <p className="reviews-sub">Veja o que dizem as pessoas que confiaram o sorriso à Dentora.</p>
        <ul className="review-grid">
          {reviews.map((r) => (
            <li key={r.name}>
              <span className="stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span>
              <blockquote>“{r.text}”</blockquote>
              <div className="reviewer">
                <span className="avatar" aria-hidden="true">{r.name.charAt(0)}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.tag}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="cta">
        <h2>Pronto para cuidar do seu sorriso?</h2>
        <p>Agende sua avaliação ou fale com a recepção.</p>
        <div className="cta-buttons">
          <a href={PHONE_HREF} className="pill pill-cream">Ligar agora</a>
          <a
            href={`mailto:${EMAIL}?subject=Agendamento%20de%20consulta`}
            className="pill pill-outline"
          >
            Agendar online
          </a>
        </div>
        <a href={`mailto:${EMAIL}`} className="cta-email">{EMAIL}</a>
        <ul className="socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <Icon>{s.icon}</Icon>
              </a>
            </li>
          ))}
        </ul>
        <small>© {new Date().getFullYear()} Dentora. Todos os direitos reservados.</small>
      </section>
    </>
  );
}
