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

function my_acf_prepopulate_blocks($post_id) {
    if (get_post_type($post_id) !== 'page' || is_admin() === false) {
        return;
    }
    $template = get_page_template_slug($post_id);
    $target_template = 'blocks-location.php';
    if ($template !== $target_template) {
        return;
    }
    $blocks = get_field('blocks', $post_id);
    if (empty($blocks)) {
        $option_blocks = get_field('blocks', 'option');
        if (!empty($option_blocks)) {
            $formatted_blocks = array_map('acf_prepare_for_import', $option_blocks);
            update_field('blocks', $formatted_blocks, $post_id);
        }
    }
}
add_action('acf/save_post', 'my_acf_prepopulate_blocks', 20);
