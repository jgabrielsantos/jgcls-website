import { FooterStyles } from "./styles"
import { imageList } from "@/utils/imageList"

const Footer = ()  => {
  const styles = new FooterStyles()
  const { wrapper, icon } = styles.buildStyleRules()
  return (
    <footer
      className={wrapper}
    >
      <a href="">
        <img
          className={icon}
          src={imageList.Github.src}
          alt={imageList.Github.alt}
        />
      </a>
      <a href="">
        <img
          className={icon}
          src={imageList.Linkedin.src}
          alt={imageList.Linkedin.alt}
        />
      </a>
      <a href="mailto:jgsantosdev@gmail.com">
        @
      </a>
    </footer>
  )
}

export default Footer
