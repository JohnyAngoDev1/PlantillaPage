<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate';
import { useNavigation } from '~/composables/useNavigation';

const { t } = useTemplate()
const { footerLinks } = useNavigation()
</script>

<template>
    <footer class="bg-secondary pt-16 pb-8 border-t border-gray-100">
        <UContainer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div class="flex items-center gap-3">
                    <div class="bg-primary p-1 rounded-lg flex items-center justify-center">
                        <UIcon :name="t('navbar_brand_icon')" class="text-white text-xl" />
                    </div>
                    <span class="font-bold text-black text-xl">
                        {{ t('navbar_brand_name') }}
                    </span>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
                    {{ t('footer_company_description') }}
                </p>
            </section>

            <nav class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_nav_column_1_title') }}
                </h3>
                <div class="flex flex-col gap-4">
                    <ULink v-for="link in footerLinks.experience" :key="link.label" :to="link.to"
                        active-class="text-primary"
                        inactive-class="text-gray-500 hover:text-primary text-sm transition-colors">
                        {{ link.label }}
                    </ULink>
                </div>
            </nav>

            <nav class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_nav_column_2_title') }}
                </h3>
                <div class="flex flex-col gap-4">
                    <ULink v-for="link in footerLinks.company" :key="link.label" :to="link.to"
                        active-class="text-primary"
                        inactive-class="text-gray-500 hover:text-primary text-sm transition-colors">
                        {{ link.label }}
                    </ULink>
                </div>
            </nav>

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_newsletter_title') }}
                </h3>
                <p class="text-gray-500 text-sm max-w-xs">
                    {{ t('footer_newsletter_description') }}
                </p>

                <div class="flex gap-2">
                    <UInput :placeholder="t('footer_newsletter_input_placeholder')" variant="none"
                        class="bg-white border border-gray-100 rounded-xl flex-1 shadow-sm" />
                    <UButton icon="i-heroicons-chevron-right-20-solid" color="primary"
                        class="rounded-xl px-3 shadow-lg shadow-primary/20" />
                </div>

            </section>

        </UContainer>

        <UContainer class="pt-8 border-t border-gray-100 text-center">
            <p class="text-[10px] md:text-xs font-black text-gray-400 tracking-[0.2em] uppercase leading-loose">
                © {{ new Date().getFullYear() }} {{ t('footer_copyright_text') }}
            </p>
        </UContainer>
    </footer>
</template>