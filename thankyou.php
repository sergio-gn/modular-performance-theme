<?php
/**
* Template Name: Thank you
*
* @package WordPress
*/
?>
<?php get_header() ?>

<body>
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGCKSN5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <?php echo get_template_part( 'parts/navigation-homepage' );?>
    
    <?php $banner = get_field('banner');
    
    if($banner):
    ?>
    
    <section class="banner">
        <div class="banner_inner">
            <div class="banner_innermost">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-5">
                            <div class="bg-secondary px-4 py-3 lh-1 d-inline">
                                <?php echo $banner['subtitle'] ?>
                            </div>
                            <div>
                                <?php echo $banner['content'] ?>
                            </div>
                            
                            <?php 
                            $slider = $banner['slider']; 
                            if($slider):
                            ?>
                                <div class="banner-slider mt-4">
                                    <?php foreach ($slider as $slide):
                                        $img = $slide['image'];
                                        $content1 = $slide['content'];
                                        $content2 = $slide['content_2'];
                                        $content3 = $slide['content_3'];
                                    ?>
                                    <div class="banner-slider-content px-4 px-lg-5">
                                        <div class="row align-items-center justify-content-around w-100 gy-4">
                                            <div class="col-auto fs-38 fw-700 lh-1 text-capitalize py-2 py-lg-0">
                                                <?php echo $content1 ?>
                                            </div>
                                            
                                            <?php if($content2): ?>
                                                <div class="col-auto fs-24 fw-600 lh-1">
                                                    <?php echo $content2; ?>
                                                </div>
                                            <?php endif;?>
                                            
                                            <div class="col-auto p-1">
                                                <?php if($img):?>
                                                    <img src="<?php echo $img['url'] ?>" alt="<?php echo $img['alt'] ?>" class="block drain">
                                                <?php 
                                                    elseif($content3):
                                                        echo $content3;
                                                    endif;
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php endforeach;?>
                                </div>
                            <?php endif;?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="<?php echo $banner['background_image']['url'] ?>" alt="<?php echo $banner['background_image']['alt'] ?>" class='w-100 d-xl-none'>
    </section>
    <?php endif; ?>
    
    <?php
    $form = get_field('form');
    if($form):
        $content = $form['content'];
        $content_square = $form['content_square'];
        $shortcode = $form['shortcode'];
        $image = $form['image'];
    ?>
    <section class="form" id="form">
        <div class="container-fluid">
            <div class="row gy-5 align-items-center">
                <div class="col-xl-6">
                    <div class="qualification">
                        <div class="row">
                            <div class="col-md-7 col-lg-8">
                                <?php echo $content ;?>
                            </div>
                            <div class="col-md-6">
                                <div class="bg-tertiary p-3">
                                    <?php echo $content_square; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>" class="w-100 d-md-none bg-primary">            
                </div>
                <div class="col-lg">
                    <?php echo $shortcode; ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif;?>
    
    
    <?php
    $about = get_field('about');
    if($about):
        $rotate_img = $about['image_circle_rotate'];
        $image1 = $about['image_1'];
        $image2 = $about['image_2'];
        $content = $about['content'];
        $button1 = $about['button_1'];
        $button2 = $about['button_2'];
    ?>
    <section class="about">
        <div class="container">
            <div class="row align-items-center gy-5">
                <div class="col-lg-6 position-relative d-flex justify-content-center">
                    <div class="about-gallery">
                        <img src="<?php echo $rotate_img['url'] ?>"  alt="<?php echo $rotate_img['alt'] ?>" class="about-circle">
                        <div class="about-gallery-slider">
                            <img src="<?php echo $image1['url'] ?>"  alt="<?php echo $image1['alt'] ?>" class="gal-1">
                            <img src="<?php echo $image2['url'] ?>"  alt="<?php echo $image2['alt'] ?>" class="gal-2">                 
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div>
                        <?php echo $content ?>
                    </div>
                    <div class="row gx-0 align-items-center">
                        <div class="col-12 col-md-auto">
                            <a href="<?php echo $button1['url'] ?>" class="btn btn-primary rounded-0 text-white py-3 px-md-4 px-lg-3 px-xl-4">
                                <?php echo $button1['title'] ?>        
                            </a>
                        </div>
                        <div class="col-12 col-md-auto">
                            <a href="<?php echo $button2['url'] ?>" class="btn bordered border-primary rounded-0 text-primary py-3 px-md-5 px-lg-3 px-xl-5">
                                <?php echo $button2['title'] ?> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php endif;?>
    
    <?php
    $services = get_field('services');
    if($services):
        $rotate_img = $services['image_circle_rotate'];
        $image = $services['image'];
        $content = $services['content'];
        $button1 = $services['button_1'];
        $button2 = $services['button_2'];
        $slider_icon = $services['slider'];
    ?>
    <section class="services">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-11">
                    <div class="first-choice">
                        <div class="row align-items-center gy-5">
                            <div class="col-lg-8">
                                <div class="row justify-content-center">
                                    <div class="col-11 col-xl-9">
                                        <div>
                                            <?php echo $content ?>
                                        </div>
                                        
                                        <div class="row gx-0 align-items-center">
                                            <div class="col-12 col-md-auto">
                                                <a href="<?php echo $button1['url'] ?>" class="btn btn-white rounded-0 text-primary py-3 px-md-4">
                                                    <?php echo $button1['title'] ?>                                            
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-auto">
                                                <a href="<?php echo $button2['url'] ?>" class="btn bordered border-white rounded-0 text-white py-3 px-md-5">
                                                    <?php echo $button2['title'] ?>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg text-center text-lg-start">
                                <img src="<?php echo $image['url'] ?>"  alt="<?php echo $image['alt'] ?>">                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="our-services py-5">
            <div class="container">
                <div class="text-center fs-30">Our <span class="fw-700">Services</span></div>
                <div class="service-slider-nav">
                    <?php foreach($slider_icon as $slide_icon): ?>
                        <div class="service-slider-nav-content">
                            <div>
                                <img src="<?php echo $slide_icon['image']['url']?>" alt="<?php echo $slide_icon['image']['alt']?>" />
                            </div>
                            <div class="pt-4 text-center"><?php echo $slide_icon['text']?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
    
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-xl-8">
                        <div class="service-slider">
                            <?php foreach($slider_icon as $slidecontent): ?>
                                <div class="service-slider-content">
                                    <?php echo $slidecontent['content'] ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="text-center mb-n3">
                <div class="limited-time">Limited Time</div>
            </div>
            <div class="row justify-content-center">
                <div class="col-11 col-md-6 col-xl-4 col-xxl-3 bg-secondary text-white pt-5 pb-4">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-auto text-end lh-1 fs-30">
                            <div>Senior</div>
                            <div class="fw-800">Discount</div>
                        </div>
                        <div class="col-auto">
                            <div class="row align-items-center g-2">
                                <div class="col-auto fs-79 lh-1 fw-800">10</div>
                                <div class="col-auto lh-1 fs-30">
                                    <div>%</div>
                                    <div>Off</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center pt-5 g-5 g-lg-4">
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/everhot.png alt=everhot class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/dux.png alt=dux class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/bosch.png alt=bosch class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/aquamax.png alt=aquamax class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/rheem.png alt=rheem class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/thermann.png alt=thermann class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/stiebel-eltron.png alt=stiebel-eltron class=''></div>
                <div class="col-auto"><img src=https://melbournefirstchoiceplumbing.com.au/assets/images/logo/vulcan.png alt=vulcan class=''></div>
            </div>
        </div>
    </section>
    <?php endif;?>
    <!-- Event snippet for Quote Form conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-10987189108/7dnRCKGqjN8DEPTmjPco'});
</script>
<?php get_footer() ?>