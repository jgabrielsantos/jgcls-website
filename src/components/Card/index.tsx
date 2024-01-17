import { CardProps } from "./types";

export const Card = ({ children, extraStyle }: CardProps) => {
  return (
    <div className={`
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
