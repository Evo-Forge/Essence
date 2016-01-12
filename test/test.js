import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import BottomSheets from '../components/essence-bottomsheet/src/bottomsheet.jsx';
import Btn from '../components/essence-button/src/button.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import List from '../components/essence-list/src/list.jsx';
import ListItem from '../components/essence-list/src/item.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Chip from '../components/essence-chip/src/chip.jsx';
import ChipItem from '../components/essence-chip/src/item.jsx';
import Dialog from '../components/essence-dialog/src/dialog.jsx';
import DialogHeader from '../components/essence-dialog/src/header.jsx';
import DialogContent from '../components/essence-dialog/src/content.jsx';
import DialogFooter from '../components/essence-dialog/src/footer.jsx';
import Image from '../components/essence-image/src/image.jsx';
import Input from '../components/essence-input/src/input.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';
import Navigation from '../components/essence-navigation/src/navigation.jsx';
import Paper from '../components/essence-paper/src/paper.jsx';
import Progress from '../components/essence-progress/src/progress.jsx';
import Slider from '../components/essence-slider/src/slider.jsx';
import SnackBar from '../components/essence-snackbar/src/snackbar.jsx';
// import Button from '../components/essence-button/src/button.jsx';

ReactDOM.render(
	<AppBar classes={'e-background-yellow-100 e-text-blue-400'}>
	    <Btn
			classes={'flat e-background-white e-text-red-500'}
			label='Custom button'					
		/>
	</AppBar>
	,
	document.querySelector('.app')
);