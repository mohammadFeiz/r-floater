"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RFloater = /*#__PURE__*/function (_Component) {
  _inherits(RFloater, _Component);

  var _super = _createSuper(RFloater);

  function RFloater(props) {
    var _this;

    _classCallCheck(this, RFloater);

    _this = _super.call(this, props);
    _this.touch = 'ontouchstart' in document.documentElement;
    var items = _this.props.items;
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    _this.isDown = false;
    _this.state = {
      itemsDictionary: _this.getItemsDictionary(items),
      selected: false,
      zoomScreen: [0, 0]
    };
    return _this;
  }

  _createClass(RFloater, [{
    key: "svgMouseDownTouch",
    value: function svgMouseDownTouch(e) {
      var selected = this.state.selected;

      if (selected !== false) {
        this.setState({
          selected: false
        });
      }
    }
  }, {
    key: "touchMouseDown",
    value: function touchMouseDown(e) {
      this.touchOffset = false; // در موو این مقدار پر می شود و در اند اعمال می شود. پس در هر استارتی باید ریست شود

      if (this.isDown) {
        //اگر انگشت دوم داره تاچ می کنه
        //اگر روی آیتمی تاچ شده تاچ اندش رو اجرا کن
        if (this.itemDown) {
          this.itemMouseUp();
        }

        this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.touchMouseMove, this));
        this.mousePosition = this.getMousePosition(e);
        var _this$props = this.props,
            zoom = _this$props.zoom,
            screen = _this$props.screen,
            moveHandleClassName = _this$props.moveHandleClassName;

        if (!moveHandleClassName) {
          return;
        }

        var x = e.changedTouches[0].clientX;
        var y = e.changedTouches[0].clientY;
        var touchId = e.changedTouches[0].identifier;
        this.distance = false;
        this.newZoom = zoom;
        this.so = {
          zoom: zoom,
          touchId: touchId,
          x: x,
          y: y,
          screen: [screen[0], screen[1]]
        };
      } else {
        this.isDown = true;
      }

      this.eventHandler('window', 'mouseup', _jquery.default.proxy(this.touchMouseUp, this));
    }
  }, {
    key: "touchMouseMove",
    value: function touchMouseMove(e) {
      var onPan = this.props.onPan;

      if (!onPan) {
        return;
      }

      var _this$so = this.so,
          x = _this$so.x,
          y = _this$so.y,
          screen = _this$so.screen,
          touchId = _this$so.touchId,
          zoom = _this$so.zoom;
      var touch1, touch2;

      if (e.changedTouches[0]) {
        if (e.changedTouches[0].identifier === touchId) {
          touch1 = e.changedTouches[0];
        } else {
          touch2 = e.changedTouches[0];
        }
      }

      if (e.changedTouches[1]) {
        if (e.changedTouches[1].identifier === touchId) {
          touch1 = e.changedTouches[1];
        } else {
          touch2 = e.changedTouches[1];
        }
      }

      if (touch1) {
        var X = touch1.clientX;
        var Y = touch1.clientY;
        var offsetX = X - x;
        var offsetY = Y - y;
        this.touchOffset = [(X - x) / zoom + screen[0], (Y - y) / zoom + screen[1]];
        (0, _jquery.default)(this.dom.current).find('line,path,.r-floater-item,text').css('transform', "translate(".concat(offsetX / zoom, "px,").concat(offsetY / zoom, "px)"));

        if (touch2) {
          var X1 = touch2.clientX;
          var Y1 = touch2.clientY;
          var distance = Math.round(Math.sqrt(Math.pow(X1 - X, 2) + Math.pow(Y1 - Y, 2)));

          if (this.distance === false) {
            this.distance = distance;
          }

          var delta = Math.floor((distance - this.distance) / 40) / 10;
          var newZoom = parseFloat((zoom + delta).toFixed(1));

          if (newZoom < 0.2) {
            newZoom = 0.2;
          } else if (newZoom > 8) {
            newZoom = 8;
          }

          if (this.newZoom !== newZoom) {
            this.newZoom = newZoom;
            this.zoom(newZoom, true);
          }
        }
      }
    }
  }, {
    key: "touchMouseUp",
    value: function touchMouseUp() {
      this.isDown = false;
      this.distance = false;

      if (this.touchOffset !== false) {
        (0, _jquery.default)(this.dom.current).find('line,path,.r-floater-item,text').css('transform', 'unset');
        this.props.onPan(this.touchOffset);
        this.touchOffset = false;
      }

      this.eventHandler('window', 'mousemove', this.touchMouseMove, 'unbind');
      this.eventHandler('window', 'mouseup', this.touchMouseUp, 'unbind');
    }
  }, {
    key: "getClient",
    value: function getClient(e) {
      if (this.touch) {
        var _e$changedTouches = e.changedTouches,
            changedTouches = _e$changedTouches === void 0 ? [] : _e$changedTouches;

        if (!changedTouches[0]) {
          return false;
        }

        return {
          x: changedTouches[0].clientX,
          y: changedTouches[0].clientY
        };
      }

      return {
        x: e.clientX,
        y: e.clientY
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(e, _ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 2),
          x = _ref3[0],
          y = _ref3[1];

      var _ref4 = _slicedToArray(_ref2, 2),
          startX = _ref4[0],
          startY = _ref4[1];

      var zoom = this.props.zoom;
      var client = this.getClient(e);
      return [(client.x - x) / zoom + startX, (client.y - y) / zoom + startY];
    }
  }, {
    key: "svgMouseDown",
    value: function svgMouseDown(e) {
      this.mousePosition = this.getMousePosition(e);
      this.offset = false;
      var _this$props2 = this.props,
          screen = _this$props2.screen,
          moveHandleClassName = _this$props2.moveHandleClassName;
      this.svgMoved = false;
      e.preventDefault();

      if (!moveHandleClassName) {
        return;
      }

      var client = this.getClient(e);
      this.so = {
        x: client.x,
        y: client.y,
        screen: [screen[0], screen[1]]
      };
      this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.svgMouseMove, this));
      this.eventHandler('window', 'mouseup', _jquery.default.proxy(this.svgMouseUp, this));
    }
  }, {
    key: "connectDown",
    value: function connectDown(e, item) {
      this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.connectMove, this));
      this.eventHandler('window', 'mouseup', _jquery.default.proxy(this.connectUp, this));
      var mp = this.getMousePosition(e);
      var screen = this.getScreen();
      var x = screen[0] + mp[0];
      var y = screen[1] + mp[1];
      (0, _jquery.default)('.r-floater-connect').attr({
        x1: x,
        x2: x,
        y1: y,
        y2: y
      });
      item.relations = item.relations || [];
      this.so = {
        start: item
      };
    }
  }, {
    key: "connectMove",
    value: function connectMove(e) {
      var mp = this.getMousePosition(e);
      var screen = this.getScreen();
      var x = screen[0] + mp[0];
      var y = screen[1] + mp[1];
      (0, _jquery.default)('.r-floater-connect').attr({
        x2: x,
        y2: y
      });
    }
  }, {
    key: "connectUp",
    value: function connectUp(e) {
      this.eventHandler('window', 'mousemove', this.connectMove, 'unbind');
      this.eventHandler('window', 'mouseup', this.connectUp, 'unbind');
      var target = (0, _jquery.default)(e.target);
      var Item = target.parents('.r-floater-item');

      if (Item.length && this.so.start) {
        var id = Item.eq(0).attr('id');
        var end = this.getItemById(id);
        end.relations = end.relations || [];
        this.props.onAddRelation(this.so.start, end);
      }

      (0, _jquery.default)('.r-floater-connect').attr({
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      });
    }
  }, {
    key: "itemMouseDown",
    value: function itemMouseDown(e, item, id) {
      if (this.itemDown) {
        return;
      }

      this.mousePosition = this.getMousePosition(e);

      if (e.button === 1) {
        this.svgMouseDown(e);
        return;
      }

      var moveHandleClassName = this.props.moveHandleClassName,
          itemsDictionary = this.state.itemsDictionary;

      if (!moveHandleClassName) {
        return;
      }

      var target = (0, _jquery.default)(e.target);

      if (target.hasClass('r-floater-origin-icon')) {
        this.connectDown(e, item);
        return;
      }

      if (!target.hasClass(moveHandleClassName) && target.parents('.' + moveHandleClassName) && target.parents('.' + moveHandleClassName).length === 0) {
        return;
      }

      var items = [item].concat(this.getSiblings(item));
      this.setState({
        selected: id
      });
      (0, _jquery.default)('.r-floater-item').css({
        zIndex: 1
      });
      (0, _jquery.default)(e.currentTarget).css({
        zIndex: 10
      });
      this.so = {
        items: [],
        mx: this.mousePosition[0],
        my: this.mousePosition[1]
      };
      var container = (0, _jquery.default)(this.dom.current);

      for (var i = 0; i < items.length; i++) {
        var itm = itemsDictionary[items[i].id];
        var dom = container.find('#' + items[i].id);
        var cssLeft = parseInt(dom.css('left'));
        var cssTop = parseInt(dom.css('top'));
        this.so.items.push({
          left: itm.left,
          top: itm.top,
          item: itm,
          cssLeft: cssLeft,
          cssTop: cssTop
        });
      }

      this.itemDown = true;
      this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.itemMouseMove, this));
      this.eventHandler('window', 'mouseup', _jquery.default.proxy(this.itemMouseUp, this));
    }
  }, {
    key: "svgMouseMove",
    value: function svgMouseMove(e) {
      var _this$props3 = this.props,
          onPan = _this$props3.onPan,
          zoom = _this$props3.zoom;

      if (!onPan) {
        return;
      }

      this.svgMoved = true;
      var _this$so2 = this.so,
          x = _this$so2.x,
          y = _this$so2.y,
          screen = _this$so2.screen;
      var client = this.getClient(e);
      var offsetX = client.x - x;
      var offsetY = client.y - y;
      this.offset = this.getOffset(e, [x, y], screen);
      (0, _jquery.default)(this.dom.current).find('line,path,.r-floater-item,text').css('transform', "translate(".concat(offsetX / zoom, "px,").concat(offsetY / zoom, "px)"));
    }
  }, {
    key: "svgMouseUp",
    value: function svgMouseUp() {
      this.eventHandler('window', 'mousemove', this.svgMouseMove, 'unbind');
      this.eventHandler('window', 'mouseup', this.svgMouseUp, 'unbind');

      if (this.offset !== false) {
        (0, _jquery.default)(this.dom.current).find('line,path,.r-floater-item,text').css('transform', 'unset');
        this.props.onPan(this.offset);
        this.offset = false;
      }

      if (this.svgMoved === false) {
        var selected = this.state.selected;

        if (selected !== false) {
          this.setState({
            selected: false
          });
        }
      }
    }
  }, {
    key: "itemMouseMove",
    value: function itemMouseMove(e) {
      var _this$props4 = this.props,
          move = _this$props4.move,
          liveChange = _this$props4.liveChange;
      var itemsDictionary = this.state.itemsDictionary;

      if (move === false) {
        return;
      }

      var _this$so3 = this.so,
          items = _this$so3.items,
          mx = _this$so3.mx,
          my = _this$so3.my;
      var container = (0, _jquery.default)(this.dom.current);
      this.mousePosition = this.getMousePosition(e);

      for (var i = 0; i < items.length; i++) {
        var _items$i = items[i],
            left = _items$i.left,
            top = _items$i.top,
            item = _items$i.item,
            cssLeft = _items$i.cssLeft,
            cssTop = _items$i.cssTop;

        if (item.move === false) {
          continue;
        }

        var offsetX = this.mousePosition[0] - mx,
            offsetY = this.mousePosition[1] - my;
        item.left = offsetX + left;
        item.top = offsetY + top;

        if (!liveChange) {
          container.find('#' + item.id).css({
            left: cssLeft + offsetX,
            top: cssTop + offsetY
          });
        }
      }

      if (liveChange) {
        this.setState({
          itemsDictionary: itemsDictionary
        });
      }
    }
  }, {
    key: "itemMouseUp",
    value: function itemMouseUp() {
      this.itemDown = false;
      this.eventHandler('window', 'mousemove', this.itemMouseMove, 'unbind');
      this.eventHandler('window', 'mouseup', this.itemMouseUp, 'unbind');
      (0, _jquery.default)('.r-floater-item').css({
        transition: '.1s'
      });
      this.fixCoords();
      (0, _jquery.default)('.r-floater-item').css({
        transition: '0s'
      });
    }
  }, {
    key: "fixCoords",
    value: function fixCoords() {
      if (!this.so || !this.so.items) {
        return;
      }

      var items = this.so.items;
      var _this$props$onChange = this.props.onChange,
          onChange = _this$props$onChange === void 0 ? function () {} : _this$props$onChange;
      var itemsDictionary = this.state.itemsDictionary;
      var screen = this.getScreen();
      var container = (0, _jquery.default)(this.dom.current);
      var changes = [];

      for (var i = 0; i < items.length; i++) {
        var item = items[i].item;
        item.left = this.getSnapedCoord(0, item.left);
        item.top = this.getSnapedCoord(1, item.top);
        var dom = container.find('#' + item.id);
        dom.css({
          left: item.left + screen[0],
          top: item.top + screen[1]
        });
        changes.push(item);
      }

      this.setState({
        itemsDictionary: itemsDictionary
      });
      onChange(changes, itemsDictionary);
    }
  }, {
    key: "eventHandler",
    value: function eventHandler(selector, event, action) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bind';
      var me = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      };
      event = this.touch ? me[event] : event;
      var element = typeof selector === "string" ? selector === "window" ? (0, _jquery.default)(window) : (0, _jquery.default)(selector) : selector;
      element.unbind(event, action);

      if (type === 'bind') {
        element.bind(event, action);
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible(item) {
      return (typeof item.show === 'function' ? item.show({ ...this.props,
        ...this.state
      }) : item.show) !== false;
    }
  }, {
    key: "getItemsDictionary",
    value: function getItemsDictionary(items) {
      var itemsDictionary = {};

      for (var i = 0; i < items.length; i++) {
        if (!this.isVisible(items[i])) {
          continue;
        }

        var item = items[i];
        item.left = this.getSnapedCoord(0, item.left);
        item.top = this.getSnapedCoord(1, item.top);
        itemsDictionary[item.id] = item;
      }

      return itemsDictionary;
    }
  }, {
    key: "getArea",
    value: function getArea(id) {
      var itemsDictionary = this.state.itemsDictionary,
          screen = this.getScreen(),
          element = (0, _jquery.default)('#' + id),
          width = element.width(),
          height = element.height();
      var item = itemsDictionary[id],
          left = item.left + screen[0],
          top = item.top + screen[1];
      return {
        left: left,
        top: top,
        right: left + width,
        bottom: top + height,
        width: width,
        height: height,
        center: {
          x: left + width / 2,
          y: top + height / 2
        }
      };
    }
  }, {
    key: "getSortedIndex",
    value: function getSortedIndex(arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] === value) {
          return i;
        }
      }
    }
  }, {
    key: "addAndSort",
    value: function addAndSort(arr, _ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          index = _ref6[0],
          pos = _ref6[1];

      if (arr.length === 0) {
        arr.push([index, pos]);
        return;
      }

      for (var i = 0; i < arr.length; i++) {
        if (pos <= arr[i][1]) {
          arr.splice(i, 0, [index, pos]);
          return;
        }
      }

      arr.push([index, pos]);
    }
  }, {
    key: "toBottom",
    value: function toBottom(_ref7) {
      var _this2 = this;

      var dict = _ref7.dict,
          from = _ref7.from,
          to = _ref7.to,
          fromArea = _ref7.fromArea,
          toArea = _ref7.toArea,
          relationIndex = _ref7.relationIndex,
          itemIndex = _ref7.itemIndex;
      this.addAndSort(dict[from].bottoms, [relationIndex, toArea.left]);
      this.addAndSort(dict[to].tops, [relationIndex, fromArea.left]);
      return function () {
        return {
          x1: fromArea.left + (_this2.getSortedIndex(dict[from].bottoms, relationIndex) + 1) / (dict[from].bottoms.length + 1) * fromArea.width,
          x2: toArea.left + (_this2.getSortedIndex(dict[to].tops, relationIndex) + 1) / (dict[to].tops.length + 1) * toArea.width,
          y1: fromArea.bottom,
          y2: toArea.top,
          direction: 'bottom',
          relationIndex: relationIndex,
          from: from,
          to: to,
          itemIndex: itemIndex
        };
      };
    }
  }, {
    key: "toBottomSimple",
    value: function toBottomSimple(_ref8) {
      var dict = _ref8.dict,
          from = _ref8.from,
          to = _ref8.to,
          fromArea = _ref8.fromArea,
          toArea = _ref8.toArea,
          relationIndex = _ref8.relationIndex,
          itemIndex = _ref8.itemIndex;
      return function () {
        return {
          x1: fromArea.center.x,
          x2: toArea.center.x,
          y1: fromArea.bottom,
          y2: toArea.top,
          direction: 'bottom',
          type: 1,
          relationIndex: relationIndex,
          from: from,
          to: to,
          itemIndex: itemIndex
        };
      };
    }
  }, {
    key: "toTop",
    value: function toTop(_ref9) {
      var _this3 = this;

      var dict = _ref9.dict,
          from = _ref9.from,
          to = _ref9.to,
          fromArea = _ref9.fromArea,
          toArea = _ref9.toArea,
          relationIndex = _ref9.relationIndex,
          itemIndex = _ref9.itemIndex;
      this.addAndSort(dict[from].tops, [relationIndex, toArea.left]);
      this.addAndSort(dict[to].bottoms, [relationIndex, fromArea.left]);
      return function () {
        return {
          x1: fromArea.left + (_this3.getSortedIndex(dict[from].tops, relationIndex) + 1) / (dict[from].tops.length + 1) * fromArea.width,
          x2: toArea.left + (_this3.getSortedIndex(dict[to].bottoms, relationIndex) + 1) / (dict[to].bottoms.length + 1) * toArea.width,
          y1: fromArea.top,
          y2: toArea.bottom,
          direction: 'top',
          relationIndex: relationIndex,
          from: from,
          to: to,
          itemIndex: itemIndex
        };
      };
    }
  }, {
    key: "toTopSimple",
    value: function toTopSimple(_ref10) {
      var dict = _ref10.dict,
          from = _ref10.from,
          to = _ref10.to,
          fromArea = _ref10.fromArea,
          toArea = _ref10.toArea,
          relationIndex = _ref10.relationIndex,
          itemIndex = _ref10.itemIndex;
      return function () {
        return {
          x1: fromArea.center.x,
          x2: toArea.center.x,
          itemIndex: itemIndex,
          y1: fromArea.top,
          y2: toArea.bottom,
          direction: 'top',
          relationIndex: relationIndex,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toRight",
    value: function toRight(_ref11) {
      var _this4 = this;

      var dict = _ref11.dict,
          from = _ref11.from,
          to = _ref11.to,
          fromArea = _ref11.fromArea,
          toArea = _ref11.toArea,
          relationIndex = _ref11.relationIndex,
          itemIndex = _ref11.itemIndex;
      this.addAndSort(dict[from].rights, [j, toArea.top]);
      this.addAndSort(dict[to].lefts, [j, fromArea.top]);
      return function () {
        return {
          y1: fromArea.top + (_this4.getSortedIndex(dict[from].rights, relationIndex) + 1) / (dict[from].rights.length + 1) * fromArea.height,
          y2: toArea.top + (_this4.getSortedIndex(dict[to].lefts, relationIndex) + 1) / (dict[to].lefts.length + 1) * toArea.height,
          x1: fromArea.right,
          x2: toArea.left,
          direction: 'right',
          relationIndex: relationIndex,
          from: from,
          to: to,
          itemIndex: itemIndex
        };
      };
    }
  }, {
    key: "toRightSimple",
    value: function toRightSimple(_ref12) {
      var dict = _ref12.dict,
          from = _ref12.from,
          to = _ref12.to,
          fromArea = _ref12.fromArea,
          toArea = _ref12.toArea,
          relationIndex = _ref12.relationIndex,
          itemIndex = _ref12.itemIndex;
      return function () {
        return {
          y1: fromArea.center.y,
          y2: toArea.center.y,
          itemIndex: itemIndex,
          x1: fromArea.right,
          x2: toArea.left,
          direction: 'right',
          relationIndex: relationIndex,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toLeft",
    value: function toLeft(_ref13) {
      var _this5 = this;

      var dict = _ref13.dict,
          from = _ref13.from,
          to = _ref13.to,
          fromArea = _ref13.fromArea,
          toArea = _ref13.toArea,
          relationIndex = _ref13.relationIndex,
          itemIndex = _ref13.itemIndex;
      this.addAndSort(dict[from].lefts, [j, toArea.top]);
      this.addAndSort(dict[to].rights, [j, fromArea.top]);
      return function () {
        return {
          y1: fromArea.top + (_this5.getSortedIndex(dict[from].lefts, relationIndex) + 1) / (dict[from].lefts.length + 1) * fromArea.height,
          y2: toArea.top + (_this5.getSortedIndex(dict[to].rights, relationIndex) + 1) / (dict[to].rights.length + 1) * toArea.height,
          x1: fromArea.left,
          x2: toArea.right,
          direction: 'left',
          relationIndex: relationIndex,
          from: from,
          to: to,
          itemIndex: itemIndex
        };
      };
    }
  }, {
    key: "toLeftSimple",
    value: function toLeftSimple(_ref14) {
      var dict = _ref14.dict,
          from = _ref14.from,
          to = _ref14.to,
          fromArea = _ref14.fromArea,
          toArea = _ref14.toArea,
          relationIndex = _ref14.relationIndex,
          itemIndex = _ref14.itemIndex;
      return function () {
        return {
          y1: fromArea.center.y,
          y2: toArea.center.y,
          itemIndex: itemIndex,
          x1: fromArea.left,
          x2: toArea.right,
          direction: 'left',
          relationIndex: relationIndex,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "getRelationsCoords",
    value: function getRelationsCoords() {
      var _this$props5 = this.props,
          simpleConnect = _this$props5.simpleConnect,
          items = _this$props5.items,
          itemsDictionary = this.state.itemsDictionary,
          dict = {},
          Relations = [];
      var a,
          b = simpleConnect === true ? 'Simple' : '';

      for (var i = 0; i < items.length; i++) {
        var _items$i2 = items[i],
            from = _items$i2.id,
            _items$i2$relations = _items$i2.relations,
            relations = _items$i2$relations === void 0 ? [] : _items$i2$relations;

        for (var _j = 0; _j < relations.length; _j++) {
          var _relations$_j = relations[_j],
              to = _relations$_j.to,
              type = _relations$_j.type;

          if (!itemsDictionary[from] || !itemsDictionary[to]) {
            continue;
          }

          var fromArea = this.getArea(from),
              toArea = this.getArea(to);

          if (!fromArea || !toArea) {
            continue;
          }

          dict[from] = dict[from] || {
            lefts: [],
            rights: [],
            tops: [],
            bottoms: []
          };
          dict[to] = dict[to] || {
            lefts: [],
            rights: [],
            tops: [],
            bottoms: []
          };
          var obj = {
            dict: dict,
            from: from,
            to: to,
            fromArea: fromArea,
            toArea: toArea,
            itemIndex: i,
            relationIndex: _j
          };

          if (type) {
            a = type;
          } else if (fromArea.left < toArea.right && fromArea.right > toArea.left) {
            if (fromArea.top < toArea.top) {
              a = 'toBottom';
            } else {
              a = 'toTop';
            }
          } else {
            if (fromArea.left < toArea.left) {
              a = 'toRight';
            } else {
              a = 'toLeft';
            }
          }

          Relations.push(this[a + b](obj));
        }
      }

      return Relations;
    } // getRelationsCoords(){
    //   var {relations,simpleConnect} = this.props,{itemsDictionary} = this.state,dict = {},Relations = [];
    //   var a,b = simpleConnect === true?'Simple':'';
    //   for(let from in relations){
    //     for(let i = 0; i < relations[from].length; i++){
    //       let relation = relations[from][i],{to,type} = relation;
    //       if(!itemsDictionary[from] || !itemsDictionary[to]){continue}
    //       let fromArea = this.getArea(from),toArea = this.getArea(to);
    //       if(!fromArea || !toArea){continue;}
    //       dict[from] = dict[from] || {lefts:[],rights:[],tops:[],bottoms:[]};
    //       dict[to] = dict[to] || {lefts:[],rights:[],tops:[],bottoms:[]};  
    //       let obj = {dict,from,to,fromArea,toArea,i};
    //       if(type){a = type;}
    //       else if((fromArea.left < toArea.right && fromArea.right > toArea.left)){
    //         if(fromArea.top < toArea.top){a = 'toBottom';}
    //         else{a = 'toTop';}
    //       }
    //       else{
    //         if(fromArea.left < toArea.left){a = 'toRight';}
    //         else{a = 'toLeft';}
    //       }
    //       Relations.push(this[a + b](obj));
    //     }
    //   }
    //   return Relations;
    // }

  }, {
    key: "renderRelation",
    value: function renderRelation(id, index) {
      var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var obj = { ...this.relations[id][index],
        ...ext
      };
      return this.getLine(obj) + this.getArrow(obj);
    }
  }, {
    key: "update",
    value: function update() {
      var relationsCoords = this.getRelationsCoords();
      var _this$props6 = this.props,
          items = _this$props6.items,
          connectColor = _this$props6.connectColor;
      var svg;
      this.relations = {};

      for (var i = 0; i < relationsCoords.length; i++) {
        var props = relationsCoords[i]();
        var relation = items[props.itemIndex].relations[props.relationIndex];
        var _relation$lineWidth = relation.lineWidth,
            lineWidth = _relation$lineWidth === void 0 ? this.props.lineWidth : _relation$lineWidth,
            _relation$lineColor = relation.lineColor,
            lineColor = _relation$lineColor === void 0 ? this.props.lineColor : _relation$lineColor,
            _relation$lineDash = relation.lineDash,
            lineDash = _relation$lineDash === void 0 ? this.props.lineDash : _relation$lineDash,
            _relation$fontColor = relation.fontColor,
            fontColor = _relation$fontColor === void 0 ? this.props.fontColor : _relation$fontColor,
            _relation$arrowSize = relation.arrowSize,
            arrowSize = _relation$arrowSize === void 0 ? this.props.arrowSize : _relation$arrowSize,
            _relation$fontSize = relation.fontSize,
            fontSize = _relation$fontSize === void 0 ? this.props.fontSize : _relation$fontSize,
            _relation$textTop = relation.textTop,
            textTop = _relation$textTop === void 0 ? this.props.textTop : _relation$textTop,
            _relation$textLeft = relation.textLeft,
            textLeft = _relation$textLeft === void 0 ? this.props.textLeft : _relation$textLeft,
            _relation$text = relation.text,
            text = _relation$text === void 0 ? '' : _relation$text;
        var obj = { ...props,
          lineWidth: lineWidth,
          lineColor: lineColor,
          lineDash: lineDash,
          fontColor: fontColor,
          arrowSize: arrowSize,
          fontSize: fontSize,
          text: text,
          textTop: textTop,
          textLeft: textLeft
        };
        this.relations[props.from] = this.relations[props.from] || [];
        this.relations[props.from][props.index] = obj;
        svg += this.renderRelation(props.from, props.index);
      }

      svg += "<line class=\"r-floater-connect\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" stroke=\"".concat(connectColor, "\"/>");
      (0, _jquery.default)('.r-floater svg').html(svg);
    }
  }, {
    key: "getLine",
    value: function getLine(obj) {
      return this['getLine' + this.props.connectType](obj);
    }
  }, {
    key: "getArrow",
    value: function getArrow(obj) {
      return this['getArrow' + this.props.connectType](obj);
    }
  }, {
    key: "getLine1",
    value: function getLine1(_ref15) {
      var x1 = _ref15.x1,
          y1 = _ref15.y1,
          x2 = _ref15.x2,
          y2 = _ref15.y2,
          arrowSize = _ref15.arrowSize,
          fontSize = _ref15.fontSize,
          lineDash = _ref15.lineDash,
          lineColor = _ref15.lineColor,
          lineWidth = _ref15.lineWidth,
          fontColor = _ref15.fontColor,
          text = _ref15.text,
          textTop = _ref15.textTop,
          textLeft = _ref15.textLeft;
      var length = this.getLength({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      }) - arrowSize[1] * Math.cos(arrowSize[0] * Math.PI / 180);
      var l = this.getLineBySMR({
        x: x1,
        y: y1
      }, length < 0 ? 0 : length, this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      }));
      var str = '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + l.x2 + '" y2="' + l.y2 + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" stroke-dasharray="' + lineDash + '" />';
      var x = (x1 + x2) / 2,
          y = (y1 + y2) / 2;
      var radian = this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      radian = radian < 270 && radian > 90 ? 180 + radian : radian;
      var value = typeof text === 'function' ? text() : text;
      str += "<text x=\"".concat(x, "\" y=\"").concat(y, "\" fill=\"").concat(fontColor || lineColor || '#000', "\" transform=\"rotate(").concat(radian * -1, " ").concat(x, ",").concat(y, ") translate(").concat(textLeft, " ").concat(textTop === undefined ? lineWidth / -2 - 3 : textTop, ")\" style=\"font-size:").concat(fontSize || 10, "px;-webkit-user-select:none; user-select:none;\" text-anchor=\"middle\">").concat(value === undefined ? '' : value, "</text>");
      return str;
    }
  }, {
    key: "getLine2",
    value: function getLine2(_ref16) {
      var x1 = _ref16.x1,
          y1 = _ref16.y1,
          x2 = _ref16.x2,
          y2 = _ref16.y2,
          direction = _ref16.direction,
          fontSize = _ref16.fontSize,
          lineDash = _ref16.lineDash,
          lineColor = _ref16.lineColor,
          lineWidth = _ref16.lineWidth,
          fontColor = _ref16.fontColor,
          text = _ref16.text,
          textTop = _ref16.textTop,
          textLeft = _ref16.textLeft,
          arrowSize = _ref16.arrowSize;
      var cx = (x1 + x2) / 2,
          cy = (y1 + y2) / 2;
      var start = "<line stroke=\"".concat(lineColor, "\" stroke-width=\"").concat(lineWidth, "\" stroke-dasharray=\"").concat(lineDash, "\" ");
      var str = '',
          tx,
          ty;
      var value = typeof text === 'function' ? text() : text;
      value = value === undefined ? '' : value;

      if (direction === 'bottom' || direction === 'top') {
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(y1, "\" x2=\"").concat(x1, "\" y2=\"").concat(cy, "\" />");
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(cy, "\" x2=\"").concat(x2, "\" y2=\"").concat(cy, "\" />");
        str += "".concat(start, "x1=\"").concat(x2, "\" y1=\"").concat(cy, "\" x2=\"").concat(x2, "\" y2=\"").concat(y2 + arrowSize[0] * (direction === 'bottom' ? -1 : 1), "\" />");
        tx = x2;
        ty = cy;
      } else {
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(y1, "\" x2=\"").concat(cx, "\" y2=\"").concat(y1, "\" />");
        str += "".concat(start, "x1=\"").concat(cx, "\" y1=\"").concat(y1, "\" x2=\"").concat(cx, "\" y2=\"").concat(y2, "\" />");
        str += "".concat(start, "x1=\"").concat(cx, "\" y1=\"").concat(y2, "\" x2=\"").concat(x2 + arrowSize[1] * (direction === 'right' ? -1 : 1), "\" y2=\"").concat(y2, "\" />");
        tx = value.length * 9 > Math.abs(cx - x2) ? cx : (cx + x2) / 2;
        ty = y2;
      }

      str += "<text x=\"".concat(tx, "\" y=\"").concat(ty, "\" fill=\"").concat(fontColor || lineColor || '#000', "\" transform=\"translate(").concat(textLeft, " ").concat(textTop, ")\" style=\"font-size:").concat(fontSize || 10, "px;-webkit-user-select:none; user-select:none;\" text-anchor=\"middle\">").concat(value, "</text>");
      return str;
    }
  }, {
    key: "getLine3",
    value: function getLine3(_ref17) {
      var x1 = _ref17.x1,
          y1 = _ref17.y1,
          x2 = _ref17.x2,
          y2 = _ref17.y2,
          arrowSize = _ref17.arrowSize,
          direction = _ref17.direction,
          fontSize = _ref17.fontSize,
          textTop = _ref17.textTop,
          textLeft = _ref17.textLeft,
          lineDash = _ref17.lineDash,
          lineColor = _ref17.lineColor,
          lineWidth = _ref17.lineWidth,
          fontColor = _ref17.fontColor,
          text = _ref17.text;
      var start = "<path fill=\"transparent\" stroke=\"".concat(lineColor, "\" stroke-width=\"").concat(lineWidth, "\" stroke-dasharray=\"").concat(lineDash, "\" ");
      var str = '';
      var cx = (x1 + x2) / 2,
          cy = (y1 + y2) / 2,
          dest1,
          dest2,
          q1,
          q2;

      if (direction === 'bottom') {
        y2 = y2 - arrowSize[0];
        dest1 = [cx - x1, cy - y1];
        dest2 = [x2 - cx, y2 - cy];
        q1 = [0, (cy - y1) / 2];
        q2 = [x2 - cx, (y2 - cy) / 2];
        str += "".concat(start, "d=\"M").concat(x1, ",").concat(y1, " q").concat(q1[0], ",").concat(q1[1], ",").concat(dest1[0], ",").concat(dest1[1], " q").concat(q2[0], ",").concat(q2[1], ",").concat(dest2[0], ",").concat(dest2[1], "\" />");
      } else if (direction === 'top') {
        y2 = y2 + arrowSize[0];
        dest1 = [cx - x1, cy - y1];
        dest2 = [x2 - cx, y2 - cy];
        q1 = [0, (cy - y1) / 2];
        q2 = [x2 - cx, (y2 - cy) / 2];
        str += "".concat(start, "d=\"M").concat(x1, ",").concat(y1, " q").concat(q1[0], ",").concat(q1[1], ",").concat(dest1[0], ",").concat(dest1[1], " q").concat(q2[0], ",").concat(q2[1], ",").concat(dest2[0], ",").concat(dest2[1], "\" />");
      } else if (direction === 'right') {
        x2 = x2 - arrowSize[1];
        dest1 = [cx - x1, cy - y1];
        dest2 = [x2 - cx, y2 - cy];
        q1 = [(cx - x1) / 2, 0];
        q2 = [(x2 - cx) / 2, y2 - cy];
        str += "".concat(start, "d=\"M").concat(x1, ",").concat(y1, " q").concat(q1[0], ",").concat(q1[1], ",").concat(dest1[0], ",").concat(dest1[1], " q").concat(q2[0], ",").concat(q2[1], ",").concat(dest2[0], ",").concat(dest2[1], "\" />");
      } else {
        x2 = x2 + arrowSize[1];
        dest1 = [cx - x1, cy - y1];
        dest2 = [x2 - cx, y2 - cy];
        q1 = [(cx - x1) / 2, 0];
        q2 = [(x2 - cx) / 2, y2 - cy];
        str += "".concat(start, "d=\"M").concat(x1, ",").concat(y1, " q").concat(q1[0], ",").concat(q1[1], ",").concat(dest1[0], ",").concat(dest1[1], " q").concat(q2[0], ",").concat(q2[1], ",").concat(dest2[0], ",").concat(dest2[1], "\" />");
      }

      var radian = this.getRadian({
        x1: x1 + q1[0],
        y1: y1 + q1[1],
        x2: cx + q2[0],
        y2: cy + q2[1]
      });
      radian = radian < 270 && radian > 90 ? 180 + radian : radian;
      var value = typeof text === 'function' ? text() : text;
      str += "\n      <text \n        x=\"".concat(cx, "\" y=\"").concat(cy, "\" fill=\"").concat(fontColor || lineColor || '#000', "\" \n        transform=\"rotate(").concat(radian * -1, " ").concat(cx, ",").concat(cy, ") translate(").concat(textLeft, " ").concat(textTop === undefined ? lineWidth / -2 - 3 : textTop, ")\" \n        style=\"font-size:").concat(fontSize || 10, "px;-webkit-user-select:none; user-select:none;\" text-anchor=\"middle\"\n      >").concat(value === undefined ? '' : value, "</text>\n    ");
      return str;
    }
  }, {
    key: "getArrow1",
    value: function getArrow1(_ref18) {
      var x1 = _ref18.x1,
          y1 = _ref18.y1,
          x2 = _ref18.x2,
          y2 = _ref18.y2,
          lineColor = _ref18.lineColor,
          arrowSize = _ref18.arrowSize;
      var radian = this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      var line1 = this.getLineBySMR({
        x: x2,
        y: y2
      }, -arrowSize[1] * 2, radian - arrowSize[0]);
      var line2 = this.getLineBySMR({
        x: x2,
        y: y2
      }, -arrowSize[1] * 2, radian + arrowSize[0]);
      return '<path d="M' + x2 + ',' + y2 + ' L' + line1.x2 + ',' + line1.y2 + ' L' + line2.x2 + ',' + line2.y2 + ' Z" fill="' + lineColor + '"/>';
    }
  }, {
    key: "getArrow2",
    value: function getArrow2(_ref19) {
      var x2 = _ref19.x2,
          y2 = _ref19.y2,
          arrowSize = _ref19.arrowSize,
          lineColor = _ref19.lineColor,
          direction = _ref19.direction;

      if (direction === 'top') {
        //top
        return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[0] / 2, ",").concat(y2 + arrowSize[1], " L").concat(x2 + arrowSize[0] / 2, ",").concat(y2 + arrowSize[1], " Z\" fill=\"").concat(lineColor, "\"/>");
      } else if (direction === 'bottom') {
        //bottom
        return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[0] / 2, ",").concat(y2 - arrowSize[1], " L").concat(x2 + arrowSize[0] / 2, ",").concat(y2 - arrowSize[1], " Z\" fill=\"").concat(lineColor, "\"/>");
      } else if (direction === 'left') {
        //left
        return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 + arrowSize[1], ",").concat(y2 - arrowSize[0] / 2, " L").concat(x2 + arrowSize[1], ",").concat(y2 + arrowSize[0] / 2, " Z\" fill=\"").concat(lineColor, "\"/>");
      } else {
        //right
        return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[1], ",").concat(y2 - arrowSize[0] / 2, " L").concat(x2 - arrowSize[1], ",").concat(y2 + arrowSize[0] / 2, " Z\" fill=\"").concat(lineColor, "\"/>");
      }
    }
  }, {
    key: "getArrow3",
    value: function getArrow3(obj) {
      return this.getArrow2(obj);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.touch) {
        this.eventHandler('.r-floater-container', 'mousedown', _jquery.default.proxy(this.touchMouseDown, this));
      }

      this.update();
      (0, _jquery.default)(this.dom.current).focus();
    }
  }, {
    key: "dragOver",
    value: function dragOver(e) {
      if (this.props.onDragOver) {
        this.props.onDragOver(e, this.getMousePosition(e));
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (this.props.onDrop) {
        this.props.onDrop(e, this.getMousePosition(e), this.state.itemsDictionary);
      }
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition(e) {
      var client = this.getClient(e),
          zoom = this.props.zoom,
          screen = this.getScreen(),
          dom = (0, _jquery.default)(this.dom.current);

      if (dom.length === 0 || client === false) {
        return;
      }

      var offset = dom.offset();
      var x = Math.round((client.x - offset.left) / zoom - screen[0]);
      var y = Math.round((client.y - offset.top) / zoom - screen[1]);
      this.mousePosition = [x, y];

      if (this.props.getMousePosition) {
        this.props.getMousePosition([x, y]);
      }

      return [x, y];
    }
  }, {
    key: "getRadian",
    value: function getRadian(_ref20) {
      var x1 = _ref20.x1,
          x2 = _ref20.x2,
          y1 = _ref20.y1,
          y2 = _ref20.y2;
      var radian = Math.atan((y2 - y1) / (x1 - x2)) / Math.PI * 180;

      if (x2 < x1) {
        if (y1 - y2 !== 0) {
          radian = 180 + radian;
        } else {
          radian = 180;
        }
      } else if (x1 < x2) {
        if (y2 < y1) {} else if (y1 < y2) {
          radian = 360 + radian;
        } else {
          radian = 0;
        }
      } else {
        if (y2 < y1) {
          radian = 90;
        } else if (y1 < y2) {
          radian = 270;
        } else {
          radian = 0;
        }
      }

      return radian;
    }
  }, {
    key: "getLength",
    value: function getLength(_ref21) {
      var x1 = _ref21.x1,
          y1 = _ref21.y1,
          x2 = _ref21.x2,
          y2 = _ref21.y2;
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
  }, {
    key: "getLineBySMR",
    value: function getLineBySMR(start, measure, radian) {
      var deltaX = Math.cos(radian * Math.PI / 180) * measure,
          deltaY = Math.sin(radian * -1 * Math.PI / 180) * measure;
      return {
        x1: start.x,
        y1: start.y,
        x2: start.x + deltaX,
        y2: start.y + deltaY
      };
    }
  }, {
    key: "getItemById",
    value: function getItemById(id) {
      var items = this.props.items;

      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          return items[i];
        }
      }
    }
  }, {
    key: "getSiblings",
    value: function getSiblings(item) {
      if (this.ctrl) {
        return this.getAllChilds(item);
      }

      if (!item.group) {
        return [];
      }

      var items = this.props.items;
      var result = [];

      for (var i = 0; i < items.length; i++) {
        if (!this.isVisible(items[i]) || items[i].id === item.id || items[i].group !== item.group) {
          continue;
        }

        result.push(items[i]);
      }

      return result;
    }
  }, {
    key: "getAllChilds",
    value: function getAllChilds(item) {
      this.childs = [];
      this.foundIds = {};
      this.getAllChildsRecursive(item);
      return this.childs;
    }
  }, {
    key: "getAllChildsRecursive",
    value: function getAllChildsRecursive(item) {
      if (!item.relations || !item.relations.length) {
        return;
      }

      for (var i = 0; i < item.relations.length; i++) {
        var to = item.relations[i].to;
        var toItem = this.getItemById(to);

        if (this.foundIds[to] === undefined) {
          this.childs.push(toItem);
          this.foundIds[to] = true;
          this.getAllChildsRecursive(toItem);
        }
      }
    }
  }, {
    key: "getZoomOffset",
    value: function getZoomOffset(zoom) {
      if (zoom < 2) {
        return 0.1;
      }

      if (zoom < 4) {
        return 0.2;
      }

      if (zoom < 6) {
        return 0.3;
      }

      return 0.4;
    }
  }, {
    key: "zoom",
    value: function zoom(sign, abs) {
      var _this$props7 = this.props,
          onZoom = _this$props7.onZoom,
          zoom = _this$props7.zoom;

      if (!onZoom) {
        return;
      }

      var newZoom;

      if (abs) {
        newZoom = sign;
      } else {
        var offset = sign * this.getZoomOffset(zoom);
        newZoom = parseFloat((zoom + offset).toFixed(1));
      }

      if (newZoom < 0.2) {
        newZoom = 0.2;
      } else if (newZoom > 8) {
        newZoom = 8;
      }

      var dom = (0, _jquery.default)(this.dom.current);
      var width = dom.width();
      var height = dom.height();
      var zoomScreen = [(1 - newZoom) * width / newZoom / 2, (1 - newZoom) * height / newZoom / 2];
      onZoom(newZoom);
      this.setState({
        zoomScreen: zoomScreen
      });
    }
  }, {
    key: "getSnapedCoord",
    value: function getSnapedCoord(index, value) {
      var snap = this.props.snap;
      return Math.round(value / snap[index]) * snap[index];
    }
  }, {
    key: "arrow",
    value: function arrow(code) {
      var _this$state = this.state,
          selected = _this$state.selected,
          itemsDictionary = _this$state.itemsDictionary;
      var _this$props8 = this.props,
          snap = _this$props8.snap,
          screen = _this$props8.screen,
          _this$props8$onChange = _this$props8.onChange,
          onChange = _this$props8$onChange === void 0 ? function () {} : _this$props8$onChange;
      var id = selected;

      if (id !== false) {
        var item = itemsDictionary[id];

        if (code === 37) {
          item.left += -snap[0];
        } else if (code === 39) {
          item.left += snap[0];
        } else if (code === 38) {
          item.top += -snap[1];
        } else if (code === 40) {
          item.top += snap[1];
        }

        this.setState({
          itemsDictionary: itemsDictionary
        });
        onChange([item], itemsDictionary);
      } else {
        if (code === 37) {
          screen[0] += 5;
        } else if (code === 39) {
          screen[0] += -5;
        } else if (code === 38) {
          screen[1] += 5;
        } else if (code === 40) {
          screen[1] += -5;
        }

        if (this.props.onPan) {
          this.props.onPan(screen);
        }
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      var code = e.keyCode;
      var _this$props$keyCodes = this.props.keyCodes,
          keyCodes = _this$props$keyCodes === void 0 ? [] : _this$props$keyCodes;

      if (code === 27) {
        this.setState({
          seleced: false
        });
      }

      if ([37, 38, 39, 40].indexOf(code) !== -1) {
        this.arrow(code);
      } else if (code === 16) {
        (0, _jquery.default)(window).bind('keyup', _jquery.default.proxy(this.shiftUp, this));
        this.groupMove = true;
      } else if (code === 187) {
        this.zoom(1);
      } else if (code === 189) {
        this.zoom(-1);
      } else if (code === 36) {
        this.zoom(1, true);
      } else if (keyCodes[code]) {
        keyCodes[code]({ ...this.props,
          ...this.state
        });
      } else if (code === 17) {
        this.ctrl = true;
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp() {
      this.ctrl = false;
    }
  }, {
    key: "shiftUp",
    value: function shiftUp() {
      (0, _jquery.default)(window).unbind('keyup', this.shiftUp);
      this.groupMove = false;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var zoom = this.props.zoom;
      return { ...{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 'calc(100% / ' + zoom + ')',
          height: 'calc(100% / ' + zoom + ')',
          transform: "scale(".concat(zoom, ")"),
          transformOrigin: '0% 0%',
          overflow: 'hidden'
        },
        ...this.getBackground()
      };
    }
  }, {
    key: "getScreen",
    value: function getScreen() {
      var screen = this.props.screen;
      var zoomScreen = this.state.zoomScreen;
      var x = Math.round(screen[0] + zoomScreen[0]);
      var y = Math.round(screen[1] + zoomScreen[1]);
      return [x, y];
    }
  }, {
    key: "getBackground",
    value: function getBackground() {
      var _this$props9 = this.props,
          snap = _this$props9.snap,
          zoom = _this$props9.zoom;

      var _snap = _slicedToArray(snap, 3),
          x = _snap[0],
          y = _snap[1],
          color = _snap[2];

      if (!color) {
        return;
      }

      var screen = this.getScreen();
      var a = 100 * zoom;
      var b = x + "px";
      var c = y + "px";
      var h1 = "linear-gradient(".concat(color, " 0px,transparent 0px)");
      var v1 = "linear-gradient(90deg,".concat(color, " 0px, transparent 0px)");
      var h2 = "linear-gradient(".concat(color, " 1px, transparent 1px)");
      var v2 = "linear-gradient(90deg,".concat(color, " 1px, transparent 1px)");
      return {
        backgroundImage: "".concat(h1, ",").concat(v1, ",").concat(h2, ",").concat(v2),
        backgroundSize: "".concat(a, "px ").concat(a, "px,").concat(a, "px ").concat(a, "px,").concat(b, " ").concat(c, ",").concat(b, " ").concat(c),
        backgroundPosition: screen[0] + 'px ' + screen[1] + 'px'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props10 = this.props,
          items = _this$props10.items,
          _this$props10$events = _this$props10.events,
          events = _this$props10$events === void 0 ? {} : _this$props10$events,
          id = _this$props10.id,
          className = _this$props10.className,
          style = _this$props10.style,
          selectedColor = _this$props10.selectedColor,
          onAddRelation = _this$props10.onAddRelation;
      var _this$state2 = this.state,
          itemsDictionary = _this$state2.itemsDictionary,
          selected = _this$state2.selected,
          screen = this.getScreen();
      var Items = items.filter(function (item) {
        return _this6.isVisible(item);
      }).map(function (item, i) {
        var _props;

        var id = item.id;

        if (!itemsDictionary[id]) {
          item.left = _this6.getSnapedCoord(0, item.left || 0);
          item.top = _this6.getSnapedCoord(1, item.top || 0);
          itemsDictionary[id] = item;
        }

        var left = item.left + screen[0],
            top = item.top + screen[1];
        var props = (_props = {
          key: i,
          className: 'r-floater-item' + (id === selected ? ' selected' : ''),
          id: item.id
        }, _defineProperty(_props, _this6.touch ? 'onTouchStart' : 'onMouseDown', function (e) {
          return _this6.itemMouseDown(e, item, id, i);
        }), _defineProperty(_props, "style", {
          left: left,
          top: top,
          boxShadow: id === selected ? '0 0 8px 2px ' + selectedColor : undefined
        }), _defineProperty(_props, "draggable", false), _defineProperty(_props, "onDragStart", function onDragStart(e) {
          return e.preventDefault();
        }), _props);
        return /*#__PURE__*/_react.default.createElement("div", props, item.template, onAddRelation && item.connect !== false && /*#__PURE__*/_react.default.createElement("div", {
          className: "r-floater-origin-icon"
        }));
      });
      var eventProps = {};

      for (var prop in events) {
        eventProps[prop] = events[prop];
      }

      var svgProps = {
        className: 'r-floater-svg'
      };

      if (this.touch) {
        svgProps.onTouchStart = this.svgMouseDownTouch.bind(this);
      } else {
        svgProps.onMouseDown = this.svgMouseDown.bind(this);
      }

      return /*#__PURE__*/_react.default.createElement("div", _extends({
        ref: this.dom,
        className: "r-floater" + (className ? ' ' + className : ''),
        style: style,
        tabIndex: 0,
        draggable: false,
        onWheel: function onWheel(e) {
          return _this6.zoom(e.deltaY === 100 ? -1 : 1);
        },
        onKeyDown: this.keyDown.bind(this)
      }, eventProps, {
        id: id,
        onKeyUp: this.keyUp.bind(this),
        onDragOver: this.dragOver.bind(this),
        onDrop: this.drop.bind(this)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-floater-container",
        draggable: false,
        style: this.getStyle()
      }, /*#__PURE__*/_react.default.createElement("svg", svgProps), Items));
    }
  }]);

  return RFloater;
}(_react.Component);

exports.default = RFloater;
RFloater.defaultProps = {
  screen: [0, 0],
  snap: [1, 1],
  zoom: 1,
  connectType: 3,
  simpleConnect: true,
  lineWidth: 1,
  lineColor: '#6f8ea7',
  lineDash: [5, 0],
  fontColor: '#6f8ea7',
  arrowSize: [10, 12],
  fontSize: 10,
  textTop: -5,
  textLeft: 0,
  liveChange: false,
  selectedColor: '#6f8ea7',
  connectColor: '#6f8ea7'
};