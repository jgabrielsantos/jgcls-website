import { ChipProps } from "./types"

export const Chip = ({ key, name }: ChipProps) => {
  return (
    <div key={key} className="rounded-full border-2 border-support-warning-50 bg-transparent py-2 px-3">
      <p className="text-support-warning-50 text-ts font-normal">{name}</p>
    </div>
  )
}