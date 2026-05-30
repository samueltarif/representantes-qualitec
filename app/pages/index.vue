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
      <section ref="scrollContainer" :class="isMobile ? 'relative w-full h-auto' : 'relative w-full h-[250vh]'">
        <!-- Sticky viewport container: Pins content while user scrolls -->
        <div :class="isMobile ? 'relative w-full flex flex-col pt-24 pb-12 px-margin-mobile gap-8' : 'sticky top-0 h-screen w-full flex flex-col justify-center items-center py-12 px-gutter overflow-hidden gap-8 max-w-[1400px] mx-auto'">
          
          <!-- Inner Content Grid: 3 Columns -->
          <div class="w-full grid grid-cols-1 md:grid-cols-[1.1fr_1.8fr_1.1fr] gap-8 xl:gap-12 items-center">
            
            <!-- Left Column: Headline & Features (Above products on mobile) -->
            <div 
              class="w-full flex flex-col text-left transition-all duration-1000 ease-out delay-200"
              :class="isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-0 md:-translate-x-8'"
            >
              <span class="font-semibold text-[11px] md:text-[12px] text-link-blue uppercase tracking-widest mb-3 block">
                Soluções Industriais
              </span>
              <h1 class="font-display-lg text-3xl md:text-[28px] lg:text-[34px] xl:text-[40px] text-text-primary leading-[1.15] tracking-tight font-bold mb-4">
                Representação técnica com confiança.
              </h1>
              <div class="w-12 h-1 bg-link-blue rounded mb-6"></div>
              
              <!-- Features List -->
              <div class="flex flex-col gap-5">
                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 26px; font-variation-settings: 'FILL' 0;">gpp_good</span>
                  <div>
                    <h3 class="font-bold text-text-primary text-[15px] leading-tight">Confiabilidade</h3>
                    <p class="text-text-secondary text-[13px] mt-1 leading-snug">Parcerias sólidas e produtos de alta qualidade para sua operação.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 26px; font-variation-settings: 'FILL' 0;">settings</span>
                  <div>
                    <h3 class="font-bold text-text-primary text-[15px] leading-tight">Soluções completas</h3>
                    <p class="text-text-secondary text-[13px] mt-1 leading-snug">Componentes industriais para diversas aplicações.</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 26px; font-variation-settings: 'FILL' 0;">person</span>
                  <div>
                    <h3 class="font-bold text-text-primary text-[15px] leading-tight">Atendimento consultivo</h3>
                    <p class="text-text-secondary text-[13px] mt-1 leading-snug">Equipe técnica pronta para entender e atender sua demanda.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Center Column: Auto-scaling videos gallery -->
            <div 
              class="w-full flex justify-center transition-all duration-1000 ease-out"
              :class="isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
            >
              <div class="flex flex-row justify-center items-center gap-3 xl:gap-4 max-w-full h-[30vh] md:h-[45vh] lg:h-[58vh] xl:h-[62vh]">
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

            <!-- Right Column: Subtitle / Description & CTA -->
            <div 
              class="w-full flex flex-col text-left transition-all duration-1000 ease-out delay-400"
              :class="isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-0 md:translate-x-8'"
            >
              <div class="flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-link-blue" style="font-size: 28px; font-variation-settings: 'FILL' 0;">factory</span>
              </div>
              <div class="w-full h-[1px] bg-outline-variant/60 mb-4"></div>
              
              <h2 class="font-bold text-text-primary text-[18px] md:text-[20px] lg:text-[22px] leading-snug mb-3">
                Conectando indústrias às melhores soluções.
              </h2>
              <p class="text-text-secondary text-[13px] md:text-[14px] leading-relaxed mb-6">
                Atuamos no fornecimento industrial com atendimento consultivo, agilidade e negociação estratégica para impulsionar resultados.
              </p>
              
              <BaseButton variant="primary" to="https://wa.me/5511932974403?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20atendimento%20sobre%20as%20solu%C3%A7%C3%B5es%20representadas." class="w-full md:w-auto !px-6 py-2.5">
                Solicitar atendimento
              </BaseButton>
            </div>

          </div>

          <!-- Bottom Highlights Card -->
          <div 
            class="w-full bg-surface-off-white/80 border border-outline-variant/30 rounded-[20px] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center transition-all duration-1000 ease-out delay-500"
            :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 32px; font-variation-settings: 'FILL' 0;">track_changes</span>
              <div>
                <h4 class="font-bold text-text-primary text-[12px] tracking-wider uppercase mb-1">Foco no resultado</h4>
                <p class="text-text-secondary text-[12px] leading-normal">Entregamos o que sua indústria precisa para manter a produção em movimento.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 32px; font-variation-settings: 'FILL' 0;">handshake</span>
              <div>
                <h4 class="font-bold text-text-primary text-[12px] tracking-wider uppercase mb-1">Parcerias estratégicas</h4>
                <p class="text-text-secondary text-[12px] leading-normal">Trabalhamos com marcas reconhecidas e padrões de excelência.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-link-blue flex-shrink-0" style="font-size: 32px; font-variation-settings: 'FILL' 0;">trending_up</span>
              <div>
                <h4 class="font-bold text-text-primary text-[12px] tracking-wider uppercase mb-1">Desempenho que gera valor</h4>
                <p class="text-text-secondary text-[12px] leading-normal">Soluções técnicas que aumentam a eficiência e reduzem custos operacionais.</p>
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
const scrollFraction = ref(0)
const isLoaded = ref(false)
const isMobile = ref(false)

// Smooth scroll variables
let targetFraction = 0
let currentFraction = 0
let isLoopRunning = false

const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768
  }
}

const getDuration = (video) => {
  if (video && video.duration && !isNaN(video.duration) && video.duration > 0) {
    return video.duration
  }
  return 5.92 // Exact fallback duration for all three keyframe videos
}

const updateTargetFraction = () => {
  if (!scrollContainer.value) return

  const rect = scrollContainer.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const totalHeight = rect.height
  const scrollRange = totalHeight - windowHeight

  if (scrollRange <= 0) return

  let fraction = -rect.top / scrollRange
  fraction = Math.max(0, Math.min(1, fraction))
  targetFraction = fraction
}

const renderLoop = () => {
  if (isMobile.value) {
    isLoopRunning = false
    return
  }

  const ease = 0.08 // Easing factor for buttery smooth progress (lower = smoother)
  const diff = targetFraction - currentFraction

  if (Math.abs(diff) > 0.0001) {
    currentFraction += diff * ease
    scrollFraction.value = currentFraction

    videos.forEach(video => {
      if (video) {
        // Prevent seeking overload: only seek if the browser is not already busy seeking
        if (!video.seeking) {
          const dur = getDuration(video)
          const targetTime = dur * currentFraction
          if (Math.abs(video.currentTime - targetTime) > 0.01) {
            video.currentTime = targetTime
          }
        }
      }
    })

    // Continue the smooth animation loop
    requestAnimationFrame(renderLoop)
  } else {
    // Snap exactly to final target once close enough
    currentFraction = targetFraction
    scrollFraction.value = currentFraction

    videos.forEach(video => {
      if (video) {
        const dur = getDuration(video)
        video.currentTime = dur * currentFraction
      }
    })

    // Halt the animation loop to conserve CPU resources
    isLoopRunning = false
  }
}

const handleScroll = () => {
  if (isMobile.value) return
  updateTargetFraction()
  if (!isLoopRunning) {
    isLoopRunning = true
    requestAnimationFrame(renderLoop)
  }
}

const handleResize = () => {
  const wasMobile = isMobile.value
  checkMobile()

  if (isMobile.value !== wasMobile) {
    // Mobile state changed, toggling autoplay looping vs static seeks
    videos.forEach(video => {
      if (video) {
        if (isMobile.value) {
          video.loop = true
          video.play().catch(err => console.log('Autoplay play failed:', err))
        } else {
          video.pause()
          video.loop = false
          const dur = getDuration(video)
          video.currentTime = dur * currentFraction
        }
      }
    })
  }

  if (!isMobile.value) {
    updateTargetFraction()
    if (!isLoopRunning) {
      isLoopRunning = true
      requestAnimationFrame(renderLoop)
    }
  }
}

onMounted(() => {
  videos = [
    videoConexao.value,
    videoValvGlobo.value,
    videoValvSeguranca.value
  ].filter(Boolean)

  checkMobile()

  videos.forEach(video => {
    video.muted = true
    video.playsInline = true
    video.controls = false
    video.setAttribute('preload', 'auto')
    
    if (isMobile.value) {
      video.loop = true
      video.play().catch(err => console.log('Autoplay play failed:', err))
    } else {
      video.pause()
    }
  })

  // Initialize target and start-up positions
  updateTargetFraction()
  currentFraction = targetFraction
  scrollFraction.value = currentFraction

  if (!isMobile.value) {
    // Snap videos to starting position immediately on desktop
    videos.forEach(video => {
      if (video) {
        const dur = getDuration(video)
        video.currentTime = dur * currentFraction
      }
    })
  }

  // Set entrance animation state
  setTimeout(() => {
    isLoaded.value = true
  }, 150)

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
