import React, { Component } from 'react';

/**
 * Props for this component: 
 * @property {String} image_url 				The url of the image
 * @property {String} title 					The title of the blog post
 * @property {String} category 					The category of the blog post
 * @property {String} text 						The text of the blog post
 * @property {String} more_info_route 			Route to redirect to for more information
 * @property {String} more_info_text 			The button text for getting more information
 * @property {Object} (OPTIONAL) outer_style 	The style for the outer wrapping div
 */
class BlogPost extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var default_outer_style = {
			border: '1px solid #e6e6e6',
			boxShadow: '0 0 5px #e6e6e6',
			backgroundColor:'white',
			maxWidth:'80%',
			marginLeft:'20%',
			marginBottom: '40px'
		}

		if(this.props.outer_style) {
			for (var key in this.props.outer_style) {
				default_outer_style[key] = this.props.outer_style[key]
			}
		}

		return (
			<div className='post-wrapper'
				 style={default_outer_style}>
				<div className='post-body' style={{padding: '0 20px'}}>
					<img src={this.props.image_url}
						 style={{width:'100%', 
						 		 height:'600px',
						 		 verticalAlign:'middle', 
						 		 paddingTop: '20px',
						 		 paddingBottom:'20px'}}/>
					<h3>{this.props.title}</h3>
					<i className='fi-pricetag-multiple'
					   style={{marginRight: '5px', color: '#f2676b'}}/>
					<span style={{marginRight:'10px'}}>
						<em>{this.props.category}</em>
					</span>
					<p style={{marginTop: '10px'}}>{this.props.text.substring(0, 800) + '...'}</p>
				</div>
				<div className='post-footer' style={{background: '#e6e6e6', overflow:'hidden'}}>
					<div className='row'>
						<div className='small-6 large-6 columns' style={{padding:'0px'}}>
							<h5 style={{marginTop:'15px', fontSize:'15px', marginLeft:'15px'}}>
								{this.props.date + ' by'}
								<a href='#'> {this.props.author}</a> 
							</h5>
						</div>
						<div className='small-6 large-6 columns' style={{padding:'0px'}}>
							{this.props.more_info_route && <a href={this.props.more_info_route} style={{background:'#f2676b', 
												color: '#fff', 
												display:'inline-block', 
												fontWeight:'700',
											    padding:'15px 20px',
												float:'right'}}>
								{this.props.more_info_text}
							</a>}
						</div>
					</div>
				</div>				
			</div>
		)
	}
}

export default BlogPost;