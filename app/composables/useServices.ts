import { computed } from 'vue'
import servicesData from '~/template/services.json'

export const useServices = () => {
    const servicesList = computed(() => servicesData.services)

    return {
        servicesList
    }
}
