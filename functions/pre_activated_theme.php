<?php
function my_theme_setup() {
    ob_start(); // Start output buffering
    
    if (is_admin()) {
        my_theme_install_acf_plugin();
        add_action('acf/init', 'my_theme_import_acf_fields');
    }

    my_theme_create_pages();
    my_theme_set_homepage();
    my_theme_create_menu();
    my_theme_upload_logo();

    ob_end_flush(); // End output buffering
}
add_action('after_switch_theme', 'my_theme_setup');

function my_theme_install_acf_plugin() {
    include_once(ABSPATH . 'wp-admin/includes/file.php');
    include_once(ABSPATH . 'wp-admin/includes/misc.php');
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
    include_once(ABSPATH . 'wp-admin/includes/class-wp-upgrader.php');
    
    $plugin_path = get_template_directory() . '/acf.zip';

    if (file_exists($plugin_path)) {
        $upgrader = new Plugin_Upgrader();
        $installed_plugins = get_plugins();
        
        // Check if ACF is not already installed
        if (!isset($installed_plugins['advanced-custom-fields/acf.php'])) {
            // Install the plugin
            $upgrader->install($plugin_path);
        }

        // Delay activation to avoid header issues
        add_action('admin_init', function() {
            if (!is_plugin_active('advanced-custom-fields/acf.php')) {
                $result = activate_plugin('advanced-custom-fields/acf.php');
                
                if (is_wp_error($result)) {
                    error_log('Failed to activate ACF plugin: ' . $result->get_error_message());
                } else {
                    error_log('ACF plugin successfully activated.');
                }
            }
        });
    } else {
        error_log('ACF zip file not found at: ' . $plugin_path);
    }
}

// Function to import ACF fields from blocks.json after ACF is loaded
function my_theme_import_acf_fields() {
    // Ensure the ACF function exists
    if (function_exists('acf_add_local_field_group')) {
        $acf_json_file = get_template_directory() . '/blocks.json';
        
        if (file_exists($acf_json_file)) {
            $acf_data = json_decode(file_get_contents($acf_json_file), true);
            
            if (!empty($acf_data)) {
                foreach ($acf_data as $acf_group) {
                    acf_add_local_field_group($acf_group);
                }
            }
        }
    } else {
        error_log('ACF plugin is not loaded, cannot import fields.');
    }
}

function my_theme_create_pages() {
    // Check if the setup has already been done
    // if (get_option('my_theme_pages_created')) {
        // return; // Exit if pages have already been created
    // }

    // Create Home page
    if (!get_page_by_title('Home')) {
        wp_insert_post(array(
            'post_title'    => 'Home',
            'post_content'  => 'Welcome to Modular Theme!',
            'post_status'   => 'publish',
            'post_type'     => 'page',
            'page_template' => 'blocks.php'
        ));
    }

    // Create Inner Page
    if (!get_page_by_title('Inner Page')) {
        wp_insert_post(array(
            'post_title'    => 'Inner Page',
            'post_content'  => 'Welcome to Modular Theme!',
            'post_status'   => 'publish',
            'post_type'     => 'page'
        ));
    }

    // Set option to indicate that pages have been created
    update_option('my_theme_pages_created', true);
}


function my_theme_set_homepage() {
    $home = get_page_by_title('Home');
    if ($home) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home->ID);
    }
}

function my_theme_create_menu() {
    $menu_name = 'Primary Menu';
    $menu_exists = wp_get_nav_menu_object($menu_name);

    if (!$menu_exists) {
        $menu_id = wp_create_nav_menu($menu_name);

        // Add pages to the menu
        wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' => 'Home',
            'menu-item-obj' => 'page',
            'menu-item-object-id' => get_page_by_title('Home')->ID,
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish',
        ));

        // Assign the menu to a theme location
        $locations = get_theme_mod('nav_menu_locations');
        $locations['primary'] = $menu_id;
        set_theme_mod('nav_menu_locations', $locations);
    }
}

function my_theme_upload_logo() {
    $logo_url = get_template_directory() . '/default_images/logo.png';
    $upload_dir = wp_upload_dir();
    $image_data = file_get_contents($logo_url);
    $filename = basename($logo_url);

    if (wp_mkdir_p($upload_dir['path'])) {
        $file = $upload_dir['path'] . '/' . $filename;
    } else {
        $file = $upload_dir['basedir'] . '/' . $filename;
    }

    file_put_contents($file, $image_data);

    $wp_filetype = wp_check_filetype($filename, null);
    $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title' => sanitize_file_name($filename),
        'post_content' => '',
        'post_status' => 'inherit'
    );

    $attach_id = wp_insert_attachment($attachment, $file);
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    $attach_data = wp_generate_attachment_metadata($attach_id, $file);
    wp_update_attachment_metadata($attach_id, $attach_data);

    // Set as theme logo
    set_theme_mod('custom_logo', $attach_id);
}
?>
