import { CardProps } from "./types";

export const Card = ({ children, key, extraStyle }: CardProps) => {
  return (
    <div
      key={key}
      className={`
      w-full
      flex
      flex-col
      items-start
      gap-2.5
      p-5
      bg-grayscale-800
      rounded-3xl
      ${extraStyle}

      tablet:gap-4
    `}>
      {children}
    </div>
  )
}
