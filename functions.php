<?php

require_once(get_template_directory() . '/functions/acf-blocks.php');
require_once(get_template_directory() . '/functions/acf-options-page.php');

// Add support for custom logo
function theme_prefix_setup() {
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'theme_prefix_setup');

function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

// Block wp-block-library
function remove_block_library_style() {
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'remove_block_library_style' );

// Block wp-emoji-release script
function remove_emoji_script() {
    wp_dequeue_script('wp-emoji-release');
}
add_action('wp_enqueue_scripts', 'remove_emoji_script');

// Register navigation menus
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

function theme_support_admin_bar() {
    add_theme_support( 'admin-bar', array( 'callback' => '__return_true' ) );
}
add_action( 'after_setup_theme', 'theme_support_admin_bar' );

function custom_buttons_shortcode() {
    ob_start(); ?>
    <div class="vc_empty_space"></div>
    <div class="wpb_text_column wpb_content_element">
        <div class="wpb_wrapper">
            <div style="text-align: center; display: flex; gap: 10px;margin:1rem 0">
                <a style="background-color: #607466; color: #fff; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 10rem; display: inline-block;" href="tel:+74987123">456 654 65465</a>
                <a style="background-color: #607466; color: #fff; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 10rem; display: inline-block;" href="#">Enquire Online</a>
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