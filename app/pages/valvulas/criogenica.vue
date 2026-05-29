<template>
  <div class="bg-surface-off-white text-text-primary font-body-md antialiased flex flex-col min-h-screen">
    <!-- Componentized Header -->
    <Header
      brand="ValveStream Industrial"
      icon="precision_manufacturing"
      :links="headerLinks"
      :show-search="true"
      cta-text="Solicitar Cotação"
      cta-to="#"
      @search="onSearch"
    />

    <!-- Main Grid Layout -->
    <div class="flex-grow max-w-container-max mx-auto w-full px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-16">
      
      <!-- Componentized Sidebar (only displayed on lg desktop screens) -->
      <SidebarSpec
        title="Especificações"
        subtitle="Série V-CRIO"
        :items="sidebarLinks"
        cta-text="Baixar Catálogo PDF"
        cta-icon="download"
        @cta-click="onDownloadCatalog"
      />

      <!-- Main Content Area -->
      <main class="flex flex-col gap-24">
        <!-- Componentized Breadcrumbs -->
        <Breadcrumb :items="breadcrumbItems" />

        <!-- Hero Section -->
        <section class="flex flex-col md:flex-row gap-16 items-center">
          <div class="flex-1 space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant text-text-primary text-[13px] font-semibold tracking-wide">
              <span class="material-symbols-outlined text-[16px]">ac_unit</span>
              Série V-CRIO
            </div>
            <h1 class="text-[48px] md:text-display-lg text-text-primary tracking-tight leading-tight">
              Válvula Globo Criogênica
            </h1>
            <p class="text-body-lg text-text-secondary max-w-2xl leading-relaxed">
              Projetada para confiabilidade absoluta em sistemas de gás liquefeito (GNL, LIN, LOX, LAR). Desenvolvida para manter a integridade estrutural e vedação positiva em ambientes de temperatura extrema até -270°C (-454°F).
            </p>
            <div class="flex gap-4 pt-6">
              <BaseButton variant="primary" size="lg" to="#">
                Configurar Subconjunto
              </BaseButton>
            </div>
          </div>
          <div class="flex-1 w-full relative h-[500px] bg-surface-container-lowest border border-outline-variant rounded-2xl flex items-center justify-center p-8 shadow-sm">
            <!-- Diagram / Technical Illustration -->
            <div class="w-full h-full bg-surface-off-white rounded-xl flex flex-col items-center justify-center text-text-secondary">
              <span class="material-symbols-outlined text-5xl mb-3 opacity-40">precision_manufacturing</span>
              <span class="text-[13px] font-medium uppercase tracking-widest opacity-40">Renderização de Diagrama Técnico</span>
            </div>
          </div>
        </section>

        <!-- Feature Section (Cards) -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md duration-300">
            <div class="w-12 h-12 bg-surface text-link-blue rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-[28px]">lock_clock</span>
            </div>
            <h3 class="text-[24px] font-semibold text-text-primary mb-3 tracking-tight">Vedação Estanque</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              Superfícies de assentamento retificadas com precisão garantem vazamento zero sob condições criogênicas, excedendo as classes de vazamento padrão da indústria.
            </p>
          </div>
          <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md duration-300">
            <div class="w-12 h-12 bg-surface text-link-blue rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-[28px]">thermostat</span>
            </div>
            <h3 class="text-[24px] font-semibold text-text-primary mb-3 tracking-tight">Baixa Massa Térmica</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              O design otimizado do corpo minimiza o tempo de resfriamento e reduz a evaporação do líquido durante as fases iniciais de partida do sistema.
            </p>
          </div>
          <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md duration-300">
            <div class="w-12 h-12 bg-surface text-link-blue rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-[28px]">height</span>
            </div>
            <h3 class="text-[24px] font-semibold text-text-primary mb-3 tracking-tight">Castelo Estendido</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              O castelo estendido no espaço de vapor protege a gaxeta do congelamento, garantindo operação suave e integridade da vedação da haste a longo prazo.
            </p>
          </div>
        </section>

        <!-- Detailed Technical Grid Table -->
        <section class="space-y-8">
          <div class="flex items-center justify-between">
            <h2 class="text-headline-xl text-text-primary tracking-tight">
              Dados Dimensionais &amp; Especificações
            </h2>
          </div>
          <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <!-- Grid Header -->
            <div class="grid grid-cols-4 bg-surface-off-white border-b border-outline-variant p-6 text-[13px] font-semibold text-text-secondary uppercase tracking-wider">
              <div>Tamanho (DN)</div>
              <div>Classe de Pressão (PN)</div>
              <div>Material do Corpo</div>
              <div>Conexão</div>
            </div>
            <!-- Grid Rows -->
            <div class="grid grid-cols-4 p-6 border-b border-outline-variant hover:bg-surface-off-white transition-colors text-[16px] text-text-primary">
              <div class="font-semibold">15 - 50 (1/2" - 2")</div>
              <div class="text-text-secondary">PN 16-40 / Class 150-300</div>
              <div class="text-text-secondary">A351 CF8M / CF3M</div>
              <div class="text-text-secondary">Flangeado / BW / SW</div>
            </div>
            <div class="grid grid-cols-4 p-6 border-b border-outline-variant hover:bg-surface-off-white transition-colors text-[16px] text-text-primary">
              <div class="font-semibold">65 - 100 (2.5" - 4")</div>
              <div class="text-text-secondary">PN 16-40 / Class 150-300</div>
              <div class="text-text-secondary">A351 CF8M / CF3M</div>
              <div class="text-text-secondary">Flangeado / BW</div>
            </div>
            <div class="grid grid-cols-4 p-6 border-b border-outline-variant hover:bg-surface-off-white transition-colors text-[16px] text-text-primary">
              <div class="font-semibold">150 - 300 (6" - 12")</div>
              <div class="text-text-secondary">PN 16-25 / Class 150</div>
              <div class="text-text-secondary">A351 CF8M</div>
              <div class="text-text-secondary">Flangeado / BW</div>
            </div>
            <div class="grid grid-cols-4 p-6 hover:bg-surface-off-white transition-colors text-[16px] text-text-primary">
              <div class="font-semibold">350+ (14"+)</div>
              <div class="text-text-secondary">Sob Consulta</div>
              <div class="text-text-secondary">LCC / LCB / Especial</div>
              <div class="text-text-secondary">Flangeado / BW</div>
            </div>
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Certifications Section -->
          <section class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm">
            <h2 class="text-[24px] font-semibold text-text-primary mb-8 tracking-tight flex items-center gap-3">
              <span class="material-symbols-outlined text-link-blue">verified</span>
              Conformidade &amp; Certificações
            </h2>
            <div class="flex flex-col gap-4">
              <div class="bg-surface border border-outline-variant rounded-xl p-5 flex items-center gap-5">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span class="material-symbols-outlined text-text-primary">gpp_good</span>
                </div>
                <div>
                  <div class="font-semibold text-text-primary">API 622</div>
                  <div class="text-[14px] text-text-secondary mt-0.5">Padrão de Baixa Emissão</div>
                </div>
              </div>
              <div class="bg-surface border border-outline-variant rounded-xl p-5 flex items-center gap-5">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span class="material-symbols-outlined text-text-primary">eco</span>
                </div>
                <div>
                  <div class="font-semibold text-text-primary">ISO 15848-1</div>
                  <div class="text-[14px] text-text-secondary mt-0.5">Emissões Fugitivas</div>
                </div>
              </div>
              <div class="bg-surface border border-outline-variant rounded-xl p-5 flex items-center gap-5">
                <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span class="material-symbols-outlined text-text-primary">policy</span>
                </div>
                <div>
                  <div class="font-semibold text-text-primary">PED 2014/68/EU</div>
                  <div class="text-[14px] text-text-secondary mt-0.5">Diretiva de Equipamentos de Pressão</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Documentation Section -->
          <section class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm">
            <h2 class="text-[24px] font-semibold text-text-primary mb-8 tracking-tight flex items-center gap-3">
              <span class="material-symbols-outlined text-link-blue">folder_open</span>
              Documentação Técnica
            </h2>
            <div class="space-y-4">
              <a class="group flex items-center justify-between p-5 rounded-xl border border-outline-variant hover:border-link-blue bg-surface hover:bg-surface-off-white transition-all duration-200" href="#">
                <div class="flex items-center gap-5">
                  <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-outline-variant">
                    <span class="material-symbols-outlined text-error">picture_as_pdf</span>
                  </div>
                  <div>
                    <div class="font-semibold text-text-primary">Manual de Operação (PDF)</div>
                    <div class="text-[14px] text-text-secondary mt-0.5">Instalação &amp; Manutenção (4.2 MB)</div>
                  </div>
                </div>
                <span class="material-symbols-outlined text-text-secondary group-hover:text-link-blue transition-colors duration-200">
                  download
                </span>
              </a>
              <a class="group flex items-center justify-between p-5 rounded-xl border border-outline-variant hover:border-link-blue bg-surface hover:bg-surface-off-white transition-all duration-200" href="#">
                <div class="flex items-center gap-5">
                  <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-outline-variant">
                    <span class="material-symbols-outlined text-text-primary">architecture</span>
                  </div>
                  <div>
                    <div class="font-semibold text-text-primary">Desenho Técnico (CAD)</div>
                    <div class="text-[14px] text-text-secondary mt-0.5">Modelos 2D/3D - STEP/DWG (12.8 MB)</div>
                  </div>
                </div>
                <span class="material-symbols-outlined text-text-secondary group-hover:text-link-blue transition-colors duration-200">
                  download
                </span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>

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
// Navigation datasets configured according to the approved components.
const headerLinks = [
  { text: 'Produtos', url: '#' },
  { text: 'Soluções', url: '#' },
  { text: 'Normas', url: '#' },
  { text: 'Suporte', url: '#' }
]

const sidebarLinks = [
  { text: 'Especificações Técnicas', icon: 'settings_input_component', active: true, to: '#' },
  { text: 'Materiais', icon: 'layers', active: false, to: '#' },
  { text: 'Certificações', icon: 'verified', active: false, to: '#' },
  { text: 'Documentação', icon: 'description', active: false, to: '#' },
  { text: 'Modelos CAD', icon: 'architecture', active: false, to: '#' }
]

const breadcrumbItems = [
  { text: 'Início', to: '/' },
  { text: 'Soluções', to: '#' },
  { text: 'Válvulas', to: '/valvulas' },
  { text: 'Válvulas Globo Criogênicas' }
]

const footerLinks = [
  { text: 'Política de Privacidade', url: '#' },
  { text: 'Conformidade', url: '#' },
  { text: 'Certificação ISO 9001', url: '#' },
  { text: 'Distribuição Global', url: '#' }
]

const onSearch = (query) => {
  console.log('Pesquisando por:', query)
}

const onDownloadCatalog = () => {
  alert('Iniciando o download do Catálogo PDF da Série V-CRIO...')
}
</script>
