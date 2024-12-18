    <section class="site-footer z-1" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
        <div class="container">
            <div class="logo_footer_wrap py-1">
                <aside class="footer_logo">
                    <div class="custom-logo custom_logo_footer">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="custom-logo-link" rel="home" aria-current="page">
                            <?php
                                $custom_logo_id = get_theme_mod( 'custom_logo' );
                                $custom_logo_url = wp_get_attachment_image_url( $custom_logo_id, 'full' );
                                if ( $custom_logo_url ) {
                                    echo '<img src="' . esc_url( $custom_logo_url ) . '" alt="' . get_bloginfo( 'name' ) . '">';
                                } else {
                                    echo '<img src="' . esc_url( get_template_directory_uri() . '/path-to-default-logo.png' ) . '" alt="' . get_bloginfo( 'name' ) . '">';
                                }
                            ?>
                        </a>
                    </div>
                </aside>
                <div>
                    <?php echo do_shortcode('[custom_buttons]') ?>
                </div>
            </div>

            <div class="d-grid grid_footer gap-2">
                <div class="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner">
                        <section id="custom_html-12" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">	
                                <p class="widget-title-1">
                                    <?php
                                    $menu_locations = get_nav_menu_locations();

                                    if ( isset( $menu_locations['footer-1'] ) ) {
                                        $menu_id = $menu_locations['footer-1'];
                                        
                                        $menu_object = wp_get_nav_menu_object( $menu_id );
                                        
                                        if ( $menu_object ) {
                                            echo esc_html( $menu_object->name );
                                        }
                                    }
                                    ?>
                                </p>
                            </div>
                        </section>
                        <section id="nav_menu-4" class="widget widget_nav_menu">
                            <?php
                                wp_nav_menu( array(
                                    'theme_location' => 'footer-1',
                                    'container'      => false,
                                    'menu_class'     => 'footer-menu-list',
                                ) );
                            ?>
                        </section>		
                    </aside>
                </div>
                <div class="site-footer-primary-section-3 site-footer-section site-footer-section-3">
                    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner">
                        <section id="custom_html-17" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">	
                                <p class="widget-title-1">
                                    <?php
                                        $menu_locations = get_nav_menu_locations();

                                        if ( isset( $menu_locations['footer-2'] ) ) {
                                            $menu_id = $menu_locations['footer-2'];
                                            
                                            $menu_object = wp_get_nav_menu_object( $menu_id );
                                            
                                            if ( $menu_object ) {
                                                echo esc_html( $menu_object->name );
                                            }
                                        }
                                    ?>
                                </p>
                            </div>
                        </section>
                        <section id="nav_menu-8" class="widget widget_nav_menu">
                            <?php
                                wp_nav_menu( array(
                                    'theme_location' => 'footer-2',
                                    'container'      => false,
                                    'menu_class'     => 'footer-menu-list',
                                ) );
                            ?>
                        </section>
                    </aside>
                </div>
                <div class="site-footer-primary-section-4 site-footer-section site-footer-section-4">
                    <section id="custom_html-20" class="widget_text widget widget_custom_html">
                        <div class="textwidget custom-html-widget">	
                            <p class="widget-title-1">
                                <?php
                                    $menu_locations = get_nav_menu_locations();

                                    if ( isset( $menu_locations['footer-3'] ) ) {
                                        $menu_id = $menu_locations['footer-3'];
                                        
                                        $menu_object = wp_get_nav_menu_object( $menu_id );
                                        
                                        if ( $menu_object ) {
                                            echo esc_html( $menu_object->name );
                                        }
                                    }
                                ?>
                            </p>
                        </div>
                    </section>
                    <section id="nav_menu-9" class="widget widget_nav_menu">
                        <?php
                            wp_nav_menu( array(
                                'theme_location' => 'footer-3',
                                'container'      => false,
                                'menu_class'     => 'footer-menu-list',
                            ) );
                        ?>
                    </section>
                </div>
                <div class="site-footer-primary-section-5 site-footer-section site-footer-section-5">
                    <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner">
                        <section class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">
                                <div class="footer-contact">
                                    <p class="widget-title-1">
                                        Info
                                    </p>
                                    <div class="d-flex gap-1">

                                    </div>
                                    <div class="d-flex gap-1 py-1">
                                        <div class="align-center d-flex gap-1">
                                            <i class="footer-icon">
                                                <svg fill="#fff" width="20" height="20" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xml:space="preserve">
                                                    <path d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M42.844,42.844 c-1.566,1.566-4.168,1.488-5.734-0.078l-7.934-7.934c-0.371-0.367-0.664-0.812-0.867-1.305C28.105,33.039,28,32.523,28,32V16 c0-2.211,1.789-4,4-4s4,1.789,4,4v14.344l6.859,6.859C44.426,38.77,44.406,41.281,42.844,42.844z"/>
                                                </svg>
                                            </i>
                                            <div>
                                                <p class="footer_info">
                                                    Mon – Sun: 24h
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="gmap">
                                    <?php 
                                        $google_map = get_field('google_maps','option'); 
                                        if($google_map):
                                            echo $google_map;
                                        endif;
                                    ?>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    </section>
    <footer class="modular_theme_footer">
        <div class="container">
            <div class="footer_row">
                <div class="col-auto">
                    <div class="footer_info_">
                        <div class="col-auto text-center">Copyright <?php echo date("Y"); ?></div>
                        <div class="col-auto text-primary">|</div>
                        <div class="col-auto text-center"><?php echo get_bloginfo('name'); ?></div>
                        <div class="col-auto text-primary">|</div>
                        <div class="col-auto text-center">All Rights Reserved</div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="d-flex align-center gap-2">
                        <div class="col-12 col-lg-auto">
                            <div class="footer_info_">
                                <div class="col-auto text-center">Terms &amp; Conditions</div>
                                <div class="col-auto text-primary">|</div>
                                <div class="col-auto text-center">Privacy Policies</div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <a href="https://www.aiims.com.au/like-our-work/" target="_blank">
                                <img src="<?php echo get_template_directory_uri() . '/default_images/aiims.webp'; ?>" alt="aiims digital growth agency">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <a href="javascript:" id="return-to-top">
        <div class="return_to_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg>
        </div>
    </a>
    </body>
    <?php wp_footer();?>
</html>