<?php // Creates the Theme General Settings page
if ( function_exists('acf_add_options_page') ) {
    // Add a top-level menu page
    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));

    // Add a subpage under the top-level menu page
    acf_add_options_sub_page(array(
        'page_title'    => 'Locations',
        'menu_title'    => 'Locations',
        'parent_slug'   => 'theme-general-settings',
        'capability'    => 'edit_posts'
    ));
}

function enqueue_block_styles() {
    if (is_singular()) {
        global $post;

        $css_directory_uri = get_template_directory_uri() . '/blocks_css';
        $css_directory_path = get_template_directory() . '/blocks_css';

        if (have_rows('blocks', $post->ID)) {
            foreach (get_field('blocks', $post->ID) as $row) {
                $layout = $row['acf_fc_layout'];
                $css_file = $css_directory_path . '/' . $layout . '.css';

                // Check if the CSS file exists before enqueuing
                if (file_exists($css_file)) {
                    wp_enqueue_style($layout . '-style', $css_directory_uri . '/' . $layout . '.css', array(), null);
                }
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'enqueue_block_styles');
