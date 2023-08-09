import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-20 p-24 mx-40">
      <div className="w-full flex justify-between max-lg:flex-col max-lg:justify-between max-lg:gap-10">
        <div className="flex flex-col justify-start max-md:justify-center max-md:items-center">
          <h1 className="text-5xl font-bold mt-4 mb-4">Maurice&nbsp;Becnel</h1>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-xl">Associate&nbsp;Fullstack&nbsp;Developer</p> 
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
      <h2 className="text-3xl font-bold w-full"> 
        Dedicated to improving digital experiences one
        <pre className="inline p-2 text-xl inline">
          <code className="bg-secondary px-1 text-xl">npm install</code> 
        </pre>
        at a time.
      </h2>
    </main>
  )
}
