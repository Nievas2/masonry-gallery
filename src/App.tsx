import Masonry from "react-layout-masonry"
import Image from "./components/Image"

const images = [
  { src: "https://picsum.photos/300/400?random=1", width: 300, height: 400 },
  { src: "https://picsum.photos/200/500?random=2", width: 300, height: 450 },
  { src: "https://picsum.photos/400/300?random=3", width: 400, height: 300 },
  { src: "https://picsum.photos/350/450?random=4", width: 350, height: 450 },
  { src: "https://picsum.photos/250/350?random=5", width: 250, height: 350 },
  { src: "https://picsum.photos/300/300?random=6", width: 300, height: 300 },
  { src: "https://picsum.photos/450/400?random=7", width: 450, height: 400 },
  { src: "https://picsum.photos/400/500?random=8", width: 400, height: 500 },
  { src: "https://picsum.photos/500/300?random=9", width: 500, height: 300 },
  { src: "https://picsum.photos/600/400?random=10", width: 600, height: 400 },
  { src: "https://picsum.photos/300/600?random=11", width: 300, height: 600 },
  { src: "https://picsum.photos/350/300?random=12", width: 350, height: 300 },
  { src: "https://picsum.photos/400/400?random=13", width: 400, height: 400 },
  { src: "https://picsum.photos/450/350?random=14", width: 450, height: 350 },
  { src: "https://picsum.photos/500/500?random=15", width: 500, height: 500 }, 
]

function App() {
  return (
    <main className="bg-slate-900 p-4 min-h-screen text-white">
      <h1>Vite + React</h1>
      <Masonry
        columns={{ 320: 1, 540: 2, 768: 3, 1024: 5 }}
        gap={16}
      >
        {images.map((img, index) => {
          return (
            <Image
              height={img.height}
              width={img.width}
              src={img.src}
              index={index}
              key={index}
            />
          )
        })}
      </Masonry>
    </main>
  )
}

export default App