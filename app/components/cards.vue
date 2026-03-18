<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'

import { useServices } from '~/composables/useServices'

const { t } = useTemplate()
const { servicesList } = useServices()

const onclick = (nombre: string): void => {
  console.log('ha presionado en: ' + nombre)
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <UPageCard v-for="item in servicesList" :key="item.title" class="rounded-4xl bg-secondary">
          <template #header>
            <div class="">
              <div class="aspect-[1.2/1] w-full overflow-hidden rounded-4xl">
                <img :src="item.image" class="w-full h-full object-cover" />
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

          <div class=" flex items-center justify-between border-t border-primary/10 pt-3">
            <span class="text-primary font-black text-xl tracking-tight">
              {{ t('cards_item_price_prefix') }} {{ item.price }}
            </span>
            <NuxtLink class="transition-transform hover:translate-x-1" @click="onclick(item.title)">
              <UIcon name="material-symbols:arrow-forward" class="w-6 h-6 text-primary" />
            </NuxtLink>
          </div>
        </UPageCard>
      </div>
    </UContainer>
  </UPageSection>
</template>