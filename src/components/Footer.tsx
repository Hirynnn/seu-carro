import { Link } from 'react-router-dom'
import { CarFront, MapPin, Phone } from 'lucide-react'
import { Logo } from './Header'

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-slate-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Plataforma demonstrativa de venda de seminovos com catálogo filtrável, detalhes técnicos e agendamento de visitas.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-bold text-white">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="transition-colors hover:text-white" to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-white" to="/catalogo">
                Catálogo
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-white" to="/agendar">
                Agende uma visita
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white">Atendimento</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-brand-light" aria-hidden="true" />
              (11) 4000-0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-brand-light" aria-hidden="true" />
              Unidades em São Paulo e Rio de Janeiro
            </li>
            <li className="flex items-center gap-2">
              <CarFront size={15} className="text-brand-light" aria-hidden="true" />
              Seg a Sáb, das 9h às 19h
            </li>
          </ul>
          <Link
            to="/agendar"
            className="btn-outline mt-5 !border-slate-700 !bg-transparent !text-white hover:!border-brand-light hover:!text-brand-light"
          >
            Agendar visita
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="container-page py-5 text-xs text-slate-500">
          Os veículos, preços e agendamentos apresentados são demonstrativos e não representam anúncios reais. Imagens ilustrativas.
        </p>
      </div>
    </footer>
  )
}
