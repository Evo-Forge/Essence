import React from 'react';
import ReactDOM from 'react-dom';

import { 
	AppBar, 
	Block, 
	Divider, 
	Text, 
	Image, 
	Icon, 
	Paper, 
	Progress,
	Dialog,
	DialogHeader,
	DialogContent,
	DialogFooter,
	Switch,
	Input,
	Btn,
	Slider,
	List,
	ListItem,
	BottomSheets,
	SnackBar,
	Toast,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Navigation
} from '../src/essence.js';

ReactDOM.render(
	<Block>
		<Block className={'e-text-black'}>

		<Block classes={"e-row"}>
		  <Block classes={"brick brick-12"}>
			  <Block type='header' className={'e-background-green-100'}>
			    <Text>
			    	<Icon name='alert-warning' classes={'e-text-blue-100'} />
			    	Header
			    </Text>
			  </Block>
			  <Block type='section' className={'e-background-blue-100'}>
			    <Text type='h3'>
			    	<Icon name='av-album' classes={'e-text-yellow-100'} />
			    	Section
			    </Text>
			  </Block>
			  <Block type='footer' className={'e-background-yellow-100'}>
			    <Text type='h3'>
			    	<Icon name='content-create' classes={'e-text-green-100'} />
			    	Footer
			    </Text>
			  </Block>
		  </Block>
	  	</Block>

		  <Block classes={"e-row"}>
			  <Block classes={"brick brick-12"}>
				  <AppBar>
				  	... AppBar ...
				  </AppBar>
			  </Block>
		  </Block>

		  <Divider classes={'e-background-red-100 thinnest full'} />
		  
		  <Block classes={"e-row"}>
			  <Block classes={"brick brick-12"}>
				  <Paper>
				  	<Image src='http://i.imgur.com/04zn19m.png' />
				  </Paper>
			  </Block>
		  </Block>

		  <Block classes={"e-row"}>
			  <Block classes={"brick brick-12"}>
			  	<Progress type='dynamic' />
			  </Block>
		  </Block>

		  <Divider classes={'e-background-black thinnest full'} />

		  <Block classes={"e-row"}>
			  <Block classes={"brick brick-4"}>
				  <Switch
				    type='radio'
				    text='Radio Button 1'
				    name='radioButton'
				    defaultValue='value1'
				    checked={true}
				  />

				  <Switch
				    type='radio'
				    text='Radio Button 2'
				    name='radioButton'
				    defaultValue='value2'
				  />
			  </Block>
			  <Block classes={'brick brick-4'}>
			  	<Switch
				    type='checkbox'
				    text='Switch Checkbox'
				    name='checkbox1'
				    checked={true}
				  />
			  </Block>
			  <Block classes={'brick brick-4'}>
			  	<Switch
				    type='switches'
				    beforeText='OFF'
				    afterText='ON'
				    checked={true}
				    name='switches1'
				  />
			  </Block>
		  </Block>

		  <Block classes={"e-row"}>
		  	<Block classes={"brick brick-12"}>
			  	<Dialog>
			  		<DialogHeader>
			  			Dialog header
			  		</DialogHeader>
			  		<DialogContent>
			  			Dialog content
			  		</DialogContent>
			  		<DialogFooter>
			  			Dialog footer
			  		</DialogFooter>
			  	</Dialog>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Block classes={"e-input-group"}>
					<div>
						<Input
							name='input'
							label='Input with label'
						/>
					</div>
					<div>
				  		<Input
							name='input'
							disabled={true}
							placeholder='Disabled input'
						/>
					</div>
					<div>
						<Input
							classes={'e-text-green-500'}
							type='textarea'
							name='textarea'
							placeholder='Textarea'
							counter={20}
						/>
					</div>
				</Block>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Btn
					classes={'raised'}
					label='Ripple White'
				    type='primary'
				    ripple={true}
				/>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Slider discrete={true} step={10} />
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Text type='h3'>Single line</Text>
				<List type={'single-line'}>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#attractions'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Attractions'
									classes={'e-list-avatar'}
								/>
								<Text>Attractions</Text>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#attractions'>
							<Icon name='communication-contacts' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#fun'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Text>Fun</Text>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#fun'>
							<Icon name='communication-vpn-key' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#food'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Text>Food</Text>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#food'>
							<Icon name='editor-insert-emoticon' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#kids'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Kids'
									classes={'e-list-avatar'}
								/>
								<Text>Kids</Text>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#kids'>
							<Icon name='hardware-security' />
						</Text>
					</ListItem>
				</List>
			</Block>
			<Block classes={"brick brick-12"}>
				<Text type='h3'>Two lines</Text>
				<List type={'two-line'}>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#attractions'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Attractions'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Attractions</Text>
									<br />
									<Text>Here are more information about Attractions</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#attractions'>
							<Icon name='communication-contacts' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#fun'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Fun</Text>
									<br />
									<Text>Here are more information about Fun</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#fun'>
							<Icon name='communication-vpn-key' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#food'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Food</Text>
									<br />
									<Text>Here are more information about Food</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#food'>
							<Icon name='editor-insert-emoticon' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#kids'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Kids'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Kids</Text>
									<br />
									<Text>Here are more information about Kids</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#kids'>
							<Icon name='hardware-security' />
						</Text>
					</ListItem>
				</List>
			</Block>
			<Block classes={"brick brick-12"}>
				<Text type='h3'>Multi lines</Text>
				<List type={'multi-line'}>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#attractions'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Attractions'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Attractions</Text>
									<br />
									<Text type={'em'}>Attractions subtitle</Text>
									<br />
									<Text>Here are more information about Attractions</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#attractions'>
							<Icon name='communication-contacts' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#fun'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Fun</Text>
									<br />
									<Text type={'em'}>Fun subtitle</Text>
									<br />
									<Text>Here are more information about Fun</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#fun'>
							<Icon name='communication-vpn-key' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#food'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Fun'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Food</Text>
									<br />
									<Text type={'em'}>Food subtitle</Text>
									<br />
									<Text>Here are more information about Food</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#food'>
							<Icon name='editor-insert-emoticon' />
						</Text>
					</ListItem>
					<ListItem>
						<Text type='a' classes={'brick-11'} href='#kids'>
							<Block type='div' classes={'e-list-content'}>
								<Image
									src='http://essence.pearlhq.com/assets/img/card-user-img.jpg'
									alt='Kids'
									classes={'e-list-avatar'}
								/>
								<Block type={'span'}>
									<Text type={'strong'}>Kids</Text>
									<br />
									<Text type={'em'}>Kids subtitle</Text>
									<br />
									<Text>Here are more information about Kids</Text>
								</Block>
							</Block>
						</Text>
						<Text type='a' classes={'brick-1'} href='#kids'>
							<Icon name='hardware-security' />
						</Text>
					</ListItem>
				</List>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<BottomSheets visible={false}>
					<Block className={'e-background-white'}>
						Bottom Sheets
					</Block>
				</BottomSheets>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<SnackBar classes={'e-text-green-500'} visible={true} delay={2000} action={true}>
					<Block>
						SnackBar
					</Block>
				</SnackBar>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Toast classes={'e-text-green-500'} visible={false} delay={5000}>
					<Block>
						Toast
					</Block>
				</Toast>
			</Block>
		  </Block>
		  
		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Card>
					<CardHeader>
						<Block type="div" classes={"card-main-image"}>
							<Image src="http://essence.pearlhq.com/assets/img/card-img.jpg" alt="Card Header Image" />
							<Text type="h1" classes={"e-headline"}>
								Going to Ibiza
								<Block classes={"blur-effect"} image="assets/img/card-img.jpg" />
							</Text>
						</Block>
					</CardHeader>

					<CardContent classes={"card-supporting-text e-text-blue-grey-400"}>
						<Text type="h4">
							Limit supplemental actions to two actions, in addition to an overflow menu.
						</Text>
					</CardContent>

					<CardFooter>
						<Block type="div" classes={"e-left"}>
							<Btn
								classes={'flat e-text-indigo-400'}
								label='Yes'
								type='danger'
								ripple={true}
							/>
						</Block>
						<Block type="div" classes={"e-left"}>
							<Btn
								classes={'flat'}
								label='No'
								type='default'
								rippleEffect={true}
							/>
						</Block>
					</CardFooter>
				</Card>
			</Block>
		  </Block>

		  <Block classes={"e-row"}>
			<Block classes={"brick brick-12"}>
				<Navigation visible={true}>
					Navigation
				</Navigation>
			</Block>
		  </Block>

		</Block>
	</Block>
	,
	document.querySelector('.app')
);