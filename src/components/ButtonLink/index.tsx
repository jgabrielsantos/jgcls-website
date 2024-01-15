import { ButtonLinkProps } from "./type"

export const ButtonLink = ({ to, children }: ButtonLinkProps) => {
  return (
    <a
      href={to}
      className="
        w-full
        flex
        justify-center
        items-center
        p-4
        rounded-lg
        bg-support-warning-50
        hover:bg-support-warning-100
        text-grayscale-800
      "
    >
      {children}
    </a>
  )
}
