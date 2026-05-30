<template>
  <div class="bg-background text-text-primary font-body-md antialiased min-h-screen flex flex-col">
    <!-- Componentized Header -->
    <Header
      brand="Industrial Representative"
      :links="headerLinks"
      cta-text="Solicitar atendimento"
      cta-to="https://wa.me/5511932974403?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20atendimento%20sobre%20as%20solu%C3%A7%C3%B5es%20representadas."
    />

    <main class="flex-grow">
      <!-- Hero Section Wrapper with Scroll Height -->
      <section ref="scrollContainer" class="relative w-full h-[250vh]">
        <!-- Sticky viewport container: Pins content while user scrolls -->
        <div class="sticky top-0 h-screen w-full flex items-center justify-center pt-20 pb-12 px-gutter overflow-hidden">
          
          <!-- Inner Content Grid: 3 Columns on Desktop, Stacked on Tablet/Mobile -->
          <div class="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.6fr_1.2fr] gap-8 xl:gap-16 items-center">
            
            <!-- Left Column: Headline (Above products on mobile/tablet, left on desktop) -->
            <div 
              class="w-full text-center lg:text-left transition-all duration-1000 ease-out delay-200"
              :class="isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-y-4 lg:translate-y-0 lg:-translate-x-8'"
            >
              <h1 class="font-display-lg text-display-lg-mobile lg:text-[44px] xl:text-[52px] text-text-primary leading-[1.1] tracking-tight font-bold">
                Soluções industriais com representação técnica de confiança.
              </h1>
            </div>

            <!-- Center Column: Auto-scaling videos gallery (Centered on all viewports) -->
            <div 
              class="w-full flex justify-center transition-all duration-1000 ease-out"
              :class="isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
            >
              <div class="flex flex-row justify-center items-center gap-4 xl:gap-6 max-w-full h-[25vh] md:h-[38vh] lg:h-[55vh]">
                <!-- Video 1: Conexão -->
                <div class="h-full aspect-[1080/1934] transition-all hover:scale-[1.05] duration-300">
                  <video
                    ref="videoConexao"
                    src="/video/anima%C3%A7%C3%A3o_conex%C3%A3o.mp4"
                    muted
                    playsinline
                    class="w-full h-full object-contain mix-blend-multiply"
                  ></video>
                </div>
                <!-- Video 2: Válvula Globo -->
                <div class="h-full aspect-[1080/1918] transition-all hover:scale-[1.05] duration-300">
                  <video
                    ref="videoValvGlobo"
                    src="/video/anima%C3%A7%C3%A3o_valv_globo.mp4"
                    muted
                    playsinline
                    class="w-full h-full object-contain mix-blend-multiply"
                  ></video>
                </div>
                <!-- Video 3: Válvula de Segurança -->
                <div class="h-full aspect-[1080/1934] transition-all hover:scale-[1.05] duration-300">
                  <video
                    ref="videoValvSeguranca"
                    src="/video/anima%C3%A7%C3%A3o_valvula_seguranca.mp4"
                    muted
                    playsinline
                    class="w-full h-full object-contain mix-blend-multiply"
                  ></video>
                </div>
              </div>
            </div>

            <!-- Right Column: Subtitle / Description & CTAs (Below products on mobile/tablet, right on desktop) -->
            <div 
              class="w-full flex flex-col gap-6 items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out delay-400"
              :class="isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-y-4 lg:translate-y-0 lg:translate-x-8'"
            >
              <p class="font-body-lg text-body-lg text-text-secondary leading-relaxed">
                Conectando indústrias às melhores soluções em fornecimento industrial com atendimento consultivo, agilidade e negociação estratégica.
              </p>
              <div class="flex flex-row flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                <BaseButton variant="primary" to="https://wa.me/5511932974403?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20atendimento%20sobre%20as%20solu%C3%A7%C3%B5es%20representadas." class="!px-6">
                  Solicitar atendimento
                </BaseButton>
                <BaseButton variant="secondary" to="#solutions" class="!px-6">
                  Conhecer soluções
                </BaseButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="w-full py-section-gap">
        <div class="px-gutter max-w-container-max mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-16">
            <div class="flex-shrink-0">
              <img src="/marcelo.png" alt="Marcelo" class="w-80 h-80 rounded-full object-cover border-4 border-surface-container shadow-md">
            </div>
            <div class="flex flex-col gap-6">
              <div>
                <span class="font-label-sm text-text-secondary uppercase tracking-widest">O Representante</span>
                <h2 class="font-headline-xl text-headline-xl text-text-primary mt-2">Especialista em Representação B2B.</h2>
              </div>
              <div class="flex flex-col gap-6">
                <p class="font-body-lg text-body-lg text-text-secondary leading-relaxed">
                  Atuamos como a ponte estratégica entre grandes fabricantes e indústrias que demandam excelência técnica e confiabilidade. Nossa representação vai além da venda; é um serviço de engenharia comercial focado em entender a fundo os processos da sua planta para especificar os componentes exatos que garantirão segurança operacional e eficiência de custos.
                </p>
                <p class="font-body-md text-body-md text-text-secondary leading-relaxed">
                  Com foco estrito em aplicações industriais pesadas e de precisão, mantemos um relacionamento sólido com fornecedores homologados internacionalmente. Isso garante não apenas o acesso às melhores tecnologias, mas também condições comerciais superiores e prazos de entrega otimizados para paradas programadas ou demandas emergenciais.
                </p>
              </div>
              <div class="mt-4">
                <p class="font-body-lg font-bold text-text-primary">Marcelo</p>
                <p class="font-body-md text-text-secondary">Consultor de Vendas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section class="py-section-gap bg-background" id="solutions">
        <div class="px-gutter max-w-container-max mx-auto text-center mb-16">
          <h2 class="font-headline-xl text-headline-xl text-text-primary">Soluções Representadas.</h2>
          <p class="font-body-lg text-body-lg text-text-secondary mt-4">Portfólio técnico abrangente para infraestrutura industrial.</p>
        </div>
        <div class="px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-surface-off-white rounded-[40px] p-12 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-lg duration-300">
            <span class="material-symbols-outlined text-text-primary mb-6" style="font-size: 48px; font-variation-settings: 'FILL' 0;">water_damage</span>
            <h3 class="font-headline-lg text-headline-lg text-text-primary mb-4">Tubos, Flanges e Conexões</h3>
            <p class="font-body-md text-body-md text-text-secondary">Ligas especiais (Inox, Duplex, Super Duplex, Carbono) para condução de fluidos sob alta pressão e temperaturas extremas.</p>
          </div>
          <NuxtLink to="/valvulas" class="bg-surface-off-white rounded-[40px] p-12 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-lg duration-300 cursor-pointer group">
            <span class="material-symbols-outlined text-text-primary mb-6 group-hover:text-link-blue transition-colors duration-200" style="font-size: 48px; font-variation-settings: 'FILL' 0;">valve</span>
            <h3 class="font-headline-lg text-headline-lg text-text-primary mb-4 group-hover:text-link-blue transition-colors duration-200">Válvulas</h3>
            <p class="font-body-md text-body-md text-text-secondary">Gaveta, globo, retenção e esfera para bloqueio e controle.</p>
          </NuxtLink>
          <div class="bg-surface-off-white rounded-[40px] p-12 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-lg duration-300">
            <span class="material-symbols-outlined text-text-primary mb-6" style="font-size: 48px; font-variation-settings: 'FILL' 0;">speed</span>
            <h3 class="font-headline-lg text-headline-lg text-text-primary mb-4">Instrumentação</h3>
            <p class="font-body-md text-body-md text-text-secondary">Manômetros, termômetros e transmissores de precisão.</p>
          </div>
          <div class="bg-surface-off-white rounded-[40px] p-12 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-lg duration-300">
            <span class="material-symbols-outlined text-text-primary mb-6" style="font-size: 48px; font-variation-settings: 'FILL' 0;">local_fire_department</span>
            <h3 class="font-headline-lg text-headline-lg text-text-primary mb-4">Combate a Incêndio</h3>
            <p class="font-body-md text-body-md text-text-secondary">Sistemas fixos, hidrantes e canhões monitores industriais.</p>
          </div>
          <div class="bg-surface-off-white rounded-[40px] p-12 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-lg duration-300">
            <span class="material-symbols-outlined text-text-primary mb-6" style="font-size: 48px; font-variation-settings: 'FILL' 0;">engineering</span>
            <h3 class="font-headline-lg text-headline-lg text-text-primary mb-4">Serviços Industriais</h3>
            <p class="font-body-md text-body-md text-text-secondary">Manutenção e calibração de ativos críticos.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Componentized Footer -->
    <Footer
      brand="Industrial Representative"
      description="Soluções de engenharia de precisão para infraestrutura industrial crítica globalmente."
      :links="footerLinks"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerLinks = [
  { text: 'Soluções', url: '#solutions' },
  { text: 'Quem Somos', url: '#about' },
  { text: 'Contato', url: '#footer' }
]

const footerLinks = [
  { text: 'Política de Privacidade', url: '#' },
  { text: 'Conformidade', url: '#' },
  { text: 'Garantia de Qualidade', url: '#' },
  { text: 'Biblioteca Técnica', url: '#' }
]

const scrollContainer = ref(null)
const videoConexao = ref(null)
const videoValvGlobo = ref(null)
const videoValvSeguranca = ref(null)

let videos = []
let ticking = false
const scrollFraction = ref(0)
const isLoaded = ref(false)

const getDuration = (video) => {
  if (video && video.duration && !isNaN(video.duration) && video.duration > 0) {
    return video.duration
  }
  return 5.92 // Exact fallback duration for all three keyframe videos
}

const updateVideoProgress = () => {
  if (!scrollContainer.value) return

  const rect = scrollContainer.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const totalHeight = rect.height
  const scrollRange = totalHeight - windowHeight

  if (scrollRange <= 0) return

  // fraction is 0 when the top of scrollContainer is at the top of viewport
  // fraction is 1 when the bottom of scrollContainer is at the bottom of viewport
  let fraction = -rect.top / scrollRange
  fraction = Math.max(0, Math.min(1, fraction))
  scrollFraction.value = fraction

  videos.forEach(video => {
    if (video) {
      const dur = getDuration(video)
      const targetTime = dur * fraction
      // Avoid redundant assignments to prevent seeking overhead
      if (Math.abs(video.currentTime - targetTime) > 0.015) {
        video.currentTime = targetTime
      }
    }
  })
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateVideoProgress()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  videos = [
    videoConexao.value,
    videoValvGlobo.value,
    videoValvSeguranca.value
  ].filter(Boolean)

  videos.forEach(video => {
    video.muted = true
    video.playsInline = true
    video.controls = false
    video.setAttribute('preload', 'auto')
    
    // Wire up event listeners to make sure seeking starts as soon as data loads
    video.addEventListener('loadedmetadata', updateVideoProgress)
    video.addEventListener('loadeddata', updateVideoProgress)
    video.addEventListener('canplay', updateVideoProgress)
    
    video.pause()
    video.load()
  })

  // Set initial seek
  updateVideoProgress()

  // Set entrance animation state
  setTimeout(() => {
    isLoaded.value = true
  }, 150)

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>
