import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Button from 'essence-button';
import {Block, Text, Divider, Utils} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

var colorList = {
	"e-background-red-100": {
		"background": "e-background-red-100",
		"text": "e-text-red-100",
		"title": "Color Red 100"
	},
	"e-background-red-200": {
		"background": "e-background-red-200",
		"text": "e-text-red-200",
		"title": "Color Red 200"
	},
	"e-background-red-300": {
		"background": "e-background-red-300",
		"text": "e-text-red-300",
		"title": "Color Red 300"
	},
	"e-background-red-400": {
		"background": "e-background-red-400",
		"text": "e-text-red-400",
		"title": "Color Red 400"
	},
	"e-background-red-500": {
		"background": "e-background-red-500",
		"text": "e-text-red-500",
		"title": "Color Red 500"
	},
	"e-background-red-600": {
		"background": "e-background-red-600",
		"text": "e-text-red-600",
		"title": "Color Red 600"
	},
	"e-background-red-700": {
		"background": "e-background-red-700",
		"text": "e-text-red-700",
		"title": "Color Red 700"
	},
	"e-background-red-800": {
		"background": "e-background-red-800",
		"text": "e-text-red-800",
		"title": "Color Red 800"
	},
	"e-background-red-900": {
		"background": "e-background-red-900",
		"text": "e-text-red-900",
		"title": "Color Red 900"
	},
	"e-background-red-A100": {
		"background": "e-background-red-A100",
		"text": "e-text-red-A100",
		"title": "Color Red A100"
	},
	"e-background-red-A200": {
		"background": "e-background-red-A200",
		"text": "e-text-red-A200",
		"title": "Color Red A200"
	},
	"e-background-red-A400": {
		"background": "e-background-red-A400",
		"text": "e-text-red-A400",
		"title": "Color Red A400"
	},
	"e-background-red-A700": {
		"background": "e-background-red-A700",
		"text": "e-text-red-A700",
		"title": "Color Red A700"
	},
	"e-background-pink-100": {
		"background": "e-background-pink-100",
		"text": "e-text-pink-100",
		"title": "Color Pink 100"
	},
	"e-background-pink-200": {
		"background": "e-background-pink-200",
		"text": "e-text-pink-200",
		"title": "Color Pink 200"
	},
	"e-background-pink-300": {
		"background": "e-background-pink-300",
		"text": "e-text-pink-300",
		"title": "Color Pink 300"
	},
	"e-background-pink-400": {
		"background": "e-background-pink-400",
		"text": "e-text-pink-400",
		"title": "Color Pink 400"
	},
	"e-background-pink-500": {
		"background": "e-background-pink-500",
		"text": "e-text-pink-500",
		"title": "Color Pink 500"
	},
	"e-background-pink-600": {
		"background": "e-background-pink-600",
		"text": "e-text-pink-600",
		"title": "Color Pink 600"
	},
	"e-background-pink-700": {
		"background": "e-background-pink-700",
		"text": "e-text-pink-700",
		"title": "Color Pink 700"
	},
	"e-background-pink-800": {
		"background": "e-background-pink-800",
		"text": "e-text-pink-800",
		"title": "Color Pink 800"
	},
	"e-background-pink-900": {
		"background": "e-background-pink-900",
		"text": "e-text-pink-900",
		"title": "Color Pink 900"
	},
	"e-background-pink-A100": {
		"background": "e-background-pink-A100",
		"text": "e-text-pink-A100",
		"title": "Color Pink A100"
	},
	"e-background-pink-A200": {
		"background": "e-background-pink-A200",
		"text": "e-text-pink-A200",
		"title": "Color Pink A200"
	},
	"e-background-pink-A400": {
		"background": "e-background-pink-A400",
		"text": "e-text-pink-A400",
		"title": "Color Pink A400"
	},
	"e-background-pink-A700": {
		"background": "e-background-pink-A700",
		"text": "e-text-pink-A700",
		"title": "Color Pink A700"
	},
	"e-background-purple-100": {
		"background": "e-background-purple-100",
		"text": "e-text-purple-100",
		"title": "Color Purple 100"
	},
	"e-background-purple-200": {
		"background": "e-background-purple-200",
		"text": "e-text-purple-200",
		"title": "Color Purple 200"
	},
	"e-background-purple-300": {
		"background": "e-background-purple-300",
		"text": "e-text-purple-300",
		"title": "Color Purple 300"
	},
	"e-background-purple-400": {
		"background": "e-background-purple-400",
		"text": "e-text-purple-400",
		"title": "Color Purple 400"
	},
	"e-background-purple-500": {
		"background": "e-background-purple-500",
		"text": "e-text-purple-500",
		"title": "Color Purple 500"
	},
	"e-background-purple-600": {
		"background": "e-background-purple-600",
		"text": "e-text-purple-600",
		"title": "Color Purple 600"
	},
	"e-background-purple-700": {
		"background": "e-background-purple-700",
		"text": "e-text-purple-700",
		"title": "Color Purple 700"
	},
	"e-background-purple-800": {
		"background": "e-background-purple-800",
		"text": "e-text-purple-800",
		"title": "Color Purple 800"
	},
	"e-background-purple-900": {
		"background": "e-background-purple-900",
		"text": "e-text-purple-900",
		"title": "Color Purple 900"
	},
	"e-background-purple-A100": {
		"background": "e-background-purple-A100",
		"text": "e-text-purple-A100",
		"title": "Color Purple A100"
	},
	"e-background-purple-A200": {
		"background": "e-background-purple-A200",
		"text": "e-text-purple-A200",
		"title": "Color Purple A200"
	},
	"e-background-purple-A400": {
		"background": "e-background-purple-A400",
		"text": "e-text-purple-A400",
		"title": "Color Purple A400"
	},
	"e-background-purple-A700": {
		"background": "e-background-purple-A700",
		"text": "e-text-purple-A700",
		"title": "Color Purple A700"
	},
	"e-background-deep-purple-100": {
		"background": "e-background-deep-purple-100",
		"text": "e-text-deep-purple-100",
		"title": "Color Deep Purple 100"
	},
	"e-background-deep-purple-200": {
		"background": "e-background-deep-purple-200",
		"text": "e-text-deep-purple-200",
		"title": "Color Deep Purple 200"
	},
	"e-background-deep-purple-300": {
		"background": "e-background-deep-purple-300",
		"text": "e-text-deep-purple-300",
		"title": "Color Deep Purple 300"
	},
	"e-background-deep-purple-400": {
		"background": "e-background-deep-purple-400",
		"text": "e-text-deep-purple-400",
		"title": "Color Deep Purple 400"
	},
	"e-background-deep-purple-500": {
		"background": "e-background-deep-purple-500",
		"text": "e-text-deep-purple-500",
		"title": "Color Deep Purple 500"
	},
	"e-background-deep-purple-600": {
		"background": "e-background-deep-purple-600",
		"text": "e-text-deep-purple-600",
		"title": "Color Deep Purple 600"
	},
	"e-background-deep-purple-700": {
		"background": "e-background-deep-purple-700",
		"text": "e-text-deep-purple-700",
		"title": "Color Deep Purple 700"
	},
	"e-background-deep-purple-800": {
		"background": "e-background-deep-purple-800",
		"text": "e-text-deep-purple-800",
		"title": "Color Deep Purple 800"
	},
	"e-background-deep-purple-900": {
		"background": "e-background-deep-purple-900",
		"text": "e-text-deep-purple-900",
		"title": "Color Deep Purple 900"
	},
	"e-background-deep-purple-A100": {
		"background": "e-background-deep-purple-A100",
		"text": "e-text-deep-purple-A100",
		"title": "Color Deep Purple A100"
	},
	"e-background-deep-purple-A200": {
		"background": "e-background-deep-purple-A200",
		"text": "e-text-deep-purple-A200",
		"title": "Color Deep Purple A200"
	},
	"e-background-deep-purple-A400": {
		"background": "e-background-deep-purple-A400",
		"text": "e-text-deep-purple-A400",
		"title": "Color Deep Purple A400"
	},
	"e-background-deep-purple-A700": {
		"background": "e-background-deep-purple-A700",
		"text": "e-text-deep-purple-A700",
		"title": "Color Deep Purple A700"
	},
	"e-background-indigo-100": {
		"background": "e-background-indigo-100",
		"text": "e-text-indigo-100",
		"title": "Color Indigo 100"
	},
	"e-background-indigo-200": {
		"background": "e-background-indigo-200",
		"text": "e-text-indigo-200",
		"title": "Color Indigo 200"
	},
	"e-background-indigo-300": {
		"background": "e-background-indigo-300",
		"text": "e-text-indigo-300",
		"title": "Color Indigo 300"
	},
	"e-background-indigo-400": {
		"background": "e-background-indigo-400",
		"text": "e-text-indigo-400",
		"title": "Color Indigo 400"
	},
	"e-background-indigo-500": {
		"background": "e-background-indigo-500",
		"text": "e-text-indigo-500",
		"title": "Color Indigo 500"
	},
	"e-background-indigo-600": {
		"background": "e-background-indigo-600",
		"text": "e-text-indigo-600",
		"title": "Color Indigo 600"
	},
	"e-background-indigo-700": {
		"background": "e-background-indigo-700",
		"text": "e-text-indigo-700",
		"title": "Color Indigo 700"
	},
	"e-background-indigo-800": {
		"background": "e-background-indigo-800",
		"text": "e-text-indigo-800",
		"title": "Color Indigo 800"
	},
	"e-background-indigo-900": {
		"background": "e-background-indigo-900",
		"text": "e-text-indigo-900",
		"title": "Color Indigo 900"
	},
	"e-background-indigo-A100": {
		"background": "e-background-indigo-A100",
		"text": "e-text-indigo-A100",
		"title": "Color Indigo A100"
	},
	"e-background-indigo-A200": {
		"background": "e-background-indigo-A200",
		"text": "e-text-indigo-A200",
		"title": "Color Indigo A200"
	},
	"e-background-indigo-A400": {
		"background": "e-background-indigo-A400",
		"text": "e-text-indigo-A400",
		"title": "Color Indigo A400"
	},
	"e-background-indigo-A700": {
		"background": "e-background-indigo-A700",
		"text": "e-text-indigo-A700",
		"title": "Color Indigo A700"
	},
	"e-background-blue-100": {
		"background": "e-background-blue-100",
		"text": "e-text-blue-100",
		"title": "Color Blue 100"
	},
	"e-background-blue-200": {
		"background": "e-background-blue-200",
		"text": "e-text-blue-200",
		"title": "Color Blue 200"
	},
	"e-background-blue-300": {
		"background": "e-background-blue-300",
		"text": "e-text-blue-300",
		"title": "Color Blue 300"
	},
	"e-background-blue-400": {
		"background": "e-background-blue-400",
		"text": "e-text-blue-400",
		"title": "Color Blue 400"
	},
	"e-background-blue-500": {
		"background": "e-background-blue-500",
		"text": "e-text-blue-500",
		"title": "Color Blue 500"
	},
	"e-background-blue-600": {
		"background": "e-background-blue-600",
		"text": "e-text-blue-600",
		"title": "Color Blue 600"
	},
	"e-background-blue-700": {
		"background": "e-background-blue-700",
		"text": "e-text-blue-700",
		"title": "Color Blue 700"
	},
	"e-background-blue-800": {
		"background": "e-background-blue-800",
		"text": "e-text-blue-800",
		"title": "Color Blue 800"
	},
	"e-background-blue-900": {
		"background": "e-background-blue-900",
		"text": "e-text-blue-900",
		"title": "Color Blue 900"
	},
	"e-background-blue-A100": {
		"background": "e-background-blue-A100",
		"text": "e-text-blue-A100",
		"title": "Color Blue A100"
	},
	"e-background-blue-A200": {
		"background": "e-background-blue-A200",
		"text": "e-text-blue-A200",
		"title": "Color Blue A200"
	},
	"e-background-blue-A400": {
		"background": "e-background-blue-A400",
		"text": "e-text-blue-A400",
		"title": "Color Blue A400"
	},
	"e-background-blue-A700": {
		"background": "e-background-blue-A700",
		"text": "e-text-blue-A700",
		"title": "Color Blue A700"
	},
	"e-background-light-blue-100": {
		"background": "e-background-light-blue-100",
		"text": "e-text-light-blue-100",
		"title": "Color Light Blue 100"
	},
	"e-background-light-blue-200": {
		"background": "e-background-light-blue-200",
		"text": "e-text-light-blue-200",
		"title": "Color Light Blue 200"
	},
	"e-background-light-blue-300": {
		"background": "e-background-light-blue-300",
		"text": "e-text-light-blue-300",
		"title": "Color Light Blue 300"
	},
	"e-background-light-blue-400": {
		"background": "e-background-light-blue-400",
		"text": "e-text-light-blue-400",
		"title": "Color Light Blue 400"
	},
	"e-background-light-blue-500": {
		"background": "e-background-light-blue-500",
		"text": "e-text-light-blue-500",
		"title": "Color Light Blue 500"
	},
	"e-background-light-blue-600": {
		"background": "e-background-light-blue-600",
		"text": "e-text-light-blue-600",
		"title": "Color Light Blue 600"
	},
	"e-background-light-blue-700": {
		"background": "e-background-light-blue-700",
		"text": "e-text-light-blue-700",
		"title": "Color Light Blue 700"
	},
	"e-background-light-blue-800": {
		"background": "e-background-light-blue-800",
		"text": "e-text-light-blue-800",
		"title": "Color Light Blue 800"
	},
	"e-background-light-blue-900": {
		"background": "e-background-light-blue-900",
		"text": "e-text-light-blue-900",
		"title": "Color Light Blue 900"
	},
	"e-background-light-blue-A100": {
		"background": "e-background-light-blue-A100",
		"text": "e-text-light-blue-A100",
		"title": "Color Light Blue A100"
	},
	"e-background-light-blue-A200": {
		"background": "e-background-light-blue-A200",
		"text": "e-text-light-blue-A200",
		"title": "Color Light Blue A200"
	},
	"e-background-light-blue-A400": {
		"background": "e-background-light-blue-A400",
		"text": "e-text-light-blue-A400",
		"title": "Color Light Blue A400"
	},
	"e-background-light-blue-A700": {
		"background": "e-background-light-blue-A700",
		"text": "e-text-light-blue-A700",
		"title": "Color Light Blue A700"
	},
	"e-background-cyan-100": {
		"background": "e-background-cyan-100",
		"text": "e-text-cyan-100",
		"title": "Color Cyan 100"
	},
	"e-background-cyan-200": {
		"background": "e-background-cyan-200",
		"text": "e-text-cyan-200",
		"title": "Color Cyan 200"
	},
	"e-background-cyan-300": {
		"background": "e-background-cyan-300",
		"text": "e-text-cyan-300",
		"title": "Color Cyan 300"
	},
	"e-background-cyan-400": {
		"background": "e-background-cyan-400",
		"text": "e-text-cyan-400",
		"title": "Color Cyan 400"
	},
	"e-background-cyan-500": {
		"background": "e-background-cyan-500",
		"text": "e-text-cyan-500",
		"title": "Color Cyan 500"
	},
	"e-background-cyan-600": {
		"background": "e-background-cyan-600",
		"text": "e-text-cyan-600",
		"title": "Color Cyan 600"
	},
	"e-background-cyan-700": {
		"background": "e-background-cyan-700",
		"text": "e-text-cyan-700",
		"title": "Color Cyan 700"
	},
	"e-background-cyan-800": {
		"background": "e-background-cyan-800",
		"text": "e-text-cyan-800",
		"title": "Color Cyan 800"
	},
	"e-background-cyan-900": {
		"background": "e-background-cyan-900",
		"text": "e-text-cyan-900",
		"title": "Color Cyan 900"
	},
	"e-background-cyan-A100": {
		"background": "e-background-cyan-A100",
		"text": "e-text-cyan-A100",
		"title": "Color Cyan A100"
	},
	"e-background-cyan-A200": {
		"background": "e-background-cyan-A200",
		"text": "e-text-cyan-A200",
		"title": "Color Cyan A200"
	},
	"e-background-cyan-A400": {
		"background": "e-background-cyan-A400",
		"text": "e-text-cyan-A400",
		"title": "Color Cyan A400"
	},
	"e-background-cyan-A700": {
		"background": "e-background-cyan-A700",
		"text": "e-text-cyan-A700",
		"title": "Color Cyan A700"
	},
	"e-background-teal-100": {
		"background": "e-background-teal-100",
		"text": "e-text-teal-100",
		"title": "Color Teal 100"
	},
	"e-background-teal-200": {
		"background": "e-background-teal-200",
		"text": "e-text-teal-200",
		"title": "Color Teal 200"
	},
	"e-background-teal-300": {
		"background": "e-background-teal-300",
		"text": "e-text-teal-300",
		"title": "Color Teal 300"
	},
	"e-background-teal-400": {
		"background": "e-background-teal-400",
		"text": "e-text-teal-400",
		"title": "Color Teal 400"
	},
	"e-background-teal-500": {
		"background": "e-background-teal-500",
		"text": "e-text-teal-500",
		"title": "Color Teal 500"
	},
	"e-background-teal-600": {
		"background": "e-background-teal-600",
		"text": "e-text-teal-600",
		"title": "Color Teal 600"
	},
	"e-background-teal-700": {
		"background": "e-background-teal-700",
		"text": "e-text-teal-700",
		"title": "Color Teal 700"
	},
	"e-background-teal-800": {
		"background": "e-background-teal-800",
		"text": "e-text-teal-800",
		"title": "Color Teal 800"
	},
	"e-background-teal-900": {
		"background": "e-background-teal-900",
		"text": "e-text-teal-900",
		"title": "Color Teal 900"
	},
	"e-background-teal-A100": {
		"background": "e-background-teal-A100",
		"text": "e-text-teal-A100",
		"title": "Color Teal A100"
	},
	"e-background-teal-A200": {
		"background": "e-background-teal-A200",
		"text": "e-text-teal-A200",
		"title": "Color Teal A200"
	},
	"e-background-teal-A400": {
		"background": "e-background-teal-A400",
		"text": "e-text-teal-A400",
		"title": "Color Teal A400"
	},
	"e-background-teal-A700": {
		"background": "e-background-teal-A700",
		"text": "e-text-teal-A700",
		"title": "Color Teal A700"
	},
	"e-background-green-100": {
		"background": "e-background-green-100",
		"text": "e-text-green-100",
		"title": "Color Green 100"
	},
	"e-background-green-200": {
		"background": "e-background-green-200",
		"text": "e-text-green-200",
		"title": "Color Green 200"
	},
	"e-background-green-300": {
		"background": "e-background-green-300",
		"text": "e-text-green-300",
		"title": "Color Green 300"
	},
	"e-background-green-400": {
		"background": "e-background-green-400",
		"text": "e-text-green-400",
		"title": "Color Green 400"
	},
	"e-background-green-500": {
		"background": "e-background-green-500",
		"text": "e-text-green-500",
		"title": "Color Green 500"
	},
	"e-background-green-600": {
		"background": "e-background-green-600",
		"text": "e-text-green-600",
		"title": "Color Green 600"
	},
	"e-background-green-700": {
		"background": "e-background-green-700",
		"text": "e-text-green-700",
		"title": "Color Green 700"
	},
	"e-background-green-800": {
		"background": "e-background-green-800",
		"text": "e-text-green-800",
		"title": "Color Green 800"
	},
	"e-background-green-900": {
		"background": "e-background-green-900",
		"text": "e-text-green-900",
		"title": "Color Green 900"
	},
	"e-background-green-A100": {
		"background": "e-background-green-A100",
		"text": "e-text-green-A100",
		"title": "Color Green A100"
	},
	"e-background-green-A200": {
		"background": "e-background-green-A200",
		"text": "e-text-green-A200",
		"title": "Color Green A200"
	},
	"e-background-green-A400": {
		"background": "e-background-green-A400",
		"text": "e-text-green-A400",
		"title": "Color Green A400"
	},
	"e-background-green-A700": {
		"background": "e-background-green-A700",
		"text": "e-text-green-A700",
		"title": "Color Green A700"
	},
	"e-background-light-green-100": {
		"background": "e-background-light-green-100",
		"text": "e-text-light-green-100",
		"title": "Color Light Green 100"
	},
	"e-background-light-green-200": {
		"background": "e-background-light-green-200",
		"text": "e-text-light-green-200",
		"title": "Color Light Green 200"
	},
	"e-background-light-green-300": {
		"background": "e-background-light-green-300",
		"text": "e-text-light-green-300",
		"title": "Color Light Green 300"
	},
	"e-background-light-green-400": {
		"background": "e-background-light-green-400",
		"text": "e-text-light-green-400",
		"title": "Color Light Green 400"
	},
	"e-background-light-green-500": {
		"background": "e-background-light-green-500",
		"text": "e-text-light-green-500",
		"title": "Color Light Green 500"
	},
	"e-background-light-green-600": {
		"background": "e-background-light-green-600",
		"text": "e-text-light-green-600",
		"title": "Color Light Green 600"
	},
	"e-background-light-green-700": {
		"background": "e-background-light-green-700",
		"text": "e-text-light-green-700",
		"title": "Color Light Green 700"
	},
	"e-background-light-green-800": {
		"background": "e-background-light-green-800",
		"text": "e-text-light-green-800",
		"title": "Color Light Green 800"
	},
	"e-background-light-green-900": {
		"background": "e-background-light-green-900",
		"text": "e-text-light-green-900",
		"title": "Color Light Green 900"
	},
	"e-background-light-green-A100": {
		"background": "e-background-light-green-A100",
		"text": "e-text-light-green-A100",
		"title": "Color Light Green A100"
	},
	"e-background-light-green-A200": {
		"background": "e-background-light-green-A200",
		"text": "e-text-light-green-A200",
		"title": "Color Light Green A200"
	},
	"e-background-light-green-A400": {
		"background": "e-background-light-green-A400",
		"text": "e-text-light-green-A400",
		"title": "Color Light Green A400"
	},
	"e-background-light-green-A700": {
		"background": "e-background-light-green-A700",
		"text": "e-text-light-green-A700",
		"title": "Color Light Green A700"
	},
	"e-background-lime-100": {
		"background": "e-background-lime-100",
		"text": "e-text-lime-100",
		"title": "Color Lime 100"
	},
	"e-background-lime-200": {
		"background": "e-background-lime-200",
		"text": "e-text-lime-200",
		"title": "Color Lime 200"
	},
	"e-background-lime-300": {
		"background": "e-background-lime-300",
		"text": "e-text-lime-300",
		"title": "Color Lime 300"
	},
	"e-background-lime-400": {
		"background": "e-background-lime-400",
		"text": "e-text-lime-400",
		"title": "Color Lime 400"
	},
	"e-background-lime-500": {
		"background": "e-background-lime-500",
		"text": "e-text-lime-500",
		"title": "Color Lime 500"
	},
	"e-background-lime-600": {
		"background": "e-background-lime-600",
		"text": "e-text-lime-600",
		"title": "Color Lime 600"
	},
	"e-background-lime-700": {
		"background": "e-background-lime-700",
		"text": "e-text-lime-700",
		"title": "Color Lime 700"
	},
	"e-background-lime-800": {
		"background": "e-background-lime-800",
		"text": "e-text-lime-800",
		"title": "Color Lime 800"
	},
	"e-background-lime-900": {
		"background": "e-background-lime-900",
		"text": "e-text-lime-900",
		"title": "Color Lime 900"
	},
	"e-background-lime-A100": {
		"background": "e-background-lime-A100",
		"text": "e-text-lime-A100",
		"title": "Color Lime A100"
	},
	"e-background-lime-A200": {
		"background": "e-background-lime-A200",
		"text": "e-text-lime-A200",
		"title": "Color Lime A200"
	},
	"e-background-lime-A400": {
		"background": "e-background-lime-A400",
		"text": "e-text-lime-A400",
		"title": "Color Lime A400"
	},
	"e-background-lime-A700": {
		"background": "e-background-lime-A700",
		"text": "e-text-lime-A700",
		"title": "Color Lime A700"
	},
	"e-background-yellow-100": {
		"background": "e-background-yellow-100",
		"text": "e-text-yellow-100",
		"title": "Color Yellow 100"
	},
	"e-background-yellow-200": {
		"background": "e-background-yellow-200",
		"text": "e-text-yellow-200",
		"title": "Color Yellow 200"
	},
	"e-background-yellow-300": {
		"background": "e-background-yellow-300",
		"text": "e-text-yellow-300",
		"title": "Color Yellow 300"
	},
	"e-background-yellow-400": {
		"background": "e-background-yellow-400",
		"text": "e-text-yellow-400",
		"title": "Color Yellow 400"
	},
	"e-background-yellow-500": {
		"background": "e-background-yellow-500",
		"text": "e-text-yellow-500",
		"title": "Color Yellow 500"
	},
	"e-background-yellow-600": {
		"background": "e-background-yellow-600",
		"text": "e-text-yellow-600",
		"title": "Color Yellow 600"
	},
	"e-background-yellow-700": {
		"background": "e-background-yellow-700",
		"text": "e-text-yellow-700",
		"title": "Color Yellow 700"
	},
	"e-background-yellow-800": {
		"background": "e-background-yellow-800",
		"text": "e-text-yellow-800",
		"title": "Color Yellow 800"
	},
	"e-background-yellow-900": {
		"background": "e-background-yellow-900",
		"text": "e-text-yellow-900",
		"title": "Color Yellow 900"
	},
	"e-background-yellow-A100": {
		"background": "e-background-yellow-A100",
		"text": "e-text-yellow-A100",
		"title": "Color Yellow A100"
	},
	"e-background-yellow-A200": {
		"background": "e-background-yellow-A200",
		"text": "e-text-yellow-A200",
		"title": "Color Yellow A200"
	},
	"e-background-yellow-A400": {
		"background": "e-background-yellow-A400",
		"text": "e-text-yellow-A400",
		"title": "Color Yellow A400"
	},
	"e-background-yellow-A700": {
		"background": "e-background-yellow-A700",
		"text": "e-text-yellow-A700",
		"title": "Color Yellow A700"
	},
	"e-background-amber-100": {
		"background": "e-background-amber-100",
		"text": "e-text-amber-100",
		"title": "Color Amber 100"
	},
	"e-background-amber-200": {
		"background": "e-background-amber-200",
		"text": "e-text-amber-200",
		"title": "Color Amber 200"
	},
	"e-background-amber-300": {
		"background": "e-background-amber-300",
		"text": "e-text-amber-300",
		"title": "Color Amber 300"
	},
	"e-background-amber-400": {
		"background": "e-background-amber-400",
		"text": "e-text-amber-400",
		"title": "Color Amber 400"
	},
	"e-background-amber-500": {
		"background": "e-background-amber-500",
		"text": "e-text-amber-500",
		"title": "Color Amber 500"
	},
	"e-background-amber-600": {
		"background": "e-background-amber-600",
		"text": "e-text-amber-600",
		"title": "Color Amber 600"
	},
	"e-background-amber-700": {
		"background": "e-background-amber-700",
		"text": "e-text-amber-700",
		"title": "Color Amber 700"
	},
	"e-background-amber-800": {
		"background": "e-background-amber-800",
		"text": "e-text-amber-800",
		"title": "Color Amber 800"
	},
	"e-background-amber-900": {
		"background": "e-background-amber-900",
		"text": "e-text-amber-900",
		"title": "Color Amber 900"
	},
	"e-background-amber-A100": {
		"background": "e-background-amber-A100",
		"text": "e-text-amber-A100",
		"title": "Color Amber A100"
	},
	"e-background-amber-A200": {
		"background": "e-background-amber-A200",
		"text": "e-text-amber-A200",
		"title": "Color Amber A200"
	},
	"e-background-amber-A400": {
		"background": "e-background-amber-A400",
		"text": "e-text-amber-A400",
		"title": "Color Amber A400"
	},
	"e-background-amber-A700": {
		"background": "e-background-amber-A700",
		"text": "e-text-amber-A700",
		"title": "Color Amber A700"
	},
	"e-background-orange-100": {
		"background": "e-background-orange-100",
		"text": "e-text-orange-100",
		"title": "Color Orange 100"
	},
	"e-background-orange-200": {
		"background": "e-background-orange-200",
		"text": "e-text-orange-200",
		"title": "Color Orange 200"
	},
	"e-background-orange-300": {
		"background": "e-background-orange-300",
		"text": "e-text-orange-300",
		"title": "Color Orange 300"
	},
	"e-background-orange-400": {
		"background": "e-background-orange-400",
		"text": "e-text-orange-400",
		"title": "Color Orange 400"
	},
	"e-background-orange-500": {
		"background": "e-background-orange-500",
		"text": "e-text-orange-500",
		"title": "Color Orange 500"
	},
	"e-background-orange-600": {
		"background": "e-background-orange-600",
		"text": "e-text-orange-600",
		"title": "Color Orange 600"
	},
	"e-background-orange-700": {
		"background": "e-background-orange-700",
		"text": "e-text-orange-700",
		"title": "Color Orange 700"
	},
	"e-background-orange-800": {
		"background": "e-background-orange-800",
		"text": "e-text-orange-800",
		"title": "Color Orange 800"
	},
	"e-background-orange-900": {
		"background": "e-background-orange-900",
		"text": "e-text-orange-900",
		"title": "Color Orange 900"
	},
	"e-background-orange-A100": {
		"background": "e-background-orange-A100",
		"text": "e-text-orange-A100",
		"title": "Color Orange A100"
	},
	"e-background-orange-A200": {
		"background": "e-background-orange-A200",
		"text": "e-text-orange-A200",
		"title": "Color Orange A200"
	},
	"e-background-orange-A400": {
		"background": "e-background-orange-A400",
		"text": "e-text-orange-A400",
		"title": "Color Orange A400"
	},
	"e-background-orange-A700": {
		"background": "e-background-orange-A700",
		"text": "e-text-orange-A700",
		"title": "Color Orange A700"
	},
	"e-background-deep-orange-100": {
		"background": "e-background-deep-orange-100",
		"text": "e-text-deep-orange-100",
		"title": "Color Deep Orange 100"
	},
	"e-background-deep-orange-200": {
		"background": "e-background-deep-orange-200",
		"text": "e-text-deep-orange-200",
		"title": "Color Deep Orange 200"
	},
	"e-background-deep-orange-300": {
		"background": "e-background-deep-orange-300",
		"text": "e-text-deep-orange-300",
		"title": "Color Deep Orange 300"
	},
	"e-background-deep-orange-400": {
		"background": "e-background-deep-orange-400",
		"text": "e-text-deep-orange-400",
		"title": "Color Deep Orange 400"
	},
	"e-background-deep-orange-500": {
		"background": "e-background-deep-orange-500",
		"text": "e-text-deep-orange-500",
		"title": "Color Deep Orange 500"
	},
	"e-background-deep-orange-600": {
		"background": "e-background-deep-orange-600",
		"text": "e-text-deep-orange-600",
		"title": "Color Deep Orange 600"
	},
	"e-background-deep-orange-700": {
		"background": "e-background-deep-orange-700",
		"text": "e-text-deep-orange-700",
		"title": "Color Deep Orange 700"
	},
	"e-background-deep-orange-800": {
		"background": "e-background-deep-orange-800",
		"text": "e-text-deep-orange-800",
		"title": "Color Deep Orange 800"
	},
	"e-background-deep-orange-900": {
		"background": "e-background-deep-orange-900",
		"text": "e-text-deep-orange-900",
		"title": "Color Deep Orange 900"
	},
	"e-background-deep-orange-A100": {
		"background": "e-background-deep-orange-A100",
		"text": "e-text-deep-orange-A100",
		"title": "Color Deep Orange A100"
	},
	"e-background-deep-orange-A200": {
		"background": "e-background-deep-orange-A200",
		"text": "e-text-deep-orange-A200",
		"title": "Color Deep Orange A200"
	},
	"e-background-deep-orange-A400": {
		"background": "e-background-deep-orange-A400",
		"text": "e-text-deep-orange-A400",
		"title": "Color Deep Orange A400"
	},
	"e-background-deep-orange-A700": {
		"background": "e-background-deep-orange-A700",
		"text": "e-text-deep-orange-A700",
		"title": "Color Deep Orange A700"
	},
	"e-background-brown-100": {
		"background": "e-background-brown-100",
		"text": "e-text-brown-100",
		"title": "Color Brown 100"
	},
	"e-background-brown-200": {
		"background": "e-background-brown-200",
		"text": "e-text-brown-200",
		"title": "Color Brown 200"
	},
	"e-background-brown-300": {
		"background": "e-background-brown-300",
		"text": "e-text-brown-300",
		"title": "Color Brown 300"
	},
	"e-background-brown-400": {
		"background": "e-background-brown-400",
		"text": "e-text-brown-400",
		"title": "Color Brown 400"
	},
	"e-background-brown-500": {
		"background": "e-background-brown-500",
		"text": "e-text-brown-500",
		"title": "Color Brown 500"
	},
	"e-background-brown-600": {
		"background": "e-background-brown-600",
		"text": "e-text-brown-600",
		"title": "Color Brown 600"
	},
	"e-background-brown-700": {
		"background": "e-background-brown-700",
		"text": "e-text-brown-700",
		"title": "Color Brown 700"
	},
	"e-background-brown-800": {
		"background": "e-background-brown-800",
		"text": "e-text-brown-800",
		"title": "Color Brown 800"
	},
	"e-background-brown-900": {
		"background": "e-background-brown-900",
		"text": "e-text-brown-900",
		"title": "Color Brown 900"
	},
	"e-background-grey-100": {
		"background": "e-background-grey-100",
		"text": "e-text-grey-100",
		"title": "Color Grey 100"
	},
	"e-background-grey-200": {
		"background": "e-background-grey-200",
		"text": "e-text-grey-200",
		"title": "Color Grey 200"
	},
	"e-background-grey-300": {
		"background": "e-background-grey-300",
		"text": "e-text-grey-300",
		"title": "Color Grey 300"
	},
	"e-background-grey-400": {
		"background": "e-background-grey-400",
		"text": "e-text-grey-400",
		"title": "Color Grey 400"
	},
	"e-background-grey-500": {
		"background": "e-background-grey-500",
		"text": "e-text-grey-500",
		"title": "Color Grey 500"
	},
	"e-background-grey-600": {
		"background": "e-background-grey-600",
		"text": "e-text-grey-600",
		"title": "Color Grey 600"
	},
	"e-background-grey-700": {
		"background": "e-background-grey-700",
		"text": "e-text-grey-700",
		"title": "Color Grey 700"
	},
	"e-background-grey-800": {
		"background": "e-background-grey-800",
		"text": "e-text-grey-800",
		"title": "Color Grey 800"
	},
	"e-background-grey-900": {
		"background": "e-background-grey-900",
		"text": "e-text-grey-900",
		"title": "Color Grey 900"
	},
	"e-background-blue-grey-100": {
		"background": "e-background-blue-grey-100",
		"text": "e-text-blue-grey-100",
		"title": "Color Blue Grey 100"
	},
	"e-background-blue-grey-200": {
		"background": "e-background-blue-grey-200",
		"text": "e-text-blue-grey-200",
		"title": "Color Blue Grey 200"
	},
	"e-background-blue-grey-300": {
		"background": "e-background-blue-grey-300",
		"text": "e-text-blue-grey-300",
		"title": "Color Blue Grey 300"
	},
	"e-background-blue-grey-400": {
		"background": "e-background-blue-grey-400",
		"text": "e-text-blue-grey-400",
		"title": "Color Blue Grey 400"
	},
	"e-background-blue-grey-500": {
		"background": "e-background-blue-grey-500",
		"text": "e-text-blue-grey-500",
		"title": "Color Blue Grey 500"
	},
	"e-background-blue-grey-600": {
		"background": "e-background-blue-grey-600",
		"text": "e-text-blue-grey-600",
		"title": "Color Blue Grey 600"
	},
	"e-background-blue-grey-700": {
		"background": "e-background-blue-grey-700",
		"text": "e-text-blue-grey-700",
		"title": "Color Blue Grey 700"
	},
	"e-background-blue-grey-800": {
		"background": "e-background-blue-grey-800",
		"text": "e-text-blue-grey-800",
		"title": "Color Blue Grey 800"
	},
	"e-background-blue-grey-900": {
		"background": "e-background-blue-grey-900",
		"text": "e-text-blue-grey-900",
		"title": "Color Blue Grey 900"
	},
	"e-background-black": {
		"background": "e-background-black",
		"text": "e-text-black",
		"title": "Color Black"
	},
	"e-background-white": {
		"background": "e-background-white",
		"text": "e-text-white",
		"title": "Color White"
	}
};

class AppColors extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	textColor: 'e-text-black',
        	backgroundColor: 'e-background-white',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    changeBackgroundColor(key) {
    	this.setState({
    		backgroundColor: colorList[key].background
    	});
    }

    changeTextColor(key) {
    	this.setState({
    		textColor: colorList[key].text
    	});
    }

    renderBackgroundColors() {
    	let self = this;
		let colorsList = [];

    	Object.keys(colorList).forEach(function(key) { 
			var component = colorList[key];
			colorsList.push(
				(
					<Button 
						key={'color-'+key}
						ripple={false}
						onClick={self.changeBackgroundColor.bind(self, key)} 
						className={ClassNames('flat', component.background)} 
						type={'primary'} />
				)
			); 
		});

		return colorsList;
    }

    renderTextColors() {
    	let self = this;
		let colorsList = [];

    	Object.keys(colorList).forEach(function(key) { 
			var component = colorList[key];
			colorsList.push(
				(
					<Button 
						key={'color-'+key}
						ripple={false}
						onClick={self.changeTextColor.bind(self, key)} 
						className={ClassNames('flat', component.background)} 
						type={'primary'} />
				)
			); 
		});

		return colorsList;
    }

    renderColor() {
    	return (
    		<p className={ClassNames('e-padding-top-25 e-padding-bottom-25 e-text-center', this.state.backgroundColor)}>
				<span className={ClassNames(this.state.textColor)}>
					This is your text to test the colors for background & text.
				</span>
			</p>
    	);
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>COLORS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
		        			<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Colors are pretty. And Essence has them all, powered by Google.
							</Text>
		        		</CardHeader>
		        		<CardContent>
							<Block>
			        			{this.renderColor()}
				        		<Divider />
				        		<Block>
				        			<Text type={'h4'} classes={'e-text-indigo-400'}>CHOOSE YOUR COLOURS:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />
					        		<Tab data={{
											'header': [{
													'context': (<Text>Text Color</Text>)
												},{
													'context': (<Text>Background Color</Text>)
												}
											],
											'rows': [ 
												(
													<Block classes={'colors'}>
														{this.renderTextColors()}
													</Block>
												),
												(
													<Block classes={'colors'}>
														{this.renderBackgroundColors()}
													</Block>
												)
											]
										}}
										classes={'e-background-indigo-400 e-text-grey-50'} />
			        			</Block>

			        			<Block className={'e-padding-top-25 e-text-left'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import &#123;Block, Text&#125; from 'essence-core';
											<br />
											<br />
											&lt;Block className=&#123;"{ClassNames(this.state.backgroundColor)}"&#125;&gt;
											<br />
											&nbsp;&nbsp;&lt;Text className=&#123;"{ClassNames(this.state.textColor)}"&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;This is your text to test the colors for background &amp; text.
											<br />
											&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&lt;/Block&gt;
				        				</code>
			        				</pre>
			        			</Block>
							</Block>
		        		</CardContent>
					</Card>
			</Block>
		);
    }
}

// List of colors
exports.AppColors = AppColors;
exports.colorList = colorList;