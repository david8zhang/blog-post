'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blog_post = require('./blog_post');

var _blog_post2 = _interopRequireDefault(_blog_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var utc_date = new Date();
			var formatted = utc_date.getMonth() + 1 + '/' + utc_date.getDate() + '/' + utc_date.getFullYear();
			return _react2.default.createElement(
				'div',
				{ className: 'small-12 large-8 columns' },
				_react2.default.createElement(_blog_post2.default, { title: 'Title',
					more_info_route: '/',
					more_info_text: 'READ MORE',
					author: 'author',
					date: formatted,
					text: 'Content goes here...',
					category: 'Category',
					image_url: 'https://i.ytimg.com/vi/h80uso70GLs/hqdefault.jpg' })
			);
		}
	}]);

	return App;
})(_react.Component);

exports.default = App;