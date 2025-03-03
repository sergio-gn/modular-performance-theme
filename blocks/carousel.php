<?php $useGlobalCarousel = get_sub_field('use_global_carousel');?>
<?php if ($useGlobalCarousel && in_array('use_global', $useGlobalCarousel)): ?>
    <section class="carousel">
        <?php 
        $content = get_sub_field('content');
        $howManySlidesCarousel = get_sub_field('slide_number');
        $bg_image = get_sub_field('bg_img');
        ?>
    
        <div class="carousel-container">
            <?php if(have_rows('carousel_images','option')):?>
                <div class="carousel_container_mb container d-flex gap-1">
                    <?php if($content): ?>
                        <div class="custom_slider_content heading_raw">
                                <div>
                                    <?php echo $content ?>
                                </div>
                        </div>
                    <?php endif; ?>
                    <div class="custom_slider_slide <?php if (!$content) { echo 'custom_slider_slide_alone'; } ?>">
                        <div class="carousel_glide main-carousel slider glide glide_carousel glide--ltr glide--carousel glide--swipeable">
                            
                            <div class="glide_controls" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1486" cy="15.9245" r="15.7993" fill="#636364"/><path d="M18.3707 20.3687L13.9266 15.9246L18.3707 11.4805" stroke="white" stroke-width="1.5"/></svg>
                                </button>
                            </div>
                            
                            <div class="slider__track glide__track" data-glide-el="track">
                                <ul class="slider__slides glide__slides">
                                    <?php while(have_rows('carousel_images','option')) : the_row(); ?>
                                        <li class="carousel_frame glide__slide">
                                            <?php
                                            if (get_sub_field('image') || get_sub_field('text') || get_sub_field('link')):
                                                $image = get_sub_field('image');
                                                $image_url = $image['url'];
                                                $image_alt = $image['alt'];
                                                $text = get_sub_field('text');
                                                $link = get_sub_field('link');
                                            ?>
                                                <?php if($link):?>
                                                    <a href="<?php echo esc_url($link['url']);?>">
                                                <?php endif;?>
                                                        <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
                                                        <?php if($text):?>
                                                            <div class="slide_glide_content">
                                                                <?php echo $text; ?>
                                                            </div>
                                                        <?php endif;?>
                                                <?php if($link):?>
                                                    </a>
                                                <?php endif;?>
                                            <?php endif; ?>
                                        </li>
                                    <?php endwhile; ?>
                                </ul>
                            </div>
                            
                            <div class="glide_controls" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--next" data-glide-dir="&gt;">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.2477" cy="15.9245" r="15.7993" fill="#636364"/><path d="M14.0257 20.3687L18.4698 15.9246L14.0257 11.4805" stroke="white" stroke-width="1.5"/></svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <?php if($bg_image):?>
            <img loading="lazy" class="img_background" src="<?php echo $bg_image['url']?>" alt="<?php echo $bg_image['alt']?>"/>
        <?php endif ?>
    </section>
<?php else: ?>
    <section class="carousel">
        <?php 
        $content = get_sub_field('content');
        $howManySlidesCarousel = get_sub_field('slide_number');
        $bg_image = get_sub_field('bg_img');
        ?>
    
        <div class="carousel-container">
            <?php if(have_rows('carousel_images')):?>
                <div class="carousel_container_mb container d-flex gap-1">
                    <?php if($content): ?>
                        <div class="custom_slider_content heading_raw">
                                <div>
                                    <?php echo $content ?>
                                </div>
                        </div>
                    <?php endif; ?>
                    <div class="custom_slider_slide <?php if (!$content) { echo 'custom_slider_slide_alone'; } ?>">
                        <div class="main-carousel carousel_glide slider glide glide_carousel glide--ltr glide--carousel glide--swipeable">
                            
                            <div class="glide_controls" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1486" cy="15.9245" r="15.7993" fill="#636364"/><path d="M18.3707 20.3687L13.9266 15.9246L18.3707 11.4805" stroke="white" stroke-width="1.5"/></svg>
                                </button>
                            </div>
                            
                            <div class="slider__track glide__track" data-glide-el="track">
                                <ul class="slider__slides glide__slides">
                                    <?php while(have_rows('carousel_images')) : the_row(); ?>
                                        <li class="carousel_frame glide__slide">
                                            <?php
                                            if (get_sub_field('image') || get_sub_field('text') || get_sub_field('link')):
                                                $image = get_sub_field('image');
                                                $image_url = $image['url'];
                                                $image_alt = $image['alt'];
                                                $text = get_sub_field('text');
                                                $link = get_sub_field('link');
                                            ?>
                                                <?php if($link):?>
                                                    <a href="<?php echo esc_url($link['url']);?>">
                                                <?php endif;?>
                                                        <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
                                                        <?php if($text):?>
                                                            <div class="slide_glide_content">
                                                                <?php echo $text; ?>
                                                            </div>
                                                        <?php endif;?>
                                                <?php if($link):?>
                                                    </a>
                                                <?php endif;?>
                                            <?php endif; ?>
                                        </li>
                                    <?php endwhile; ?>
                                </ul>
                            </div>
                            
                            <div class="glide_controls" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--next" data-glide-dir="&gt;">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.2477" cy="15.9245" r="15.7993" fill="#636364"/><path d="M14.0257 20.3687L18.4698 15.9246L14.0257 11.4805" stroke="white" stroke-width="1.5"/></svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <?php if($bg_image):?>
            <img loading="lazy" class="img_background" src="<?php echo $bg_image['url']?>" alt="<?php echo $bg_image['alt']?>"/>
        <?php endif ?>
    </section>
<?php endif; ?>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		const slidersCarousel = document.querySelectorAll('.carousel_glide'); // NodeList of elements
		slidersCarousel.forEach(item => {
			const conf = {
				type: 'carousel',
				focusAt: 'center',
				perView: <?php echo $howManySlidesCarousel ?>,
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