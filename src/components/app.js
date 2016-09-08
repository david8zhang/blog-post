import React, { Component } from 'react';
import BlogPost from './blog_post';

class App extends Component {
	
	render() {
		var utc_date = new Date()
		var formatted = (utc_date.getMonth() + 1) + '/' + utc_date.getDate() + '/' + utc_date.getFullYear();
		return <div className='small-12 large-8 columns'>
			<BlogPost title='Title'
					  more_info_route='/'
					  more_info_text='READ MORE'
					  author='author'
					  date={formatted}
					  text='Content goes here...'
					  category='Category'
					  image_url='https://i.ytimg.com/vi/h80uso70GLs/hqdefault.jpg'/>
		</div>
	}
}

export default App;