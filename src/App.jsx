import { useSpring, animated } from '@react-spring/web'

function App() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: { x: 0 },
      to: { x: 100 },
    })
  }

  return (
    <>
      <animated.div
        onClick={handleClick}
        style={{
          width: 50,
          height: 50,
          background: '#c96dff',
          borderRadius: 16,
          transition: 'all 0.3s ease',
          // x: springs.x.to((x) => `${x}%`),
          ...springs,
        }}
      />
    </>
  )
}

export default App
