<?php

/**
 * Plugin Name: JS-Advancers-Gutenberg-Boilerplate
 * Description:
 * Version: 1.0.0
 * Author: JS-Advancers
 * Text Domain: js_advancers_gb_boilerplate
 *
 */

add_action( 'init', 'register_block_assets' );

function register_block_assets() {

    // register the main JS file that houses all our blocks
    wp_register_script(
        'block-js',
        plugins_url( '/build/index.js' , __FILE__ ),
        ['wp-blocks']
    );

    // register our block styles
    wp_register_style(
        'block-style',
        plugins_url( '/style.css' , __FILE__ ),
        []
    );

    // register our editor styles
    wp_register_style(
        'block-editor-style',
        plugins_url( '/editor.css' , __FILE__ ),
        []
    );

    // register our block
    register_block_type( 'jsadvancers/basic-html', array(
        'editor_script' => 'block-js',
        'editor_style' => 'block-editor-style',
        'style' => 'block-style'
    ));


}
