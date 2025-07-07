import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout