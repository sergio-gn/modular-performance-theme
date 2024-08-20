<?php

function remove_block_library_style() {
    wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'remove_block_library_style' );

function dequeue_global_styles_inline_css() {
    wp_dequeue_style('global-styles');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts', 'dequeue_global_styles_inline_css', 100);

function remove_emoji_script() {
    wp_dequeue_script('wp-emoji-release');
}
add_action('wp_enqueue_scripts', 'remove_emoji_script');