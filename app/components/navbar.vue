<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'
import { useNavigation } from '~/composables/useNavigation'

const { t } = useTemplate()
const { navItems } = useNavigation()
</script>

<template>
    <UHeader>
        <template #left>
            <div class="flex items-center gap-3">
                <div class="bg-primary p-1 rounded-lg flex items-center justify-center">
                    <UIcon name="material-symbols:diamond-outline" class="text-2xl text-white" />
                </div>
                <span class="font-bold text-2xl text-black">
                    {{ t('navbar_brand_name') }}
                </span>
            </div>
        </template>

        <UNavigationMenu :items="navItems" variant="link" color="primary" :ui="{
            link: 'text-black'
        }" />

        <template #right>
            <div class="flex items-center gap-2">
                <UButton :label="t('navbar_cta_button_text')"
                    class="rounded-2xl px-8 py-3 text-x font-bold bg-primary text-white hidden md:inline-flex" />
            </div>

        </template>

        <template #body>
            <div class="p-4 space-y-6">
                <UNavigationMenu :items="navItems" orientation="vertical" color="primary" :ui="{
                    link: 'text-black'
                }" />
                <div class="flex items-center gap-2">
                    <UButton :label="t('navbar_cta_button_text')"
                        class="rounded-2xl px-8 py-3 text-x font-bold bg-primary text-white w-full justify-center" />
                </div>
            </div>
        </template>
    </UHeader>
</template>