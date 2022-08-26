import { useEffect } from "react";
import { useLocation } from "react-router-dom"



function ScrollToTop({children}) {
  const {pathname} = useLocation();
  const test = useLocation()
  console.log(pathname)
  console.log(test)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return;
}

export default ScrollToTop