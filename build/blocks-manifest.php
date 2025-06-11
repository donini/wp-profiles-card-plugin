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
		'description' => 'Display a WordPress profile card with badges and user information.',
		'example' => array(
			
		),
		'attributes' => array(
			'userName' => array(
				'type' => 'string',
				'default' => 'psykro'
			),
			'profileData' => array(
				'type' => 'object',
				'default' => array(
					
				)
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
		'render' => 'file:./render.php'
	)
);
