# Description
Blog post containing a title, category, content, date posted, and name of user

# Usage
Pass in a title, route to redirect for more info, text for more info, an author, date, content, category, and image_url

```
var utc_date = new Date()
var formatted = (utc_date.getMonth() + 1) + '/' + utc_date.getDate() + '/' + utc_date.getFullYear();
<BlogPost title='Title'
		  more_info_route='/'
		  more_info_text='READ MORE'
		  author='author'
		  date={formatted}
		  text='Content goes here...'
		  category='Category'
		  image_url='https://i.ytimg.com/vi/h80uso70GLs/hqdefault.jpg'/>
```