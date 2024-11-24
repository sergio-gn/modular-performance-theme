<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
    <?php $gtag = get_field('google_tag','option'); if (isset($gtag) && !empty($gtag)){echo $gtag;}?>
</head>
