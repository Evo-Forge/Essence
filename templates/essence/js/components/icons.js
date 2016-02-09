import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Icon from 'essence-icon';
import Input from 'essence-input';
import Button from 'essence-button';
import {Block, Text, Divider, Utils} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

import {colorList} from './colors.js';

var iconList = {
	"e-icon-navigation-menu": {
		"name": "e-icon-navigation-menu",
		"title": "Navigation Menu"
	},
	"e-icon-action-3d-rotation": {
		"name": "e-icon-action-3d-rotation",
		"title": "Action 3d Rotation"
	},
	"e-icon-action-accessibility": {
		"name": "e-icon-action-accessibility",
		"title": "Action Accessibility"
	},
	"e-icon-action-account-balance": {
		"name": "e-icon-action-account-balance",
		"title": "Action Account Balance"
	},
	"e-icon-action-account-balance-wallet": {
		"name": "e-icon-action-account-balance-wallet",
		"title": "Action Account Balance Wallet"
	},
	"e-icon-action-account-box": {
		"name": "e-icon-action-account-box",
		"title": "Action Account Box"
	},
	"e-icon-action-account-child": {
		"name": "e-icon-action-account-child",
		"title": "Action Account Child"
	},
	"e-icon-action-account-circle": {
		"name": "e-icon-action-account-circle",
		"title": "Action Account Circle"
	},
	"e-icon-action-add-shopping-cart": {
		"name": "e-icon-action-add-shopping-cart",
		"title": "Action Add Shopping Cart"
	},
	"e-icon-action-alarm": {
		"name": "e-icon-action-alarm",
		"title": "Action Alarm"
	},
	"e-icon-action-alarm-add": {
		"name": "e-icon-action-alarm-add",
		"title": "Action Alarm Add"
	},
	"e-icon-action-alarm-off": {
		"name": "e-icon-action-alarm-off",
		"title": "Action Alarm Off"
	},
	"e-icon-action-alarm-on": {
		"name": "e-icon-action-alarm-on",
		"title": "Action Alarm On"
	},
	"e-icon-action-android": {
		"name": "e-icon-action-android",
		"title": "Action Android"
	},
	"e-icon-action-announcement": {
		"name": "e-icon-action-announcement",
		"title": "Action Announcement"
	},
	"e-icon-action-aspect-ratio": {
		"name": "e-icon-action-aspect-ratio",
		"title": "Action Aspect Ratio"
	},
	"e-icon-action-assessment": {
		"name": "e-icon-action-assessment",
		"title": "Action Assessment"
	},
	"e-icon-action-assignment": {
		"name": "e-icon-action-assignment",
		"title": "Action Assignment"
	},
	"e-icon-action-assignment-ind": {
		"name": "e-icon-action-assignment-ind",
		"title": "Action Assignment Ind"
	},
	"e-icon-action-assignment-late": {
		"name": "e-icon-action-assignment-late",
		"title": "Action Assignment Late"
	},
	"e-icon-action-assignment-return": {
		"name": "e-icon-action-assignment-return",
		"title": "Action Assignment Return"
	},
	"e-icon-action-assignment-returned": {
		"name": "e-icon-action-assignment-returned",
		"title": "Action Assignment Returned"
	},
	"e-icon-action-assignment-turned-in": {
		"name": "e-icon-action-assignment-turned-in",
		"title": "Action Assignment Turned In"
	},
	"e-icon-action-autorenew": {
		"name": "e-icon-action-autorenew",
		"title": "Action Autorenew"
	},
	"e-icon-action-backup": {
		"name": "e-icon-action-backup",
		"title": "Action Backup"
	},
	"e-icon-action-book": {
		"name": "e-icon-action-book",
		"title": "Action Book"
	},
	"e-icon-action-bookmark": {
		"name": "e-icon-action-bookmark",
		"title": "Action Bookmark"
	},
	"e-icon-action-bookmark-outline": {
		"name": "e-icon-action-bookmark-outline",
		"title": "Action Bookmark Outline"
	},
	"e-icon-action-bug-report": {
		"name": "e-icon-action-bug-report",
		"title": "Action Bug Report"
	},
	"e-icon-action-cached": {
		"name": "e-icon-action-cached",
		"title": "Action Cached"
	},
	"e-icon-action-class": {
		"name": "e-icon-action-class",
		"title": "Action Class"
	},
	"e-icon-action-credit-card": {
		"name": "e-icon-action-credit-card",
		"title": "Action Credit Card"
	},
	"e-icon-action-dashboard": {
		"name": "e-icon-action-dashboard",
		"title": "Action Dashboard"
	},
	"e-icon-action-delete": {
		"name": "e-icon-action-delete",
		"title": "Action Delete"
	},
	"e-icon-action-description": {
		"name": "e-icon-action-description",
		"title": "Action Description"
	},
	"e-icon-action-dns": {
		"name": "e-icon-action-dns",
		"title": "Action Dns"
	},
	"e-icon-action-done": {
		"name": "e-icon-action-done",
		"title": "Action Done"
	},
	"e-icon-action-done-all": {
		"name": "e-icon-action-done-all",
		"title": "Action Done All"
	},
	"e-icon-action-event": {
		"name": "e-icon-action-event",
		"title": "Action Event"
	},
	"e-icon-action-exit-to-app": {
		"name": "e-icon-action-exit-to-app",
		"title": "Action Exit To App"
	},
	"e-icon-action-explore": {
		"name": "e-icon-action-explore",
		"title": "Action Explore"
	},
	"e-icon-action-extension": {
		"name": "e-icon-action-extension",
		"title": "Action Extension"
	},
	"e-icon-action-face-unlock": {
		"name": "e-icon-action-face-unlock",
		"title": "Action Face Unlock"
	},
	"e-icon-action-favorite": {
		"name": "e-icon-action-favorite",
		"title": "Action Favorite"
	},
	"e-icon-action-favorite-outline": {
		"name": "e-icon-action-favorite-outline",
		"title": "Action Favorite Outline"
	},
	"e-icon-action-find-in-page": {
		"name": "e-icon-action-find-in-page",
		"title": "Action Find In Page"
	},
	"e-icon-action-find-replace": {
		"name": "e-icon-action-find-replace",
		"title": "Action Find Replace"
	},
	"e-icon-action-flip-to-back": {
		"name": "e-icon-action-flip-to-back",
		"title": "Action Flip To Back"
	},
	"e-icon-action-flip-to-front": {
		"name": "e-icon-action-flip-to-front",
		"title": "Action Flip To Front"
	},
	"e-icon-action-get-app": {
		"name": "e-icon-action-get-app",
		"title": "Action Get App"
	},
	"e-icon-action-grade": {
		"name": "e-icon-action-grade",
		"title": "Action Grade"
	},
	"e-icon-action-group-work": {
		"name": "e-icon-action-group-work",
		"title": "Action Group Work"
	},
	"e-icon-action-help": {
		"name": "e-icon-action-help",
		"title": "Action Help"
	},
	"e-icon-action-highlight-remove": {
		"name": "e-icon-action-highlight-remove",
		"title": "Action Highlight Remove"
	},
	"e-icon-action-history": {
		"name": "e-icon-action-history",
		"title": "Action History"
	},
	"e-icon-action-home": {
		"name": "e-icon-action-home",
		"title": "Action Home"
	},
	"e-icon-action-https": {
		"name": "e-icon-action-https",
		"title": "Action Https"
	},
	"e-icon-action-info": {
		"name": "e-icon-action-info",
		"title": "Action Info"
	},
	"e-icon-action-info-outline": {
		"name": "e-icon-action-info-outline",
		"title": "Action Info Outline"
	},
	"e-icon-action-input": {
		"name": "e-icon-action-input",
		"title": "Action Input"
	},
	"e-icon-action-invert-colors": {
		"name": "e-icon-action-invert-colors",
		"title": "Action Invert Colors"
	},
	"e-icon-action-label": {
		"name": "e-icon-action-label",
		"title": "Action Label"
	},
	"e-icon-action-label-outline": {
		"name": "e-icon-action-label-outline",
		"title": "Action Label Outline"
	},
	"e-icon-action-language": {
		"name": "e-icon-action-language",
		"title": "Action Language"
	},
	"e-icon-action-launch": {
		"name": "e-icon-action-launch",
		"title": "Action Launch"
	},
	"e-icon-action-list": {
		"name": "e-icon-action-list",
		"title": "Action List"
	},
	"e-icon-action-lock": {
		"name": "e-icon-action-lock",
		"title": "Action Lock"
	},
	"e-icon-action-lock-open": {
		"name": "e-icon-action-lock-open",
		"title": "Action Lock Open"
	},
	"e-icon-action-lock-outline": {
		"name": "e-icon-action-lock-outline",
		"title": "Action Lock Outline"
	},
	"e-icon-action-loyalty": {
		"name": "e-icon-action-loyalty",
		"title": "Action Loyalty"
	},
	"e-icon-action-markunread-mailbox": {
		"name": "e-icon-action-markunread-mailbox",
		"title": "Action Markunread Mailbox"
	},
	"e-icon-action-note-add": {
		"name": "e-icon-action-note-add",
		"title": "Action Note Add"
	},
	"e-icon-action-open-in-browser": {
		"name": "e-icon-action-open-in-browser",
		"title": "Action Open In Browser"
	},
	"e-icon-action-open-in-new": {
		"name": "e-icon-action-open-in-new",
		"title": "Action Open In New"
	},
	"e-icon-action-open-with": {
		"name": "e-icon-action-open-with",
		"title": "Action Open With"
	},
	"e-icon-action-pageview": {
		"name": "e-icon-action-pageview",
		"title": "Action Pageview"
	},
	"e-icon-action-payment": {
		"name": "e-icon-action-payment",
		"title": "Action Payment"
	},
	"e-icon-action-perm-camera-mic": {
		"name": "e-icon-action-perm-camera-mic",
		"title": "Action Perm Camera Mic"
	},
	"e-icon-action-perm-contact-cal": {
		"name": "e-icon-action-perm-contact-cal",
		"title": "Action Perm Contact Cal"
	},
	"e-icon-action-perm-data-setting": {
		"name": "e-icon-action-perm-data-setting",
		"title": "Action Perm Data Setting"
	},
	"e-icon-action-perm-device-info": {
		"name": "e-icon-action-perm-device-info",
		"title": "Action Perm Device Info"
	},
	"e-icon-action-perm-identity": {
		"name": "e-icon-action-perm-identity",
		"title": "Action Perm Identity"
	},
	"e-icon-action-perm-media": {
		"name": "e-icon-action-perm-media",
		"title": "Action Perm Media"
	},
	"e-icon-action-perm-phone-msg": {
		"name": "e-icon-action-perm-phone-msg",
		"title": "Action Perm Phone Msg"
	},
	"e-icon-action-perm-scan-wifi": {
		"name": "e-icon-action-perm-scan-wifi",
		"title": "Action Perm Scan Wifi"
	},
	"e-icon-action-picture-in-picture": {
		"name": "e-icon-action-picture-in-picture",
		"title": "Action Picture In Picture"
	},
	"e-icon-action-polymer": {
		"name": "e-icon-action-polymer",
		"title": "Action Polymer"
	},
	"e-icon-action-print": {
		"name": "e-icon-action-print",
		"title": "Action Print"
	},
	"e-icon-action-query-builder": {
		"name": "e-icon-action-query-builder",
		"title": "Action Query Builder"
	},
	"e-icon-action-question-answer": {
		"name": "e-icon-action-question-answer",
		"title": "Action Question Answer"
	},
	"e-icon-action-receipt": {
		"name": "e-icon-action-receipt",
		"title": "Action Receipt"
	},
	"e-icon-action-redeem": {
		"name": "e-icon-action-redeem",
		"title": "Action Redeem"
	},
	"e-icon-action-report-problem": {
		"name": "e-icon-action-report-problem",
		"title": "Action Report Problem"
	},
	"e-icon-action-restore": {
		"name": "e-icon-action-restore",
		"title": "Action Restore"
	},
	"e-icon-action-room": {
		"name": "e-icon-action-room",
		"title": "Action Room"
	},
	"e-icon-action-schedule": {
		"name": "e-icon-action-schedule",
		"title": "Action Schedule"
	},
	"e-icon-action-search": {
		"name": "e-icon-action-search",
		"title": "Action Search"
	},
	"e-icon-action-settings": {
		"name": "e-icon-action-settings",
		"title": "Action Settings"
	},
	"e-icon-action-settings-applications": {
		"name": "e-icon-action-settings-applications",
		"title": "Action Settings Applications"
	},
	"e-icon-action-settings-backup-restore": {
		"name": "e-icon-action-settings-backup-restore",
		"title": "Action Settings Backup Restore"
	},
	"e-icon-action-settings-bluetooth": {
		"name": "e-icon-action-settings-bluetooth",
		"title": "Action Settings Bluetooth"
	},
	"e-icon-action-settings-cell": {
		"name": "e-icon-action-settings-cell",
		"title": "Action Settings Cell"
	},
	"e-icon-action-settings-display": {
		"name": "e-icon-action-settings-display",
		"title": "Action Settings Display"
	},
	"e-icon-action-settings-ethernet": {
		"name": "e-icon-action-settings-ethernet",
		"title": "Action Settings Ethernet"
	},
	"e-icon-action-settings-input-antenna": {
		"name": "e-icon-action-settings-input-antenna",
		"title": "Action Settings Input Antenna"
	},
	"e-icon-action-settings-input-component": {
		"name": "e-icon-action-settings-input-component",
		"title": "Action Settings Input Component"
	},
	"e-icon-action-settings-input-composite": {
		"name": "e-icon-action-settings-input-composite",
		"title": "Action Settings Input Composite"
	},
	"e-icon-action-settings-input-hdmi": {
		"name": "e-icon-action-settings-input-hdmi",
		"title": "Action Settings Input Hdmi"
	},
	"e-icon-action-settings-input-svideo": {
		"name": "e-icon-action-settings-input-svideo",
		"title": "Action Settings Input Svideo"
	},
	"e-icon-action-settings-overscan": {
		"name": "e-icon-action-settings-overscan",
		"title": "Action Settings Overscan"
	},
	"e-icon-action-settings-phone": {
		"name": "e-icon-action-settings-phone",
		"title": "Action Settings Phone"
	},
	"e-icon-action-settings-power": {
		"name": "e-icon-action-settings-power",
		"title": "Action Settings Power"
	},
	"e-icon-action-settings-remote": {
		"name": "e-icon-action-settings-remote",
		"title": "Action Settings Remote"
	},
	"e-icon-action-settings-voice": {
		"name": "e-icon-action-settings-voice",
		"title": "Action Settings Voice"
	},
	"e-icon-action-shop": {
		"name": "e-icon-action-shop",
		"title": "Action Shop"
	},
	"e-icon-action-shop-two": {
		"name": "e-icon-action-shop-two",
		"title": "Action Shop Two"
	},
	"e-icon-action-shopping-basket": {
		"name": "e-icon-action-shopping-basket",
		"title": "Action Shopping Basket"
	},
	"e-icon-action-shopping-cart": {
		"name": "e-icon-action-shopping-cart",
		"title": "Action Shopping Cart"
	},
	"e-icon-action-speaker-notes": {
		"name": "e-icon-action-speaker-notes",
		"title": "Action Speaker Notes"
	},
	"e-icon-action-spellcheck": {
		"name": "e-icon-action-spellcheck",
		"title": "Action Spellcheck"
	},
	"e-icon-action-star-rate": {
		"name": "e-icon-action-star-rate",
		"title": "Action Star Rate"
	},
	"e-icon-action-stars": {
		"name": "e-icon-action-stars",
		"title": "Action Stars"
	},
	"e-icon-action-store": {
		"name": "e-icon-action-store",
		"title": "Action Store"
	},
	"e-icon-action-subject": {
		"name": "e-icon-action-subject",
		"title": "Action Subject"
	},
	"e-icon-action-swap-horiz": {
		"name": "e-icon-action-swap-horiz",
		"title": "Action Swap Horiz"
	},
	"e-icon-action-swap-vert": {
		"name": "e-icon-action-swap-vert",
		"title": "Action Swap Vert"
	},
	"e-icon-action-swap-vert-circle": {
		"name": "e-icon-action-swap-vert-circle",
		"title": "Action Swap Vert Circle"
	},
	"e-icon-action-system-update-tv": {
		"name": "e-icon-action-system-update-tv",
		"title": "Action System Update Tv"
	},
	"e-icon-action-tab": {
		"name": "e-icon-action-tab",
		"title": "Action Tab"
	},
	"e-icon-action-tab-unselected": {
		"name": "e-icon-action-tab-unselected",
		"title": "Action Tab Unselected"
	},
	"e-icon-action-theaters": {
		"name": "e-icon-action-theaters",
		"title": "Action Theaters"
	},
	"e-icon-action-thumb-down": {
		"name": "e-icon-action-thumb-down",
		"title": "Action Thumb Down"
	},
	"e-icon-action-thumb-up": {
		"name": "e-icon-action-thumb-up",
		"title": "Action Thumb Up"
	},
	"e-icon-action-thumbs-up-down": {
		"name": "e-icon-action-thumbs-up-down",
		"title": "Action Thumbs Up Down"
	},
	"e-icon-action-toc": {
		"name": "e-icon-action-toc",
		"title": "Action Toc"
	},
	"e-icon-action-today": {
		"name": "e-icon-action-today",
		"title": "Action Today"
	},
	"e-icon-action-track-changes": {
		"name": "e-icon-action-track-changes",
		"title": "Action Track Changes"
	},
	"e-icon-action-translate": {
		"name": "e-icon-action-translate",
		"title": "Action Translate"
	},
	"e-icon-action-trending-down": {
		"name": "e-icon-action-trending-down",
		"title": "Action Trending Down"
	},
	"e-icon-action-trending-neutral": {
		"name": "e-icon-action-trending-neutral",
		"title": "Action Trending Neutral"
	},
	"e-icon-action-trending-up": {
		"name": "e-icon-action-trending-up",
		"title": "Action Trending Up"
	},
	"e-icon-action-turned-in": {
		"name": "e-icon-action-turned-in",
		"title": "Action Turned In"
	},
	"e-icon-action-turned-in-not": {
		"name": "e-icon-action-turned-in-not",
		"title": "Action Turned In Not"
	},
	"e-icon-action-verified-user": {
		"name": "e-icon-action-verified-user",
		"title": "Action Verified User"
	},
	"e-icon-action-view-agenda": {
		"name": "e-icon-action-view-agenda",
		"title": "Action View Agenda"
	},
	"e-icon-action-view-array": {
		"name": "e-icon-action-view-array",
		"title": "Action View Array"
	},
	"e-icon-action-view-carousel": {
		"name": "e-icon-action-view-carousel",
		"title": "Action View Carousel"
	},
	"e-icon-action-view-column": {
		"name": "e-icon-action-view-column",
		"title": "Action View Column"
	},
	"e-icon-action-view-day": {
		"name": "e-icon-action-view-day",
		"title": "Action View Day"
	},
	"e-icon-action-view-headline": {
		"name": "e-icon-action-view-headline",
		"title": "Action View Headline"
	},
	"e-icon-action-view-list": {
		"name": "e-icon-action-view-list",
		"title": "Action View List"
	},
	"e-icon-action-view-module": {
		"name": "e-icon-action-view-module",
		"title": "Action View Module"
	},
	"e-icon-action-view-quilt": {
		"name": "e-icon-action-view-quilt",
		"title": "Action View Quilt"
	},
	"e-icon-action-view-stream": {
		"name": "e-icon-action-view-stream",
		"title": "Action View Stream"
	},
	"e-icon-action-view-week": {
		"name": "e-icon-action-view-week",
		"title": "Action View Week"
	},
	"e-icon-action-visibility": {
		"name": "e-icon-action-visibility",
		"title": "Action Visibility"
	},
	"e-icon-action-visibility-off": {
		"name": "e-icon-action-visibility-off",
		"title": "Action Visibility Off"
	},
	"e-icon-action-wallet-giftcard": {
		"name": "e-icon-action-wallet-giftcard",
		"title": "Action Wallet Giftcard"
	},
	"e-icon-action-wallet-membership": {
		"name": "e-icon-action-wallet-membership",
		"title": "Action Wallet Membership"
	},
	"e-icon-action-wallet-travel": {
		"name": "e-icon-action-wallet-travel",
		"title": "Action Wallet Travel"
	},
	"e-icon-action-work": {
		"name": "e-icon-action-work",
		"title": "Action Work"
	},
	"e-icon-alert-error": {
		"name": "e-icon-alert-error",
		"title": "Alert Error"
	},
	"e-icon-alert-warning": {
		"name": "e-icon-alert-warning",
		"title": "Alert Warning"
	},
	"e-icon-av-album": {
		"name": "e-icon-av-album",
		"title": "Av Album"
	},
	"e-icon-av-timer": {
		"name": "e-icon-av-timer",
		"title": "Av Timer"
	},
	"e-icon-av-closed-caption": {
		"name": "e-icon-av-closed-caption",
		"title": "Av Closed Caption"
	},
	"e-icon-av-equalizer": {
		"name": "e-icon-av-equalizer",
		"title": "Av Equalizer"
	},
	"e-icon-av-explicit": {
		"name": "e-icon-av-explicit",
		"title": "Av Explicit"
	},
	"e-icon-av-fast-forward": {
		"name": "e-icon-av-fast-forward",
		"title": "Av Fast Forward"
	},
	"e-icon-av-fast-rewind": {
		"name": "e-icon-av-fast-rewind",
		"title": "Av Fast Rewind"
	},
	"e-icon-av-games": {
		"name": "e-icon-av-games",
		"title": "Av Games"
	},
	"e-icon-av-hearing": {
		"name": "e-icon-av-hearing",
		"title": "Av Hearing"
	},
	"e-icon-av-high-quality": {
		"name": "e-icon-av-high-quality",
		"title": "Av High Quality"
	},
	"e-icon-av-loop": {
		"name": "e-icon-av-loop",
		"title": "Av Loop"
	},
	"e-icon-av-mic": {
		"name": "e-icon-av-mic",
		"title": "Av Mic"
	},
	"e-icon-av-mic-none": {
		"name": "e-icon-av-mic-none",
		"title": "Av Mic None"
	},
	"e-icon-av-mic-off": {
		"name": "e-icon-av-mic-off",
		"title": "Av Mic Off"
	},
	"e-icon-av-movie": {
		"name": "e-icon-av-movie",
		"title": "Av Movie"
	},
	"e-icon-av-my-library-add": {
		"name": "e-icon-av-my-library-add",
		"title": "Av My Library Add"
	},
	"e-icon-av-my-library-books": {
		"name": "e-icon-av-my-library-books",
		"title": "Av My Library Books"
	},
	"e-icon-av-my-library-music": {
		"name": "e-icon-av-my-library-music",
		"title": "Av My Library Music"
	},
	"e-icon-av-new-releases": {
		"name": "e-icon-av-new-releases",
		"title": "Av New Releases"
	},
	"e-icon-av-not-interested": {
		"name": "e-icon-av-not-interested",
		"title": "Av Not Interested"
	},
	"e-icon-av-pause": {
		"name": "e-icon-av-pause",
		"title": "Av Pause"
	},
	"e-icon-av-pause-circle-fill": {
		"name": "e-icon-av-pause-circle-fill",
		"title": "Av Pause Circle Fill"
	},
	"e-icon-av-pause-circle-outline": {
		"name": "e-icon-av-pause-circle-outline",
		"title": "Av Pause Circle Outline"
	},
	"e-icon-av-play-arrow": {
		"name": "e-icon-av-play-arrow",
		"title": "Av Play Arrow"
	},
	"e-icon-av-play-circle-fill": {
		"name": "e-icon-av-play-circle-fill",
		"title": "Av Play Circle Fill"
	},
	"e-icon-av-play-circle-outline": {
		"name": "e-icon-av-play-circle-outline",
		"title": "Av Play Circle Outline"
	},
	"e-icon-av-play-shopping-bag": {
		"name": "e-icon-av-play-shopping-bag",
		"title": "Av Play Shopping Bag"
	},
	"e-icon-av-playlist-add": {
		"name": "e-icon-av-playlist-add",
		"title": "Av Playlist Add"
	},
	"e-icon-av-queue": {
		"name": "e-icon-av-queue",
		"title": "Av Queue"
	},
	"e-icon-av-queue-music": {
		"name": "e-icon-av-queue-music",
		"title": "Av Queue Music"
	},
	"e-icon-av-radio": {
		"name": "e-icon-av-radio",
		"title": "Av Radio"
	},
	"e-icon-av-recent-actors": {
		"name": "e-icon-av-recent-actors",
		"title": "Av Recent Actors"
	},
	"e-icon-av-repeat": {
		"name": "e-icon-av-repeat",
		"title": "Av Repeat"
	},
	"e-icon-av-repeat-one": {
		"name": "e-icon-av-repeat-one",
		"title": "Av Repeat One"
	},
	"e-icon-av-replay": {
		"name": "e-icon-av-replay",
		"title": "Av Replay"
	},
	"e-icon-av-shuffle": {
		"name": "e-icon-av-shuffle",
		"title": "Av Shuffle"
	},
	"e-icon-av-skip-next": {
		"name": "e-icon-av-skip-next",
		"title": "Av Skip Next"
	},
	"e-icon-av-skip-previous": {
		"name": "e-icon-av-skip-previous",
		"title": "Av Skip Previous"
	},
	"e-icon-av-snooze": {
		"name": "e-icon-av-snooze",
		"title": "Av Snooze"
	},
	"e-icon-av-stop": {
		"name": "e-icon-av-stop",
		"title": "Av Stop"
	},
	"e-icon-av-subtitles": {
		"name": "e-icon-av-subtitles",
		"title": "Av Subtitles"
	},
	"e-icon-av-surround-sound": {
		"name": "e-icon-av-surround-sound",
		"title": "Av Surround Sound"
	},
	"e-icon-av-video-collection": {
		"name": "e-icon-av-video-collection",
		"title": "Av Video Collection"
	},
	"e-icon-av-videocam": {
		"name": "e-icon-av-videocam",
		"title": "Av Videocam"
	},
	"e-icon-av-videocam-off": {
		"name": "e-icon-av-videocam-off",
		"title": "Av Videocam Off"
	},
	"e-icon-av-volume-down": {
		"name": "e-icon-av-volume-down",
		"title": "Av Volume Down"
	},
	"e-icon-av-volume-mute": {
		"name": "e-icon-av-volume-mute",
		"title": "Av Volume Mute"
	},
	"e-icon-av-volume-off": {
		"name": "e-icon-av-volume-off",
		"title": "Av Volume Off"
	},
	"e-icon-av-volume-up": {
		"name": "e-icon-av-volume-up",
		"title": "Av Volume Up"
	},
	"e-icon-av-web": {
		"name": "e-icon-av-web",
		"title": "Av Web"
	},
	"e-icon-communication-business": {
		"name": "e-icon-communication-business",
		"title": "Communication Business"
	},
	"e-icon-communication-call": {
		"name": "e-icon-communication-call",
		"title": "Communication Call"
	},
	"e-icon-communication-call-end": {
		"name": "e-icon-communication-call-end",
		"title": "Communication Call End"
	},
	"e-icon-communication-call-made": {
		"name": "e-icon-communication-call-made",
		"title": "Communication Call Made"
	},
	"e-icon-communication-call-merge": {
		"name": "e-icon-communication-call-merge",
		"title": "Communication Call Merge"
	},
	"e-icon-communication-call-missed": {
		"name": "e-icon-communication-call-missed",
		"title": "Communication Call Missed"
	},
	"e-icon-communication-call-received": {
		"name": "e-icon-communication-call-received",
		"title": "Communication Call Received"
	},
	"e-icon-communication-call-split": {
		"name": "e-icon-communication-call-split",
		"title": "Communication Call Split"
	},
	"e-icon-communication-chat": {
		"name": "e-icon-communication-chat",
		"title": "Communication Chat"
	},
	"e-icon-communication-clear-all": {
		"name": "e-icon-communication-clear-all",
		"title": "Communication Clear All"
	},
	"e-icon-communication-comment": {
		"name": "e-icon-communication-comment",
		"title": "Communication Comment"
	},
	"e-icon-communication-contacts": {
		"name": "e-icon-communication-contacts",
		"title": "Communication Contacts"
	},
	"e-icon-communication-dialer-sip": {
		"name": "e-icon-communication-dialer-sip",
		"title": "Communication Dialer Sip"
	},
	"e-icon-communication-dialpad": {
		"name": "e-icon-communication-dialpad",
		"title": "Communication Dialpad"
	},
	"e-icon-communication-dnd-on": {
		"name": "e-icon-communication-dnd-on",
		"title": "Communication Dnd On"
	},
	"e-icon-communication-email": {
		"name": "e-icon-communication-email",
		"title": "Communication Email"
	},
	"e-icon-communication-forum": {
		"name": "e-icon-communication-forum",
		"title": "Communication Forum"
	},
	"e-icon-communication-import-export": {
		"name": "e-icon-communication-import-export",
		"title": "Communication Import Export"
	},
	"e-icon-communication-invert-colors-off": {
		"name": "e-icon-communication-invert-colors-off",
		"title": "Communication Invert Colors Off"
	},
	"e-icon-communication-invert-colors-on": {
		"name": "e-icon-communication-invert-colors-on",
		"title": "Communication Invert Colors On"
	},
	"e-icon-communication-live-help": {
		"name": "e-icon-communication-live-help",
		"title": "Communication Live Help"
	},
	"e-icon-communication-location-off": {
		"name": "e-icon-communication-location-off",
		"title": "Communication Location Off"
	},
	"e-icon-communication-location-on": {
		"name": "e-icon-communication-location-on",
		"title": "Communication Location On"
	},
	"e-icon-communication-message": {
		"name": "e-icon-communication-message",
		"title": "Communication Message"
	},
	"e-icon-communication-messenger": {
		"name": "e-icon-communication-messenger",
		"title": "Communication Messenger"
	},
	"e-icon-communication-no-sim": {
		"name": "e-icon-communication-no-sim",
		"title": "Communication No Sim"
	},
	"e-icon-communication-phone": {
		"name": "e-icon-communication-phone",
		"title": "Communication Phone"
	},
	"e-icon-communication-portable-wifi-off": {
		"name": "e-icon-communication-portable-wifi-off",
		"title": "Communication Portable Wifi Off"
	},
	"e-icon-communication-quick-contacts-dialer": {
		"name": "e-icon-communication-quick-contacts-dialer",
		"title": "Communication Quick Contacts Dialer"
	},
	"e-icon-communication-quick-contacts-mail": {
		"name": "e-icon-communication-quick-contacts-mail",
		"title": "Communication Quick Contacts Mail"
	},
	"e-icon-communication-ring-volume": {
		"name": "e-icon-communication-ring-volume",
		"title": "Communication Ring Volume"
	},
	"e-icon-communication-stay-current-landscape": {
		"name": "e-icon-communication-stay-current-landscape",
		"title": "Communication Stay Current Landscape"
	},
	"e-icon-communication-stay-current-portrait": {
		"name": "e-icon-communication-stay-current-portrait",
		"title": "Communication Stay Current Portrait"
	},
	"e-icon-communication-stay-primary-landscape": {
		"name": "e-icon-communication-stay-primary-landscape",
		"title": "Communication Stay Primary Landscape"
	},
	"e-icon-communication-stay-primary-portrait": {
		"name": "e-icon-communication-stay-primary-portrait",
		"title": "Communication Stay Primary Portrait"
	},
	"e-icon-communication-swap-calls": {
		"name": "e-icon-communication-swap-calls",
		"title": "Communication Swap Calls"
	},
	"e-icon-communication-textsms": {
		"name": "e-icon-communication-textsms",
		"title": "Communication Textsms"
	},
	"e-icon-communication-voicemail": {
		"name": "e-icon-communication-voicemail",
		"title": "Communication Voicemail"
	},
	"e-icon-communication-vpn-key": {
		"name": "e-icon-communication-vpn-key",
		"title": "Communication Vpn Key"
	},
	"e-icon-content-add": {
		"name": "e-icon-content-add",
		"title": "Content Add"
	},
	"e-icon-content-add-box": {
		"name": "e-icon-content-add-box",
		"title": "Content Add Box"
	},
	"e-icon-content-add-circle": {
		"name": "e-icon-content-add-circle",
		"title": "Content Add Circle"
	},
	"e-icon-content-add-circle-outline": {
		"name": "e-icon-content-add-circle-outline",
		"title": "Content Add Circle Outline"
	},
	"e-icon-content-archive": {
		"name": "e-icon-content-archive",
		"title": "Content Archive"
	},
	"e-icon-content-backspace": {
		"name": "e-icon-content-backspace",
		"title": "Content Backspace"
	},
	"e-icon-content-block": {
		"name": "e-icon-content-block",
		"title": "Content Block"
	},
	"e-icon-content-clear": {
		"name": "e-icon-content-clear",
		"title": "Content Clear"
	},
	"e-icon-content-content-copy": {
		"name": "e-icon-content-content-copy",
		"title": "Content Content Copy"
	},
	"e-icon-content-content-cut": {
		"name": "e-icon-content-content-cut",
		"title": "Content Content Cut"
	},
	"e-icon-content-content-paste": {
		"name": "e-icon-content-content-paste",
		"title": "Content Content Paste"
	},
	"e-icon-content-create": {
		"name": "e-icon-content-create",
		"title": "Content Create"
	},
	"e-icon-content-drafts": {
		"name": "e-icon-content-drafts",
		"title": "Content Drafts"
	},
	"e-icon-content-filter-list": {
		"name": "e-icon-content-filter-list",
		"title": "Content Filter List"
	},
	"e-icon-content-flag": {
		"name": "e-icon-content-flag",
		"title": "Content Flag"
	},
	"e-icon-content-forward": {
		"name": "e-icon-content-forward",
		"title": "Content Forward"
	},
	"e-icon-content-gesture": {
		"name": "e-icon-content-gesture",
		"title": "Content Gesture"
	},
	"e-icon-content-inbox": {
		"name": "e-icon-content-inbox",
		"title": "Content Inbox"
	},
	"e-icon-content-link": {
		"name": "e-icon-content-link",
		"title": "Content Link"
	},
	"e-icon-content-mail": {
		"name": "e-icon-content-mail",
		"title": "Content Mail"
	},
	"e-icon-content-markunread": {
		"name": "e-icon-content-markunread",
		"title": "Content Markunread"
	},
	"e-icon-content-redo": {
		"name": "e-icon-content-redo",
		"title": "Content Redo"
	},
	"e-icon-content-remove": {
		"name": "e-icon-content-remove",
		"title": "Content Remove"
	},
	"e-icon-content-remove-circle": {
		"name": "e-icon-content-remove-circle",
		"title": "Content Remove Circle"
	},
	"e-icon-content-remove-circle-outline": {
		"name": "e-icon-content-remove-circle-outline",
		"title": "Content Remove Circle Outline"
	},
	"e-icon-content-reply": {
		"name": "e-icon-content-reply",
		"title": "Content Reply"
	},
	"e-icon-content-reply-all": {
		"name": "e-icon-content-reply-all",
		"title": "Content Reply All"
	},
	"e-icon-content-report": {
		"name": "e-icon-content-report",
		"title": "Content Report"
	},
	"e-icon-content-save": {
		"name": "e-icon-content-save",
		"title": "Content Save"
	},
	"e-icon-content-select-all": {
		"name": "e-icon-content-select-all",
		"title": "Content Select All"
	},
	"e-icon-content-send": {
		"name": "e-icon-content-send",
		"title": "Content Send"
	},
	"e-icon-content-sort": {
		"name": "e-icon-content-sort",
		"title": "Content Sort"
	},
	"e-icon-content-text-format": {
		"name": "e-icon-content-text-format",
		"title": "Content Text Format"
	},
	"e-icon-content-undo": {
		"name": "e-icon-content-undo",
		"title": "Content Undo"
	},
	"e-icon-device-access-alarm": {
		"name": "e-icon-device-access-alarm",
		"title": "Device Access Alarm"
	},
	"e-icon-device-access-alarms": {
		"name": "e-icon-device-access-alarms",
		"title": "Device Access Alarms"
	},
	"e-icon-device-access-time": {
		"name": "e-icon-device-access-time",
		"title": "Device Access Time"
	},
	"e-icon-device-add-alarm": {
		"name": "e-icon-device-add-alarm",
		"title": "Device Add Alarm"
	},
	"e-icon-device-airplanemode-off": {
		"name": "e-icon-device-airplanemode-off",
		"title": "Device Airplanemode Off"
	},
	"e-icon-device-airplanemode-on": {
		"name": "e-icon-device-airplanemode-on",
		"title": "Device Airplanemode On"
	},
	"e-icon-device-battery-20": {
		"name": "e-icon-device-battery-20",
		"title": "Device Battery 20"
	},
	"e-icon-device-battery-30": {
		"name": "e-icon-device-battery-30",
		"title": "Device Battery 30"
	},
	"e-icon-device-battery-50": {
		"name": "e-icon-device-battery-50",
		"title": "Device Battery 50"
	},
	"e-icon-device-battery-60": {
		"name": "e-icon-device-battery-60",
		"title": "Device Battery 60"
	},
	"e-icon-device-battery-80": {
		"name": "e-icon-device-battery-80",
		"title": "Device Battery 80"
	},
	"e-icon-device-battery-90": {
		"name": "e-icon-device-battery-90",
		"title": "Device Battery 90"
	},
	"e-icon-device-battery-alert": {
		"name": "e-icon-device-battery-alert",
		"title": "Device Battery Alert"
	},
	"e-icon-device-battery-charging-20": {
		"name": "e-icon-device-battery-charging-20",
		"title": "Device Battery Charging 20"
	},
	"e-icon-device-battery-charging-30": {
		"name": "e-icon-device-battery-charging-30",
		"title": "Device Battery Charging 30"
	},
	"e-icon-device-battery-charging-50": {
		"name": "e-icon-device-battery-charging-50",
		"title": "Device Battery Charging 50"
	},
	"e-icon-device-battery-charging-60": {
		"name": "e-icon-device-battery-charging-60",
		"title": "Device Battery Charging 60"
	},
	"e-icon-device-battery-charging-80": {
		"name": "e-icon-device-battery-charging-80",
		"title": "Device Battery Charging 80"
	},
	"e-icon-device-battery-charging-90": {
		"name": "e-icon-device-battery-charging-90",
		"title": "Device Battery Charging 90"
	},
	"e-icon-device-battery-charging-full": {
		"name": "e-icon-device-battery-charging-full",
		"title": "Device Battery Charging Full"
	},
	"e-icon-device-battery-full": {
		"name": "e-icon-device-battery-full",
		"title": "Device Battery Full"
	},
	"e-icon-device-battery-std": {
		"name": "e-icon-device-battery-std",
		"title": "Device Battery Std"
	},
	"e-icon-device-battery-unknown": {
		"name": "e-icon-device-battery-unknown",
		"title": "Device Battery Unknown"
	},
	"e-icon-device-bluetooth": {
		"name": "e-icon-device-bluetooth",
		"title": "Device Bluetooth"
	},
	"e-icon-device-bluetooth-connected": {
		"name": "e-icon-device-bluetooth-connected",
		"title": "Device Bluetooth Connected"
	},
	"e-icon-device-bluetooth-disabled": {
		"name": "e-icon-device-bluetooth-disabled",
		"title": "Device Bluetooth Disabled"
	},
	"e-icon-device-bluetooth-searching": {
		"name": "e-icon-device-bluetooth-searching",
		"title": "Device Bluetooth Searching"
	},
	"e-icon-device-brightness-auto": {
		"name": "e-icon-device-brightness-auto",
		"title": "Device Brightness Auto"
	},
	"e-icon-device-brightness-high": {
		"name": "e-icon-device-brightness-high",
		"title": "Device Brightness High"
	},
	"e-icon-device-brightness-low": {
		"name": "e-icon-device-brightness-low",
		"title": "Device Brightness Low"
	},
	"e-icon-device-brightness-medium": {
		"name": "e-icon-device-brightness-medium",
		"title": "Device Brightness Medium"
	},
	"e-icon-device-data-usage": {
		"name": "e-icon-device-data-usage",
		"title": "Device Data Usage"
	},
	"e-icon-device-developer-mode": {
		"name": "e-icon-device-developer-mode",
		"title": "Device Developer Mode"
	},
	"e-icon-device-devices": {
		"name": "e-icon-device-devices",
		"title": "Device Devices"
	},
	"e-icon-device-dvr": {
		"name": "e-icon-device-dvr",
		"title": "Device Dvr"
	},
	"e-icon-device-gps-fixed": {
		"name": "e-icon-device-gps-fixed",
		"title": "Device Gps Fixed"
	},
	"e-icon-device-gps-not-fixed": {
		"name": "e-icon-device-gps-not-fixed",
		"title": "Device Gps Not Fixed"
	},
	"e-icon-device-gps-off": {
		"name": "e-icon-device-gps-off",
		"title": "Device Gps Off"
	},
	"e-icon-device-location-disabled": {
		"name": "e-icon-device-location-disabled",
		"title": "Device Location Disabled"
	},
	"e-icon-device-location-searching": {
		"name": "e-icon-device-location-searching",
		"title": "Device Location Searching"
	},
	"e-icon-device-multitrack-audio": {
		"name": "e-icon-device-multitrack-audio",
		"title": "Device Multitrack Audio"
	},
	"e-icon-device-network-cell": {
		"name": "e-icon-device-network-cell",
		"title": "Device Network Cell"
	},
	"e-icon-device-network-wifi": {
		"name": "e-icon-device-network-wifi",
		"title": "Device Network Wifi"
	},
	"e-icon-device-nfc": {
		"name": "e-icon-device-nfc",
		"title": "Device Nfc"
	},
	"e-icon-device-now-wallpaper": {
		"name": "e-icon-device-now-wallpaper",
		"title": "Device Now Wallpaper"
	},
	"e-icon-device-now-widgets": {
		"name": "e-icon-device-now-widgets",
		"title": "Device Now Widgets"
	},
	"e-icon-device-screen-lock-landscape": {
		"name": "e-icon-device-screen-lock-landscape",
		"title": "Device Screen Lock Landscape"
	},
	"e-icon-device-screen-lock-portrait": {
		"name": "e-icon-device-screen-lock-portrait",
		"title": "Device Screen Lock Portrait"
	},
	"e-icon-device-screen-lock-rotation": {
		"name": "e-icon-device-screen-lock-rotation",
		"title": "Device Screen Lock Rotation"
	},
	"e-icon-device-screen-rotation": {
		"name": "e-icon-device-screen-rotation",
		"title": "Device Screen Rotation"
	},
	"e-icon-device-sd-storage": {
		"name": "e-icon-device-sd-storage",
		"title": "Device Sd Storage"
	},
	"e-icon-device-settings-system-daydream": {
		"name": "e-icon-device-settings-system-daydream",
		"title": "Device Settings System Daydream"
	},
	"e-icon-device-signal-cellular-0-bar": {
		"name": "e-icon-device-signal-cellular-0-bar",
		"title": "Device Signal Cellular 0 Bar"
	},
	"e-icon-device-signal-cellular-1-bar": {
		"name": "e-icon-device-signal-cellular-1-bar",
		"title": "Device Signal Cellular 1 Bar"
	},
	"e-icon-device-signal-cellular-2-bar": {
		"name": "e-icon-device-signal-cellular-2-bar",
		"title": "Device Signal Cellular 2 Bar"
	},
	"e-icon-device-signal-cellular-3-bar": {
		"name": "e-icon-device-signal-cellular-3-bar",
		"title": "Device Signal Cellular 3 Bar"
	},
	"e-icon-device-signal-cellular-4-bar": {
		"name": "e-icon-device-signal-cellular-4-bar",
		"title": "Device Signal Cellular 4 Bar"
	},
	"e-icon-device-signal-cellular-connected-no-internet-0-bar": {
		"name": "e-icon-device-signal-cellular-connected-no-internet-0-bar",
		"title": "Device Signal Cellular Connected No Internet 0 Bar"
	},
	"e-icon-device-signal-cellular-connected-no-internet-1-bar": {
		"name": "e-icon-device-signal-cellular-connected-no-internet-1-bar",
		"title": "Device Signal Cellular Connected No Internet 1 Bar"
	},
	"e-icon-device-signal-cellular-connected-no-internet-2-bar": {
		"name": "e-icon-device-signal-cellular-connected-no-internet-2-bar",
		"title": "Device Signal Cellular Connected No Internet 2 Bar"
	},
	"e-icon-device-signal-cellular-connected-no-internet-3-bar": {
		"name": "e-icon-device-signal-cellular-connected-no-internet-3-bar",
		"title": "Device Signal Cellular Connected No Internet 3 Bar"
	},
	"e-icon-device-signal-cellular-connected-no-internet-4-bar": {
		"name": "e-icon-device-signal-cellular-connected-no-internet-4-bar",
		"title": "Device Signal Cellular Connected No Internet 4 Bar"
	},
	"e-icon-device-signal-cellular-no-sim": {
		"name": "e-icon-device-signal-cellular-no-sim",
		"title": "Device Signal Cellular No Sim"
	},
	"e-icon-device-signal-cellular-null": {
		"name": "e-icon-device-signal-cellular-null",
		"title": "Device Signal Cellular Null"
	},
	"e-icon-device-signal-cellular-off": {
		"name": "e-icon-device-signal-cellular-off",
		"title": "Device Signal Cellular Off"
	},
	"e-icon-device-signal-wifi-0-bar": {
		"name": "e-icon-device-signal-wifi-0-bar",
		"title": "Device Signal Wifi 0 Bar"
	},
	"e-icon-device-signal-wifi-1-bar": {
		"name": "e-icon-device-signal-wifi-1-bar",
		"title": "Device Signal Wifi 1 Bar"
	},
	"e-icon-device-signal-wifi-2-bar": {
		"name": "e-icon-device-signal-wifi-2-bar",
		"title": "Device Signal Wifi 2 Bar"
	},
	"e-icon-device-signal-wifi-3-bar": {
		"name": "e-icon-device-signal-wifi-3-bar",
		"title": "Device Signal Wifi 3 Bar"
	},
	"e-icon-device-signal-wifi-4-bar": {
		"name": "e-icon-device-signal-wifi-4-bar",
		"title": "Device Signal Wifi 4 Bar"
	},
	"e-icon-device-signal-wifi-off": {
		"name": "e-icon-device-signal-wifi-off",
		"title": "Device Signal Wifi Off"
	},
	"e-icon-device-storage": {
		"name": "e-icon-device-storage",
		"title": "Device Storage"
	},
	"e-icon-device-usb": {
		"name": "e-icon-device-usb",
		"title": "Device Usb"
	},
	"e-icon-device-wifi-lock": {
		"name": "e-icon-device-wifi-lock",
		"title": "Device Wifi Lock"
	},
	"e-icon-device-wifi-tethering": {
		"name": "e-icon-device-wifi-tethering",
		"title": "Device Wifi Tethering"
	},
	"e-icon-editor-attach-file": {
		"name": "e-icon-editor-attach-file",
		"title": "Editor Attach File"
	},
	"e-icon-editor-attach-money": {
		"name": "e-icon-editor-attach-money",
		"title": "Editor Attach Money"
	},
	"e-icon-editor-border-all": {
		"name": "e-icon-editor-border-all",
		"title": "Editor Border All"
	},
	"e-icon-editor-border-bottom": {
		"name": "e-icon-editor-border-bottom",
		"title": "Editor Border Bottom"
	},
	"e-icon-editor-border-clear": {
		"name": "e-icon-editor-border-clear",
		"title": "Editor Border Clear"
	},
	"e-icon-editor-border-color": {
		"name": "e-icon-editor-border-color",
		"title": "Editor Border Color"
	},
	"e-icon-editor-border-horizontal": {
		"name": "e-icon-editor-border-horizontal",
		"title": "Editor Border Horizontal"
	},
	"e-icon-editor-border-inner": {
		"name": "e-icon-editor-border-inner",
		"title": "Editor Border Inner"
	},
	"e-icon-editor-border-left": {
		"name": "e-icon-editor-border-left",
		"title": "Editor Border Left"
	},
	"e-icon-editor-border-outer": {
		"name": "e-icon-editor-border-outer",
		"title": "Editor Border Outer"
	},
	"e-icon-editor-border-right": {
		"name": "e-icon-editor-border-right",
		"title": "Editor Border Right"
	},
	"e-icon-editor-border-style": {
		"name": "e-icon-editor-border-style",
		"title": "Editor Border Style"
	},
	"e-icon-editor-border-top": {
		"name": "e-icon-editor-border-top",
		"title": "Editor Border Top"
	},
	"e-icon-editor-border-vertical": {
		"name": "e-icon-editor-border-vertical",
		"title": "Editor Border Vertical"
	},
	"e-icon-editor-format-align-center": {
		"name": "e-icon-editor-format-align-center",
		"title": "Editor Format Align Center"
	},
	"e-icon-editor-format-align-justify": {
		"name": "e-icon-editor-format-align-justify",
		"title": "Editor Format Align Justify"
	},
	"e-icon-editor-format-align-left": {
		"name": "e-icon-editor-format-align-left",
		"title": "Editor Format Align Left"
	},
	"e-icon-editor-format-align-right": {
		"name": "e-icon-editor-format-align-right",
		"title": "Editor Format Align Right"
	},
	"e-icon-editor-format-bold": {
		"name": "e-icon-editor-format-bold",
		"title": "Editor Format Bold"
	},
	"e-icon-editor-format-clear": {
		"name": "e-icon-editor-format-clear",
		"title": "Editor Format Clear"
	},
	"e-icon-editor-format-color-fill": {
		"name": "e-icon-editor-format-color-fill",
		"title": "Editor Format Color Fill"
	},
	"e-icon-editor-format-color-reset": {
		"name": "e-icon-editor-format-color-reset",
		"title": "Editor Format Color Reset"
	},
	"e-icon-editor-format-color-text": {
		"name": "e-icon-editor-format-color-text",
		"title": "Editor Format Color Text"
	},
	"e-icon-editor-format-indent-decrease": {
		"name": "e-icon-editor-format-indent-decrease",
		"title": "Editor Format Indent Decrease"
	},
	"e-icon-editor-format-indent-increase": {
		"name": "e-icon-editor-format-indent-increase",
		"title": "Editor Format Indent Increase"
	},
	"e-icon-editor-format-italic": {
		"name": "e-icon-editor-format-italic",
		"title": "Editor Format Italic"
	},
	"e-icon-editor-format-line-spacing": {
		"name": "e-icon-editor-format-line-spacing",
		"title": "Editor Format Line Spacing"
	},
	"e-icon-editor-format-list-bulleted": {
		"name": "e-icon-editor-format-list-bulleted",
		"title": "Editor Format List Bulleted"
	},
	"e-icon-editor-format-list-numbered": {
		"name": "e-icon-editor-format-list-numbered",
		"title": "Editor Format List Numbered"
	},
	"e-icon-editor-format-paint": {
		"name": "e-icon-editor-format-paint",
		"title": "Editor Format Paint"
	},
	"e-icon-editor-format-quote": {
		"name": "e-icon-editor-format-quote",
		"title": "Editor Format Quote"
	},
	"e-icon-editor-format-size": {
		"name": "e-icon-editor-format-size",
		"title": "Editor Format Size"
	},
	"e-icon-editor-format-strikethrough": {
		"name": "e-icon-editor-format-strikethrough",
		"title": "Editor Format Strikethrough"
	},
	"e-icon-editor-format-textdirection-l-to-r": {
		"name": "e-icon-editor-format-textdirection-l-to-r",
		"title": "Editor Format Textdirection L To R"
	},
	"e-icon-editor-format-textdirection-r-to-l": {
		"name": "e-icon-editor-format-textdirection-r-to-l",
		"title": "Editor Format Textdirection R To L"
	},
	"e-icon-editor-format-underline": {
		"name": "e-icon-editor-format-underline",
		"title": "Editor Format Underline"
	},
	"e-icon-editor-functions": {
		"name": "e-icon-editor-functions",
		"title": "Editor Functions"
	},
	"e-icon-editor-insert-chart": {
		"name": "e-icon-editor-insert-chart",
		"title": "Editor Insert Chart"
	},
	"e-icon-editor-insert-comment": {
		"name": "e-icon-editor-insert-comment",
		"title": "Editor Insert Comment"
	},
	"e-icon-editor-insert-drive-file": {
		"name": "e-icon-editor-insert-drive-file",
		"title": "Editor Insert Drive File"
	},
	"e-icon-editor-insert-emoticon": {
		"name": "e-icon-editor-insert-emoticon",
		"title": "Editor Insert Emoticon"
	},
	"e-icon-editor-insert-invitation": {
		"name": "e-icon-editor-insert-invitation",
		"title": "Editor Insert Invitation"
	},
	"e-icon-editor-insert-link": {
		"name": "e-icon-editor-insert-link",
		"title": "Editor Insert Link"
	},
	"e-icon-editor-insert-photo": {
		"name": "e-icon-editor-insert-photo",
		"title": "Editor Insert Photo"
	},
	"e-icon-editor-merge-type": {
		"name": "e-icon-editor-merge-type",
		"title": "Editor Merge Type"
	},
	"e-icon-editor-mode-comment": {
		"name": "e-icon-editor-mode-comment",
		"title": "Editor Mode Comment"
	},
	"e-icon-editor-mode-edit": {
		"name": "e-icon-editor-mode-edit",
		"title": "Editor Mode Edit"
	},
	"e-icon-editor-publish": {
		"name": "e-icon-editor-publish",
		"title": "Editor Publish"
	},
	"e-icon-editor-vertical-align-bottom": {
		"name": "e-icon-editor-vertical-align-bottom",
		"title": "Editor Vertical Align Bottom"
	},
	"e-icon-editor-vertical-align-center": {
		"name": "e-icon-editor-vertical-align-center",
		"title": "Editor Vertical Align Center"
	},
	"e-icon-editor-vertical-align-top": {
		"name": "e-icon-editor-vertical-align-top",
		"title": "Editor Vertical Align Top"
	},
	"e-icon-editor-wrap-text": {
		"name": "e-icon-editor-wrap-text",
		"title": "Editor Wrap Text"
	},
	"e-icon-file-attachment": {
		"name": "e-icon-file-attachment",
		"title": "File Attachment"
	},
	"e-icon-file-cloud": {
		"name": "e-icon-file-cloud",
		"title": "File Cloud"
	},
	"e-icon-file-cloud-circle": {
		"name": "e-icon-file-cloud-circle",
		"title": "File Cloud Circle"
	},
	"e-icon-file-cloud-done": {
		"name": "e-icon-file-cloud-done",
		"title": "File Cloud Done"
	},
	"e-icon-file-cloud-download": {
		"name": "e-icon-file-cloud-download",
		"title": "File Cloud Download"
	},
	"e-icon-file-cloud-off": {
		"name": "e-icon-file-cloud-off",
		"title": "File Cloud Off"
	},
	"e-icon-file-cloud-queue": {
		"name": "e-icon-file-cloud-queue",
		"title": "File Cloud Queue"
	},
	"e-icon-file-cloud-upload": {
		"name": "e-icon-file-cloud-upload",
		"title": "File Cloud Upload"
	},
	"e-icon-file-file-download": {
		"name": "e-icon-file-file-download",
		"title": "File File Download"
	},
	"e-icon-file-file-upload": {
		"name": "e-icon-file-file-upload",
		"title": "File File Upload"
	},
	"e-icon-file-folder": {
		"name": "e-icon-file-folder",
		"title": "File Folder"
	},
	"e-icon-file-folder-open": {
		"name": "e-icon-file-folder-open",
		"title": "File Folder Open"
	},
	"e-icon-file-folder-shared": {
		"name": "e-icon-file-folder-shared",
		"title": "File Folder Shared"
	},
	"e-icon-hardware-cast": {
		"name": "e-icon-hardware-cast",
		"title": "Hardware Cast"
	},
	"e-icon-hardware-cast-connected": {
		"name": "e-icon-hardware-cast-connected",
		"title": "Hardware Cast Connected"
	},
	"e-icon-hardware-computer": {
		"name": "e-icon-hardware-computer",
		"title": "Hardware Computer"
	},
	"e-icon-hardware-desktop-mac": {
		"name": "e-icon-hardware-desktop-mac",
		"title": "Hardware Desktop Mac"
	},
	"e-icon-hardware-desktop-windows": {
		"name": "e-icon-hardware-desktop-windows",
		"title": "Hardware Desktop Windows"
	},
	"e-icon-hardware-dock": {
		"name": "e-icon-hardware-dock",
		"title": "Hardware Dock"
	},
	"e-icon-hardware-gamepad": {
		"name": "e-icon-hardware-gamepad",
		"title": "Hardware Gamepad"
	},
	"e-icon-hardware-headset": {
		"name": "e-icon-hardware-headset",
		"title": "Hardware Headset"
	},
	"e-icon-hardware-headset-mic": {
		"name": "e-icon-hardware-headset-mic",
		"title": "Hardware Headset Mic"
	},
	"e-icon-hardware-keyboard": {
		"name": "e-icon-hardware-keyboard",
		"title": "Hardware Keyboard"
	},
	"e-icon-hardware-keyboard-alt": {
		"name": "e-icon-hardware-keyboard-alt",
		"title": "Hardware Keyboard Alt"
	},
	"e-icon-hardware-keyboard-arrow-down": {
		"name": "e-icon-hardware-keyboard-arrow-down",
		"title": "Hardware Keyboard Arrow Down"
	},
	"e-icon-hardware-keyboard-arrow-left": {
		"name": "e-icon-hardware-keyboard-arrow-left",
		"title": "Hardware Keyboard Arrow Left"
	},
	"e-icon-hardware-keyboard-arrow-right": {
		"name": "e-icon-hardware-keyboard-arrow-right",
		"title": "Hardware Keyboard Arrow Right"
	},
	"e-icon-hardware-keyboard-arrow-up": {
		"name": "e-icon-hardware-keyboard-arrow-up",
		"title": "Hardware Keyboard Arrow Up"
	},
	"e-icon-hardware-keyboard-backspace": {
		"name": "e-icon-hardware-keyboard-backspace",
		"title": "Hardware Keyboard Backspace"
	},
	"e-icon-hardware-keyboard-capslock": {
		"name": "e-icon-hardware-keyboard-capslock",
		"title": "Hardware Keyboard Capslock"
	},
	"e-icon-hardware-keyboard-control": {
		"name": "e-icon-hardware-keyboard-control",
		"title": "Hardware Keyboard Control"
	},
	"e-icon-hardware-keyboard-hide": {
		"name": "e-icon-hardware-keyboard-hide",
		"title": "Hardware Keyboard Hide"
	},
	"e-icon-hardware-keyboard-return": {
		"name": "e-icon-hardware-keyboard-return",
		"title": "Hardware Keyboard Return"
	},
	"e-icon-hardware-keyboard-tab": {
		"name": "e-icon-hardware-keyboard-tab",
		"title": "Hardware Keyboard Tab"
	},
	"e-icon-hardware-keyboard-voice": {
		"name": "e-icon-hardware-keyboard-voice",
		"title": "Hardware Keyboard Voice"
	},
	"e-icon-hardware-laptop": {
		"name": "e-icon-hardware-laptop",
		"title": "Hardware Laptop"
	},
	"e-icon-hardware-laptop-chromebook": {
		"name": "e-icon-hardware-laptop-chromebook",
		"title": "Hardware Laptop Chromebook"
	},
	"e-icon-hardware-laptop-mac": {
		"name": "e-icon-hardware-laptop-mac",
		"title": "Hardware Laptop Mac"
	},
	"e-icon-hardware-laptop-windows": {
		"name": "e-icon-hardware-laptop-windows",
		"title": "Hardware Laptop Windows"
	},
	"e-icon-hardware-memory": {
		"name": "e-icon-hardware-memory",
		"title": "Hardware Memory"
	},
	"e-icon-hardware-mouse": {
		"name": "e-icon-hardware-mouse",
		"title": "Hardware Mouse"
	},
	"e-icon-hardware-phone-android": {
		"name": "e-icon-hardware-phone-android",
		"title": "Hardware Phone Android"
	},
	"e-icon-hardware-phone-iphone": {
		"name": "e-icon-hardware-phone-iphone",
		"title": "Hardware Phone Iphone"
	},
	"e-icon-hardware-phonelink": {
		"name": "e-icon-hardware-phonelink",
		"title": "Hardware Phonelink"
	},
	"e-icon-hardware-phonelink-off": {
		"name": "e-icon-hardware-phonelink-off",
		"title": "Hardware Phonelink Off"
	},
	"e-icon-hardware-security": {
		"name": "e-icon-hardware-security",
		"title": "Hardware Security"
	},
	"e-icon-hardware-sim-card": {
		"name": "e-icon-hardware-sim-card",
		"title": "Hardware Sim Card"
	},
	"e-icon-hardware-smartphone": {
		"name": "e-icon-hardware-smartphone",
		"title": "Hardware Smartphone"
	},
	"e-icon-hardware-speaker": {
		"name": "e-icon-hardware-speaker",
		"title": "Hardware Speaker"
	},
	"e-icon-hardware-tablet": {
		"name": "e-icon-hardware-tablet",
		"title": "Hardware Tablet"
	},
	"e-icon-hardware-tablet-android": {
		"name": "e-icon-hardware-tablet-android",
		"title": "Hardware Tablet Android"
	},
	"e-icon-hardware-tablet-mac": {
		"name": "e-icon-hardware-tablet-mac",
		"title": "Hardware Tablet Mac"
	},
	"e-icon-hardware-tv": {
		"name": "e-icon-hardware-tv",
		"title": "Hardware Tv"
	},
	"e-icon-hardware-watch": {
		"name": "e-icon-hardware-watch",
		"title": "Hardware Watch"
	},
	"e-icon-image-add-to-photos": {
		"name": "e-icon-image-add-to-photos",
		"title": "Image Add To Photos"
	},
	"e-icon-image-adjust": {
		"name": "e-icon-image-adjust",
		"title": "Image Adjust"
	},
	"e-icon-image-assistant-photo": {
		"name": "e-icon-image-assistant-photo",
		"title": "Image Assistant Photo"
	},
	"e-icon-image-audiotrack": {
		"name": "e-icon-image-audiotrack",
		"title": "Image Audiotrack"
	},
	"e-icon-image-blur-circular": {
		"name": "e-icon-image-blur-circular",
		"title": "Image Blur Circular"
	},
	"e-icon-image-blur-linear": {
		"name": "e-icon-image-blur-linear",
		"title": "Image Blur Linear"
	},
	"e-icon-image-blur-off": {
		"name": "e-icon-image-blur-off",
		"title": "Image Blur Off"
	},
	"e-icon-image-blur-on": {
		"name": "e-icon-image-blur-on",
		"title": "Image Blur On"
	},
	"e-icon-image-brightness-1": {
		"name": "e-icon-image-brightness-1",
		"title": "Image Brightness 1"
	},
	"e-icon-image-brightness-2": {
		"name": "e-icon-image-brightness-2",
		"title": "Image Brightness 2"
	},
	"e-icon-image-brightness-3": {
		"name": "e-icon-image-brightness-3",
		"title": "Image Brightness 3"
	},
	"e-icon-image-brightness-4": {
		"name": "e-icon-image-brightness-4",
		"title": "Image Brightness 4"
	},
	"e-icon-image-brightness-5": {
		"name": "e-icon-image-brightness-5",
		"title": "Image Brightness 5"
	},
	"e-icon-image-brightness-6": {
		"name": "e-icon-image-brightness-6",
		"title": "Image Brightness 6"
	},
	"e-icon-image-brightness-7": {
		"name": "e-icon-image-brightness-7",
		"title": "Image Brightness 7"
	},
	"e-icon-image-brush": {
		"name": "e-icon-image-brush",
		"title": "Image Brush"
	},
	"e-icon-image-camera": {
		"name": "e-icon-image-camera",
		"title": "Image Camera"
	},
	"e-icon-image-camera-alt": {
		"name": "e-icon-image-camera-alt",
		"title": "Image Camera Alt"
	},
	"e-icon-image-camera-front": {
		"name": "e-icon-image-camera-front",
		"title": "Image Camera Front"
	},
	"e-icon-image-camera-rear": {
		"name": "e-icon-image-camera-rear",
		"title": "Image Camera Rear"
	},
	"e-icon-image-camera-roll": {
		"name": "e-icon-image-camera-roll",
		"title": "Image Camera Roll"
	},
	"e-icon-image-center-focus-strong": {
		"name": "e-icon-image-center-focus-strong",
		"title": "Image Center Focus Strong"
	},
	"e-icon-image-center-focus-weak": {
		"name": "e-icon-image-center-focus-weak",
		"title": "Image Center Focus Weak"
	},
	"e-icon-image-collections": {
		"name": "e-icon-image-collections",
		"title": "Image Collections"
	},
	"e-icon-image-color-lens": {
		"name": "e-icon-image-color-lens",
		"title": "Image Color Lens"
	},
	"e-icon-image-colorize": {
		"name": "e-icon-image-colorize",
		"title": "Image Colorize"
	},
	"e-icon-image-compare": {
		"name": "e-icon-image-compare",
		"title": "Image Compare"
	},
	"e-icon-image-control-point": {
		"name": "e-icon-image-control-point",
		"title": "Image Control Point"
	},
	"e-icon-image-control-point-duplicate": {
		"name": "e-icon-image-control-point-duplicate",
		"title": "Image Control Point Duplicate"
	},
	"e-icon-image-crop-16-9": {
		"name": "e-icon-image-crop-16-9",
		"title": "Image Crop 16 9"
	},
	"e-icon-image-crop": {
		"name": "e-icon-image-crop",
		"title": "Image Crop"
	},
	"e-icon-image-crop-3-2": {
		"name": "e-icon-image-crop-3-2",
		"title": "Image Crop 3 2"
	},
	"e-icon-image-crop-5-4": {
		"name": "e-icon-image-crop-5-4",
		"title": "Image Crop 5 4"
	},
	"e-icon-image-crop-7-5": {
		"name": "e-icon-image-crop-7-5",
		"title": "Image Crop 7 5"
	},
	"e-icon-image-crop-din": {
		"name": "e-icon-image-crop-din",
		"title": "Image Crop Din"
	},
	"e-icon-image-crop-free": {
		"name": "e-icon-image-crop-free",
		"title": "Image Crop Free"
	},
	"e-icon-image-crop-landscape": {
		"name": "e-icon-image-crop-landscape",
		"title": "Image Crop Landscape"
	},
	"e-icon-image-crop-original": {
		"name": "e-icon-image-crop-original",
		"title": "Image Crop Original"
	},
	"e-icon-image-crop-portrait": {
		"name": "e-icon-image-crop-portrait",
		"title": "Image Crop Portrait"
	},
	"e-icon-image-crop-square": {
		"name": "e-icon-image-crop-square",
		"title": "Image Crop Square"
	},
	"e-icon-image-dehaze": {
		"name": "e-icon-image-dehaze",
		"title": "Image Dehaze"
	},
	"e-icon-image-details": {
		"name": "e-icon-image-details",
		"title": "Image Details"
	},
	"e-icon-image-edit": {
		"name": "e-icon-image-edit",
		"title": "Image Edit"
	},
	"e-icon-image-exposure": {
		"name": "e-icon-image-exposure",
		"title": "Image Exposure"
	},
	"e-icon-image-exposure-minus-1": {
		"name": "e-icon-image-exposure-minus-1",
		"title": "Image Exposure Minus 1"
	},
	"e-icon-image-exposure-minus-2": {
		"name": "e-icon-image-exposure-minus-2",
		"title": "Image Exposure Minus 2"
	},
	"e-icon-image-exposure-plus-1": {
		"name": "e-icon-image-exposure-plus-1",
		"title": "Image Exposure Plus 1"
	},
	"e-icon-image-exposure-plus-2": {
		"name": "e-icon-image-exposure-plus-2",
		"title": "Image Exposure Plus 2"
	},
	"e-icon-image-exposure-zero": {
		"name": "e-icon-image-exposure-zero",
		"title": "Image Exposure Zero"
	},
	"e-icon-image-filter-1": {
		"name": "e-icon-image-filter-1",
		"title": "Image Filter 1"
	},
	"e-icon-image-filter": {
		"name": "e-icon-image-filter",
		"title": "Image Filter"
	},
	"e-icon-image-filter-2": {
		"name": "e-icon-image-filter-2",
		"title": "Image Filter 2"
	},
	"e-icon-image-filter-3": {
		"name": "e-icon-image-filter-3",
		"title": "Image Filter 3"
	},
	"e-icon-image-filter-4": {
		"name": "e-icon-image-filter-4",
		"title": "Image Filter 4"
	},
	"e-icon-image-filter-5": {
		"name": "e-icon-image-filter-5",
		"title": "Image Filter 5"
	},
	"e-icon-image-filter-6": {
		"name": "e-icon-image-filter-6",
		"title": "Image Filter 6"
	},
	"e-icon-image-filter-7": {
		"name": "e-icon-image-filter-7",
		"title": "Image Filter 7"
	},
	"e-icon-image-filter-8": {
		"name": "e-icon-image-filter-8",
		"title": "Image Filter 8"
	},
	"e-icon-image-filter-9": {
		"name": "e-icon-image-filter-9",
		"title": "Image Filter 9"
	},
	"e-icon-image-filter-9-plus": {
		"name": "e-icon-image-filter-9-plus",
		"title": "Image Filter 9 Plus"
	},
	"e-icon-image-filter-b-and-w": {
		"name": "e-icon-image-filter-b-and-w",
		"title": "Image Filter B And W"
	},
	"e-icon-image-filter-center-focus": {
		"name": "e-icon-image-filter-center-focus",
		"title": "Image Filter Center Focus"
	},
	"e-icon-image-filter-drama": {
		"name": "e-icon-image-filter-drama",
		"title": "Image Filter Drama"
	},
	"e-icon-image-filter-frames": {
		"name": "e-icon-image-filter-frames",
		"title": "Image Filter Frames"
	},
	"e-icon-image-filter-hdr": {
		"name": "e-icon-image-filter-hdr",
		"title": "Image Filter Hdr"
	},
	"e-icon-image-filter-none": {
		"name": "e-icon-image-filter-none",
		"title": "Image Filter None"
	},
	"e-icon-image-filter-tilt-shift": {
		"name": "e-icon-image-filter-tilt-shift",
		"title": "Image Filter Tilt Shift"
	},
	"e-icon-image-filter-vintage": {
		"name": "e-icon-image-filter-vintage",
		"title": "Image Filter Vintage"
	},
	"e-icon-image-flare": {
		"name": "e-icon-image-flare",
		"title": "Image Flare"
	},
	"e-icon-image-flash-auto": {
		"name": "e-icon-image-flash-auto",
		"title": "Image Flash Auto"
	},
	"e-icon-image-flash-off": {
		"name": "e-icon-image-flash-off",
		"title": "Image Flash Off"
	},
	"e-icon-image-flash-on": {
		"name": "e-icon-image-flash-on",
		"title": "Image Flash On"
	},
	"e-icon-image-flip": {
		"name": "e-icon-image-flip",
		"title": "Image Flip"
	},
	"e-icon-image-gradient": {
		"name": "e-icon-image-gradient",
		"title": "Image Gradient"
	},
	"e-icon-image-grain": {
		"name": "e-icon-image-grain",
		"title": "Image Grain"
	},
	"e-icon-image-grid-off": {
		"name": "e-icon-image-grid-off",
		"title": "Image Grid Off"
	},
	"e-icon-image-grid-on": {
		"name": "e-icon-image-grid-on",
		"title": "Image Grid On"
	},
	"e-icon-image-hdr-off": {
		"name": "e-icon-image-hdr-off",
		"title": "Image Hdr Off"
	},
	"e-icon-image-hdr-on": {
		"name": "e-icon-image-hdr-on",
		"title": "Image Hdr On"
	},
	"e-icon-image-hdr-strong": {
		"name": "e-icon-image-hdr-strong",
		"title": "Image Hdr Strong"
	},
	"e-icon-image-hdr-weak": {
		"name": "e-icon-image-hdr-weak",
		"title": "Image Hdr Weak"
	},
	"e-icon-image-healing": {
		"name": "e-icon-image-healing",
		"title": "Image Healing"
	},
	"e-icon-image-image": {
		"name": "e-icon-image-image",
		"title": "Image Image"
	},
	"e-icon-image-image-aspect-ratio": {
		"name": "e-icon-image-image-aspect-ratio",
		"title": "Image Image Aspect Ratio"
	},
	"e-icon-image-iso": {
		"name": "e-icon-image-iso",
		"title": "Image Iso"
	},
	"e-icon-image-landscape": {
		"name": "e-icon-image-landscape",
		"title": "Image Landscape"
	},
	"e-icon-image-leak-add": {
		"name": "e-icon-image-leak-add",
		"title": "Image Leak Add"
	},
	"e-icon-image-leak-remove": {
		"name": "e-icon-image-leak-remove",
		"title": "Image Leak Remove"
	},
	"e-icon-image-lens": {
		"name": "e-icon-image-lens",
		"title": "Image Lens"
	},
	"e-icon-image-looks": {
		"name": "e-icon-image-looks",
		"title": "Image Looks"
	},
	"e-icon-image-looks-3": {
		"name": "e-icon-image-looks-3",
		"title": "Image Looks 3"
	},
	"e-icon-image-looks-4": {
		"name": "e-icon-image-looks-4",
		"title": "Image Looks 4"
	},
	"e-icon-image-looks-5": {
		"name": "e-icon-image-looks-5",
		"title": "Image Looks 5"
	},
	"e-icon-image-looks-6": {
		"name": "e-icon-image-looks-6",
		"title": "Image Looks 6"
	},
	"e-icon-image-looks-one": {
		"name": "e-icon-image-looks-one",
		"title": "Image Looks One"
	},
	"e-icon-image-looks-two": {
		"name": "e-icon-image-looks-two",
		"title": "Image Looks Two"
	},
	"e-icon-image-loupe": {
		"name": "e-icon-image-loupe",
		"title": "Image Loupe"
	},
	"e-icon-image-movie-creation": {
		"name": "e-icon-image-movie-creation",
		"title": "Image Movie Creation"
	},
	"e-icon-image-nature": {
		"name": "e-icon-image-nature",
		"title": "Image Nature"
	},
	"e-icon-image-nature-people": {
		"name": "e-icon-image-nature-people",
		"title": "Image Nature People"
	},
	"e-icon-image-navigate-before": {
		"name": "e-icon-image-navigate-before",
		"title": "Image Navigate Before"
	},
	"e-icon-image-navigate-next": {
		"name": "e-icon-image-navigate-next",
		"title": "Image Navigate Next"
	},
	"e-icon-image-palette": {
		"name": "e-icon-image-palette",
		"title": "Image Palette"
	},
	"e-icon-image-panorama": {
		"name": "e-icon-image-panorama",
		"title": "Image Panorama"
	},
	"e-icon-image-panorama-fisheye": {
		"name": "e-icon-image-panorama-fisheye",
		"title": "Image Panorama Fisheye"
	},
	"e-icon-image-panorama-horizontal": {
		"name": "e-icon-image-panorama-horizontal",
		"title": "Image Panorama Horizontal"
	},
	"e-icon-image-panorama-vertical": {
		"name": "e-icon-image-panorama-vertical",
		"title": "Image Panorama Vertical"
	},
	"e-icon-image-panorama-wide-angle": {
		"name": "e-icon-image-panorama-wide-angle",
		"title": "Image Panorama Wide Angle"
	},
	"e-icon-image-photo": {
		"name": "e-icon-image-photo",
		"title": "Image Photo"
	},
	"e-icon-image-photo-album": {
		"name": "e-icon-image-photo-album",
		"title": "Image Photo Album"
	},
	"e-icon-image-photo-camera": {
		"name": "e-icon-image-photo-camera",
		"title": "Image Photo Camera"
	},
	"e-icon-image-photo-library": {
		"name": "e-icon-image-photo-library",
		"title": "Image Photo Library"
	},
	"e-icon-image-portrait": {
		"name": "e-icon-image-portrait",
		"title": "Image Portrait"
	},
	"e-icon-image-remove-red-eye": {
		"name": "e-icon-image-remove-red-eye",
		"title": "Image Remove Red Eye"
	},
	"e-icon-image-rotate-left": {
		"name": "e-icon-image-rotate-left",
		"title": "Image Rotate Left"
	},
	"e-icon-image-rotate-right": {
		"name": "e-icon-image-rotate-right",
		"title": "Image Rotate Right"
	},
	"e-icon-image-slideshow": {
		"name": "e-icon-image-slideshow",
		"title": "Image Slideshow"
	},
	"e-icon-image-straighten": {
		"name": "e-icon-image-straighten",
		"title": "Image Straighten"
	},
	"e-icon-image-style": {
		"name": "e-icon-image-style",
		"title": "Image Style"
	},
	"e-icon-image-switch-camera": {
		"name": "e-icon-image-switch-camera",
		"title": "Image Switch Camera"
	},
	"e-icon-image-switch-video": {
		"name": "e-icon-image-switch-video",
		"title": "Image Switch Video"
	},
	"e-icon-image-tag-faces": {
		"name": "e-icon-image-tag-faces",
		"title": "Image Tag Faces"
	},
	"e-icon-image-texture": {
		"name": "e-icon-image-texture",
		"title": "Image Texture"
	},
	"e-icon-image-timelapse": {
		"name": "e-icon-image-timelapse",
		"title": "Image Timelapse"
	},
	"e-icon-image-timer-10": {
		"name": "e-icon-image-timer-10",
		"title": "Image Timer 10"
	},
	"e-icon-image-timer": {
		"name": "e-icon-image-timer",
		"title": "Image Timer"
	},
	"e-icon-image-timer-3": {
		"name": "e-icon-image-timer-3",
		"title": "Image Timer 3"
	},
	"e-icon-image-timer-auto": {
		"name": "e-icon-image-timer-auto",
		"title": "Image Timer Auto"
	},
	"e-icon-image-timer-off": {
		"name": "e-icon-image-timer-off",
		"title": "Image Timer Off"
	},
	"e-icon-image-tonality": {
		"name": "e-icon-image-tonality",
		"title": "Image Tonality"
	},
	"e-icon-image-transform": {
		"name": "e-icon-image-transform",
		"title": "Image Transform"
	},
	"e-icon-image-tune": {
		"name": "e-icon-image-tune",
		"title": "Image Tune"
	},
	"e-icon-image-wb-auto": {
		"name": "e-icon-image-wb-auto",
		"title": "Image Wb Auto"
	},
	"e-icon-image-wb-cloudy": {
		"name": "e-icon-image-wb-cloudy",
		"title": "Image Wb Cloudy"
	},
	"e-icon-image-wb-incandescent": {
		"name": "e-icon-image-wb-incandescent",
		"title": "Image Wb Incandescent"
	},
	"e-icon-image-wb-irradescent": {
		"name": "e-icon-image-wb-irradescent",
		"title": "Image Wb Irradescent"
	},
	"e-icon-image-wb-sunny": {
		"name": "e-icon-image-wb-sunny",
		"title": "Image Wb Sunny"
	},
	"e-icon-maps-beenhere": {
		"name": "e-icon-maps-beenhere",
		"title": "Maps Beenhere"
	},
	"e-icon-maps-directions": {
		"name": "e-icon-maps-directions",
		"title": "Maps Directions"
	},
	"e-icon-maps-directions-bike": {
		"name": "e-icon-maps-directions-bike",
		"title": "Maps Directions Bike"
	},
	"e-icon-maps-directions-bus": {
		"name": "e-icon-maps-directions-bus",
		"title": "Maps Directions Bus"
	},
	"e-icon-maps-directions-car": {
		"name": "e-icon-maps-directions-car",
		"title": "Maps Directions Car"
	},
	"e-icon-maps-directions-ferry": {
		"name": "e-icon-maps-directions-ferry",
		"title": "Maps Directions Ferry"
	},
	"e-icon-maps-directions-subway": {
		"name": "e-icon-maps-directions-subway",
		"title": "Maps Directions Subway"
	},
	"e-icon-maps-directions-train": {
		"name": "e-icon-maps-directions-train",
		"title": "Maps Directions Train"
	},
	"e-icon-maps-directions-transit": {
		"name": "e-icon-maps-directions-transit",
		"title": "Maps Directions Transit"
	},
	"e-icon-maps-directions-walk": {
		"name": "e-icon-maps-directions-walk",
		"title": "Maps Directions Walk"
	},
	"e-icon-maps-flight": {
		"name": "e-icon-maps-flight",
		"title": "Maps Flight"
	},
	"e-icon-maps-hotel": {
		"name": "e-icon-maps-hotel",
		"title": "Maps Hotel"
	},
	"e-icon-maps-layers": {
		"name": "e-icon-maps-layers",
		"title": "Maps Layers"
	},
	"e-icon-maps-layers-clear": {
		"name": "e-icon-maps-layers-clear",
		"title": "Maps Layers Clear"
	},
	"e-icon-maps-local-airport": {
		"name": "e-icon-maps-local-airport",
		"title": "Maps Local Airport"
	},
	"e-icon-maps-local-atm": {
		"name": "e-icon-maps-local-atm",
		"title": "Maps Local Atm"
	},
	"e-icon-maps-local-attraction": {
		"name": "e-icon-maps-local-attraction",
		"title": "Maps Local Attraction"
	},
	"e-icon-maps-local-bar": {
		"name": "e-icon-maps-local-bar",
		"title": "Maps Local Bar"
	},
	"e-icon-maps-local-cafe": {
		"name": "e-icon-maps-local-cafe",
		"title": "Maps Local Cafe"
	},
	"e-icon-maps-local-car-wash": {
		"name": "e-icon-maps-local-car-wash",
		"title": "Maps Local Car Wash"
	},
	"e-icon-maps-local-convenience-store": {
		"name": "e-icon-maps-local-convenience-store",
		"title": "Maps Local Convenience Store"
	},
	"e-icon-maps-local-drink": {
		"name": "e-icon-maps-local-drink",
		"title": "Maps Local Drink"
	},
	"e-icon-maps-local-florist": {
		"name": "e-icon-maps-local-florist",
		"title": "Maps Local Florist"
	},
	"e-icon-maps-local-gas-station": {
		"name": "e-icon-maps-local-gas-station",
		"title": "Maps Local Gas Station"
	},
	"e-icon-maps-local-grocery-store": {
		"name": "e-icon-maps-local-grocery-store",
		"title": "Maps Local Grocery Store"
	},
	"e-icon-maps-local-hospital": {
		"name": "e-icon-maps-local-hospital",
		"title": "Maps Local Hospital"
	},
	"e-icon-maps-local-hotel": {
		"name": "e-icon-maps-local-hotel",
		"title": "Maps Local Hotel"
	},
	"e-icon-maps-local-laundry-service": {
		"name": "e-icon-maps-local-laundry-service",
		"title": "Maps Local Laundry Service"
	},
	"e-icon-maps-local-library": {
		"name": "e-icon-maps-local-library",
		"title": "Maps Local Library"
	},
	"e-icon-maps-local-mall": {
		"name": "e-icon-maps-local-mall",
		"title": "Maps Local Mall"
	},
	"e-icon-maps-local-movies": {
		"name": "e-icon-maps-local-movies",
		"title": "Maps Local Movies"
	},
	"e-icon-maps-local-offer": {
		"name": "e-icon-maps-local-offer",
		"title": "Maps Local Offer"
	},
	"e-icon-maps-local-parking": {
		"name": "e-icon-maps-local-parking",
		"title": "Maps Local Parking"
	},
	"e-icon-maps-local-pharmacy": {
		"name": "e-icon-maps-local-pharmacy",
		"title": "Maps Local Pharmacy"
	},
	"e-icon-maps-local-phone": {
		"name": "e-icon-maps-local-phone",
		"title": "Maps Local Phone"
	},
	"e-icon-maps-local-pizza": {
		"name": "e-icon-maps-local-pizza",
		"title": "Maps Local Pizza"
	},
	"e-icon-maps-local-play": {
		"name": "e-icon-maps-local-play",
		"title": "Maps Local Play"
	},
	"e-icon-maps-local-post-office": {
		"name": "e-icon-maps-local-post-office",
		"title": "Maps Local Post Office"
	},
	"e-icon-maps-local-print-shop": {
		"name": "e-icon-maps-local-print-shop",
		"title": "Maps Local Print Shop"
	},
	"e-icon-maps-local-restaurant": {
		"name": "e-icon-maps-local-restaurant",
		"title": "Maps Local Restaurant"
	},
	"e-icon-maps-local-see": {
		"name": "e-icon-maps-local-see",
		"title": "Maps Local See"
	},
	"e-icon-maps-local-shipping": {
		"name": "e-icon-maps-local-shipping",
		"title": "Maps Local Shipping"
	},
	"e-icon-maps-local-taxi": {
		"name": "e-icon-maps-local-taxi",
		"title": "Maps Local Taxi"
	},
	"e-icon-maps-location-history": {
		"name": "e-icon-maps-location-history",
		"title": "Maps Location History"
	},
	"e-icon-maps-map": {
		"name": "e-icon-maps-map",
		"title": "Maps Map"
	},
	"e-icon-maps-my-location": {
		"name": "e-icon-maps-my-location",
		"title": "Maps My Location"
	},
	"e-icon-maps-navigation": {
		"name": "e-icon-maps-navigation",
		"title": "Maps Navigation"
	},
	"e-icon-maps-pin-drop": {
		"name": "e-icon-maps-pin-drop",
		"title": "Maps Pin Drop"
	},
	"e-icon-maps-place": {
		"name": "e-icon-maps-place",
		"title": "Maps Place"
	},
	"e-icon-maps-rate-review": {
		"name": "e-icon-maps-rate-review",
		"title": "Maps Rate Review"
	},
	"e-icon-maps-restaurant-menu": {
		"name": "e-icon-maps-restaurant-menu",
		"title": "Maps Restaurant Menu"
	},
	"e-icon-maps-satellite": {
		"name": "e-icon-maps-satellite",
		"title": "Maps Satellite"
	},
	"e-icon-maps-store-mall-directory": {
		"name": "e-icon-maps-store-mall-directory",
		"title": "Maps Store Mall Directory"
	},
	"e-icon-maps-terrain": {
		"name": "e-icon-maps-terrain",
		"title": "Maps Terrain"
	},
	"e-icon-maps-traffic": {
		"name": "e-icon-maps-traffic",
		"title": "Maps Traffic"
	},
	"e-icon-navigation-apps": {
		"name": "e-icon-navigation-apps",
		"title": "Navigation Apps"
	},
	"e-icon-navigation-arrow-back": {
		"name": "e-icon-navigation-arrow-back",
		"title": "Navigation Arrow Back"
	},
	"e-icon-navigation-arrow-drop-down": {
		"name": "e-icon-navigation-arrow-drop-down",
		"title": "Navigation Arrow Drop Down"
	},
	"e-icon-navigation-arrow-drop-down-circle": {
		"name": "e-icon-navigation-arrow-drop-down-circle",
		"title": "Navigation Arrow Drop Down Circle"
	},
	"e-icon-navigation-arrow-drop-up": {
		"name": "e-icon-navigation-arrow-drop-up",
		"title": "Navigation Arrow Drop Up"
	},
	"e-icon-navigation-arrow-forward": {
		"name": "e-icon-navigation-arrow-forward",
		"title": "Navigation Arrow Forward"
	},
	"e-icon-navigation-cancel": {
		"name": "e-icon-navigation-cancel",
		"title": "Navigation Cancel"
	},
	"e-icon-navigation-check": {
		"name": "e-icon-navigation-check",
		"title": "Navigation Check"
	},
	"e-icon-navigation-chevron-left": {
		"name": "e-icon-navigation-chevron-left",
		"title": "Navigation Chevron Left"
	},
	"e-icon-navigation-chevron-right": {
		"name": "e-icon-navigation-chevron-right",
		"title": "Navigation Chevron Right"
	},
	"e-icon-navigation-close": {
		"name": "e-icon-navigation-close",
		"title": "Navigation Close"
	},
	"e-icon-navigation-expand-less": {
		"name": "e-icon-navigation-expand-less",
		"title": "Navigation Expand Less"
	},
	"e-icon-navigation-expand-more": {
		"name": "e-icon-navigation-expand-more",
		"title": "Navigation Expand More"
	},
	"e-icon-navigation-fullscreen": {
		"name": "e-icon-navigation-fullscreen",
		"title": "Navigation Fullscreen"
	},
	"e-icon-navigation-fullscreen-exit": {
		"name": "e-icon-navigation-fullscreen-exit",
		"title": "Navigation Fullscreen Exit"
	},
	"e-icon-navigation-more-horiz": {
		"name": "e-icon-navigation-more-horiz",
		"title": "Navigation More Horiz"
	},
	"e-icon-navigation-more-vert": {
		"name": "e-icon-navigation-more-vert",
		"title": "Navigation More Vert"
	},
	"e-icon-navigation-refresh": {
		"name": "e-icon-navigation-refresh",
		"title": "Navigation Refresh"
	},
	"e-icon-navigation-unfold-less": {
		"name": "e-icon-navigation-unfold-less",
		"title": "Navigation Unfold Less"
	},
	"e-icon-navigation-unfold-more": {
		"name": "e-icon-navigation-unfold-more",
		"title": "Navigation Unfold More"
	},
	"e-icon-notification-adb": {
		"name": "e-icon-notification-adb",
		"title": "Notification Adb"
	},
	"e-icon-notification-bluetooth-audio": {
		"name": "e-icon-notification-bluetooth-audio",
		"title": "Notification Bluetooth Audio"
	},
	"e-icon-notification-disc-full": {
		"name": "e-icon-notification-disc-full",
		"title": "Notification Disc Full"
	},
	"e-icon-notification-dnd-forwardslash": {
		"name": "e-icon-notification-dnd-forwardslash",
		"title": "Notification Dnd Forwardslash"
	},
	"e-icon-notification-do-not-disturb": {
		"name": "e-icon-notification-do-not-disturb",
		"title": "Notification Do Not Disturb"
	},
	"e-icon-notification-drive-eta": {
		"name": "e-icon-notification-drive-eta",
		"title": "Notification Drive Eta"
	},
	"e-icon-notification-event-available": {
		"name": "e-icon-notification-event-available",
		"title": "Notification Event Available"
	},
	"e-icon-notification-event-busy": {
		"name": "e-icon-notification-event-busy",
		"title": "Notification Event Busy"
	},
	"e-icon-notification-event-note": {
		"name": "e-icon-notification-event-note",
		"title": "Notification Event Note"
	},
	"e-icon-notification-folder-special": {
		"name": "e-icon-notification-folder-special",
		"title": "Notification Folder Special"
	},
	"e-icon-notification-mms": {
		"name": "e-icon-notification-mms",
		"title": "Notification Mms"
	},
	"e-icon-notification-more": {
		"name": "e-icon-notification-more",
		"title": "Notification More"
	},
	"e-icon-notification-network-locked": {
		"name": "e-icon-notification-network-locked",
		"title": "Notification Network Locked"
	},
	"e-icon-notification-phone-bluetooth-speaker": {
		"name": "e-icon-notification-phone-bluetooth-speaker",
		"title": "Notification Phone Bluetooth Speaker"
	},
	"e-icon-notification-phone-forwarded": {
		"name": "e-icon-notification-phone-forwarded",
		"title": "Notification Phone Forwarded"
	},
	"e-icon-notification-phone-in-talk": {
		"name": "e-icon-notification-phone-in-talk",
		"title": "Notification Phone In Talk"
	},
	"e-icon-notification-phone-locked": {
		"name": "e-icon-notification-phone-locked",
		"title": "Notification Phone Locked"
	},
	"e-icon-notification-phone-missed": {
		"name": "e-icon-notification-phone-missed",
		"title": "Notification Phone Missed"
	},
	"e-icon-notification-phone-paused": {
		"name": "e-icon-notification-phone-paused",
		"title": "Notification Phone Paused"
	},
	"e-icon-notification-play-download": {
		"name": "e-icon-notification-play-download",
		"title": "Notification Play Download"
	},
	"e-icon-notification-play-install": {
		"name": "e-icon-notification-play-install",
		"title": "Notification Play Install"
	},
	"e-icon-notification-sd-card": {
		"name": "e-icon-notification-sd-card",
		"title": "Notification Sd Card"
	},
	"e-icon-notification-sim-card-alert": {
		"name": "e-icon-notification-sim-card-alert",
		"title": "Notification Sim Card Alert"
	},
	"e-icon-notification-sms": {
		"name": "e-icon-notification-sms",
		"title": "Notification Sms"
	},
	"e-icon-notification-sms-failed": {
		"name": "e-icon-notification-sms-failed",
		"title": "Notification Sms Failed"
	},
	"e-icon-notification-sync": {
		"name": "e-icon-notification-sync",
		"title": "Notification Sync"
	},
	"e-icon-notification-sync-disabled": {
		"name": "e-icon-notification-sync-disabled",
		"title": "Notification Sync Disabled"
	},
	"e-icon-notification-sync-problem": {
		"name": "e-icon-notification-sync-problem",
		"title": "Notification Sync Problem"
	},
	"e-icon-notification-system-update": {
		"name": "e-icon-notification-system-update",
		"title": "Notification System Update"
	},
	"e-icon-notification-tap-and-play": {
		"name": "e-icon-notification-tap-and-play",
		"title": "Notification Tap And Play"
	},
	"e-icon-notification-time-to-leave": {
		"name": "e-icon-notification-time-to-leave",
		"title": "Notification Time To Leave"
	},
	"e-icon-notification-vibration": {
		"name": "e-icon-notification-vibration",
		"title": "Notification Vibration"
	},
	"e-icon-notification-voice-chat": {
		"name": "e-icon-notification-voice-chat",
		"title": "Notification Voice Chat"
	},
	"e-icon-notification-vpn-lock": {
		"name": "e-icon-notification-vpn-lock",
		"title": "Notification Vpn Lock"
	},
	"e-icon-social-cake": {
		"name": "e-icon-social-cake",
		"title": "Social Cake"
	},
	"e-icon-social-domain": {
		"name": "e-icon-social-domain",
		"title": "Social Domain"
	},
	"e-icon-social-group": {
		"name": "e-icon-social-group",
		"title": "Social Group"
	},
	"e-icon-social-group-add": {
		"name": "e-icon-social-group-add",
		"title": "Social Group Add"
	},
	"e-icon-social-location-city": {
		"name": "e-icon-social-location-city",
		"title": "Social Location City"
	},
	"e-icon-social-mood": {
		"name": "e-icon-social-mood",
		"title": "Social Mood"
	},
	"e-icon-social-notifications": {
		"name": "e-icon-social-notifications",
		"title": "Social Notifications"
	},
	"e-icon-social-notifications-none": {
		"name": "e-icon-social-notifications-none",
		"title": "Social Notifications None"
	},
	"e-icon-social-notifications-off": {
		"name": "e-icon-social-notifications-off",
		"title": "Social Notifications Off"
	},
	"e-icon-social-notifications-on": {
		"name": "e-icon-social-notifications-on",
		"title": "Social Notifications On"
	},
	"e-icon-social-notifications-paused": {
		"name": "e-icon-social-notifications-paused",
		"title": "Social Notifications Paused"
	},
	"e-icon-social-pages": {
		"name": "e-icon-social-pages",
		"title": "Social Pages"
	},
	"e-icon-social-party-mode": {
		"name": "e-icon-social-party-mode",
		"title": "Social Party Mode"
	},
	"e-icon-social-people": {
		"name": "e-icon-social-people",
		"title": "Social People"
	},
	"e-icon-social-people-outline": {
		"name": "e-icon-social-people-outline",
		"title": "Social People Outline"
	},
	"e-icon-social-person": {
		"name": "e-icon-social-person",
		"title": "Social Person"
	},
	"e-icon-social-person-add": {
		"name": "e-icon-social-person-add",
		"title": "Social Person Add"
	},
	"e-icon-social-person-outline": {
		"name": "e-icon-social-person-outline",
		"title": "Social Person Outline"
	},
	"e-icon-social-plus-one": {
		"name": "e-icon-social-plus-one",
		"title": "Social Plus One"
	},
	"e-icon-social-poll": {
		"name": "e-icon-social-poll",
		"title": "Social Poll"
	},
	"e-icon-social-public": {
		"name": "e-icon-social-public",
		"title": "Social Public"
	},
	"e-icon-social-school": {
		"name": "e-icon-social-school",
		"title": "Social School"
	},
	"e-icon-social-share": {
		"name": "e-icon-social-share",
		"title": "Social Share"
	},
	"e-icon-social-whatshot": {
		"name": "e-icon-social-whatshot",
		"title": "Social Whatshot"
	},
	"e-icon-toggle-check-box": {
		"name": "e-icon-toggle-check-box",
		"title": "Toggle Check Box"
	},
	"e-icon-toggle-check-box-outline-blank": {
		"name": "e-icon-toggle-check-box-outline-blank",
		"title": "Toggle Check Box Outline Blank"
	},
	"e-icon-toggle-radio-button-off": {
		"name": "e-icon-toggle-radio-button-off",
		"title": "Toggle Radio Button Off"
	},
	"e-icon-toggle-radio-button-on": {
		"name": "e-icon-toggle-radio-button-on",
		"title": "Toggle Radio Button On"
	}
};

class AppIcons extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	color: 'e-text-indigo-400',
        	icon: {
        		'name': 'e-icon-navigation-apps',
        		'title': 'Navigation Apps'
        	},
        	icons: iconList,
        	searchIcons: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

	changeColor(key) {
    	this.setState({
    		color: colorList[key].text
    	});
    }

    changeIcon(key) {
    	this.setState({
    		icon: {
        		'name': this.state.icons[key].name,
        		'title': this.state.icons[key].title
        	}
    	});
    }

    filterIcons(str) {
    	let self = this;
    	let filterString = this.filterIcon.state.inputValue;
		let iconsList = {};

		_.filter(iconList, function(icon, key){
			if ((icon.title).toLowerCase().indexOf(filterString.toLowerCase()) != -1) {
				iconsList[key] = icon;
			}
		});

		this.setState({
			searchIcons: _.size(iconsList) > 0 ? iconsList : false
		});
    }

    renderSearch() {
    	let classes = ClassNames('e-body1 has-success');
    	return (
			<Input
				name={'search-icon'}
				ref={(ref) => this.filterIcon = ref}
				onKeyUp={this.filterIcons.bind(this)}
				placeholder={'Search Icon By Name'}
				classes={classes}/>
		);
	}

    renderIcons() {
    	let self = this;
		let iconsList = [];
		let icons = (this.state.searchIcons) ? this.state.searchIcons : this.state.icons;

    	Object.keys(icons).forEach(function(key) { 
			var icon = icons[key],
				iconName = icon.name.replace('e-icon-', '');
			iconsList.push(
				(
					<Icon 
						key={'icon-'+key}
						onClick={self.changeIcon.bind(self, key)} 
						className={ClassNames('e-text-grey-500 icon-preview')} 
						name={iconName}/>
				)
			); 
		});


		return iconsList;
    }

    renderIcon() {
    	let iconName = this.state.icon.name.toString().replace('e-icon-', '');
    	let iconColor = this.state.color;

    	return (
    		<Icon 
    			name={iconName}
    			className={ClassNames('e-display-4 e-padding-top-25 e-padding-bottom-25', iconColor)} />
    	);
    }

    renderColors() {
    	let self = this;
		let colorsList = [];

    	Object.keys(colorList).forEach(function(key) { 
			var color = colorList[key];
			colorsList.push(
				(
					<Button 
						ripple={false}
						key={'color-'+key}
						onClick={self.changeColor.bind(self, key)} 
						className={ClassNames('flat', color.background)} 
						type={'default'} />
				)
			); 
		});

		return colorsList;
    }

    render() {
    	let iconName = this.state.icon.name.toString().replace('e-icon-', '');
    	let iconColor = this.state.color;

        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-6'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>ICONS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
		        		</CardHeader>
		        		<CardContent classes={'e-text-center'}>
		        			{this.renderIcon()}

			        		<Divider />
			        		
			        		<Block className={'e-padding-top-25 e-padding-bottom-25 e-text-left'}>
			        			<Text type={'h4'}>
			        				Icon name: <strong>{this.state.icon.name}</strong>
			        			</Text>
			        			<Text type={'h4'}>
			        				Icon title: <strong>{this.state.icon.title}</strong>
			        			</Text>
			        		</Block>
		        			
		        			<Divider />
		        			
		        			<Block className={'e-padding-top-25 e-text-left'}>
		        				<Text type={'h4'}>HOW TO USE:</Text>
		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Icon from 'essence-icon';
										<br />
										<br />
										&lt;Icon name=&#123;"{iconName}"&#125; className=&#123;"{iconColor}"&#125; /&gt;
			        				</code>
		        				</pre>
		        			</Block>
		        		</CardContent>
					</Card>
				</Block>
				<Block classes={'brick brick-6'}>
		        	<Tab 
						data={{
							'header': [{
									'context': (<Text>Icons</Text>)
								},{
									'context': (<Text>Colors</Text>)
								}
							],
							'rows': [ 
								(
									<Block classes={'colors'}>
										<Block type={'div'}>
											{this.renderSearch()}
										</Block>
										{this.renderIcons.bind(this)()}
									</Block>
								),
								(
									<Block classes={'colors'}>
										<Block type={'div'}>
											<Text type={'h3'} classes={'e-text-indigo-400'}>
												COLORS
											</Text>
										</Block>
										{this.renderColors.bind(this)()}
									</Block>
								)
							]
						}}
						classes={'e-background-indigo-400 e-text-grey-50'} />
				</Block>
			</Block>
		);
    }
}

// List of icons
exports.AppIcons = AppIcons;
exports.iconList = iconList;