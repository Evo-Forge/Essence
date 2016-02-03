# Essence List - List & ListItem components

### How to use
```js
import List from 'essence-list/src/list.jsx';
import ListItem from 'essence-list/src/item.jsx';

class ListTest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return(
			<Block classes={'e-row'}>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>One line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>							

								<Switch type='checkbox' classes = {'e-left'} name='radioButton'/>
								<Block classes={'content e-left'}>
									List Controls
								</Block>	
								<Switch type='checkbox' classes = {'e-right'} name='radioButton'/>															
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Switch type='switches' classes = {'e-left'} name='switch'/>
								<Block classes={'content e-left'}>
									List Controls
								</Block>
								<Switch type='switches' classes = {'e-right'} name='switch'/>								
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Icon name={'action-stars'} classes={'e-left'} />
								<Block classes={'content e-left'}>
									Mutant Ninja	
								</Block>								
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-right'}/>
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Icon name={'action-stars'} classes={'e-left'} />
								<Block classes={'content e-left'}>
									Pokemon	
								</Block>								
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-right'}/>
							</Text>
						</ListItem>
					</List>
				</Block>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>Two line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300 e-twolinelist"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>
								<Image src='http://i.imgur.com/Ix585.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Johnny Bravo</Text>
									<Text classes={'secondary'}>Jan 9, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Image src='http://i.imgur.com/xrDnt12.png' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Uncle Bear</Text>
									<Text classes={'secondary'}>Jan 10, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>							
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Mutant Ninja</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>									
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Pokemon</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>	
						</ListItem>
					</List>
				</Block>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>Three line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300 e-threelinelist"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>
								<Image src='http://i.imgur.com/Ix585.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Johnny Bravo</Text>
									<Text classes={'secondary'}>Jan 9, 2016</Text>
									<Text classes={'tertiary'}>21:44</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Image src='http://i.imgur.com/xrDnt12.png' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Uncle Bear</Text>
									<Text classes={'secondary'}>Jan 10, 2016</Text>
									<Text classes={'tertiary'}>08:21</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>							
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Mutant Ninja</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
									<Text classes={'tertiary'}>20:14</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>									
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Pokemon</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
									<Text classes={'tertiary'}>22:58</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>	
						</ListItem>
					</List>
					
				</Block>
			</Block>
        );
    }
};
```