"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeTab, setActiveTab] = useState("cultural")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 overflow-hidden grain-overlay">
      {/* Candlelight Decorative Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-3xl animate-blob candle-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-orange-400/20 to-amber-500/20 blur-3xl animate-blob animation-delay-2000 candle-glow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-300/20 blur-3xl animate-blob animation-delay-4000 candle-glow"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://www.gob.mx/cms/uploads/article/main_image/82906/Chiapas-San-Cristobal-web.jpg')] bg-cover bg-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundPosition: `50% ${50 + scrollY * 0.05}%`,
            filter: "brightness(0.7) contrast(1.1)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 drop-shadow-lg animate-flicker">
              San Cristobal de las Casas
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6 candle-glow"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-amber-100/90">
              Discover the magic of Chiapas, Mexico in Spring 2025
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-12 bg-transparent border-amber-500/50 text-amber-200 hover:bg-amber-800/30 hover:text-amber-100 transition-all duration-300 group animate-fade-in-up animation-delay-500 candle-glow"
            onClick={() => {
              document.getElementById("attractions")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore Attractions
            <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div id="attractions" className="relative z-10 container mx-auto py-16 px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 drop-shadow-lg">
            Top Attractions & Activities
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6 candle-glow"></div>
          <p className="text-lg max-w-2xl mx-auto text-amber-100/80 dark:text-amber-100/80">
            Explore the best that San Cristobal has to offer, from cultural landmarks to natural wonders
          </p>
        </div>

        <Tabs defaultValue="cultural" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-card/50 backdrop-blur-md rounded-full p-1.5 mx-auto max-w-3xl border border-amber-800/30">
            {[
              { value: "cultural", label: "Cultural" },
              { value: "nature", label: "Nature & Adventure" },
              { value: "culinary", label: "Culinary" },
              { value: "music", label: "Music & Events" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "rounded-full transition-all duration-300 text-amber-200/80 data-[state=active]:text-amber-900 data-[state=active]:bg-gradient-to-r",
                  tab.value === "cultural" && "data-[state=active]:from-amber-400 data-[state=active]:to-amber-500",
                  tab.value === "nature" && "data-[state=active]:from-emerald-400 data-[state=active]:to-emerald-500",
                  tab.value === "culinary" && "data-[state=active]:from-rose-400 data-[state=active]:to-rose-500",
                  tab.value === "music" && "data-[state=active]:from-purple-400 data-[state=active]:to-purple-500",
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Cultural Attractions */}
          <TabsContent value="cultural" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AttractionCard
                title="Walking Tour of the Historic Center"
                rating={5}
                description="Wander through cobblestone streets lined with brightly painted buildings, each a canvas of colonial charm. A knowledgeable guide will weave tales of the city's rich history, from its indigenous roots to the Zapatista uprising."
                imagePath="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?q=80&w=600&auto=format&fit=crop"
                color="amber"
                index={0}
              />

              <AttractionCard
                title="Na Bolom Cultural Center & Museum"
                rating={4}
                description="Step into a time capsule at Na Bolom, the former home of anthropologist Gertrude Duby Blom and her photographer husband, Frans Blom, dedicated to preserving the Lacandon Maya culture."
                imagePath="https://bucketlistbri.com/wp-content/uploads/2021/01/Na-Bolom-Mural.jpg"
                color="amber"
                index={1}
              />

              <AttractionCard
                title="Templo de Santo Domingo de Guzmán"
                rating={5}
                description="Prepare to be awestruck by the Templo de Santo Domingo de Guzmán, a Baroque masterpiece that explodes with indigenous motifs on its intricate facade!"
                imagePath="https://en.visitchiapas.com/v1/admin/archivos/Turismo/multimedia/b48a0da7_26052020_0520.jpg"
                color="amber"
                index={2}
              />

              <AttractionCard
                title="San Juan Chamula and Zinacantán"
                rating={4}
                description="Journey into the heart of indigenous Mayan culture with visits to the villages of San Juan Chamula and Zinacantán. Witness unique religious syncretism and admire stunning textiles."
                imagePath="https://www.wandersmiles.com/wp-content/uploads/2022/05/Ceremony-San-Lorenzo-church-Zinacantan.jpg"
                color="amber"
                index={3}
              />

              <AttractionCard
                title="Museo del Ámbar de Chiapas"
                rating={4}
                description="Delve into the world of Chiapas amber at this fascinating museum, showcasing a stunning collection of pieces, some containing perfectly preserved insects and plants from millions of years ago."
                imagePath="https://cdn.mexicodestinos.com/lugares/museo-del-ambar-chiapas-galeria-min.jpg"
                color="amber"
                index={4}
              />

              <AttractionCard
                title="Workshop in an Indigenous Weaving Cooperative"
                rating={4}
                description="Get your hands dirty and connect with local artisans by participating in a weaving workshop in one of the indigenous villages surrounding San Cristóbal."
                imagePath="https://images.squarespace-cdn.com/content/v1/59f67799e45a7c25d682a619/1518657961243-9LTECFV01GQAXTPJNN7B/DSC_1900.jpg"
                color="amber"
                index={5}
              />

              <AttractionCard
                title="Explore the Cave Paintings at Rancho Nuevo Caves"
                rating={3}
                description="Descend into the depths of the Rancho Nuevo Caves, a subterranean world of stalactites, stalagmites, and ancient mysteries. Venture beyond the main chambers to seek out the cave paintings."
                imagePath="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/a0/4d/de.jpg"
                color="amber"
                index={6}
              />

              <AttractionCard
                title="Attend a Mayan Ceremony (Temazcal)"
                rating={5}
                description="If you are truly fortunate and develop a connection with a local community, witnessing a traditional Mayan ceremony can be a profound and transformative experience."
                imagePath="https://realtalktravel.com/wp-content/uploads/2024/02/temazcal-ceremony-san-cristobal--1024x768.jpg"
                color="amber"
                index={7}
              />

              <AttractionCard
                title="Explore the 'Forgotten' Cemetery"
                rating={3}
                description="Wander through the Panteón Municipal, San Cristóbal's historic cemetery, where ornate tombs, crumbling sculptures, and weathered headstones whisper stories of the past."
                imagePath="https://www.true.travel/wp-content/uploads/2024/08/LAM-Mexico-Day-of-the-dead-Street-Celebrations-scaled.jpg"
                color="amber"
                index={8}
              />
            </div>
          </TabsContent>

          {/* Nature & Adventure */}
          <TabsContent value="nature" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AttractionCard
                title="Cañon del Sumidero"
                rating={5}
                description="Embark on a boat trip through the spectacular Cañon del Sumidero, where towering cliffs rise dramatically from the Grijalva River. Keep your eyes peeled for crocodiles, monkeys, and colorful birds."
                imagePath="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/8e/93/af.jpg"
                color="emerald"
                index={0}
              />

              <AttractionCard
                title="San Cristobal Coffee Plantation Tour"
                rating={4}
                description="Escape the city and journey into the highlands to visit a smaller, family-run coffee plantation. Learn about the entire coffee-making process, from bean to cup, with insights from passionate producers."
                imagePath="https://everychildthrives.com/wp-content/uploads/2024/05/Tenejapa-Cafe-36_72dpi_12x8.jpg"
                color="emerald"
                index={1}
              />

              <AttractionCard
                title="Real de Guadalupe Street"
                rating={3}
                description="Stroll along Real de Guadalupe, San Cristóbal's bustling pedestrian street, lined with shops, cafes, restaurants, and bars. Soak in the lively atmosphere and browse the local crafts."
                imagePath="https://www.roamingaroundtheworld.com/wp-content/uploads/2016/03/DSC02091.jpg"
                color="emerald"
                index={2}
              />
            </div>
          </TabsContent>

          {/* Culinary */}
          <TabsContent value="culinary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AttractionCard
                title="Visit a Local Comedor Outside the Tourist Center"
                rating={4}
                description="Venture beyond the tourist hotspots and discover the authentic flavors of Chiapaneco cuisine at a local comedor. Sit alongside locals, savoring home-cooked dishes made with fresh, regional ingredients."
                imagePath="https://hiddenlemur.com/wp-content/uploads/2021/06/San-Cristobal-1.png"
                color="rose"
                index={0}
              />

              <AttractionCard
                title="Learn Traditional Chiapaneco Cooking"
                rating={4}
                description="Trade the restaurant meals for a hands-on culinary adventure with a traditional Chiapaneco cooking class. Visit the local market to gather fresh ingredients and learn the secrets of traditional recipes."
                imagePath="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/27/15/13/getlstd-property-photo.jpg?w=1200&h=-1&s=1"
                color="rose"
                index={1}
              />
            </div>
          </TabsContent>

          {/* Music & Events */}
          <TabsContent value="music" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AttractionCard
                title="O'CULTA PsyTrance Festival"
                rating={4}
                description="Imagine the hottest psytrance DJs all here in San Cristobal! When the International O'CULTA Psytrance Festival takes place in 2025, you can expect to hear world-class psy-trance from around the globe."
                imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvnJd5BGl5i8SqXYCaBBK5XD8KBr7bZX-qQ&s"
                date="April 19 - April 20, 2025"
                color="purple"
                index={0}
              />

              <AttractionCard
                title="Dia de la Santa Cruz"
                rating={3}
                description="On May 3rd, the Dia de la Santa Cruz paints San Cristóbal with music, particularly in the indigenous villages. Expect to hear the rhythmic beats of traditional Mayan music intertwined with religious hymns."
                imagePath="https://vivesancristobal.com/wp-content/uploads/2015/11/SAN_CRIS_Fiestas_y_tradiciones_sancristobal.jpg"
                date="May 3, 2025"
                color="purple"
                index={1}
              />

              <AttractionCard
                title="Semana Santa Celebrations"
                rating={4}
                description="The streets of San Cristóbal transform during Semana Santa as religious processions wind through the city, filling the air with the soulful sounds of traditional brass bands and indigenous drumming."
                imagePath="https://hotelvmsancristobaldelascasas.com/wp-content/uploads/2024/06/Festividades-San-Cristobal-1024x662.png"
                date="Late March/Early April 2025"
                color="purple"
                index={2}
              />

              <AttractionCard
                title="Music in the Plazas and Parks"
                rating={3}
                description="On weekends and evenings, the plazas and parks of San Cristóbal come alive with the sounds of local musicians. From traditional Mexican folk music to contemporary tunes."
                imagePath="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzBU0oulg23Eov9gZPgmkqBndUOlc_lg67NpywGCI65ea-ixxUurXYO7yZYtDFh40v7ZfWi8y0BjYRTaPZpfITZtudpiEtWGVrHul48L-368JPAv3nt2qRUkFYsJ-ahTAhjnlYKtO2kle8/s1600/Z-+Marimba+band.jpg"
                color="purple"
                index={3}
              />

              <AttractionCard
                title="Live Music in Bars and Restaurants"
                rating={3}
                description="Many bars and restaurants in San Cristóbal offer live music, providing a lively and intimate setting to enjoy a meal or drinks. From blues and rock to reggae and local Latin rhythms."
                imagePath="https://img.restaurantguru.com/cd62-Pub-and-bar-El-Paliacate-Espacio-Cultura-photo.jpg"
                color="purple"
                index={4}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-950 to-amber-900 text-amber-100/90 py-12 border-t border-amber-800/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">San Cristobal, Chiapas Guide</h3>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6 candle-glow"></div>
          <p className="mb-6 max-w-xl mx-auto">Your comprehensive guide to exploring San Cristobal in Spring 2025</p>
          <div className="flex justify-center gap-4 mb-8">
            {["Facebook", "Instagram", "Twitter"].map((social, i) => (
              <Button
                key={social}
                variant="outline"
                className="bg-amber-900/30 border-amber-700/30 text-amber-200 hover:bg-amber-800/40 hover:text-amber-100 transition-all"
              >
                {social}
              </Button>
            ))}
          </div>
          <p className="text-sm opacity-75">© 2025 San Cristobal Travel Guide</p>
        </div>
      </footer>
    </div>
  )
}

interface AttractionCardProps {
  title: string
  rating: number
  description: string
  imagePath: string
  date?: string
  color: "amber" | "emerald" | "rose" | "purple"
  index: number
}

function AttractionCard({ title, rating, description, imagePath, date, color, index }: AttractionCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Calculate rotation (max 10 degrees)
    const rotateY = (x / (rect.width / 2)) * 10
    const rotateX = -(y / (rect.height / 2)) * 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const colorVariants = {
    amber: {
      gradient: "from-amber-500 to-amber-600",
      shadow: "shadow-amber-500/30 dark:shadow-amber-500/20",
      border: "border-amber-700/30",
      button: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      stars: "text-amber-400",
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      shadow: "shadow-emerald-500/30 dark:shadow-emerald-500/20",
      border: "border-emerald-700/30",
      button: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
      stars: "text-emerald-400",
    },
    rose: {
      gradient: "from-rose-500 to-rose-600",
      shadow: "shadow-rose-500/30 dark:shadow-rose-500/20",
      border: "border-rose-700/30",
      button: "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700",
      stars: "text-rose-400",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      shadow: "shadow-purple-500/30 dark:shadow-purple-500/20",
      border: "border-purple-700/30",
      button: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      stars: "text-purple-400",
    },
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "transform transition-all duration-700 perspective-1000",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        `transition-delay-${index * 100}`,
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={cn(
          "overflow-hidden h-full flex flex-col bg-card/80 backdrop-blur-sm border",
          colorVariants[color].border,
          colorVariants[color].shadow,
          "hover:shadow-xl transition-all duration-300",
          isHovered ? "z-10" : "z-0",
          "candle-glow",
        )}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10",
              "opacity-70 transition-opacity duration-300",
              isHovered ? "opacity-40" : "opacity-70",
            )}
          />
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-all duration-700", isHovered ? "scale-110" : "scale-100")}
            style={{
              transform: isHovered
                ? `scale(1.1) translateX(${rotation.y * -0.5}px) translateY(${rotation.x * 0.5}px)`
                : "scale(1) translateX(0) translateY(0)",
              filter: "brightness(0.9) contrast(1.1)",
            }}
          />
          <div className="absolute bottom-3 left-3 z-20 flex">
            {Array.from({ length: rating }).map((_, i) => (
              <div
                key={i}
                className={cn("text-xl animate-pulse", colorVariants[color].stars, isHovered ? "animate-bounce" : "")}
                style={{
                  animationDelay: `${i * 200}ms`,
                  animationDuration: "2s",
                }}
              >
                ★
              </div>
            ))}
          </div>
        </div>
        <CardHeader className={cn("bg-gradient-to-r", colorVariants[color].gradient, "text-white")}>
          <CardTitle className="text-xl">{title}</CardTitle>
          {date && <CardDescription className="text-white/80">{date}</CardDescription>}
        </CardHeader>
        <CardContent className="flex-grow py-6">
          <p className="text-card-foreground">{description}</p>
        </CardContent>
        <CardFooter className="pb-6 px-6">
          <Button
            className={cn(
              "w-full text-white shadow-lg transition-all duration-300",
              colorVariants[color].button,
              isHovered ? "shadow-xl translate-y-[-2px]" : "",
            )}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

