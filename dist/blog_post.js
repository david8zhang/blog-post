'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var BlogPost = (function (_Component) {
	_inherits(BlogPost, _Component);

	function BlogPost(props) {
		_classCallCheck(this, BlogPost);

		return _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).call(this, props));
	}

	_createClass(BlogPost, [{
		key: 'render',
		value: function render() {
			var default_outer_style = {
				border: '1px solid #e6e6e6',
				boxShadow: '0 0 5px #e6e6e6',
				backgroundColor: 'white',
				marginBottom: '40px'
			};

			if (this.props.outer_style) {
				for (var key in this.props.outer_style) {
					default_outer_style[key] = this.props.outer_style[key];
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: 'post-wrapper',
					style: default_outer_style },
				_react2.default.createElement(
					'div',
					{ className: 'post-body', style: { padding: '0 20px' } },
					_react2.default.createElement('img', { src: this.props.image_url,
						style: { width: '100%',
							height: '600px',
							verticalAlign: 'middle',
							paddingTop: '20px',
							paddingBottom: '20px' } }),
					_react2.default.createElement(
						'h3',
						null,
						this.props.title
					),
					_react2.default.createElement('i', { className: 'fi-pricetag-multiple',
						style: { marginRight: '5px', color: '#f2676b' } }),
					_react2.default.createElement(
						'span',
						{ style: { marginRight: '10px' } },
						_react2.default.createElement(
							'em',
							null,
							this.props.category
						)
					),
					_react2.default.createElement(
						'p',
						{ style: { marginTop: '10px' } },
						this.props.text.substring(0, 800) + '...'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'post-footer', style: { background: '#e6e6e6', overflow: 'hidden' } },
					_react2.default.createElement(
						'div',
						{ className: 'row', style: { margin: '0px', maxWidth: '100%' } },
						_react2.default.createElement(
							'div',
							{ className: 'small-6 large-6 columns', style: { padding: '0px' } },
							_react2.default.createElement(
								'h5',
								{ style: { marginTop: '15px', fontSize: '15px', marginLeft: '15px' } },
								this.props.date + ' by',
								_react2.default.createElement(
									'a',
									{ href: '#' },
									' ',
									this.props.author
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'small-6 large-6 columns', style: { padding: '0px' } },
							this.props.more_info_route && _react2.default.createElement(
								'a',
								{ href: this.props.more_info_route, style: { background: '#f2676b',
										color: '#fff',
										display: 'inline-block',
										fontWeight: '700',
										padding: '15px 20px',
										float: 'right' } },
								this.props.more_info_text
							)
						)
					)
				)
			);
		}
	}]);

	return BlogPost;
})(_react.Component);

exports.default = BlogPost;