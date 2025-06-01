<?php
// This file is generated. Do not modify it manually.
return array(
	'profile-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cardpress/profile-card',
		'version' => '0.1.0',
		'title' => 'Profile Card',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'userName' => array(
				'type' => 'string',
				'default' => 'psykro'
			),
			'svgData' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true
		),
		'textdomain' => 'profile-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
