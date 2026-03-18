<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate';
import { useNavigation } from '~/composables/useNavigation';

const { t } = useTemplate()
const { footerLinks } = useNavigation()
</script>

<template>
    <footer class="bg-secondary pt-16 pb-8 border-t border-gray-100">
        <UContainer class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div class="flex items-center gap-3">
                    <img src="/images/logo.jpeg" alt="Mi Contable Plus+" class="h-12 w-auto object-contain" />
                    <span class="font-bold text-xl text-primary">{{ t('navbar_brand_name') }}</span>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed">
                    {{ t('footer_company_description') }}
                </p>
            </section>

            <nav class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_nav_column_1_title') }}</h3>
                <div class="flex flex-col gap-4">
                    <ULink v-for="link in footerLinks.experience" :key="link.label" :to="link.to"
                        active-class="text-primary"
                        inactive-class="text-gray-500 hover:text-primary text-sm transition-colors">
                        {{ link.label }}
                    </ULink>
                </div>
            </nav>

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_contact_title') }}</h3>
                <div class="flex flex-col gap-3">
                    <a :href="`tel:${t('footer_contact_phone')}`"
                        class="text-gray-500 hover:text-primary text-sm transition-colors">
                        {{ t('footer_contact_phone') }}
                    </a>
                    <a :href="`mailto:${t('footer_contact_email')}`"
                        class="text-gray-500 hover:text-primary text-sm transition-colors break-all">
                        {{ t('footer_contact_email') }}
                    </a>
                </div>
            </section>

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-bold text-black uppercase text-xs tracking-widest">{{ t('footer_hours_title') }}</h3>
                <div class="flex flex-col gap-3">
                    <div>
                        <p class="text-gray-700 text-sm font-medium">{{ t('footer_hours_weekdays') }}</p>
                        <p class="text-gray-500 text-sm">{{ t('footer_hours_weekdays_time') }}</p>
                    </div>
                    <div>
                        <p class="text-gray-700 text-sm font-medium">{{ t('footer_hours_saturday') }}</p>
                        <p class="text-gray-500 text-sm">{{ t('footer_hours_saturday_time') }}</p>
                    </div>
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