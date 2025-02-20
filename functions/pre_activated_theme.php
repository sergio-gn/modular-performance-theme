<?php
/**
 * Main function that runs when the theme is activated.
 */
function my_theme_setup() {
    // Ensure required functions exist before calling them.
    if (function_exists('my_theme_create_pages')) {
        my_theme_create_pages();
    } else {
        error_log('Function my_theme_create_pages does not exist.');
    }

    if (function_exists('my_theme_set_homepage')) {
        my_theme_set_homepage();
    } else {
        error_log('Function my_theme_set_homepage does not exist.');
    }

    if (function_exists('my_theme_create_menu')) {
        my_theme_create_menu();
    } else {
        error_log('Function my_theme_create_menu does not exist.');
    }

    if (function_exists('my_theme_upload_default_logo')) {
        my_theme_upload_default_logo();
    } else {
        error_log('Function my_theme_upload_default_logo does not exist.');
    }

    // Install and activate the custom-field.zip plugin if not installed
    my_theme_install_custom_fields_plugin();

    // Create example pages if they don't exist
    my_theme_create_example_pages();
}
add_action('after_switch_theme', 'my_theme_setup');

/**
 * Creates pages only once by checking a flag in the database.
 */
function my_theme_create_pages() {
    // Check if pages have been created already
    if (get_option('my_theme_pages_created', false)) {
        return; // Skip creation if the flag is set
    }

    // Create the pages if they haven't been created
    wp_insert_post([
        'post_title'   => 'Page 1',
        'post_status'  => 'publish',
        'post_type'    => 'page',
    ]);
    wp_insert_post([
        'post_title'   => 'Page 2',
        'post_status'  => 'publish',
        'post_type'    => 'page',
    ]);

    // Set the option to true, indicating pages were created
    update_option('my_theme_pages_created', true);
}

function my_theme_set_homepage() {
    $homepage = get_page_by_title('Home');
    if (!$homepage) {
        $homepage_id = wp_insert_post([
            'post_title'  => 'Home',
            'post_status' => 'publish',
            'post_type'   => 'page',
        ]);
        update_option('page_on_front', $homepage_id);
        update_option('show_on_front', 'page');
    }
}

function my_theme_create_menu() {
    if (!wp_get_nav_menu_object('Main Menu')) {
        $menu_id = wp_create_nav_menu('Main Menu');
        wp_update_nav_menu_item($menu_id, 0, [
            'menu-item-title'   => __('Home'),
            'menu-item-url'     => home_url('/'),
            'menu-item-status'  => 'publish'
        ]);
        set_theme_mod('nav_menu_locations', ['primary' => $menu_id]);
    }
}

function my_theme_get_page_id_by_title($title) {
    $homepage_query = new WP_Query([
        'post_type'      => 'page',
        'title'         => $title,
        'posts_per_page' => 1
    ]);

    if ($homepage_query->have_posts()) {
        $homepage_query->the_post();
        $page_id = get_the_ID();
        wp_reset_postdata();
        return $page_id;
    }

    return null;
}

/**
 * Installs and activates the Custom Fields plugin (custom-field.zip) if not already installed.
 */
include_once ABSPATH . 'wp-admin/includes/plugin.php';
include_once ABSPATH . 'wp-admin/includes/file.php';
include_once ABSPATH . 'wp-admin/includes/misc.php';
include_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php';
include_once ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php';

function my_theme_install_custom_fields_plugin() {
    $plugin_slug = 'advanced-custom-fields-pro/acf.php'; // Ensure this is the correct path to the main plugin file
    $plugin_path = WP_PLUGIN_DIR . '/' . $plugin_slug;
    $zip_path = get_template_directory() . '/acf.zip';

    // Check if plugin is already active
    if (!is_plugin_active($plugin_slug)) {
        // Check if the zip file exists
        if (file_exists($zip_path)) {
            // Initialize the filesystem
            global $wp_filesystem;
            if (empty($wp_filesystem)) {
                require_once ABSPATH . 'wp-admin/includes/file.php';
                WP_Filesystem();
            }

            // Unzip the plugin file to the plugins directory
            $unzip_result = unzip_file($zip_path, WP_PLUGIN_DIR);

            // Check if unzip was successful
            if (!is_wp_error($unzip_result)) {
                error_log('✅ Plugin extracted successfully.');

                // Check if plugin directory exists after extraction
                if (file_exists($plugin_path)) {
                    // Try activating the plugin
                    $activation_result = activate_plugin($plugin_slug);

                    // Check if plugin was activated successfully
                    if (!is_wp_error($activation_result)) {
                        error_log('✅ Plugin activated successfully: ' . $plugin_slug);
                    } else {
                        error_log('❌ Plugin activation failed: ' . $activation_result->get_error_message());
                    }
                } else {
                    error_log('❌ Plugin file not found after extraction: ' . $plugin_path);
                }
            } else {
                error_log('❌ Failed to unzip plugin: ' . $unzip_result->get_error_message());
            }
        } else {
            error_log('❌ custom-field.zip plugin file not found in theme root.');
        }
    } else {
        error_log('✅ Plugin is already active: ' . $plugin_slug);
    }
}

/**
 * Creates two example pages: "Page 1" and "Page 2" if they don’t exist.
 */
function my_theme_create_example_pages() {
    $pages = ['Page 1', 'Page 2'];

    foreach ($pages as $page_title) {
        $existing_page = my_theme_get_page_id_by_title($page_title);

        if (!$existing_page) {
            $page_id = wp_insert_post([
                'post_title'   => $page_title,
                'post_content' => 'This is a sample page.',
                'post_status'  => 'publish',
                'post_type'    => 'page',
            ]);

            if ($page_id) {
                error_log("Created example page: $page_title (ID: $page_id)");
            } else {
                error_log("Failed to create example page: $page_title");
            }
        }
    }
}
?>
