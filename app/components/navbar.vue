<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'
import { useNavigation } from '~/composables/useNavigation'

const { t } = useTemplate()
const { navItems } = useNavigation()
</script>

<template>
    <UHeader>
        <template #left>
            <NuxtLink to="#inicio" class="flex items-center gap-3">
                <img src="/images/logo.jpeg" alt="Mi Contable Plus+" class="h-10 w-auto object-contain" />
                <span class="font-bold text-2xl text-primary">
                    {{ t('navbar_brand_name') }}
                </span>
            </NuxtLink>
        </template>

        <UNavigationMenu :items="navItems" variant="link" color="primary" :ui="{
            link: 'text-black'
        }" />

        <template #body>
            <div class="p-4 space-y-6">
                <UNavigationMenu :items="navItems" orientation="vertical" color="primary" :ui="{
                    link: 'text-black'
                }" />
            </div>
        </template>
    </UHeader>
</template>