<?php $use_global_testimonial = get_sub_field('use_global_testimonial');?>
<?php $howManySlidesTestimonial = get_sub_field('slide_number'); ?>

<?php if ($use_global_testimonial && in_array('use_global', $use_global_testimonial)): ?>
    <?php if (have_rows('testimonial_slider', 'option')) :
        $slide_counter = 0;
    ?>
            <section class="testimonial_section container d-flex_newcss flex-column_mb blocks-padding">
                <div class="testimonial_card flex-1 col-6_newcss col-12_mb">
                    <div style="display: flex;justify-content: center;">
                        <svg width="136" height="24" viewBox="0 0 68 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.294 3.88818L22.0028 3.83968L20.6927 0.466875C20.4401 -0.155625 19.5586 -0.155625 19.3073 0.466875L17.9972 3.83968L14.706 3.88818C14.0248 3.92778 13.748 4.78368 14.2761 5.21358L16.9448 7.52768L16.0352 10.6875C15.8566 11.3368 16.5595 11.8726 17.1387 11.5281L20 9.96288L22.8613 11.5269C23.4405 11.8713 24.1433 11.3355 23.9648 10.6862L23.0552 7.52637L25.7239 5.21238C26.252 4.78248 25.9752 3.92648 25.294 3.88818Z" fill="#FBBC05"/><path d="M53.294 3.88818L50.003 3.83968L48.693 0.466875C48.44 -0.155625 47.559 -0.155625 47.307 0.466875L45.997 3.83968L42.706 3.88818C42.025 3.92778 41.748 4.78368 42.276 5.21358L44.945 7.52768L44.035 10.6875C43.857 11.3368 44.56 11.8726 45.139 11.5281L48 9.96288L50.861 11.5269C51.44 11.8713 52.143 11.3355 51.965 10.6862L51.055 7.52637L53.724 5.21238C54.252 4.78248 53.975 3.92648 53.294 3.88818Z" fill="#FBBC05"/><path d="M11.294 3.88818L8.00279 3.83968L6.69269 0.466875C6.44009 -0.155625 5.55859 -0.155625 5.30729 0.466875L3.99719 3.83968L0.70599 3.88818C0.0247896 3.92778 -0.252011 4.78368 0.276089 5.21358L2.94479 7.52768L2.03519 10.6875C1.85659 11.3368 2.55949 11.8726 3.13869 11.5281L5.99999 9.96288L8.86129 11.5269C9.44049 11.8713 10.1433 11.3355 9.96479 10.6862L9.05519 7.52637L11.7239 5.21238C12.252 4.78248 11.9752 3.92648 11.294 3.88818Z" fill="#FBBC05"/><path d="M39.294 3.88818L36.003 3.83968L34.693 0.466875C34.44 -0.155625 33.5586 -0.155625 33.3073 0.466875L31.9972 3.83968L28.706 3.88818C28.0248 3.92778 27.748 4.78368 28.2761 5.21358L30.9448 7.52768L30.0352 10.6875C29.8566 11.3368 30.5595 11.8726 31.1387 11.5281L34 9.96288L36.861 11.5269C37.44 11.8713 38.143 11.3355 37.965 10.6862L37.055 7.52637L39.724 5.21238C40.252 4.78248 39.975 3.92648 39.294 3.88818Z" fill="#FBBC05"/><path d="M67.294 3.88818L64.003 3.83968L62.693 0.466875C62.44 -0.155625 61.559 -0.155625 61.307 0.466875L59.997 3.83968L56.706 3.88818C56.025 3.92778 55.748 4.78368 56.276 5.21358L58.945 7.52768L58.035 10.6875C57.857 11.3368 58.56 11.8726 59.139 11.5281L62 9.96288L64.861 11.5269C65.44 11.8713 66.143 11.3355 65.965 10.6862L65.055 7.52637L67.724 5.21238C68.252 4.78248 67.975 3.92648 67.294 3.88818Z" fill="#FBBC05"/>
                        </svg>
                    </div>
                    <div class="testimonial_glide testimonial-carousel slider glide glide--ltr glide--carousel glide--swipeable">
                        <div class="slider__track glide__track" data-glide-el="track">
                            <ul class="slider__slides glide__slides">
                                <?php while (have_rows('testimonial_slider', 'option')) : the_row();
                                    $quote = get_sub_field('quote');
                                    $name = get_sub_field('name');
                                ?>
                                    <li class="testimonials_slider__frame glide__slide <?php echo $slide_counter; ?>">
                                        <div class="testimonials_slider-wrapper">
                                            <p><?php echo $quote  ?></p>
                                            <p class="quote_name">
                                                <?php echo $name  ?>
                                            </p>
                                        </div>
                                    </li>
                                <?php 
                                    $slide_counter++; // Increment slide number
                                    endwhile; 
                                ?>
                            </ul>
                        </div>
    
                        <div class="glide__bullets_testimonial" data-glide-el="controls[nav]">
                            <?php for ($i = 0; $i < $slide_counter; $i++) : ?>
                                <button class="glide__bullet" data-glide-dir="=<?php echo $i; ?>" aria-label="bullet"></button>
                            <?php endfor; ?>
                        </div>
                    </div>
                </div>
            </section>
    <?php endif; ?>
<?php else: ?>
    <?php if (have_rows('repeater_testimonial')):
        $slide_counter = 0;
    ?>
            <section class="testimonial_section container d-flex_newcss flex-column_mb blocks-padding">
                <div class="testimonial_card flex-1 col-6_newcss col-12_mb">
                    <div style="display: flex;justify-content: center;">
                        <svg width="136" height="24" viewBox="0 0 68 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.294 3.88818L22.0028 3.83968L20.6927 0.466875C20.4401 -0.155625 19.5586 -0.155625 19.3073 0.466875L17.9972 3.83968L14.706 3.88818C14.0248 3.92778 13.748 4.78368 14.2761 5.21358L16.9448 7.52768L16.0352 10.6875C15.8566 11.3368 16.5595 11.8726 17.1387 11.5281L20 9.96288L22.8613 11.5269C23.4405 11.8713 24.1433 11.3355 23.9648 10.6862L23.0552 7.52637L25.7239 5.21238C26.252 4.78248 25.9752 3.92648 25.294 3.88818Z" fill="#FBBC05"/><path d="M53.294 3.88818L50.003 3.83968L48.693 0.466875C48.44 -0.155625 47.559 -0.155625 47.307 0.466875L45.997 3.83968L42.706 3.88818C42.025 3.92778 41.748 4.78368 42.276 5.21358L44.945 7.52768L44.035 10.6875C43.857 11.3368 44.56 11.8726 45.139 11.5281L48 9.96288L50.861 11.5269C51.44 11.8713 52.143 11.3355 51.965 10.6862L51.055 7.52637L53.724 5.21238C54.252 4.78248 53.975 3.92648 53.294 3.88818Z" fill="#FBBC05"/><path d="M11.294 3.88818L8.00279 3.83968L6.69269 0.466875C6.44009 -0.155625 5.55859 -0.155625 5.30729 0.466875L3.99719 3.83968L0.70599 3.88818C0.0247896 3.92778 -0.252011 4.78368 0.276089 5.21358L2.94479 7.52768L2.03519 10.6875C1.85659 11.3368 2.55949 11.8726 3.13869 11.5281L5.99999 9.96288L8.86129 11.5269C9.44049 11.8713 10.1433 11.3355 9.96479 10.6862L9.05519 7.52637L11.7239 5.21238C12.252 4.78248 11.9752 3.92648 11.294 3.88818Z" fill="#FBBC05"/><path d="M39.294 3.88818L36.003 3.83968L34.693 0.466875C34.44 -0.155625 33.5586 -0.155625 33.3073 0.466875L31.9972 3.83968L28.706 3.88818C28.0248 3.92778 27.748 4.78368 28.2761 5.21358L30.9448 7.52768L30.0352 10.6875C29.8566 11.3368 30.5595 11.8726 31.1387 11.5281L34 9.96288L36.861 11.5269C37.44 11.8713 38.143 11.3355 37.965 10.6862L37.055 7.52637L39.724 5.21238C40.252 4.78248 39.975 3.92648 39.294 3.88818Z" fill="#FBBC05"/><path d="M67.294 3.88818L64.003 3.83968L62.693 0.466875C62.44 -0.155625 61.559 -0.155625 61.307 0.466875L59.997 3.83968L56.706 3.88818C56.025 3.92778 55.748 4.78368 56.276 5.21358L58.945 7.52768L58.035 10.6875C57.857 11.3368 58.56 11.8726 59.139 11.5281L62 9.96288L64.861 11.5269C65.44 11.8713 66.143 11.3355 65.965 10.6862L65.055 7.52637L67.724 5.21238C68.252 4.78248 67.975 3.92648 67.294 3.88818Z" fill="#FBBC05"/>
                        </svg>
                    </div>
                    <div class="testimonial_glide testimonial-carousel slider glide glide--ltr glide--carousel glide--swipeable">
                        <div class="slider__track glide__track" data-glide-el="track">
                            <ul class="slider__slides glide__slides">
                                <?php while (have_rows('repeater_testimonial')) : the_row();
                                    $quote = get_sub_field('quote');
                                    $name = get_sub_field('name');
                                ?>
                                    <li class="testimonials_slider__frame glide__slide <?php echo $slide_counter; ?>">
                                        <div class="testimonials_slider-wrapper">
                                            <p><?php echo $quote  ?></p>
                                            <p class="quote_name">
                                                <?php echo $name  ?>
                                            </p>
                                        </div>
                                    </li>
                                <?php 
                                    $slide_counter++; // Increment slide number
                                    endwhile; 
                                ?>
                            </ul>
                        </div>
    
                        <div class="glide__bullets_testimonial" data-glide-el="controls[nav]">
                            <?php for ($i = 0; $i < $slide_counter; $i++) : ?>
                                <button class="glide__bullet" data-glide-dir="=<?php echo $i; ?>" aria-label="bullet"></button>
                            <?php endfor; ?>
                        </div>
                    </div>
                </div>
            </section>
    <?php endif; ?>
<?php endif; ?>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		const slidersTestimonial = document.querySelectorAll('.testimonial_glide');
		slidersTestimonial.forEach(item => {
			const conf = {
				type: 'carousel',
				focusAt: 'center',
				perView: <?php echo $howManySlidesTestimonial ?>,
				animationDuration: 300,
				autoplay: false,
				hoverpause: true,
				breakpoints: {
					768: {
						perView: 1
					}
				}
			};

			new Glide(item, conf).mount();
		});
	});
</script>