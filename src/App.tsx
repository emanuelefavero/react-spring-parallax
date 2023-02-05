import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

// Image url helper
const url = (name: string, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

// IMAGE NAMES: stars, bash, server, cloud, clients, earth, satellite4

export default function App() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#0d162a' }}>
      <Parallax
        ref={parallax}
        // NUMBER OF PAGES
        pages={2}
      >
        {/* STARS */}
        <ParallaxLayer offset={0} speed={1} factor={3}>
          <img src={url('stars')} style={{ width: '100%' }} />
        </ParallaxLayer>

        {/* SATELLITE */}
        <ParallaxLayer
          offset={0.5}
          speed={-0.2}
          factor={2}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </ParallaxLayer>

        {/* CLOUDS */}
        {/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */}
        <ParallaxLayer offset={1.1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{
              display: 'block',
              width: '20%',
              marginLeft: '55%',
              marginTop: '-20px',
            }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{
              display: 'block',
              width: '20%',
              marginLeft: '30%',
              // marginTop: '20px',
            }}
          />
        </ParallaxLayer>
        {/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */}

        {/* BASH TERMINAL */}
        <ParallaxLayer
          offset={1}
          speed={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('bash')} style={{ width: '33%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
