import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CalendarCheck, Eye, MessageCircle, ShieldCheck } from 'lucide-react'
import SearchBar from '../components/SearchBar'
import VehicleCard from '../components/VehicleCard'
import VehicleImage from '../components/VehicleImage'
import { HERO_IMAGE, vehicles } from '../data/vehicles'
import DiscountRequestButton from '../components/DiscountRequestButton'

const differentials = [
  { icon: BadgeCheck, title: 'Veículos selecionados', text: 'Um catálogo organizado para você comparar com calma.' },
  { icon: MessageCircle, title: 'Atendimento especializado', text: 'Converse com a equipe para tirar dúvidas sobre cada carro.' },
  { icon: Eye, title: 'Transparência na negociação', text: 'Informações claras sobre ano, quilometragem e preço.' },
  { icon: CalendarCheck, title: 'Facilidade para agendar', text: 'Solicite uma visita em poucos passos, pelo celular ou computador.' },
]

const SHOWROOM_IMAGE = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80'

export default function Home() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 4)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <VehicleImage
          src={HERO_IMAGE}
          alt="Carro esportivo em destaque na rua"
          className="absolute inset-0 -z-10 h-full w-full opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-brand-dark/35" />
        <div className="container-page py-20 sm:py-28 lg:py-36 lg:pb-44">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-light/30 bg-brand-dark/60 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-200">
            Seminovos com procedência
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Seu próximo carro está aqui.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            Encontre o seminovo ideal para você, com qualidade, procedência e confiança.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/catalogo" className="btn-primary">
              Ver veículos
            </Link>
            <Link
              to="/agendar"
              className="btn border border-white/70 text-white hover:bg-white hover:text-ink"
            >
              Agende sua visita
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-10 lg:-mt-20">
        <SearchBar />
      </div>

      <section className="container-page py-16 sm:py-20" aria-labelledby="destaques">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="destaques" className="text-2xl font-extrabold text-ink sm:text-3xl">
              Veículos em destaque
            </h2>
            <p className="mt-1 text-slate-600">Seleção demonstrativa do catálogo.</p>
          </div>
          <Link to="/catalogo" className="btn-outline">
            Ver todo o catálogo <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="diferenciais">
        <div className="container-page">
          <h2 id="diferenciais" className="text-2xl font-extrabold text-ink sm:text-3xl">
            Por que escolher a Seu Carro
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand text-white shadow-md shadow-brand/20">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-1 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20" aria-labelledby="experiencia">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-lg">
            <VehicleImage
              src={SHOWROOM_IMAGE}
              alt="Veículos selecionados em exposição no showroom"
              className="aspect-[16/9] w-full"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-brand-dark">
              <ShieldCheck size={18} className="text-brand" aria-hidden="true" />
              Qualidade e Procedência Garantida
            </div>
            <h2 id="experiencia" className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
              Uma experiência feita para você escolher com confiança.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Explore as opções de seminovos, compare especificações técnicas e agende sua visita com praticidade e transparência em cada etapa.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/catalogo" className="btn-primary">
                Explorar catálogo <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <DiscountRequestButton className="btn-outline" label="Solicitar um desconto" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20" aria-label="Condição especial">
        <div className="relative isolate overflow-hidden rounded-2xl bg-brand-dark px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14">
          <VehicleImage
            src={HERO_IMAGE}
            alt="Carro seminovo em destaque"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-brand-dark/90 to-brand/70" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-200">
                Condição especial
              </p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Seu desconto pode estar aqui.
              </h2>
              <p className="mt-2 max-w-xl text-slate-200">
                Conte qual carro chamou sua atenção e converse com a equipe sobre as condições disponíveis.
              </p>
            </div>
            <DiscountRequestButton
              className="btn shrink-0 bg-white text-brand-dark hover:bg-blue-50"
              label="Solicitar um desconto"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20" aria-labelledby="cta">
        <div className="container-page flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta" className="text-2xl font-extrabold sm:text-3xl">
              Conheça os carros pessoalmente.
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Escolha um veículo e solicite uma visita. Nesta demonstração, nenhum agendamento real é registrado.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/agendar" className="btn-primary">
              Agende sua visita
            </Link>
            <Link
              to="/catalogo"
              className="btn border border-white/70 text-white hover:bg-white hover:text-ink"
            >
              Ver catálogo completo <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
