import React from 'react'

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
          <div className="w-48 h-48 mx-auto">
            <img
              src="/profile.png"
              alt="Yashita Mittal"
              className="w-full h-full object-cover"
            />
          </div>
            <h1 className="mt-6 text-4xl font-bold">Yashita Mittal</h1>
            <p className="mt-4 text-muted-foreground">Business Analyst</p>
            <div className="mt-8 space-y-4 text-center">
            <p>
            I'm Yashita Mittal, a business analyst with a passion for transforming data into actionable insights. With a strong foundation in business processes and analytics, I thrive on dissecting complex problems and streamlining operations. My expertise lies in gathering requirements, analyzing trends, and delivering strategic solutions that drive business growth. I stay ahead of market trends, ensuring that I provide valuable recommendations that align with organizational goals. When I'm not immersed in data, you can find me indulging in my love for music, exploring new genres, and singing my favorite tunes.
            </p>
            {/* <div className="text-center mx-2 px-2">
            <Link
              href="#"
              className="mr-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              View Resume
              <DownloadIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              View Resume
              <DownloadIcon className="h-4 w-4" />
            </Link>
            </div> */}
            </div>
          </div>
        </section>
  )
}

export default About