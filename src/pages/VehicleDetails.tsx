import { Link, useParams } from 'react-router-dom'
import { CalendarCheck, ChevronLeft } from 'lucide-react'
import VehicleImage from '../components/VehicleImage'
import DiscountRequestButton from '../components/DiscountRequestButton'
import NotFound from './NotFound'
import { categoryLabels, getVehicleById, transmissionLabels } from '../data/vehicles'
import { formatKm, formatPrice } from '../lib/utils'

export default function VehicleDetails() {
  const { id } = useParams()
  const v = getVehicleById(id)
  if (!v) return <NotFound />

  const specs = [
    ['Ano', String(v.year)],
    ['Quilometragem', formatKm(v.km)],
    ['Câmbio', transmissionLabels[v.transmission]],
    ['Combustível', v.fuel],
    ['Categoria', categoryLabels[v.category]],
  ]

  return (
    <div className="container-page py-8 sm:py-12">
      <Link
        to="/catalogo"
        className="inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand"
      >
        <ChevronLeft size={18} aria-hidden="true" />
        Voltar ao catálogo
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="self-start overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
          <VehicleImage
            src={v.image}
            alt={`${v.brand} ${v.model} ${v.version}, ${v.year}`}
            className="aspect-[4/3] w-full"
          />
        </div>

        <div>
          <p className="font-semibold text-brand">{v.brand}</p>
          <h1 className="text-3xl font-extrabold text-ink">{v.model}</h1>
          <p className="text-slate-600">{v.version}</p>
          <p className="mt-5 text-4xl font-extrabold text-ink">{formatPrice(v.price)}</p>

          <dl className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {specs.map(([k, val]) => (
              <div key={k} className="flex justify-between px-4 py-3 text-sm">
                <dt className="text-slate-600">{k}</dt>
                <dd className="font-semibold text-ink">{val}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-6 font-bold text-ink">Itens de destaque</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
            {v.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link to={`/agendar?veiculo=${v.id}`} className="btn-primary">
              <CalendarCheck size={18} aria-hidden="true" />
              Agendar visita para este veículo
            </Link>
            <DiscountRequestButton
              className="btn-outline w-full"
              vehicleName={`${v.brand} ${v.model} ${v.version}`}
              label="Solicitar um desconto"
            />
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Veículo e valores demonstrativos, sem vínculo com anúncios reais.
          </p>
        </div>
      </div>
    </div>
  )
}
