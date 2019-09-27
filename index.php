<?php

/**
 * Plugin Name: Gutenberg Boilerplate
 * Description: A template for building Gutenberg blocks.
 * Author: js-advancers
 * Text Domain: gutenberg-boilerplate
 * Version: 1.0.0
 */


add_action('init', 'register_block_types');
function register_block_types() {
    
    $block_path = 'build/index.js';
    $script_deps = include __DIR__ . '/build/index.asset.php';
    wp_register_script(
        'example-block',
        plugins_url($block_path, __FILE__ ),
        $script_deps['dependencies'],
        $script_deps['version']
    );

    wp_register_style(
        "example-block-styles",
        plugins_url("/style.css", __FILE__ ),
        []
    );

    wp_register_style(
        "example-block-editor-styles",
        plugins_url("/editor.css", __FILE__ ),
        []
    );

    register_block_type('jsadvancers/example', [
        'editor_script' =>  'example-block',
        'style' =>  'example-block-styles',
        'editor_style' =>  'example-block-editor-styles',
    ]);
}