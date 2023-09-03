import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-20 p-10 mx-40 p-20 overflow-x-hidden">
      <div className="max-w-6xl flex flex-col justify-center items-center gap-20">
          <div className="w-full flex justify-between gap-10 items-center flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-center md:items-center lg:items-start">
              <h1 className="text-5xl font-bold mt-4 mb-4">Maurice&nbsp;Becnel</h1>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-md md:text-xl lg:text-xl">Associate&nbsp;Fullstack&nbsp;Developer</p> 
                <a className="inline text-xl text-secondary" href="https://www.goldmansachs.com">@Goldman&nbsp;Sachs</a>
              </div>
            </div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white">
                <Image
                  src="/profile.JPG"
                  alt="Profile Picture"
                  priority
                  objectFit="cover"
                  layout="fill"
                />
            </div>
          </div>
          <div className="flex justify-center text-center md:text-left lg:text-left">
            <h2 className="text-xl font-bold md:text-4xl lg:text-4xl"> 
              Dedicated to improving digital experiences one
              <pre className="inline p-2 text-xl inline">
                <code className="bg-secondary px-1 text-xl md:text-3xl lg:text-3xl">npm install</code> 
              </pre>
              at a time.
            </h2>
        </div>
      </div>
    </main>
  )
}
