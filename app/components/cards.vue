<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'
import { useServices } from '~/composables/useServices'

const { t } = useTemplate()
const { servicesList } = useServices()

const getServiceUrl = (titulo: string): string => {
  const phone = t('wspbutton_phone_number')
  const message = encodeURIComponent(`Hola, quiero saber más sobre el servicio: ${titulo}`)
  return `https://wa.me/${phone}?text=${message}`
}
</script>

<template>
  <UPageSection>
    <UContainer>
      <div class="flex flex-col items-center text-center mb-16">
        <span class="text-primary text-x font-black uppercase tracking-widest block mb-4">
          {{ t('cards_section_subtitle') }}
        </span>

        <h2 class="text-5xl font-black text-gray-900 tracking-tight mb-6">
          {{ t('cards_section_title') }}
        </h2>

        <p class="text-gray- text-2xs max-w-xl">
          {{ t('cards_section_description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <UPageCard v-for="item in servicesList" :key="item.id" class="rounded-4xl bg-secondary">
          <template #header>
            <div class="">
              <div class="aspect-[1.2/1] w-full overflow-hidden rounded-4xl">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
              </div>
            </div>
          </template>

          <div class="flex-1 space-y-3">
            <h3 class="text-xl font-bold text-black leading-tight">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-xs leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div class="flex items-center justify-between border-t border-primary/10 pt-3">
            <NuxtLink :to="getServiceUrl(item.title)" target="_blank" class="text-primary font-bold text-sm transition-transform hover:translate-x-1 flex items-center gap-1">
              {{ item.link_label }}
              <UIcon name="material-symbols:arrow-forward" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </UPageCard>
      </div>
    </UContainer>
  </UPageSection>
</template>