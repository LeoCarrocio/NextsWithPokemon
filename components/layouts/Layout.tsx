import { FC, ReactNode } from 'react'

import Head from 'next/head'

import { Navbar } from '../ui'

interface LayoutProps { 
  children: ReactNode
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin 

export const Layout:FC<LayoutProps> = ({children, title}) => {

  
  return (
  <>
    <Head>
      <title>{title ||'Pokemon APP'}</title>
      <meta  name="author" content="LEONARDO CARROCIO"/>
      <meta  name="description" content={` información sombre Pokemon ${title}`}/>
      <meta  name="keywords" content= {`${title}, Pokemon`}/>
      <meta property="og:title" content={`informacion sobre ${title}`} />
      <meta property="og:description" content="esta es la paguina de cada a pokemons." />
      <meta property="og:image" content={`${origin}/img/banner.png`}/>
    </Head>  
    <Navbar />
    <main style={{ 
      padding: '0px 20px',
    }}>
      {children}
    </main>


  </>
  )
}
