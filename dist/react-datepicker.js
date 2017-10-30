(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-onclickoutside"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-onclickoutside", "moment"], factory);
	else if(typeof exports === 'object')
		exports["DatePicker"] = factory(require("react"), require("react-onclickoutside"), require("moment"));
	else
		root["DatePicker"] = factory(root["React"], root["onClickOutside"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _calendar = __webpack_require__(1);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _popper_component = __webpack_require__(21);

	var _popper_component2 = _interopRequireDefault(_popper_component);

	var _classnames2 = __webpack_require__(10);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _date_utils = __webpack_require__(12);

	var _reactOnclickoutside = __webpack_require__(11);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var outsideClickIgnoreClass = 'react-datepicker-ignore-onclickoutside';
	var WrappedCalendar = (0, _reactOnclickoutside2.default)(_calendar2.default);

	/**
	 * General datepicker component.
	 */

	var DatePicker = function (_React$Component) {
	  _inherits(DatePicker, _React$Component);

	  _createClass(DatePicker, null, [{
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        allowSameDay: false,
	        dateFormat: 'L',
	        dateFormatCalendar: 'MMMM YYYY',
	        onChange: function onChange() {},

	        disabled: false,
	        disabledKeyboardNavigation: false,
	        dropdownMode: 'scroll',
	        onFocus: function onFocus() {},
	        onBlur: function onBlur() {},
	        onKeyDown: function onKeyDown() {},
	        onSelect: function onSelect() {},
	        onClickOutside: function onClickOutside() {},
	        onMonthChange: function onMonthChange() {},

	        monthsShown: 1,
	        withPortal: false,
	        shouldCloseOnSelect: true,
	        showTimeSelect: false,
	        timeIntervals: 30
	      };
	    }
	  }]);

	  function DatePicker(props) {
	    _classCallCheck(this, DatePicker);

	    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

	    _this.getPreSelection = function () {
	      return _this.props.openToDate ? (0, _date_utils.newDate)(_this.props.openToDate) : _this.props.selectsEnd && _this.props.startDate ? (0, _date_utils.newDate)(_this.props.startDate) : _this.props.selectsStart && _this.props.endDate ? (0, _date_utils.newDate)(_this.props.endDate) : (0, _date_utils.now)(_this.props.utcOffset);
	    };

	    _this.calcInitialState = function () {
	      var defaultPreSelection = _this.getPreSelection();
	      var minDate = (0, _date_utils.getEffectiveMinDate)(_this.props);
	      var maxDate = (0, _date_utils.getEffectiveMaxDate)(_this.props);
	      var boundedPreSelection = minDate && (0, _date_utils.isBefore)(defaultPreSelection, minDate) ? minDate : maxDate && (0, _date_utils.isAfter)(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;

	      return {
	        open: _this.props.startOpen || false,
	        preventFocus: false,
	        preSelection: _this.props.selected ? (0, _date_utils.newDate)(_this.props.selected) : boundedPreSelection
	      };
	    };

	    _this.clearPreventFocusTimeout = function () {
	      if (_this.preventFocusTimeout) {
	        clearTimeout(_this.preventFocusTimeout);
	      }
	    };

	    _this.setFocus = function () {
	      _this.input.focus();
	    };

	    _this.setOpen = function (open) {
	      _this.setState({
	        open: open,
	        preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection
	      });
	    };

	    _this.handleFocus = function (event) {
	      if (!_this.state.preventFocus) {
	        _this.props.onFocus(event);
	        _this.setOpen(true);
	      }
	    };

	    _this.cancelFocusInput = function () {
	      clearTimeout(_this.inputFocusTimeout);
	      _this.inputFocusTimeout = null;
	    };

	    _this.deferFocusInput = function () {
	      _this.cancelFocusInput();
	      _this.inputFocusTimeout = setTimeout(function () {
	        return _this.setFocus();
	      }, 1);
	    };

	    _this.handleDropdownFocus = function () {
	      _this.cancelFocusInput();
	    };

	    _this.handleBlur = function (event) {
	      if (_this.state.open) {
	        _this.deferFocusInput();
	      } else {
	        _this.props.onBlur(event);
	      }
	    };

	    _this.handleCalendarClickOutside = function (event) {
	      if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	      _this.props.onClickOutside(event);
	      if (_this.props.withPortal) {
	        event.preventDefault();
	      }
	    };

	    _this.handleChange = function (event) {
	      if (_this.props.onChangeRaw) {
	        _this.props.onChangeRaw(event);
	        if (event.isDefaultPrevented()) {
	          return;
	        }
	      }
	      _this.setState({ inputValue: event.target.value });
	      var date = (0, _date_utils.parseDate)(event.target.value, _this.props);
	      if (date || !event.target.value) {
	        _this.setSelected(date, event, true);
	      }
	    };

	    _this.handleSelect = function (date, event) {
	      // Preventing onFocus event to fix issue
	      // https://github.com/Hacker0x01/react-datepicker/issues/628
	      _this.setState({ preventFocus: true }, function () {
	        _this.preventFocusTimeout = setTimeout(function () {
	          return _this.setState({ preventFocus: false });
	        }, 50);
	        return _this.preventFocusTimeout;
	      });
	      _this.setSelected(date, event);
	      if (!_this.props.shouldCloseOnSelect) {
	        _this.setPreSelection(date);
	      } else if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	    };

	    _this.setSelected = function (date, event, keepInput) {
	      var changedDate = date;

	      if (changedDate !== null && (0, _date_utils.isDayDisabled)(changedDate, _this.props)) {
	        return;
	      }

	      if (!(0, _date_utils.isSameDay)(_this.props.selected, changedDate) || _this.props.allowSameDay) {
	        if (changedDate !== null) {
	          if (_this.props.selected) {
	            changedDate = (0, _date_utils.setTime)((0, _date_utils.newDate)(changedDate), {
	              hour: (0, _date_utils.getHour)(_this.props.selected),
	              minute: (0, _date_utils.getMinute)(_this.props.selected),
	              second: (0, _date_utils.getSecond)(_this.props.selected)
	            });
	          }
	          _this.setState({
	            preSelection: changedDate
	          });
	        }
	        _this.props.onChange(changedDate, event);
	      }

	      _this.props.onSelect(changedDate, event);

	      if (!keepInput) {
	        _this.setState({ inputValue: null });
	      }
	    };

	    _this.setPreSelection = function (date) {
	      var isDateRangePresent = typeof _this.props.minDate !== 'undefined' && typeof _this.props.maxDate !== 'undefined';
	      var isValidDateSelection = isDateRangePresent && date ? (0, _date_utils.isDayInRange)(date, _this.props.minDate, _this.props.maxDate) : true;
	      if (isValidDateSelection) {
	        _this.setState({
	          preSelection: date
	        });
	      }
	    };

	    _this.handleTimeChange = function (time) {
	      var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
	      var changedDate = (0, _date_utils.setTime)((0, _date_utils.cloneDate)(selected), {
	        hour: (0, _date_utils.getHour)(time),
	        minute: (0, _date_utils.getMinute)(time)
	      });

	      _this.setState({
	        preSelection: changedDate
	      });

	      _this.props.onChange(changedDate);
	    };

	    _this.onInputClick = function () {
	      if (!_this.props.disabled) {
	        _this.setOpen(true);
	      }
	    };

	    _this.onInputKeyDown = function (event) {
	      _this.props.onKeyDown(event);
	      var eventKey = event.key;
	      if (!_this.state.open && !_this.props.inline) {
	        if (eventKey !== 'Enter' && eventKey !== 'Escape' && eventKey !== 'Tab') {
	          _this.onInputClick();
	        }
	        return;
	      }
	      var copy = (0, _date_utils.newDate)(_this.state.preSelection);
	      if (eventKey === 'Enter') {
	        event.preventDefault();
	        if ((0, _date_utils.isMoment)(_this.state.preSelection) || (0, _date_utils.isDate)(_this.state.preSelection)) {
	          _this.handleSelect(copy, event);
	          !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
	        } else {
	          _this.setOpen(false);
	        }
	      } else if (eventKey === 'Escape') {
	        event.preventDefault();
	        _this.setOpen(false);
	      } else if (eventKey === 'Tab') {
	        _this.setOpen(false);
	      } else if (!_this.props.disabledKeyboardNavigation) {
	        var newSelection = void 0;
	        switch (eventKey) {
	          case 'ArrowLeft':
	            event.preventDefault();
	            newSelection = (0, _date_utils.subtractDays)(copy, 1);
	            break;
	          case 'ArrowRight':
	            event.preventDefault();
	            newSelection = (0, _date_utils.addDays)(copy, 1);
	            break;
	          case 'ArrowUp':
	            event.preventDefault();
	            newSelection = (0, _date_utils.subtractWeeks)(copy, 1);
	            break;
	          case 'ArrowDown':
	            event.preventDefault();
	            newSelection = (0, _date_utils.addWeeks)(copy, 1);
	            break;
	          case 'PageUp':
	            event.preventDefault();
	            newSelection = (0, _date_utils.subtractMonths)(copy, 1);
	            break;
	          case 'PageDown':
	            event.preventDefault();
	            newSelection = (0, _date_utils.addMonths)(copy, 1);
	            break;
	          case 'Home':
	            event.preventDefault();
	            newSelection = (0, _date_utils.subtractYears)(copy, 1);
	            break;
	          case 'End':
	            event.preventDefault();
	            newSelection = (0, _date_utils.addYears)(copy, 1);
	            break;
	        }
	        _this.setPreSelection(newSelection);
	      }
	    };

	    _this.onClearClick = function (event) {
	      event.preventDefault();
	      _this.props.onChange(null, event);
	      _this.setState({ inputValue: null });
	    };

	    _this.renderCalendar = function () {
	      if (!_this.props.inline && (!_this.state.open || _this.props.disabled)) {
	        return null;
	      }
	      return _react2.default.createElement(
	        WrappedCalendar,
	        {
	          ref: function ref(elem) {
	            _this.calendar = elem;
	          },
	          locale: _this.props.locale,
	          dateFormat: _this.props.dateFormatCalendar,
	          useWeekdaysShort: _this.props.useWeekdaysShort,
	          dropdownMode: _this.props.dropdownMode,
	          selected: _this.props.selected,
	          preSelection: _this.state.preSelection,
	          onSelect: _this.handleSelect,
	          onWeekSelect: _this.props.onWeekSelect,
	          openToDate: _this.props.openToDate,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          excludeDates: _this.props.excludeDates,
	          filterDate: _this.props.filterDate,
	          onClickOutside: _this.handleCalendarClickOutside,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          highlightDates: _this.props.highlightDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          peekNextMonth: _this.props.peekNextMonth,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          showWeekNumbers: _this.props.showWeekNumbers,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
	          scrollableYearDropdown: _this.props.scrollableYearDropdown,
	          todayButton: _this.props.todayButton,
	          weekLabel: _this.props.weekLabel,
	          utcOffset: _this.props.utcOffset,
	          outsideClickIgnoreClass: outsideClickIgnoreClass,
	          fixedHeight: _this.props.fixedHeight,
	          monthsShown: _this.props.monthsShown,
	          onDropdownFocus: _this.handleDropdownFocus,
	          onMonthChange: _this.props.onMonthChange,
	          dayClassName: _this.props.dayClassName,
	          showTimeSelect: _this.props.showTimeSelect,
	          onTimeChange: _this.handleTimeChange,
	          timeFormat: _this.props.timeFormat,
	          timeIntervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          className: _this.props.calendarClassName,
	          yearDropdownItemNumber: _this.props.yearDropdownItemNumber },
	        _this.props.children
	      );
	    };

	    _this.renderDateInput = function () {
	      var className = (0, _classnames3.default)(_this.props.className, _defineProperty({}, outsideClickIgnoreClass, _this.state.open));

	      var customInput = _this.props.customInput || _react2.default.createElement('input', { type: 'text' });
	      var inputValue = typeof _this.props.value === 'string' ? _this.props.value : typeof _this.state.inputValue === 'string' ? _this.state.inputValue : (0, _date_utils.safeDateFormat)(_this.props.selected, _this.props);

	      return _react2.default.cloneElement(customInput, {
	        ref: function ref(input) {
	          _this.input = input;
	        },
	        value: inputValue,
	        onBlur: _this.handleBlur,
	        onChange: _this.handleChange,
	        onClick: _this.onInputClick,
	        onFocus: _this.handleFocus,
	        onKeyDown: _this.onInputKeyDown,
	        id: _this.props.id,
	        name: _this.props.name,
	        autoFocus: _this.props.autoFocus,
	        placeholder: _this.props.placeholderText,
	        disabled: _this.props.disabled,
	        autoComplete: _this.props.autoComplete,
	        className: className,
	        title: _this.props.title,
	        readOnly: _this.props.readOnly,
	        required: _this.props.required,
	        tabIndex: _this.props.tabIndex
	      });
	    };

	    _this.renderClearButton = function () {
	      if (_this.props.isClearable && _this.props.selected != null) {
	        return _react2.default.createElement('a', { className: 'react-datepicker__close-icon', href: '#', onClick: _this.onClearClick });
	      } else {
	        return null;
	      }
	    };

	    _this.state = _this.calcInitialState();
	    return _this;
	  }

	  _createClass(DatePicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var currentMonth = this.props.selected && (0, _date_utils.getMonth)(this.props.selected);
	      var nextMonth = nextProps.selected && (0, _date_utils.getMonth)(nextProps.selected);
	      if (this.props.inline && currentMonth !== nextMonth) {
	        this.setPreSelection(nextProps.selected);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearPreventFocusTimeout();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var calendar = this.renderCalendar();

	      if (this.props.inline && !this.props.withPortal) {
	        return calendar;
	      }

	      if (this.props.withPortal) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          !this.props.inline ? _react2.default.createElement(
	            'div',
	            { className: 'react-datepicker__input-container' },
	            this.renderDateInput(),
	            this.renderClearButton()
	          ) : null,
	          this.state.open || this.props.inline ? _react2.default.createElement(
	            'div',
	            { className: 'react-datepicker__portal' },
	            calendar
	          ) : null
	        );
	      }

	      return _react2.default.createElement(_popper_component2.default, {
	        className: this.props.popperClassName,
	        hidePopper: !this.state.open || this.props.disabled,
	        popperModifiers: this.props.popperModifiers,
	        targetComponent: _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__input-container' },
	          this.renderDateInput(),
	          this.renderClearButton()
	        ),
	        popperContainer: this.props.popperContainer,
	        popperComponent: calendar,
	        popperPlacement: this.props.popperPlacement });
	    }
	  }]);

	  return DatePicker;
	}(_react2.default.Component);

	DatePicker.propTypes = {
	  allowSameDay: _propTypes2.default.bool,
	  autoComplete: _propTypes2.default.string,
	  autoFocus: _propTypes2.default.bool,
	  calendarClassName: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  customInput: _propTypes2.default.element,
	  dateFormat: _propTypes2.default.oneOfType([// eslint-disable-line react/no-unused-prop-types
	  _propTypes2.default.string, _propTypes2.default.array]),
	  dateFormatCalendar: _propTypes2.default.string,
	  dayClassName: _propTypes2.default.func,
	  disabled: _propTypes2.default.bool,
	  disabledKeyboardNavigation: _propTypes2.default.bool,
	  dropdownMode: _propTypes2.default.oneOf(['scroll', 'select']).isRequired,
	  endDate: _propTypes2.default.object,
	  excludeDates: _propTypes2.default.array,
	  filterDate: _propTypes2.default.func,
	  fixedHeight: _propTypes2.default.bool,
	  formatWeekNumber: _propTypes2.default.func,
	  highlightDates: _propTypes2.default.array,
	  id: _propTypes2.default.string,
	  includeDates: _propTypes2.default.array,
	  inline: _propTypes2.default.bool,
	  isClearable: _propTypes2.default.bool,
	  locale: _propTypes2.default.string,
	  maxDate: _propTypes2.default.object,
	  minDate: _propTypes2.default.object,
	  monthsShown: _propTypes2.default.number,
	  name: _propTypes2.default.string,
	  onBlur: _propTypes2.default.func,
	  onChange: _propTypes2.default.func.isRequired,
	  onSelect: _propTypes2.default.func,
	  onWeekSelect: _propTypes2.default.func,
	  onClickOutside: _propTypes2.default.func,
	  onChangeRaw: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  onMonthChange: _propTypes2.default.func,
	  openToDate: _propTypes2.default.object,
	  peekNextMonth: _propTypes2.default.bool,
	  placeholderText: _propTypes2.default.string,
	  popperContainer: _propTypes2.default.func,
	  popperClassName: _propTypes2.default.string, // <PopperComponent/> props
	  popperModifiers: _propTypes2.default.object, // <PopperComponent/> props
	  popperPlacement: _propTypes2.default.oneOf(_popper_component.popperPlacementPositions), // <PopperComponent/> props
	  readOnly: _propTypes2.default.bool,
	  required: _propTypes2.default.bool,
	  scrollableYearDropdown: _propTypes2.default.bool,
	  selected: _propTypes2.default.object,
	  selectsEnd: _propTypes2.default.bool,
	  selectsStart: _propTypes2.default.bool,
	  showMonthDropdown: _propTypes2.default.bool,
	  showWeekNumbers: _propTypes2.default.bool,
	  showYearDropdown: _propTypes2.default.bool,
	  forceShowMonthNavigation: _propTypes2.default.bool,
	  startDate: _propTypes2.default.object,
	  startOpen: _propTypes2.default.bool,
	  tabIndex: _propTypes2.default.number,
	  title: _propTypes2.default.string,
	  todayButton: _propTypes2.default.string,
	  useWeekdaysShort: _propTypes2.default.bool,
	  utcOffset: _propTypes2.default.number,
	  value: _propTypes2.default.string,
	  weekLabel: _propTypes2.default.string,
	  withPortal: _propTypes2.default.bool,
	  yearDropdownItemNumber: _propTypes2.default.number,
	  shouldCloseOnSelect: _propTypes2.default.bool,
	  showTimeSelect: _propTypes2.default.bool,
	  timeFormat: _propTypes2.default.string,
	  timeIntervals: _propTypes2.default.number,
	  minTime: _propTypes2.default.object,
	  maxTime: _propTypes2.default.object,
	  excludeTimes: _propTypes2.default.array
	};
	exports.default = DatePicker;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _year_dropdown = __webpack_require__(2);

	var _year_dropdown2 = _interopRequireDefault(_year_dropdown);

	var _month_dropdown = __webpack_require__(14);

	var _month_dropdown2 = _interopRequireDefault(_month_dropdown);

	var _month = __webpack_require__(16);

	var _month2 = _interopRequireDefault(_month);

	var _time = __webpack_require__(20);

	var _time2 = _interopRequireDefault(_time);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _date_utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DROPDOWN_FOCUS_CLASSNAMES = ['react-datepicker__year-select', 'react-datepicker__month-select'];

	var isDropdownSelect = function isDropdownSelect() {
	  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var classNames = (element.className || '').split(/\s+/);
	  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
	    return classNames.indexOf(testClassname) >= 0;
	  });
	};

	var Calendar = function (_React$Component) {
	  _inherits(Calendar, _React$Component);

	  _createClass(Calendar, null, [{
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        onDropdownFocus: function onDropdownFocus() {},
	        monthsShown: 1,
	        forceShowMonthNavigation: false
	      };
	    }
	  }]);

	  function Calendar(props) {
	    _classCallCheck(this, Calendar);

	    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

	    _this.handleClickOutside = function (event) {
	      _this.props.onClickOutside(event);
	    };

	    _this.handleDropdownFocus = function (event) {
	      if (isDropdownSelect(event.target)) {
	        _this.props.onDropdownFocus();
	      }
	    };

	    _this.getDateInView = function () {
	      var _this$props = _this.props,
	          preSelection = _this$props.preSelection,
	          selected = _this$props.selected,
	          openToDate = _this$props.openToDate,
	          utcOffset = _this$props.utcOffset;

	      var minDate = (0, _date_utils.getEffectiveMinDate)(_this.props);
	      var maxDate = (0, _date_utils.getEffectiveMaxDate)(_this.props);
	      var current = (0, _date_utils.now)(utcOffset);
	      var initialDate = openToDate || selected || preSelection;
	      if (initialDate) {
	        return initialDate;
	      } else {
	        if (minDate && (0, _date_utils.isBefore)(current, minDate)) {
	          return minDate;
	        } else if (maxDate && (0, _date_utils.isAfter)(current, maxDate)) {
	          return maxDate;
	        }
	      }
	      return current;
	    };

	    _this.localizeDate = function (date) {
	      return (0, _date_utils.localizeDate)(date, _this.props.locale);
	    };

	    _this.increaseMonth = function () {
	      _this.setState({
	        date: (0, _date_utils.addMonths)((0, _date_utils.cloneDate)(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.decreaseMonth = function () {
	      _this.setState({
	        date: (0, _date_utils.subtractMonths)((0, _date_utils.cloneDate)(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.handleDayClick = function (day, event) {
	      return _this.props.onSelect(day, event);
	    };

	    _this.handleDayMouseEnter = function (day) {
	      return _this.setState({ selectingDate: day });
	    };

	    _this.handleMonthMouseLeave = function () {
	      return _this.setState({ selectingDate: null });
	    };

	    _this.handleMonthChange = function (date) {
	      if (_this.props.onMonthChange) {
	        _this.props.onMonthChange(date);
	      }
	    };

	    _this.changeYear = function (year) {
	      _this.setState({
	        date: (0, _date_utils.setYear)((0, _date_utils.cloneDate)(_this.state.date), year)
	      });
	    };

	    _this.changeMonth = function (month) {
	      _this.setState({
	        date: (0, _date_utils.setMonth)((0, _date_utils.cloneDate)(_this.state.date), month)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.header = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var startOfWeek = (0, _date_utils.getStartOfWeek)((0, _date_utils.cloneDate)(date));
	      var dayNames = [];
	      if (_this.props.showWeekNumbers) {
	        dayNames.push(_react2.default.createElement(
	          'div',
	          { key: 'W', className: 'react-datepicker__day-name' },
	          _this.props.weekLabel || '#'
	        ));
	      }
	      return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = (0, _date_utils.addDays)((0, _date_utils.cloneDate)(startOfWeek), offset);
	        var localeData = (0, _date_utils.getLocaleData)(day);
	        var weekDayName = _this.props.useWeekdaysShort ? (0, _date_utils.getWeekdayShortInLocale)(localeData, day) : (0, _date_utils.getWeekdayMinInLocale)(localeData, day);
	        return _react2.default.createElement(
	          'div',
	          { key: offset, className: 'react-datepicker__day-name' },
	          weekDayName
	        );
	      }));
	    };

	    _this.renderPreviousMonthButton = function () {
	      if (!_this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledBefore)(_this.state.date, 'month', _this.props)) {
	        return;
	      }
	      return _react2.default.createElement('a', {
	        className: 'react-datepicker__navigation react-datepicker__navigation--previous',
	        onClick: _this.decreaseMonth });
	    };

	    _this.renderNextMonthButton = function () {
	      if (!_this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledAfter)(_this.state.date, 'month', _this.props)) {
	        return;
	      }

	      var classes = ['react-datepicker__navigation', 'react-datepicker__navigation--next'];
	      if (_this.props.showTimeSelect) {
	        classes.push('react-datepicker__navigation--next--with-time');
	      }
	      if (_this.props.todayButton) {
	        classes.push('react-datepicker__navigation--next--with-today-button');
	      }

	      return _react2.default.createElement('a', {
	        className: classes.join(' '),
	        onClick: _this.increaseMonth });
	    };

	    _this.renderCurrentMonth = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var classes = ['react-datepicker__current-month'];

	      if (_this.props.showYearDropdown) {
	        classes.push('react-datepicker__current-month--hasYearDropdown');
	      }
	      if (_this.props.showMonthDropdown) {
	        classes.push('react-datepicker__current-month--hasMonthDropdown');
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: classes.join(' ') },
	        (0, _date_utils.formatDate)(date, _this.props.dateFormat)
	      );
	    };

	    _this.renderYearDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showYearDropdown || overrideHide) {
	        return;
	      }
	      return _react2.default.createElement(_year_dropdown2.default, {
	        dropdownMode: _this.props.dropdownMode,
	        onChange: _this.changeYear,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        year: (0, _date_utils.getYear)(_this.state.date),
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber });
	    };

	    _this.renderMonthDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showMonthDropdown) {
	        return;
	      }
	      return _react2.default.createElement(_month_dropdown2.default, {
	        dropdownMode: _this.props.dropdownMode,
	        locale: _this.props.locale,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.changeMonth,
	        month: (0, _date_utils.getMonth)(_this.state.date) });
	    };

	    _this.renderTodayButton = function () {
	      if (!_this.props.todayButton) {
	        return;
	      }
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'react-datepicker__today-button',
	          onClick: function onClick(e) {
	            return _this.props.onSelect((0, _date_utils.getStartOfDate)((0, _date_utils.now)(_this.props.utcOffset)), e);
	          } },
	        _this.props.todayButton
	      );
	    };

	    _this.renderMonths = function () {
	      var monthList = [];
	      for (var i = 0; i < _this.props.monthsShown; ++i) {
	        var monthDate = (0, _date_utils.addMonths)((0, _date_utils.cloneDate)(_this.state.date), i);
	        var monthKey = 'month-' + i;
	        monthList.push(_react2.default.createElement(
	          'div',
	          { key: monthKey, ref: function ref(div) {
	              _this.monthContainer = div;
	            }, className: 'react-datepicker__month-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'react-datepicker__header' },
	            _this.renderCurrentMonth(monthDate),
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'react-datepicker__header__dropdown react-datepicker__header__dropdown--' + _this.props.dropdownMode,
	                onFocus: _this.handleDropdownFocus },
	              _this.renderMonthDropdown(i !== 0),
	              _this.renderYearDropdown(i !== 0)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'react-datepicker__day-names' },
	              _this.header(monthDate)
	            )
	          ),
	          _react2.default.createElement(_month2.default, {
	            day: monthDate,
	            dayClassName: _this.props.dayClassName,
	            onDayClick: _this.handleDayClick,
	            onDayMouseEnter: _this.handleDayMouseEnter,
	            onMouseLeave: _this.handleMonthMouseLeave,
	            onWeekSelect: _this.props.onWeekSelect,
	            formatWeekNumber: _this.props.formatWeekNumber,
	            minDate: _this.props.minDate,
	            maxDate: _this.props.maxDate,
	            excludeDates: _this.props.excludeDates,
	            highlightDates: _this.props.highlightDates,
	            selectingDate: _this.state.selectingDate,
	            includeDates: _this.props.includeDates,
	            inline: _this.props.inline,
	            fixedHeight: _this.props.fixedHeight,
	            filterDate: _this.props.filterDate,
	            preSelection: _this.props.preSelection,
	            selected: _this.props.selected,
	            selectsStart: _this.props.selectsStart,
	            selectsEnd: _this.props.selectsEnd,
	            showWeekNumbers: _this.props.showWeekNumbers,
	            startDate: _this.props.startDate,
	            endDate: _this.props.endDate,
	            peekNextMonth: _this.props.peekNextMonth,
	            utcOffset: _this.props.utcOffset })
	        ));
	      }
	      return monthList;
	    };

	    _this.renderTimeSection = function () {
	      if (_this.props.showTimeSelect) {
	        return _react2.default.createElement(_time2.default, {
	          selected: _this.props.selected,
	          onChange: _this.props.onTimeChange,
	          format: _this.props.timeFormat,
	          intervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          todayButton: _this.props.todayButton,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          monthRef: _this.state.monthContainer });
	      } else {
	        return;
	      }
	    };

	    _this.state = {
	      date: _this.localizeDate(_this.getDateInView()),
	      selectingDate: null,
	      monthContainer: _this.monthContainer
	    };
	    return _this;
	  }

	  _createClass(Calendar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      /* monthContainer height is needed in time component to determine the height for the ul in the time component. setState here so height is given after final component layout is rendered */
	      if (this.props.showTimeSelect) {
	        this.assignMonthContainer = function () {
	          _this2.setState({ monthContainer: _this2.monthContainer });
	        }();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.preSelection && !(0, _date_utils.isSameDay)(nextProps.preSelection, this.props.preSelection)) {
	        this.setState({
	          date: this.localizeDate(nextProps.preSelection)
	        });
	      } else if (nextProps.openToDate && !(0, _date_utils.isSameDay)(nextProps.openToDate, this.props.openToDate)) {
	        this.setState({
	          date: this.localizeDate(nextProps.openToDate)
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('react-datepicker', this.props.className) },
	        _react2.default.createElement('div', { className: 'react-datepicker__triangle' }),
	        this.renderPreviousMonthButton(),
	        this.renderNextMonthButton(),
	        this.renderMonths(),
	        this.renderTodayButton(),
	        this.renderTimeSection(),
	        this.props.children
	      );
	    }
	  }]);

	  return Calendar;
	}(_react2.default.Component);

	Calendar.propTypes = {
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.node,
	  dateFormat: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]).isRequired,
	  dayClassName: _propTypes2.default.func,
	  dropdownMode: _propTypes2.default.oneOf(['scroll', 'select']).isRequired,
	  endDate: _propTypes2.default.object,
	  excludeDates: _propTypes2.default.array,
	  filterDate: _propTypes2.default.func,
	  fixedHeight: _propTypes2.default.bool,
	  formatWeekNumber: _propTypes2.default.func,
	  highlightDates: _propTypes2.default.array,
	  includeDates: _propTypes2.default.array,
	  inline: _propTypes2.default.bool,
	  locale: _propTypes2.default.string,
	  maxDate: _propTypes2.default.object,
	  minDate: _propTypes2.default.object,
	  monthsShown: _propTypes2.default.number,
	  onClickOutside: _propTypes2.default.func.isRequired,
	  onMonthChange: _propTypes2.default.func,
	  forceShowMonthNavigation: _propTypes2.default.bool,
	  onDropdownFocus: _propTypes2.default.func,
	  onSelect: _propTypes2.default.func.isRequired,
	  onWeekSelect: _propTypes2.default.func,
	  showTimeSelect: _propTypes2.default.bool,
	  timeFormat: _propTypes2.default.string,
	  timeIntervals: _propTypes2.default.number,
	  onTimeChange: _propTypes2.default.func,
	  minTime: _propTypes2.default.object,
	  maxTime: _propTypes2.default.object,
	  excludeTimes: _propTypes2.default.array,
	  openToDate: _propTypes2.default.object,
	  peekNextMonth: _propTypes2.default.bool,
	  scrollableYearDropdown: _propTypes2.default.bool,
	  preSelection: _propTypes2.default.object,
	  selected: _propTypes2.default.object,
	  selectsEnd: _propTypes2.default.bool,
	  selectsStart: _propTypes2.default.bool,
	  showMonthDropdown: _propTypes2.default.bool,
	  showWeekNumbers: _propTypes2.default.bool,
	  showYearDropdown: _propTypes2.default.bool,
	  startDate: _propTypes2.default.object,
	  todayButton: _propTypes2.default.string,
	  useWeekdaysShort: _propTypes2.default.bool,
	  withPortal: _propTypes2.default.bool,
	  utcOffset: _propTypes2.default.number,
	  weekLabel: _propTypes2.default.string,
	  yearDropdownItemNumber: _propTypes2.default.number
	};
	exports.default = Calendar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _year_dropdown_options = __webpack_require__(9);

	var _year_dropdown_options2 = _interopRequireDefault(_year_dropdown_options);

	var _reactOnclickoutside = __webpack_require__(11);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _date_utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WrappedYearDropdownOptions = (0, _reactOnclickoutside2.default)(_year_dropdown_options2.default);

	var YearDropdown = function (_React$Component) {
	  _inherits(YearDropdown, _React$Component);

	  function YearDropdown() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, YearDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearDropdown.__proto__ || Object.getPrototypeOf(YearDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function () {
	      var minYear = _this.props.minDate ? (0, _date_utils.getYear)(_this.props.minDate) : 1900;
	      var maxYear = _this.props.maxDate ? (0, _date_utils.getYear)(_this.props.maxDate) : 2100;

	      var options = [];
	      for (var i = minYear; i <= maxYear; i++) {
	        options.push(_react2.default.createElement(
	          'option',
	          { key: i, value: i },
	          i
	        ));
	      }
	      return options;
	    }, _this.onSelectChange = function (e) {
	      _this.onChange(e.target.value);
	    }, _this.renderSelectMode = function () {
	      return _react2.default.createElement(
	        'select',
	        {
	          value: _this.props.year,
	          className: 'react-datepicker__year-select',
	          onChange: _this.onSelectChange },
	        _this.renderSelectOptions()
	      );
	    }, _this.renderReadView = function (visible) {
	      return _react2.default.createElement(
	        'div',
	        { key: 'read', style: { visibility: visible ? 'visible' : 'hidden' }, className: 'react-datepicker__year-read-view', onClick: _this.toggleDropdown },
	        _react2.default.createElement('span', { className: 'react-datepicker__year-read-view--down-arrow' }),
	        _react2.default.createElement(
	          'span',
	          { className: 'react-datepicker__year-read-view--selected-year' },
	          _this.props.year
	        )
	      );
	    }, _this.renderDropdown = function () {
	      return _react2.default.createElement(WrappedYearDropdownOptions, {
	        key: 'dropdown',
	        ref: 'options',
	        year: _this.props.year,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber });
	    }, _this.renderScrollMode = function () {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown());
	      }
	      return result;
	    }, _this.onChange = function (year) {
	      _this.toggleDropdown();
	      if (year === _this.props.year) return;
	      _this.props.onChange(year);
	    }, _this.toggleDropdown = function () {
	      _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(YearDropdown, [{
	    key: 'render',
	    value: function render() {
	      var renderedDropdown = void 0;
	      switch (this.props.dropdownMode) {
	        case 'scroll':
	          renderedDropdown = this.renderScrollMode();
	          break;
	        case 'select':
	          renderedDropdown = this.renderSelectMode();
	          break;
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--' + this.props.dropdownMode },
	        renderedDropdown
	      );
	    }
	  }]);

	  return YearDropdown;
	}(_react2.default.Component);

	YearDropdown.propTypes = {
	  dropdownMode: _propTypes2.default.oneOf(['scroll', 'select']).isRequired,
	  maxDate: _propTypes2.default.object,
	  minDate: _propTypes2.default.object,
	  onChange: _propTypes2.default.func.isRequired,
	  scrollableYearDropdown: _propTypes2.default.bool,
	  year: _propTypes2.default.number.isRequired,
	  yearDropdownItemNumber: _propTypes2.default.number
	};
	exports.default = YearDropdown;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(5)();
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(8);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function generateYears(year, noOfYear, minDate, maxDate) {
	  var list = [];
	  for (var i = 0; i < 2 * noOfYear + 1; i++) {
	    var newYear = year + noOfYear - i;
	    var isInRange = true;

	    if (minDate) {
	      isInRange = minDate.year() <= newYear;
	    }

	    if (maxDate && isInRange) {
	      isInRange = maxDate.year() >= newYear;
	    }

	    if (isInRange) {
	      list.push(newYear);
	    }
	  }

	  return list;
	}

	var YearDropdownOptions = function (_React$Component) {
	  _inherits(YearDropdownOptions, _React$Component);

	  function YearDropdownOptions(props) {
	    _classCallCheck(this, YearDropdownOptions);

	    var _this = _possibleConstructorReturn(this, (YearDropdownOptions.__proto__ || Object.getPrototypeOf(YearDropdownOptions)).call(this, props));

	    _this.renderOptions = function () {
	      var selectedYear = _this.props.year;
	      var options = _this.state.yearsList.map(function (year) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__year-option',
	            key: year,
	            ref: year,
	            onClick: _this.onChange.bind(_this, year) },
	          selectedYear === year ? _react2.default.createElement(
	            'span',
	            { className: 'react-datepicker__year-option--selected' },
	            '\u2713'
	          ) : '',
	          year
	        );
	      });

	      var minYear = _this.props.minDate ? _this.props.minDate.year() : null;
	      var maxYear = _this.props.maxDate ? _this.props.maxDate.year() : null;

	      if (!maxYear || !_this.state.yearsList.find(function (year) {
	        return year === maxYear;
	      })) {
	        options.unshift(_react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__year-option',
	            ref: 'upcoming',
	            key: 'upcoming',
	            onClick: _this.incrementYears },
	          _react2.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming' })
	        ));
	      }

	      if (!minYear || !_this.state.yearsList.find(function (year) {
	        return year === minYear;
	      })) {
	        options.push(_react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__year-option',
	            ref: 'previous',
	            key: 'previous',
	            onClick: _this.decrementYears },
	          _react2.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous' })
	        ));
	      }

	      return options;
	    };

	    _this.onChange = function (year) {
	      _this.props.onChange(year);
	    };

	    _this.handleClickOutside = function () {
	      _this.props.onCancel();
	    };

	    _this.shiftYears = function (amount) {
	      var years = _this.state.yearsList.map(function (year) {
	        return year + amount;
	      });

	      _this.setState({
	        yearsList: years
	      });
	    };

	    _this.incrementYears = function () {
	      return _this.shiftYears(1);
	    };

	    _this.decrementYears = function () {
	      return _this.shiftYears(-1);
	    };

	    var yearDropdownItemNumber = props.yearDropdownItemNumber,
	        scrollableYearDropdown = props.scrollableYearDropdown;

	    var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);

	    _this.state = {
	      yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
	    };
	    return _this;
	  }

	  _createClass(YearDropdownOptions, [{
	    key: 'render',
	    value: function render() {
	      var dropdownClass = (0, _classnames2.default)({
	        'react-datepicker__year-dropdown': true,
	        'react-datepicker__year-dropdown--scrollable': this.props.scrollableYearDropdown
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: dropdownClass },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return YearDropdownOptions;
	}(_react2.default.Component);

	YearDropdownOptions.propTypes = {
	  minDate: _propTypes2.default.object,
	  maxDate: _propTypes2.default.object,
	  onCancel: _propTypes2.default.func.isRequired,
	  onChange: _propTypes2.default.func.isRequired,
	  scrollableYearDropdown: _propTypes2.default.bool,
	  year: _propTypes2.default.number.isRequired,
	  yearDropdownItemNumber: _propTypes2.default.number
	};
	exports.default = YearDropdownOptions;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newDate = newDate;
	exports.newDateWithOffset = newDateWithOffset;
	exports.now = now;
	exports.cloneDate = cloneDate;
	exports.parseDate = parseDate;
	exports.isMoment = isMoment;
	exports.isDate = isDate;
	exports.formatDate = formatDate;
	exports.safeDateFormat = safeDateFormat;
	exports.setTime = setTime;
	exports.setMonth = setMonth;
	exports.setYear = setYear;
	exports.setUTCOffset = setUTCOffset;
	exports.getSecond = getSecond;
	exports.getMinute = getMinute;
	exports.getHour = getHour;
	exports.getDay = getDay;
	exports.getWeek = getWeek;
	exports.getMonth = getMonth;
	exports.getYear = getYear;
	exports.getDate = getDate;
	exports.getUTCOffset = getUTCOffset;
	exports.getDayOfWeekCode = getDayOfWeekCode;
	exports.getStartOfDay = getStartOfDay;
	exports.getStartOfWeek = getStartOfWeek;
	exports.getStartOfMonth = getStartOfMonth;
	exports.getStartOfDate = getStartOfDate;
	exports.getEndOfWeek = getEndOfWeek;
	exports.getEndOfMonth = getEndOfMonth;
	exports.addMinutes = addMinutes;
	exports.addDays = addDays;
	exports.addWeeks = addWeeks;
	exports.addMonths = addMonths;
	exports.addYears = addYears;
	exports.subtractDays = subtractDays;
	exports.subtractWeeks = subtractWeeks;
	exports.subtractMonths = subtractMonths;
	exports.subtractYears = subtractYears;
	exports.isBefore = isBefore;
	exports.isAfter = isAfter;
	exports.equals = equals;
	exports.isSameMonth = isSameMonth;
	exports.isSameDay = isSameDay;
	exports.isSameUtcOffset = isSameUtcOffset;
	exports.isDayInRange = isDayInRange;
	exports.getDaysDiff = getDaysDiff;
	exports.localizeDate = localizeDate;
	exports.getDefaultLocale = getDefaultLocale;
	exports.getDefaultLocaleData = getDefaultLocaleData;
	exports.registerLocale = registerLocale;
	exports.getLocaleData = getLocaleData;
	exports.getLocaleDataForLocale = getLocaleDataForLocale;
	exports.getWeekdayMinInLocale = getWeekdayMinInLocale;
	exports.getWeekdayShortInLocale = getWeekdayShortInLocale;
	exports.getMonthInLocale = getMonthInLocale;
	exports.isDayDisabled = isDayDisabled;
	exports.isTimeDisabled = isTimeDisabled;
	exports.isTimeInDisabledRange = isTimeInDisabledRange;
	exports.allDaysDisabledBefore = allDaysDisabledBefore;
	exports.allDaysDisabledAfter = allDaysDisabledAfter;
	exports.getEffectiveMinDate = getEffectiveMinDate;
	exports.getEffectiveMaxDate = getEffectiveMaxDate;

	var _moment = __webpack_require__(13);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dayOfWeekCodes = {
	  1: 'mon',
	  2: 'tue',
	  3: 'wed',
	  4: 'thu',
	  5: 'fri',
	  6: 'sat',
	  7: 'sun'

	  // These functions are not exported so
	  // that we avoid magic strings like 'days'
	};function set(date, unit, to) {
	  return date.set(unit, to);
	}

	function add(date, amount, unit) {
	  return date.add(amount, unit);
	}

	function subtract(date, amount, unit) {
	  return date.subtract(amount, unit);
	}

	function get(date, unit) {
	  return date.get(unit);
	}

	function getStartOf(date, unit) {
	  return date.startOf(unit);
	}

	function getEndOf(date, unit) {
	  return date.endOf(unit);
	}

	function getDiff(date1, date2, unit) {
	  return date1.diff(date2, unit);
	}

	function isSame(date1, date2, unit) {
	  return date1.isSame(date2, unit);
	}

	// ** Date Constructors **

	function newDate(point) {
	  return (0, _moment2.default)(point);
	}

	function newDateWithOffset(utcOffset) {
	  return (0, _moment2.default)().utc().utcOffset(utcOffset);
	}

	function now(maybeFixedUtcOffset) {
	  if (maybeFixedUtcOffset == null) {
	    return newDate();
	  }
	  return newDateWithOffset(maybeFixedUtcOffset);
	}

	function cloneDate(date) {
	  return date.clone();
	}

	function parseDate(value, _ref) {
	  var dateFormat = _ref.dateFormat,
	      locale = _ref.locale;

	  var m = (0, _moment2.default)(value, dateFormat, locale || _moment2.default.locale(), true);
	  return m.isValid() ? m : null;
	}

	// ** Date "Reflection" **

	function isMoment(date) {
	  return _moment2.default.isMoment(date);
	}

	function isDate(date) {
	  return _moment2.default.isDate(date);
	}

	// ** Date Formatting **

	function formatDate(date, format) {
	  return date.format(format);
	}

	function safeDateFormat(date, _ref2) {
	  var dateFormat = _ref2.dateFormat,
	      locale = _ref2.locale;

	  return date && date.clone().locale(locale || _moment2.default.locale()).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) || '';
	}

	// ** Date Setters **

	function setTime(date, _ref3) {
	  var hour = _ref3.hour,
	      minute = _ref3.minute,
	      second = _ref3.second;

	  date.set({ hour: hour, minute: minute, second: second });
	  return date;
	}

	function setMonth(date, month) {
	  return set(date, 'month', month);
	}

	function setYear(date, year) {
	  return set(date, 'year', year);
	}

	function setUTCOffset(date, offset) {
	  return date.utcOffset(offset);
	}

	// ** Date Getters **

	function getSecond(date) {
	  return get(date, 'second');
	}

	function getMinute(date) {
	  return get(date, 'minute');
	}

	function getHour(date) {
	  return get(date, 'hour');
	}

	// Returns day of week
	function getDay(date) {
	  return get(date, 'day');
	}

	function getWeek(date) {
	  return get(date, 'week');
	}

	function getMonth(date) {
	  return get(date, 'month');
	}

	function getYear(date) {
	  return get(date, 'year');
	}

	// Returns day of month
	function getDate(date) {
	  return get(date, 'date');
	}

	function getUTCOffset() {
	  return (0, _moment2.default)().utcOffset();
	}

	function getDayOfWeekCode(day) {
	  return dayOfWeekCodes[day.isoWeekday()];
	}

	// *** Start of ***

	function getStartOfDay(date) {
	  return getStartOf(date, 'day');
	}

	function getStartOfWeek(date) {
	  return getStartOf(date, 'week');
	}
	function getStartOfMonth(date) {
	  return getStartOf(date, 'month');
	}

	function getStartOfDate(date) {
	  return getStartOf(date, 'date');
	}

	// *** End of ***

	function getEndOfWeek(date) {
	  return getEndOf(date, 'week');
	}

	function getEndOfMonth(date) {
	  return getEndOf(date, 'month');
	}

	// ** Date Math **

	// *** Addition ***

	function addMinutes(date, amount) {
	  return add(date, amount, 'minutes');
	}

	function addDays(date, amount) {
	  return add(date, amount, 'days');
	}

	function addWeeks(date, amount) {
	  return add(date, amount, 'weeks');
	}

	function addMonths(date, amount) {
	  return add(date, amount, 'months');
	}

	function addYears(date, amount) {
	  return add(date, amount, 'years');
	}

	// *** Subtraction ***
	function subtractDays(date, amount) {
	  return subtract(date, amount, 'days');
	}

	function subtractWeeks(date, amount) {
	  return subtract(date, amount, 'weeks');
	}

	function subtractMonths(date, amount) {
	  return subtract(date, amount, 'months');
	}

	function subtractYears(date, amount) {
	  return subtract(date, amount, 'years');
	}

	// ** Date Comparison **

	function isBefore(date1, date2) {
	  return date1.isBefore(date2);
	}

	function isAfter(date1, date2) {
	  return date1.isAfter(date2);
	}

	function equals(date1, date2) {
	  return date1.isSame(date2);
	}

	function isSameMonth(date1, date2) {
	  return isSame(date1, date2, 'month');
	}

	function isSameDay(moment1, moment2) {
	  if (moment1 && moment2) {
	    return moment1.isSame(moment2, 'day');
	  } else {
	    return !moment1 && !moment2;
	  }
	}

	function isSameUtcOffset(moment1, moment2) {
	  if (moment1 && moment2) {
	    return moment1.utcOffset() === moment2.utcOffset();
	  } else {
	    return !moment1 && !moment2;
	  }
	}

	function isDayInRange(day, startDate, endDate) {
	  var before = startDate.clone().startOf('day').subtract(1, 'seconds');
	  var after = endDate.clone().startOf('day').add(1, 'seconds');
	  return day.clone().startOf('day').isBetween(before, after);
	}

	// *** Diffing ***

	function getDaysDiff(date1, date2) {
	  return getDiff(date1, date2, 'days');
	}

	// ** Date Localization **

	function localizeDate(date, locale) {
	  return date.clone().locale(locale || _moment2.default.locale());
	}

	function getDefaultLocale() {
	  return _moment2.default.locale();
	}

	function getDefaultLocaleData() {
	  return _moment2.default.localeData();
	}

	function registerLocale(localeName, localeData) {
	  _moment2.default.defineLocale(localeName, localeData);
	}

	function getLocaleData(date) {
	  return date.localeData();
	}

	function getLocaleDataForLocale(locale) {
	  return _moment2.default.localeData(locale);
	}

	function getWeekdayMinInLocale(locale, date) {
	  return locale.weekdaysMin(date);
	}

	function getWeekdayShortInLocale(locale, date) {
	  return locale.weekdaysShort(date);
	}

	// TODO what is this format exactly?
	function getMonthInLocale(locale, date, format) {
	  return locale.months(date, format);
	}

	// ** Utils for some components **

	function isDayDisabled(day) {
	  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      minDate = _ref4.minDate,
	      maxDate = _ref4.maxDate,
	      excludeDates = _ref4.excludeDates,
	      includeDates = _ref4.includeDates,
	      filterDate = _ref4.filterDate;

	  return minDate && day.isBefore(minDate, 'day') || maxDate && day.isAfter(maxDate, 'day') || excludeDates && excludeDates.some(function (excludeDate) {
	    return isSameDay(day, excludeDate);
	  }) || includeDates && !includeDates.some(function (includeDate) {
	    return isSameDay(day, includeDate);
	  }) || filterDate && !filterDate(day.clone()) || false;
	}

	function isTimeDisabled(time, disabledTimes) {
	  var l = disabledTimes.length;
	  for (var i = 0; i < l; i++) {
	    if (disabledTimes[i].get('hours') === time.get('hours') && disabledTimes[i].get('minutes') === time.get('minutes')) {
	      return true;
	    }
	  }

	  return false;
	}

	function isTimeInDisabledRange(time, _ref5) {
	  var minTime = _ref5.minTime,
	      maxTime = _ref5.maxTime;

	  if (!minTime || !maxTime) {
	    throw new Error('Both minTime and maxTime props required');
	  }

	  var base = (0, _moment2.default)().hours(0).minutes(0).seconds(0);
	  var baseTime = base.clone().hours(time.get('hours')).minutes(time.get('minutes'));
	  var min = base.clone().hours(minTime.get('hours')).minutes(minTime.get('minutes'));
	  var max = base.clone().hours(maxTime.get('hours')).minutes(maxTime.get('minutes'));

	  return !(baseTime.isSameOrAfter(min) && baseTime.isSameOrBefore(max));
	}

	function allDaysDisabledBefore(day, unit) {
	  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      minDate = _ref6.minDate,
	      includeDates = _ref6.includeDates;

	  var dateBefore = day.clone().subtract(1, unit);
	  return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateBefore.isBefore(includeDate, unit);
	  }) || false;
	}

	function allDaysDisabledAfter(day, unit) {
	  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      maxDate = _ref7.maxDate,
	      includeDates = _ref7.includeDates;

	  var dateAfter = day.clone().add(1, unit);
	  return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateAfter.isAfter(includeDate, unit);
	  }) || false;
	}

	function getEffectiveMinDate(_ref8) {
	  var minDate = _ref8.minDate,
	      includeDates = _ref8.includeDates;

	  if (includeDates && minDate) {
	    return _moment2.default.min(includeDates.filter(function (includeDate) {
	      return minDate.isSameOrBefore(includeDate, 'day');
	    }));
	  } else if (includeDates) {
	    return _moment2.default.min(includeDates);
	  } else {
	    return minDate;
	  }
	}

	function getEffectiveMaxDate(_ref9) {
	  var maxDate = _ref9.maxDate,
	      includeDates = _ref9.includeDates;

	  if (includeDates && maxDate) {
	    return _moment2.default.max(includeDates.filter(function (includeDate) {
	      return maxDate.isSameOrAfter(includeDate, 'day');
	    }));
	  } else if (includeDates) {
	    return _moment2.default.max(includeDates);
	  } else {
	    return maxDate;
	  }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _month_dropdown_options = __webpack_require__(15);

	var _month_dropdown_options2 = _interopRequireDefault(_month_dropdown_options);

	var _reactOnclickoutside = __webpack_require__(11);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _date_utils = __webpack_require__(12);

	var utils = _interopRequireWildcard(_date_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WrappedMonthDropdownOptions = (0, _reactOnclickoutside2.default)(_month_dropdown_options2.default);

	var MonthDropdown = function (_React$Component) {
	  _inherits(MonthDropdown, _React$Component);

	  function MonthDropdown() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MonthDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthDropdown.__proto__ || Object.getPrototypeOf(MonthDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function (monthNames) {
	      return monthNames.map(function (M, i) {
	        return _react2.default.createElement(
	          'option',
	          { key: i, value: i },
	          M
	        );
	      });
	    }, _this.renderSelectMode = function (monthNames) {
	      return _react2.default.createElement(
	        'select',
	        { value: _this.props.month, className: 'react-datepicker__month-select', onChange: function onChange(e) {
	            return _this.onChange(e.target.value);
	          } },
	        _this.renderSelectOptions(monthNames)
	      );
	    }, _this.renderReadView = function (visible, monthNames) {
	      return _react2.default.createElement(
	        'div',
	        { key: 'read', style: { visibility: visible ? 'visible' : 'hidden' }, className: 'react-datepicker__month-read-view', onClick: _this.toggleDropdown },
	        _react2.default.createElement(
	          'span',
	          { className: 'react-datepicker__month-read-view--selected-month' },
	          monthNames[_this.props.month]
	        ),
	        _react2.default.createElement('span', { className: 'react-datepicker__month-read-view--down-arrow' })
	      );
	    }, _this.renderDropdown = function (monthNames) {
	      return _react2.default.createElement(WrappedMonthDropdownOptions, {
	        key: 'dropdown',
	        ref: 'options',
	        month: _this.props.month,
	        monthNames: monthNames,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown });
	    }, _this.renderScrollMode = function (monthNames) {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible, monthNames)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown(monthNames));
	      }
	      return result;
	    }, _this.onChange = function (month) {
	      _this.toggleDropdown();
	      if (month !== _this.props.month) {
	        _this.props.onChange(month);
	      }
	    }, _this.toggleDropdown = function () {
	      return _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MonthDropdown, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var localeData = utils.getLocaleDataForLocale(this.props.locale);
	      var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (M) {
	        return utils.getMonthInLocale(localeData, utils.newDate({ M: M }), _this2.props.dateFormat);
	      });

	      var renderedDropdown = void 0;
	      switch (this.props.dropdownMode) {
	        case 'scroll':
	          renderedDropdown = this.renderScrollMode(monthNames);
	          break;
	        case 'select':
	          renderedDropdown = this.renderSelectMode(monthNames);
	          break;
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--' + this.props.dropdownMode },
	        renderedDropdown
	      );
	    }
	  }]);

	  return MonthDropdown;
	}(_react2.default.Component);

	MonthDropdown.propTypes = {
	  dropdownMode: _propTypes2.default.oneOf(['scroll', 'select']).isRequired,
	  locale: _propTypes2.default.string,
	  dateFormat: _propTypes2.default.string.isRequired,
	  month: _propTypes2.default.number.isRequired,
	  onChange: _propTypes2.default.func.isRequired
	};
	exports.default = MonthDropdown;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MonthDropdownOptions = function (_React$Component) {
	  _inherits(MonthDropdownOptions, _React$Component);

	  function MonthDropdownOptions() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, MonthDropdownOptions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthDropdownOptions.__proto__ || Object.getPrototypeOf(MonthDropdownOptions)).call.apply(_ref, [this].concat(args))), _this), _this.renderOptions = function () {
	      return _this.props.monthNames.map(function (month, i) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__month-option',
	            key: month,
	            ref: month,
	            onClick: _this.onChange.bind(_this, i) },
	          _this.props.month === i ? _react2.default.createElement(
	            'span',
	            { className: 'react-datepicker__month-option--selected' },
	            '\u2713'
	          ) : '',
	          month
	        );
	      });
	    }, _this.onChange = function (month) {
	      return _this.props.onChange(month);
	    }, _this.handleClickOutside = function () {
	      return _this.props.onCancel();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(MonthDropdownOptions, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'react-datepicker__month-dropdown' },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return MonthDropdownOptions;
	}(_react2.default.Component);

	MonthDropdownOptions.propTypes = {
	  onCancel: _propTypes2.default.func.isRequired,
	  onChange: _propTypes2.default.func.isRequired,
	  month: _propTypes2.default.number.isRequired,
	  monthNames: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired
	};
	exports.default = MonthDropdownOptions;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _week = __webpack_require__(17);

	var _week2 = _interopRequireDefault(_week);

	var _date_utils = __webpack_require__(12);

	var utils = _interopRequireWildcard(_date_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

	var Month = function (_React$Component) {
	  _inherits(Month, _React$Component);

	  function Month() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Month);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleMouseLeave = function () {
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave();
	      }
	    }, _this.isWeekInMonth = function (startOfWeek) {
	      var day = _this.props.day;
	      var endOfWeek = utils.addDays(utils.cloneDate(startOfWeek), 6);
	      return utils.isSameMonth(startOfWeek, day) || utils.isSameMonth(endOfWeek, day);
	    }, _this.renderWeeks = function () {
	      var weeks = [];
	      var isFixedHeight = _this.props.fixedHeight;
	      var currentWeekStart = utils.getStartOfWeek(utils.getStartOfMonth(utils.cloneDate(_this.props.day)));
	      var i = 0;
	      var breakAfterNextPush = false;

	      while (true) {
	        weeks.push(_react2.default.createElement(_week2.default, {
	          key: i,
	          day: currentWeekStart,
	          month: utils.getMonth(_this.props.day),
	          onDayClick: _this.handleDayClick,
	          onDayMouseEnter: _this.handleDayMouseEnter,
	          onWeekSelect: _this.props.onWeekSelect,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          showWeekNumber: _this.props.showWeekNumbers,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset }));

	        if (breakAfterNextPush) break;

	        i++;
	        currentWeekStart = utils.addWeeks(utils.cloneDate(currentWeekStart), 1);

	        // If one of these conditions is true, we will either break on this week
	        // or break on the next week
	        var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
	        var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

	        if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
	          if (_this.props.peekNextMonth) {
	            breakAfterNextPush = true;
	          } else {
	            break;
	          }
	        }
	      }

	      return weeks;
	    }, _this.getClassNames = function () {
	      var _this$props = _this.props,
	          selectingDate = _this$props.selectingDate,
	          selectsStart = _this$props.selectsStart,
	          selectsEnd = _this$props.selectsEnd;

	      return (0, _classnames2.default)('react-datepicker__month', {
	        'react-datepicker__month--selecting-range': selectingDate && (selectsStart || selectsEnd)
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Month, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.getClassNames(), onMouseLeave: this.handleMouseLeave, role: 'listbox' },
	        this.renderWeeks()
	      );
	    }
	  }]);

	  return Month;
	}(_react2.default.Component);

	Month.propTypes = {
	  day: _propTypes2.default.object.isRequired,
	  dayClassName: _propTypes2.default.func,
	  endDate: _propTypes2.default.object,
	  excludeDates: _propTypes2.default.array,
	  filterDate: _propTypes2.default.func,
	  fixedHeight: _propTypes2.default.bool,
	  formatWeekNumber: _propTypes2.default.func,
	  highlightDates: _propTypes2.default.array,
	  includeDates: _propTypes2.default.array,
	  inline: _propTypes2.default.bool,
	  maxDate: _propTypes2.default.object,
	  minDate: _propTypes2.default.object,
	  onDayClick: _propTypes2.default.func,
	  onDayMouseEnter: _propTypes2.default.func,
	  onMouseLeave: _propTypes2.default.func,
	  onWeekSelect: _propTypes2.default.func,
	  peekNextMonth: _propTypes2.default.bool,
	  preSelection: _propTypes2.default.object,
	  selected: _propTypes2.default.object,
	  selectingDate: _propTypes2.default.object,
	  selectsEnd: _propTypes2.default.bool,
	  selectsStart: _propTypes2.default.bool,
	  showWeekNumbers: _propTypes2.default.bool,
	  startDate: _propTypes2.default.object,
	  utcOffset: _propTypes2.default.number
	};
	exports.default = Month;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _day = __webpack_require__(18);

	var _day2 = _interopRequireDefault(_day);

	var _week_number = __webpack_require__(19);

	var _week_number2 = _interopRequireDefault(_week_number);

	var _date_utils = __webpack_require__(12);

	var utils = _interopRequireWildcard(_date_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Week = function (_React$Component) {
	  _inherits(Week, _React$Component);

	  function Week() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Week);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Week.__proto__ || Object.getPrototypeOf(Week)).call.apply(_ref, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleWeekClick = function (day, weekNumber, event) {
	      if (typeof _this.props.onWeekSelect === 'function') {
	        _this.props.onWeekSelect(day, weekNumber, event);
	      }
	    }, _this.formatWeekNumber = function (startOfWeek) {
	      if (_this.props.formatWeekNumber) {
	        return _this.props.formatWeekNumber(startOfWeek);
	      }
	      return utils.getWeek(startOfWeek);
	    }, _this.renderDays = function () {
	      var startOfWeek = utils.getStartOfWeek(utils.cloneDate(_this.props.day));
	      var days = [];
	      var weekNumber = _this.formatWeekNumber(startOfWeek);
	      if (_this.props.showWeekNumber) {
	        var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
	        days.push(_react2.default.createElement(_week_number2.default, { key: 'W', weekNumber: weekNumber, onClick: onClickAction }));
	      }
	      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = utils.addDays(utils.cloneDate(startOfWeek), offset);
	        return _react2.default.createElement(_day2.default, {
	          key: offset,
	          day: day,
	          month: _this.props.month,
	          onClick: _this.handleDayClick.bind(_this, day),
	          onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset });
	      }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Week, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'react-datepicker__week' },
	        this.renderDays()
	      );
	    }
	  }]);

	  return Week;
	}(_react2.default.Component);

	Week.propTypes = {
	  day: _propTypes2.default.object.isRequired,
	  dayClassName: _propTypes2.default.func,
	  endDate: _propTypes2.default.object,
	  excludeDates: _propTypes2.default.array,
	  filterDate: _propTypes2.default.func,
	  formatWeekNumber: _propTypes2.default.func,
	  highlightDates: _propTypes2.default.array,
	  includeDates: _propTypes2.default.array,
	  inline: _propTypes2.default.bool,
	  maxDate: _propTypes2.default.object,
	  minDate: _propTypes2.default.object,
	  month: _propTypes2.default.number,
	  onDayClick: _propTypes2.default.func,
	  onDayMouseEnter: _propTypes2.default.func,
	  onWeekSelect: _propTypes2.default.func,
	  preSelection: _propTypes2.default.object,
	  selected: _propTypes2.default.object,
	  selectingDate: _propTypes2.default.object,
	  selectsEnd: _propTypes2.default.bool,
	  selectsStart: _propTypes2.default.bool,
	  showWeekNumber: _propTypes2.default.bool,
	  startDate: _propTypes2.default.object,
	  utcOffset: _propTypes2.default.number
	};
	exports.default = Week;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _date_utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Day = function (_React$Component) {
	  _inherits(Day, _React$Component);

	  function Day() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Day);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (!_this.isDisabled() && _this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.isDisabled() && _this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.isSameDay = function (other) {
	      return (0, _date_utils.isSameDay)(_this.props.day, other);
	    }, _this.isKeyboardSelected = function () {
	      return !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
	    }, _this.isDisabled = function () {
	      return (0, _date_utils.isDayDisabled)(_this.props.day, _this.props);
	    }, _this.getHighLightedClass = function (defaultClassName) {
	      var _this$props = _this.props,
	          day = _this$props.day,
	          highlightDates = _this$props.highlightDates;


	      if (!highlightDates) {
	        return _defineProperty({}, defaultClassName, false);
	      }

	      var classNames = {};
	      for (var i = 0, len = highlightDates.length; i < len; i++) {
	        var obj = highlightDates[i];
	        if ((0, _date_utils.isMoment)(obj)) {
	          if ((0, _date_utils.isSameDay)(day, obj)) {
	            classNames[defaultClassName] = true;
	          }
	        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	          var keys = Object.keys(obj);
	          var arr = obj[keys[0]];
	          if (typeof keys[0] === 'string' && arr.constructor === Array) {
	            for (var k = 0, _len2 = arr.length; k < _len2; k++) {
	              if ((0, _date_utils.isSameDay)(day, arr[k])) {
	                classNames[keys[0]] = true;
	              }
	            }
	          }
	        }
	      }

	      return classNames;
	    }, _this.isInRange = function () {
	      var _this$props2 = _this.props,
	          day = _this$props2.day,
	          startDate = _this$props2.startDate,
	          endDate = _this$props2.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return (0, _date_utils.isDayInRange)(day, startDate, endDate);
	    }, _this.isInSelectingRange = function () {
	      var _this$props3 = _this.props,
	          day = _this$props3.day,
	          selectsStart = _this$props3.selectsStart,
	          selectsEnd = _this$props3.selectsEnd,
	          selectingDate = _this$props3.selectingDate,
	          startDate = _this$props3.startDate,
	          endDate = _this$props3.endDate;


	      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
	        return false;
	      }

	      if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
	        return (0, _date_utils.isDayInRange)(day, selectingDate, endDate);
	      }

	      if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
	        return (0, _date_utils.isDayInRange)(day, startDate, selectingDate);
	      }

	      return false;
	    }, _this.isSelectingRangeStart = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props4 = _this.props,
	          day = _this$props4.day,
	          selectingDate = _this$props4.selectingDate,
	          startDate = _this$props4.startDate,
	          selectsStart = _this$props4.selectsStart;


	      if (selectsStart) {
	        return (0, _date_utils.isSameDay)(day, selectingDate);
	      } else {
	        return (0, _date_utils.isSameDay)(day, startDate);
	      }
	    }, _this.isSelectingRangeEnd = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props5 = _this.props,
	          day = _this$props5.day,
	          selectingDate = _this$props5.selectingDate,
	          endDate = _this$props5.endDate,
	          selectsEnd = _this$props5.selectsEnd;


	      if (selectsEnd) {
	        return (0, _date_utils.isSameDay)(day, selectingDate);
	      } else {
	        return (0, _date_utils.isSameDay)(day, endDate);
	      }
	    }, _this.isRangeStart = function () {
	      var _this$props6 = _this.props,
	          day = _this$props6.day,
	          startDate = _this$props6.startDate,
	          endDate = _this$props6.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return (0, _date_utils.isSameDay)(startDate, day);
	    }, _this.isRangeEnd = function () {
	      var _this$props7 = _this.props,
	          day = _this$props7.day,
	          startDate = _this$props7.startDate,
	          endDate = _this$props7.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return (0, _date_utils.isSameDay)(endDate, day);
	    }, _this.isWeekend = function () {
	      var weekday = (0, _date_utils.getDay)(_this.props.day);
	      return weekday === 0 || weekday === 6;
	    }, _this.isOutsideMonth = function () {
	      return _this.props.month !== undefined && _this.props.month !== (0, _date_utils.getMonth)(_this.props.day);
	    }, _this.getClassNames = function (date) {
	      var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
	      return (0, _classnames2.default)('react-datepicker__day', dayClassName, 'react-datepicker__day--' + (0, _date_utils.getDayOfWeekCode)(_this.props.day), {
	        'react-datepicker__day--disabled': _this.isDisabled(),
	        'react-datepicker__day--selected': _this.isSameDay(_this.props.selected),
	        'react-datepicker__day--keyboard-selected': _this.isKeyboardSelected(),
	        'react-datepicker__day--range-start': _this.isRangeStart(),
	        'react-datepicker__day--range-end': _this.isRangeEnd(),
	        'react-datepicker__day--in-range': _this.isInRange(),
	        'react-datepicker__day--in-selecting-range': _this.isInSelectingRange(),
	        'react-datepicker__day--selecting-range-start': _this.isSelectingRangeStart(),
	        'react-datepicker__day--selecting-range-end': _this.isSelectingRangeEnd(),
	        'react-datepicker__day--today': _this.isSameDay((0, _date_utils.now)(_this.props.utcOffset)),
	        'react-datepicker__day--weekend': _this.isWeekend(),
	        'react-datepicker__day--outside-month': _this.isOutsideMonth()
	      }, _this.getHighLightedClass('react-datepicker__day--highlighted'));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Day, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: this.getClassNames(this.props.day),
	          onClick: this.handleClick,
	          onMouseEnter: this.handleMouseEnter,
	          'aria-label': 'day-' + (0, _date_utils.getDate)(this.props.day),
	          role: 'option' },
	        (0, _date_utils.getDate)(this.props.day)
	      );
	    }
	  }]);

	  return Day;
	}(_react2.default.Component);

	Day.propTypes = {
	  day: _propTypes2.default.object.isRequired,
	  dayClassName: _propTypes2.default.func,
	  endDate: _propTypes2.default.object,
	  highlightDates: _propTypes2.default.array,
	  inline: _propTypes2.default.bool,
	  month: _propTypes2.default.number,
	  onClick: _propTypes2.default.func,
	  onMouseEnter: _propTypes2.default.func,
	  preSelection: _propTypes2.default.object,
	  selected: _propTypes2.default.object,
	  selectingDate: _propTypes2.default.object,
	  selectsEnd: _propTypes2.default.bool,
	  selectsStart: _propTypes2.default.bool,
	  startDate: _propTypes2.default.object,
	  utcOffset: _propTypes2.default.number
	};
	exports.default = Day;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WeekNumber = function (_React$Component) {
	  _inherits(WeekNumber, _React$Component);

	  function WeekNumber() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, WeekNumber);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeekNumber.__proto__ || Object.getPrototypeOf(WeekNumber)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(WeekNumber, [{
	    key: 'render',
	    value: function render() {
	      var weekNumberClasses = {
	        'react-datepicker__week-number': true,
	        'react-datepicker__week-number--clickable': !!this.props.onClick
	      };
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(weekNumberClasses),
	          'aria-label': 'week-' + this.props.weekNumber,
	          onClick: this.handleClick },
	        this.props.weekNumber
	      );
	    }
	  }]);

	  return WeekNumber;
	}(_react2.default.Component);

	WeekNumber.propTypes = {
	  weekNumber: _propTypes2.default.number.isRequired,
	  onClick: _propTypes2.default.func
	};
	exports.default = WeekNumber;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _date_utils = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Time = function (_React$Component) {
	  _inherits(Time, _React$Component);

	  function Time() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Time);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Time.__proto__ || Object.getPrototypeOf(Time)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (time) {
	      if ((_this.props.minTime || _this.props.maxTime) && (0, _date_utils.isTimeInDisabledRange)(time, _this.props) || _this.props.excludeTimes && (0, _date_utils.isTimeDisabled)(time, _this.props.excludeTimes)) {
	        return;
	      }

	      _this.props.onChange(time);
	    }, _this.liClasses = function (time, currH, currM) {
	      var classes = ['react-datepicker__time-list-item'];

	      if (currH === (0, _date_utils.getHour)(time) && currM === (0, _date_utils.getMinute)(time)) {
	        classes.push('react-datepicker__time-list-item--selected');
	      }
	      if ((_this.props.minTime || _this.props.maxTime) && (0, _date_utils.isTimeInDisabledRange)(time, _this.props) || _this.props.excludeTimes && (0, _date_utils.isTimeDisabled)(time, _this.props.excludeTimes)) {
	        classes.push('react-datepicker__time-list-item--disabled');
	      }

	      return classes.join(' ');
	    }, _this.renderTimes = function () {
	      var times = [];
	      var format = _this.props.format ? _this.props.format : 'hh:mm A';
	      var intervals = _this.props.intervals;
	      var activeTime = _this.props.selected ? _this.props.selected : (0, _date_utils.newDate)();
	      var currH = (0, _date_utils.getHour)(activeTime);
	      var currM = (0, _date_utils.getMinute)(activeTime);
	      var base = (0, _date_utils.getStartOfDay)((0, _date_utils.newDate)());
	      var multiplier = 1440 / intervals;
	      for (var i = 0; i < multiplier; i++) {
	        times.push((0, _date_utils.addMinutes)((0, _date_utils.cloneDate)(base), i * intervals));
	      }

	      return times.map(function (time, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i, onClick: _this.handleClick.bind(_this, time), className: _this.liClasses(time, currH, currM) },
	          (0, _date_utils.formatDate)(time, format)
	        );
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Time, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // code to ensure selected time will always be in focus within time window when it first appears
	      var multiplier = 60 / this.props.intervals;
	      var currH = this.props.selected ? (0, _date_utils.getHour)(this.props.selected) : (0, _date_utils.getHour)((0, _date_utils.newDate)());
	      this.list.scrollTop = 30 * (multiplier * currH);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var height = null;
	      if (this.props.monthRef) {
	        height = this.props.monthRef.clientHeight - 39;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'react-datepicker__time-container ' + (this.props.todayButton ? 'react-datepicker__time-container--with-today-button' : '') },
	        _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__header react-datepicker__header--time' },
	          _react2.default.createElement(
	            'div',
	            { className: 'react-datepicker-time__header' },
	            'Time'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker__time' },
	          _react2.default.createElement(
	            'div',
	            { className: 'react-datepicker__time-box' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'react-datepicker__time-list', ref: function ref(list) {
	                  _this2.list = list;
	                }, style: height ? { height: height } : {} },
	              this.renderTimes.bind(this)()
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        intervals: 30,
	        onTimeChange: function onTimeChange() {},
	        todayButton: null
	      };
	    }
	  }]);

	  return Time;
	}(_react2.default.Component);

	Time.propTypes = {
	  format: _propTypes2.default.string,
	  intervals: _propTypes2.default.number,
	  selected: _propTypes2.default.object,
	  onChange: _propTypes2.default.func,
	  todayButton: _propTypes2.default.string,
	  minTime: _propTypes2.default.object,
	  maxTime: _propTypes2.default.object,
	  excludeTimes: _propTypes2.default.array,
	  monthRef: _propTypes2.default.object
	};
	exports.default = Time;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.popperPlacementPositions = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var popperPlacementPositions = exports.popperPlacementPositions = ['auto', 'auto-left', 'auto-right', 'bottom', 'bottom-end', 'bottom-start', 'left', 'left-end', 'left-start', 'right', 'right-end', 'right-start', 'top', 'top-end', 'top-start'];

	var PopperComponent = function (_React$Component) {
	  _inherits(PopperComponent, _React$Component);

	  function PopperComponent() {
	    _classCallCheck(this, PopperComponent);

	    return _possibleConstructorReturn(this, (PopperComponent.__proto__ || Object.getPrototypeOf(PopperComponent)).apply(this, arguments));
	  }

	  _createClass(PopperComponent, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          hidePopper = _props.hidePopper,
	          popperComponent = _props.popperComponent,
	          targetComponent = _props.targetComponent;


	      var popper = void 0;

	      if (!hidePopper) {
	        var classes = (0, _classnames2.default)('react-datepicker-popper', className);
	        popper = _react2.default.createElement(
	          'div',
	          {
	            className: classes },
	          popperComponent
	        );
	      }

	      if (this.props.popperContainer) {
	        popper = _react2.default.createElement(this.props.popperContainer, {}, popper);
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'react-datepicker-wrapper' },
	          targetComponent
	        ),
	        popper
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        hidePopper: true,
	        popperModifiers: {
	          preventOverflow: {
	            enabled: true,
	            escapeWithReference: true,
	            boundariesElement: 'viewport'
	          }
	        },
	        popperPlacement: 'bottom'
	      };
	    }
	  }]);

	  return PopperComponent;
	}(_react2.default.Component);

	PopperComponent.propTypes = {
	  className: _propTypes2.default.string,
	  hidePopper: _propTypes2.default.bool,
	  popperComponent: _propTypes2.default.element,
	  popperModifiers: _propTypes2.default.object, // <datepicker/> props
	  popperPlacement: _propTypes2.default.oneOf(popperPlacementPositions), // <datepicker/> props
	  popperContainer: _propTypes2.default.func,
	  targetComponent: _propTypes2.default.element
	};
	exports.default = PopperComponent;

/***/ })
/******/ ])
});
;