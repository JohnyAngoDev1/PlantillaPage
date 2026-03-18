import type { Testimonials } from '~/interfaces/testimonial.interface';
import data from '~/template/testimonials.json';

export const useTestimonials = () => {
    const testimonialsList: Testimonials[] = data.testimonials;

    return {
        testimonialsList
    }
}
