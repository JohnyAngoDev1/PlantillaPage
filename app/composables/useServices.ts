import { computed } from 'vue'
import { useTemplate } from '~/composables/useTemplate'

export const useServices = () => {
    const { t } = useTemplate()

    const servicesList = computed(() => [
        {
            title: 'Muebles a Medida',
            description: 'Diseño y fabricación de piezas exclusivas adaptadas a sus necesidades específicas y al estilo de su hogar.',
            price: '$2,500',
            image: '/images/services/service-1.jpg'
        },
        {
            title: 'Restauración de Antigüedades',
            description: 'Devolvemos la vida y el esplendor a sus muebles más queridos respetando su historia y técnicas originales.',
            price: '$4,800',
            image: '/images/services/service-2.jpg'
        },
        {
            title: 'Diseño de Interiores',
            description: 'Asesoramiento integral para crear ambientes cálidos y sofisticados donde la madera es la protagonista.',
            price: '$3,200',
            image: '/images/services/service-3.jpg'
        }
    ])

    return {
        servicesList
    }
}
