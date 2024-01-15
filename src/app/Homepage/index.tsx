/* eslint-disable react/jsx-key */
import { HomepageStyles } from "./styles"
import { Static } from "./static"
import { Static as WorkStatic } from "./components/Work/static"
import { Repository, Work } from "./components"
import { imageList } from "@/utils/imageList"

const Homepage = () => {
  const styles = new HomepageStyles()
  const {
    main,
    profileImage,
    title,
    heading,
    link,
    repositoryList,
    introWrapper
  } = styles.buildStyleRules()

  return (
    <main className={main}>
    </main>
  )
}

export default Homepage