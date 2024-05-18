<style>
    .footer-background {
        background: #000;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .footer-background img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: repeat;
    }
    .footer-menu-list .menu-item a{
        color: #707070;
    }
    .site-footer {
        font-family: system-ui;
        background-color: var(--white-tone);
    }
    .z-1{
        position:relative;
        z-index:1;
    }
    .footer-bottom{
        background-color: var(--main-colour);
        font-family: system-ui;
    }
    .widget-title-1 {
        font-size: 24px !important;
        font-weight: 600 !important;
        color: var(--main-colour) !important;
        padding-left: 0px !important;
    }
    .site-primary-footer-wrap{
        padding: 3rem;
    }
    .site-primary-footer-wrap a {
        color: #5d5e5e;
        text-decoration: none;
    }
    .site-primary-footer-wrap a:hover {
        color: #D42127 !important;
    }
    .site-footer .menu-item{
        position: relative;
        padding: 0.5rem 0;
        list-style:none;
    }
    .site-footer .menu-item:before {
        content: '>';
        display: block;
        font-family: cursive;
        position: absolute;
        left: -1rem;
        font-weight: 900;
        color: var(--main-colour);
    }
    .footer-icon {
        background: var(--main-colour);
        box-shadow: 4px 4px 0 0 #000000;
        border-radius: 5px;
        height: 2rem;
        width: 2rem;
        padding: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer-ques {
        background: #3A3A3A;
        padding: 50px 35px;
        outline: 1px dashed #888;
        outline-offset: -15px;
        text-align: center;
        color: #fff;
        font-weight:bold;
    }
    .footer-ques:hover {
        background: #D42127;
        transition: 0.5s;
        outline-color: #fff !important;
    }
    .footer-ques a {
        color: #fff;
        font-weight: bold;
    }
    .footer-ques a:hover {
        color: #000!important;
    }
    .footer-rec{
        color: white;
        text-align: center;
        font-size: 2rem;
        margin: 0;
    }
    .footer-payment{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .footer-payment li{
        list-style:none;
    }
    .footer-payment li img {
        width: 70px;
        height:auto;
        padding-right: 3px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .footer_info{
        color:#000;
        margin:0;
    }
    .footer-copyright{
        color: #fff;
        font-family: monospace;
    }
</style>
<footer class="site-footer z-1" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
    <div class="container">
        <div class="d-flex justify-between py-1">
            <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
                <div class="custom-logo">
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
        <div class="d-grid grid-4 grid-1_mb gap-2">
            <div class="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-4" aria-label="Footer Widget 4">
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
                <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
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
                <aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3">
                    <section id="custom_html-4" class="widget_text widget widget_custom_html">
                        <div class="textwidget custom-html-widget">
                            <div class="footer-contact">
                                <p class="widget-title-1">
                                    Contact Us
                                </p>
                                <div class="d-flex gap-1">
                                    <i class="footer-icon">
                                        <svg fill="#fff" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"/></svg>
                                    </i>
                                    <div>
                                        <a class="footer_info" href="https://goo.gl/maps/NZLBbyXvNxxKSrZZ6" target="_blank" rel="noopener">
                                            4-6 Smithfield Rd, Smithfield NSW 2164, Austrália
                                        </a>
                                    </div>
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
                                                Mon – Fri: 08:00–15:30
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
    <div class="footer-bottom z-1">
        <div class="container p-1">
            <p class="footer-copyright">Copyright © <?php echo date("Y"); ?> | <?php bloginfo('name'); ?></p>
        </div>
    </div>
    <?php wp_footer();?>
</footer>