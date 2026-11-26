import { useState } from 'react'
import { Car } from 'lucide-react'

interface Props {
  src: string
  alt: string
  className?: string
}

export default function VehicleImage({ src, alt, className = '' }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  if (failedSrc === src) {
    return (
      <div
        role="img"
        aria-label={`${alt} (imagem indisponível)`}
        className={`flex flex-col items-center justify-center gap-2 bg-slate-200 text-slate-600 ${className}`}
      >
        <Car size={40} aria-hidden="true" />
        <span className="text-xs font-medium">Imagem indisponível</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailedSrc(src)}
      className={`object-cover ${className}`}
    />
  )
}
