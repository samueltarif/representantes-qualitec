<template>
  <div class="font-body-md text-text-primary overflow-x-hidden min-h-screen flex flex-col bg-background">
    <!-- Componentized Header -->
    <Header
      brand="ValveStream Industrial"
      icon="precision_manufacturing"
      :links="headerLinks"
      :show-search="true"
      cta-text="Inquiry"
      cta-to="#"
      class="!fixed w-full top-0 z-50 shadow-sm"
      @search="onSearch"
    />

    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="pt-24 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-6 tracking-tight leading-tight">
          Válvulas. Engenharia de precisão para desafios extremos.
        </h1>
        <p class="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          A solução definitiva em controle de fluidos.
        </p>
        <div class="flex gap-4">
          <BaseButton variant="primary" size="lg" to="#">
            Solicitar Cotação
          </BaseButton>
          <BaseButton variant="secondary" size="lg" to="#solutions" class="!flex items-center gap-2">
            Dados Técnicos
            <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
          </BaseButton>
        </div>
      </section>

      <!-- Products Narrative Grid -->
      <section id="solutions" class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-gutter">
          
          <!-- Product Card 1: Cryogenic Globe Valves (Wide format) -->
          <ProductCard
            title="Válvulas Globo Criogênicas"
            description="Performance inabalável a -196°C. Engenharia térmica avançada garante isolamento perfeito e controle milimétrico do fluxo, mesmo nas condições mais severas de liquefação."
            to="/valvulas/criogenica"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaCTXPVtRRq2djPvbLtL0szI96x5fcXSOejHOsinnbOYADye-3EQOtXMmkoUUKw2BNrWi_YKsvJvOM85iLEMxg5IEqvZ__TtvMCIDSEKjkUTJN0x6kuUTdx4B4FcUkBaZGV_wAyoCoogB9P7rlxKCsemSgJFZ6ymAvqXPu_gLVfJXyjsKseLND0E4xLo5epk_4UbSddNQgGDQOb3KwfHD1Zi9poysi5B41uOUD6go2x861N9i0N3ToDsy6L-Uo_xN6QAgnJTk-HTI"
            image-alt="Válvula criogênica"
            tag="Extremo Frio"
            :wide="true"
            link-text="Ver especificações criogênicas"
          />

          <!-- Product Card 2: High Pressure Gate Valves (Compact format) -->
          <ProductCard
            title="Válvulas de Gaveta de Alta Pressão"
            description="Construção robusta e confiabilidade inquestionável. Desenvolvidas para suportar fluxos intensos com vedação hermética."
            to="#"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkuSQ1edlmW1hUQWsb469uNxytsWjeqDXQB3hf8i8y7GlqsHKuilTWOb_mBC3ewfy4opFN1OhV7ausWqO2yxC5kKLolDaIdqJRrpKeLoDwiBM1h76CxQCaTJ8UTXg6g_MkqVt9lPOTK_oxQA_Z02TWldCnBQChB9QjMkU6L9nPyESyvB7cyHYMutD1eFjP9Y0muGXmzs9oPMK-dumBVzHHtEYODZsBhg0DkIpA7qQfrEtagNgV3CRn3dhjg17RZV5wo2LsAoCY7zQ"
            image-alt="Válvula de gaveta"
          />

          <!-- Product Card 3: Check Valves (Compact format) -->
          <ProductCard
            title="Válvulas de Retenção"
            description="Fluxo contínuo e segurança estrutural. Prevenção absoluta de contra-fluxo em sistemas críticos."
            to="#"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuD8HrgRwXmWAmMBnzmvPkRpW5uhRUFfZukyKVjnONjO4reoV9_dby29VtLGDTn9Lslxok3RuvR-Dt722ctLK0AjBees92huw89xClMW1M-29JTCRkkkD57i3Fp9I4WqN_HLhTcZixN6I8V2y2bLV0xMJKzgJk8OAW5gGZ5uxDsr8aEuO8YtHw6uCVEmZADsn_jgZxMj59cKTYmMnLBxKRP7Zlu6iqEkqAweUHainIg8CAqt7XuhJ-8rjaIYFnQyW0rSUZzMs6xfzVA"
            image-alt="Válvula de retenção"
            :mix-blend="true"
          />
        </div>
      </section>

      <!-- Technical Features Highlights Section -->
      <section class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div class="text-center mb-16">
          <h2 class="font-headline-xl text-headline-xl mb-4 tracking-tight leading-tight">
            Componentes Industriais de Alta Precisão
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          
          <!-- Feature Highlight Card 1: Wide format ProductCard -->
          <ProductCard
            title="Acessórios Industriais"
            description="Complemente sua infraestrutura com manômetros, flanges e atuadores projetados para integração perfeita. Nossa linha de acessórios garante máxima eficiência e controle operacional."
            to="#"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaCTXPVtRRq2djPvbLtL0szI96x5fcXSOejHOsinnbOYADye-3EQOtXMmkoUUKw2BNrWi_YKsvJvOM85iLEMxg5IEqvZ__TtvMCIDSEKjkUTJN0x6kuUTdx4B4FcUkBaZGV_wAyoCoogB9P7rlxKCsemSgJFZ6ymAvqXPu_gLVfJXyjsKseLND0E4xLo5epk_4UbSddNQgGDQOb3KwfHD1Zi9poysi5B41uOUD6go2x861N9i0N3ToDsy6L-Uo_xN6QAgnJTk-HTI"
            image-alt="Acessórios industriais"
            :wide="true"
            link-text="Ver catálogo de componentes"
          />

          <!-- Feature Highlight Card 2: SpecCard (Plain text format) -->
          <SpecCard
            title="Materiais Nobres"
            icon="precision_manufacturing"
            description="Utilizamos apenas os metais mais puros. Do aço inoxidável 316L ao Duplex e Super Duplex, nossa seleção de materiais garante resistência incomparável à corrosão e longevidade excepcional."
          />

          <!-- Feature Highlight Card 3: SpecCard (Spec list format) -->
          <SpecCard
            title="Padrões de Teste"
            :specs="testSpecs"
          />
        </div>
      </section>
    </main>

    <!-- Componentized Footer -->
    <Footer
      brand="ValveStream Industrial"
      icon="precision_manufacturing"
      description="Soluções de engenharia de precisão para infraestrutura industrial crítica globalmente."
      :links="footerLinks"
    />
  </div>
</template>

<script setup>
// Navigation and content datasets
const headerLinks = [
  { text: 'Cryogenic', url: '/valvulas/criogenica' },
  { text: 'Gate', url: '#' },
  { text: 'Válvulas', url: '/valvulas' },
  { text: 'Check', url: '#' },
  { text: 'Applications', url: '#' },
  { text: 'Support', url: '#' }
]

const testSpecs = [
  { title: 'Teste Hidrostático API 598', description: 'Pressão superior em 1.5x ao rating.', icon: 'check_circle' },
  { title: 'Emissão Fugitiva (ISO 15848-1)', description: 'Certificação rigorosa para gases.', icon: 'check_circle' }
]

const footerLinks = [
  { text: 'Privacy Policy', url: '#' },
  { text: 'Terms of Service', url: '#' },
  { text: 'Technical Docs', url: '#' },
  { text: 'Contact Sales', url: '#' },
  { text: 'Global Locations', url: '#' }
]

const onSearch = (query) => {
  console.log('Pesquisando por:', query)
}
</script>
