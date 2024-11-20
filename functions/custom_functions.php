<?php
function custom_theme_register_menus() {
    register_nav_menus( array(
        'primary_menu' => esc_html__( 'Primary Menu', 'menu-config' ),
        'footer-1'     => esc_html__( 'Footer 1', 'menu-config' ),
        'footer-2'     => esc_html__( 'Footer 2', 'menu-config' ),
        'footer-3'     => esc_html__( 'Footer 3', 'menu-config' ),
        'footer-4'     => esc_html__( 'Footer 4', 'menu-config' ),
    ) );
}
add_action( 'after_setup_theme', 'custom_theme_register_menus' );

function title_tag(){
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'title_tag' );

function theme_prefix_setup() {
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'theme_prefix_setup');

function add_menu_toggle($item_output, $item, $depth, $args) {
    if (in_array('menu-item-has-children', $item->classes)) {
        $item_output = '<div class="menu_item_wrapper">' . $item_output;
        $item_output .= '<button class="sub-menu-toggle" aria-expanded="false">⌵</button>';
        $item_output .= '</div>';
    }
    return $item_output;
}
add_filter('walker_nav_menu_start_el', 'add_menu_toggle', 10, 4);

function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

function theme_support_admin_bar() {
    add_theme_support( 'admin-bar', array( 'callback' => '__return_true' ) );
}
add_action( 'after_setup_theme', 'theme_support_admin_bar' );

function custom_buttons_shortcode($atts) {
    // Define default attributes
    $atts = shortcode_atts(
        array(
            'align' => 'left', // Default alignment
            'colour' => 'primary' // Default button colour
        ), 
        $atts, 
        'custom_buttons'
    );
    // Determine flex alignment
    $alignment = '';
    switch ($atts['align']) {
        case 'left':
            $alignment = 'flex-start';
            break;
        case 'center':
            $alignment = 'center';
            break;
        case 'right':
            $alignment = 'flex-end';
            break;
        default:
            $alignment = 'left';
            break;
    }

    // Determine button class based on the colour attribute
    $button_class = ($atts['colour'] === 'secondary') ? 'cta_button_secondary' : 'cta_button_primary';

    ob_start(); ?>
    <div class="vc_empty_space"></div>
    <div class="wpb_text_column wpb_content_element">
        <div class="wpb_wrapper">
            <div style="display: flex; justify-content: <?php echo esc_attr($alignment); ?>; gap: 10px; margin: 1rem 0;">
                <a class="cta_button <?php echo esc_attr($button_class); ?>" href="tel:<?php
                    $phone_number = get_field('phone_number', 'option');
                    // Remove any non-digit characters
                    $phone_number_href = preg_replace('/\D/', '', $phone_number);
                    // Ensure there are no spaces or other formatting
                    echo $phone_number_href;
                ?>">
                    <svg class="cta_button_text" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" class="<?php echo esc_attr($button_class); ?>"/></g></svg>
                    <span class="cta_button_text"><?php echo $phone_number; ?></span>
                </a>
                <a class="cta_button <?php echo esc_attr($button_class); ?>" href="/contact-us/">
                    <svg class="cta_button_text" width="16px" height="16px" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>receipt</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-416.000000, -777.000000)"> <path d="M437,785 L423,785 C422.447,785 422,784.553 422,784 C422,783.448 422.447,783 423,783 L437,783 C437.553,783 438,783.448 438,784 C438,784.553 437.553,785 437,785 L437,785 Z M437,790.978 L423,790.978 C422.447,790.978 422,790.529 422,789.978 C422,789.425 422.447,788.978 423,788.978 L437,788.978 C437.553,788.978 438,789.425 438,789.978 C438,790.529 437.553,790.978 437,790.978 L437,790.978 Z M437,797 L423,797 C422.447,797 422,796.553 422,796 C422,795.447 422.447,795 423,795 L437,795 C437.553,795 438,795.447 438,796 C438,796.553 437.553,797 437,797 L437,797 Z M440,777 L420,777 C417.791,777 416,778.791 416,781 L416,809 L417.867,809 L422,806 L426,809 L430,806 L434,809 L438,806 L442.134,809 L444,809 L444,781 C444,778.791 442.209,777 440,777 L440,777 Z" id="receipt" sketch:type="MSShapeGroup" class="<?php echo esc_attr($button_class); ?>"> </path> </g> </g> </g></svg>
                    <span class="cta_button_text">Custom Button</span>
                </a>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('custom_buttons', 'custom_buttons_shortcode');

// add internal styling on wordpress backend
if ( ! function_exists('tdav_css') ) {
    function tdav_css($wp) {
        $wp .= ',' . get_bloginfo('stylesheet_directory') . '/internal.css';
        return $wp;
    }
}
add_filter( 'mce_css', 'tdav_css' );

add_theme_support('post-thumbnails');
