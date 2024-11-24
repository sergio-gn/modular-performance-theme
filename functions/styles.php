<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style(
        'main-styles',
        get_template_directory_uri() . '/assets/main.css',
        array(),
        filemtime(get_template_directory() . '/assets/main.css')
    );
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
?>