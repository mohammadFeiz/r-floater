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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RPGraph = /*#__PURE__*/function (_Component) {
  _inherits(RPGraph, _Component);

  var _super = _createSuper(RPGraph);

  function RPGraph(props) {
    var _this;

    _classCallCheck(this, RPGraph);

    _this = _super.call(this, props);
    _this.touch = 'ontouchstart' in document.documentElement;
    var _this$props = _this.props,
        items = _this$props.items,
        _this$props$simpleCon = _this$props.simpleConnect,
        simpleConnect = _this$props$simpleCon === void 0 ? false : _this$props$simpleCon;
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    _this.downMode = false;
    _this.state = {
      coords: _this.getCoords(items),
      selected: false,
      zoomScreen: [0, 0]
    };
    return _this;
  }

  _createClass(RPGraph, [{
    key: "getClient",
    value: function getClient(e) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.touch) {
        if (!e.changedTouches[index]) {
          return false;
        }

        return {
          x: e.changedTouches[index].clientX,
          y: e.changedTouches[index].clientY
        };
      } else {
        return {
          x: e.clientX,
          y: e.clientY
        };
      }
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
      var client = this.getClient(e, this.multiTouch ? 1 : 0);
      return [(client.x - x) / zoom + startX, (client.y - y) / zoom + startY];
    }
  }, {
    key: "getMTO",
    value: function getMTO(e) {
      var t1 = this.getClient(e, 0);
      var t2 = this.getClient(e, 1);

      if (t1 === false || t2 === false) {
        return false;
      }

      return Math.round(Math.sqrt(Math.pow(t1.x - t2.x, 2) + Math.pow(t1.y - t2.y, 2)));
    }
  }, {
    key: "svgMouseDown",
    value: function svgMouseDown(e) {
      if (this.downMode !== false) {
        this.itemMouseUp();
        this.svgMouseUp();
        this.multiTouch = true;
        this.mto = false;
        this.startZoom = this.props.zoom;
        this.svgMouseDown(e, true);
        return;
      }

      this.downMode = 'svg';
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
    key: "itemMouseDown",
    value: function itemMouseDown(e, item, id, index) {
      if (this.downMode !== false) {
        this.itemMouseUp();
        this.svgMouseUp();
        this.multiTouch = true;
        this.mto = false;
        this.startZoom = this.props.zoom;
        this.svgMouseDown(e);
        return;
      }

      this.downMode = 'item';

      if (!this.touch && e.button === 1) {
        this.svgMouseDown(e);
        return;
      }

      var moveHandleClassName = this.props.moveHandleClassName,
          coords = this.state.coords;

      if (!moveHandleClassName) {
        return;
      }

      var target = (0, _jquery.default)(e.target);

      if (!target.hasClass(moveHandleClassName) && target.parents('.' + moveHandleClassName) && target.parents('.' + moveHandleClassName).length === 0) {
        return;
      }

      var ids = [id].concat(this.getSiblings(item));
      this.setState({
        selected: id
      });
      (0, _jquery.default)('.r-floater-item').css({
        zIndex: 1
      });
      (0, _jquery.default)(e.currentTarget).css({
        zIndex: 10
      });
      var client = this.getClient(e);
      this.so = {
        x: client.x,
        y: client.y,
        items: []
      };

      for (var i = 0; i < ids.length; i++) {
        var coord = coords[ids[i]];
        var itm = this.getItemById(ids[i]);
        this.so.items.push({
          coord: coord,
          left: coord[0],
          top: coord[1],
          id: ids[i],
          item: itm
        });
      }

      this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.itemMouseMove, this));
      this.eventHandler('window', 'mouseup', _jquery.default.proxy(this.itemMouseUp, this));
    }
  }, {
    key: "svgMouseMove",
    value: function svgMouseMove(e) {
      var _this$props3 = this.props,
          onPan = _this$props3.onPan,
          Screen = _this$props3.screen,
          onZoom = _this$props3.onZoom,
          zoom = _this$props3.zoom;

      if (!onPan) {
        return;
      }

      this.svgMoved = true;
      var _this$so = this.so,
          x = _this$so.x,
          y = _this$so.y,
          screen = _this$so.screen;
      var offset = this.getOffset(e, [x, y], screen);
      var diff = Math.sqrt(Math.pow(offset[0] - Screen[0], 2) + Math.pow(offset[1] - Screen[1], 2));

      if (diff < 100 / zoom) {
        onPan(offset);
      }

      if (this.multiTouch) {
        var mto = this.getMTO(e);

        if (mto !== false) {
          if (this.mto === false) {
            this.mto = mto;
          }

          var zoomOffset = (mto - this.mto) / 200;
          var newZoom = parseFloat((this.startZoom + zoomOffset).toFixed(1));

          if (newZoom > 8) {
            newZoom = 8;
          } else if (newZoom < 0.3) {
            newZoom = 0.3;
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
      }
    }
  }, {
    key: "svgMouseUp",
    value: function svgMouseUp() {
      this.multiTouch = false;

      if (this.downMode === false) {
        return;
      }

      this.downMode = false;
      this.eventHandler('window', 'mousemove', this.svgMouseMove, 'unbind');
      this.eventHandler('window', 'mouseup', this.svgMouseUp, 'unbind');

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
      var move = this.props.move;

      if (move === false) {
        return;
      }

      var coords = this.state.coords,
          _this$so2 = this.so,
          x = _this$so2.x,
          y = _this$so2.y,
          items = _this$so2.items;

      for (var i = 0; i < items.length; i++) {
        var _items$i = items[i],
            coord = _items$i.coord,
            left = _items$i.left,
            top = _items$i.top,
            item = _items$i.item;

        if (item.move === false) {
          continue;
        }

        var offset = this.getOffset(e, [x, y], [left, top]);
        coord[0] = offset[0];
        coord[1] = offset[1];
      }

      this.setState({
        coords: coords
      });
    }
  }, {
    key: "itemMouseUp",
    value: function itemMouseUp() {
      this.multiTouch = false;

      if (this.downMode === false) {
        return;
      }

      this.downMode = false;
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
    key: "getCoord",
    value: function getCoord(_ref5, init) {
      var _ref5$left = _ref5.left,
          left = _ref5$left === void 0 ? 0 : _ref5$left,
          _ref5$top = _ref5.top,
          top = _ref5$top === void 0 ? 0 : _ref5$top;
      return [this.getSnapedCoord(0, left), this.getSnapedCoord(1, top)];
    }
  }, {
    key: "isVisible",
    value: function isVisible(item) {
      return (typeof item.show === 'function' ? item.show({ ...this.props,
        ...this.state
      }) : item.show) !== false;
    }
  }, {
    key: "getCoords",
    value: function getCoords(items) {
      var coords = {};

      for (var i = 0; i < items.length; i++) {
        if (!this.isVisible(items[i])) {
          continue;
        }

        var id = items[i].id;
        coords[id] = this.getCoord(items[i], true).concat(items[i]);
      }

      return coords;
    }
  }, {
    key: "getArea",
    value: function getArea(id) {
      var coords = this.state.coords,
          screen = this.getScreen(),
          element = (0, _jquery.default)('#' + id),
          width = element.width(),
          height = element.height();
      var coord = coords[id],
          left = coord[0] + screen[0],
          top = coord[1] + screen[1];
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
    value: function addAndSort(arr, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          index = _ref7[0],
          pos = _ref7[1];

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
    value: function toBottom(_ref8) {
      var _this2 = this;

      var dict = _ref8.dict,
          from = _ref8.from,
          to = _ref8.to,
          fromArea = _ref8.fromArea,
          toArea = _ref8.toArea,
          i = _ref8.i;
      this.addAndSort(dict[from].bottoms, [i, toArea.left]);
      this.addAndSort(dict[to].tops, [i, fromArea.left]);
      return function () {
        return {
          x1: fromArea.left + (_this2.getSortedIndex(dict[from].bottoms, i) + 1) / (dict[from].bottoms.length + 1) * fromArea.width,
          x2: toArea.left + (_this2.getSortedIndex(dict[to].tops, i) + 1) / (dict[to].tops.length + 1) * toArea.width,
          y1: fromArea.bottom,
          y2: toArea.top,
          direction: 1,
          type: 1,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toBottomSimple",
    value: function toBottomSimple(_ref9) {
      var dict = _ref9.dict,
          from = _ref9.from,
          to = _ref9.to,
          fromArea = _ref9.fromArea,
          toArea = _ref9.toArea,
          i = _ref9.i;
      return function () {
        return {
          x1: fromArea.center.x,
          x2: toArea.center.x,
          y1: fromArea.bottom,
          y2: toArea.top,
          direction: 1,
          type: 1,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toTop",
    value: function toTop(_ref10) {
      var _this3 = this;

      var dict = _ref10.dict,
          from = _ref10.from,
          to = _ref10.to,
          fromArea = _ref10.fromArea,
          toArea = _ref10.toArea,
          i = _ref10.i;
      this.addAndSort(dict[from].tops, [i, toArea.left]);
      this.addAndSort(dict[to].bottoms, [i, fromArea.left]);
      return function () {
        return {
          x1: fromArea.left + (_this3.getSortedIndex(dict[from].tops, i) + 1) / (dict[from].tops.length + 1) * fromArea.width,
          x2: toArea.left + (_this3.getSortedIndex(dict[to].bottoms, i) + 1) / (dict[to].bottoms.length + 1) * toArea.width,
          y1: fromArea.top,
          y2: toArea.bottom,
          direction: -1,
          type: 1,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toTopSimple",
    value: function toTopSimple(_ref11) {
      var dict = _ref11.dict,
          from = _ref11.from,
          to = _ref11.to,
          fromArea = _ref11.fromArea,
          toArea = _ref11.toArea,
          i = _ref11.i;
      return function () {
        return {
          x1: fromArea.center.x,
          x2: toArea.center.x,
          y1: fromArea.top,
          y2: toArea.bottom,
          direction: -1,
          type: 1,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toRight",
    value: function toRight(_ref12) {
      var _this4 = this;

      var dict = _ref12.dict,
          from = _ref12.from,
          to = _ref12.to,
          fromArea = _ref12.fromArea,
          toArea = _ref12.toArea,
          i = _ref12.i;
      this.addAndSort(dict[from].rights, [i, toArea.top]);
      this.addAndSort(dict[to].lefts, [i, fromArea.top]);
      return function () {
        return {
          y1: fromArea.top + (_this4.getSortedIndex(dict[from].rights, i) + 1) / (dict[from].rights.length + 1) * fromArea.height,
          y2: toArea.top + (_this4.getSortedIndex(dict[to].lefts, i) + 1) / (dict[to].lefts.length + 1) * toArea.height,
          x1: fromArea.right,
          x2: toArea.left,
          direction: 1,
          type: 2,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toRightSimple",
    value: function toRightSimple(_ref13) {
      var dict = _ref13.dict,
          from = _ref13.from,
          to = _ref13.to,
          fromArea = _ref13.fromArea,
          toArea = _ref13.toArea,
          i = _ref13.i;
      return function () {
        return {
          y1: fromArea.center.y,
          y2: toArea.center.y,
          x1: fromArea.right,
          x2: toArea.left,
          direction: 1,
          type: 2,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toLeft",
    value: function toLeft(_ref14) {
      var _this5 = this;

      var dict = _ref14.dict,
          from = _ref14.from,
          to = _ref14.to,
          fromArea = _ref14.fromArea,
          toArea = _ref14.toArea,
          i = _ref14.i;
      this.addAndSort(dict[from].lefts, [i, toArea.top]);
      this.addAndSort(dict[to].rights, [i, fromArea.top]);
      return function () {
        return {
          y1: fromArea.top + (_this5.getSortedIndex(dict[from].lefts, i) + 1) / (dict[from].lefts.length + 1) * fromArea.height,
          y2: toArea.top + (_this5.getSortedIndex(dict[to].rights, i) + 1) / (dict[to].rights.length + 1) * toArea.height,
          x1: fromArea.left,
          x2: toArea.right,
          direction: -1,
          type: 2,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "toLeftSimple",
    value: function toLeftSimple(_ref15) {
      var dict = _ref15.dict,
          from = _ref15.from,
          to = _ref15.to,
          fromArea = _ref15.fromArea,
          toArea = _ref15.toArea,
          i = _ref15.i;
      return function () {
        return {
          y1: fromArea.center.y,
          y2: toArea.center.y,
          x1: fromArea.left,
          x2: toArea.right,
          direction: -1,
          type: 2,
          index: i,
          from: from,
          to: to
        };
      };
    }
  }, {
    key: "getRelationsCoords",
    value: function getRelationsCoords() {
      var _this$props4 = this.props,
          relations = _this$props4.relations,
          simpleConnect = _this$props4.simpleConnect,
          coords = this.state.coords,
          dict = {},
          Relations = [];
      var a,
          b = simpleConnect === true ? 'Simple' : '';

      for (var from in relations) {
        for (var i = 0; i < relations[from].length; i++) {
          var relation = relations[from][i],
              to = relation.to,
              type = relation.type;

          if (!coords[from] || !coords[to]) {
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
            i: i
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
    }
  }, {
    key: "update",
    value: function update() {
      var relationsCoords = this.getRelationsCoords();
      var relations = this.props.relations;
      var svg;

      for (var i = 0; i < relationsCoords.length; i++) {
        var props = relationsCoords[i]();
        var relation = relations[props.from][props.index];
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
        svg += this.getLine(obj) + this.getArrow(obj);
      }

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
    value: function getLine1(_ref16) {
      var x1 = _ref16.x1,
          y1 = _ref16.y1,
          x2 = _ref16.x2,
          y2 = _ref16.y2,
          arrowSize = _ref16.arrowSize,
          fontSize = _ref16.fontSize,
          lineDash = _ref16.lineDash,
          lineColor = _ref16.lineColor,
          lineWidth = _ref16.lineWidth,
          fontColor = _ref16.fontColor,
          text = _ref16.text,
          textTop = _ref16.textTop,
          textLeft = _ref16.textLeft;
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
    value: function getLine2(_ref17) {
      var x1 = _ref17.x1,
          y1 = _ref17.y1,
          x2 = _ref17.x2,
          y2 = _ref17.y2,
          type = _ref17.type,
          fontSize = _ref17.fontSize,
          lineDash = _ref17.lineDash,
          lineColor = _ref17.lineColor,
          lineWidth = _ref17.lineWidth,
          fontColor = _ref17.fontColor,
          text = _ref17.text,
          textTop = _ref17.textTop,
          textLeft = _ref17.textLeft;
      var cx = (x1 + x2) / 2,
          cy = (y1 + y2) / 2;
      var start = "<line stroke=\"".concat(lineColor, "\" stroke-width=\"").concat(lineWidth, "\" stroke-dasharray=\"").concat(lineDash, "\" ");
      var str = '',
          tx,
          ty;

      if (type === 1) {
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(y1, "\" x2=\"").concat(x1, "\" y2=\"").concat(cy, "\" />");
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(cy, "\" x2=\"").concat(x2, "\" y2=\"").concat(cy, "\" />");
        str += "".concat(start, "x1=\"").concat(x2, "\" y1=\"").concat(cy, "\" x2=\"").concat(x2, "\" y2=\"").concat(y2, "\" />");
        tx = x2;
        ty = cy;
      } else {
        str += "".concat(start, "x1=\"").concat(x1, "\" y1=\"").concat(y1, "\" x2=\"").concat(cx, "\" y2=\"").concat(y1, "\" />");
        str += "".concat(start, "x1=\"").concat(cx, "\" y1=\"").concat(y1, "\" x2=\"").concat(cx, "\" y2=\"").concat(y2, "\" />");
        str += "".concat(start, "x1=\"").concat(cx, "\" y1=\"").concat(y2, "\" x2=\"").concat(x2, "\" y2=\"").concat(y2, "\" />");
        tx = cx;
        ty = y2;
      }

      var value = typeof text === 'function' ? text() : text;
      str += "<text x=\"".concat(tx, "\" y=\"").concat(ty, "\" fill=\"").concat(fontColor || lineColor || '#000', "\" transform=\"translate(").concat(textLeft, " ").concat(textTop, ")\" style=\"font-size:").concat(fontSize || 10, "px;-webkit-user-select:none; user-select:none;\" text-anchor=\"middle\">").concat(value === undefined ? '' : value, "</text>");
      return str;
    }
  }, {
    key: "getLine3",
    value: function getLine3(_ref18) {
      var x1 = _ref18.x1,
          y1 = _ref18.y1,
          x2 = _ref18.x2,
          y2 = _ref18.y2,
          arrowSize = _ref18.arrowSize,
          type = _ref18.type,
          direction = _ref18.direction,
          fontSize = _ref18.fontSize,
          textTop = _ref18.textTop,
          textLeft = _ref18.textLeft,
          lineDash = _ref18.lineDash,
          lineColor = _ref18.lineColor,
          lineWidth = _ref18.lineWidth,
          fontColor = _ref18.fontColor,
          text = _ref18.text;
      var start = "<path fill=\"none\" stroke=\"".concat(lineColor, "\" stroke-width=\"").concat(lineWidth, "\" stroke-dasharray=\"").concat(lineDash, "\" ");
      var str = '';
      var cx = (x1 + x2) / 2,
          cy = (y1 + y2) / 2,
          dest1,
          dest2,
          q1,
          q2;

      if (type === 1) {
        y2 = y2 + -arrowSize[0] * direction;
        dest1 = [cx - x1, cy - y1];
        dest2 = [x2 - cx, y2 - cy];
        q1 = [0, (cy - y1) / 2];
        q2 = [x2 - cx, (y2 - cy) / 2];
        str += "".concat(start, "d=\"M").concat(x1, ",").concat(y1, " q").concat(q1[0], ",").concat(q1[1], ",").concat(dest1[0], ",").concat(dest1[1], " q").concat(q2[0], ",").concat(q2[1], ",").concat(dest2[0], ",").concat(dest2[1], "\" />");
      } else {
        x2 = x2 + -arrowSize[1] * direction;
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
    value: function getArrow1(_ref19) {
      var x1 = _ref19.x1,
          y1 = _ref19.y1,
          x2 = _ref19.x2,
          y2 = _ref19.y2,
          lineColor = _ref19.lineColor,
          arrowSize = _ref19.arrowSize;
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
    value: function getArrow2(_ref20) {
      var x2 = _ref20.x2,
          y2 = _ref20.y2,
          arrowSize = _ref20.arrowSize,
          type = _ref20.type,
          lineColor = _ref20.lineColor,
          direction = _ref20.direction;

      if (type === 1) {
        if (direction === -1) {
          //top
          return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[0] / 2, ",").concat(y2 + arrowSize[1], " L").concat(x2 + arrowSize[0] / 2, ",").concat(y2 + arrowSize[1], " Z\" fill=\"").concat(lineColor, "\"/>");
        } else {
          //bottom
          return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[0] / 2, ",").concat(y2 - arrowSize[1], " L").concat(x2 + arrowSize[0] / 2, ",").concat(y2 - arrowSize[1], " Z\" fill=\"").concat(lineColor, "\"/>");
        }
      } else {
        if (direction === -1) {
          //left
          return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 + arrowSize[1], ",").concat(y2 - arrowSize[0] / 2, " L").concat(x2 + arrowSize[1], ",").concat(y2 + arrowSize[0] / 2, " Z\" fill=\"").concat(lineColor, "\"/>");
        } else {
          //right
          return "<path d=\"M".concat(x2, ",").concat(y2, " L").concat(x2 - arrowSize[1], ",").concat(y2 - arrowSize[0] / 2, " L").concat(x2 - arrowSize[1], ",").concat(y2 + arrowSize[0] / 2, " Z\" fill=\"").concat(lineColor, "\"/>");
        }
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
      var _this6 = this;

      var getMousePosition = this.props.getMousePosition;

      if (getMousePosition) {
        this.eventHandler('window', 'mousemove', function (e) {
          return getMousePosition(_this6.getMousePosition(e));
        });
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
        this.props.onDrop(e, this.getMousePosition(e));
      }
    }
  }, {
    key: "getMousePosition",
    value: function getMousePosition(e) {
      var client = this.getClient(e),
          zoom = this.props.zoom,
          screen = this.getScreen(),
          dom = (0, _jquery.default)(this.dom.current);

      if (dom.length === 0) {
        return;
      }

      var offset = dom.offset();
      var x = Math.round((client.x - offset.left) / zoom - screen[0]);
      var y = Math.round((client.y - offset.top) / zoom - screen[1]);
      return [x, y];
    }
  }, {
    key: "getRadian",
    value: function getRadian(_ref21) {
      var x1 = _ref21.x1,
          x2 = _ref21.x2,
          y1 = _ref21.y1,
          y2 = _ref21.y2;
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
    value: function getLength(_ref22) {
      var x1 = _ref22.x1,
          y1 = _ref22.y1,
          x2 = _ref22.x2,
          y2 = _ref22.y2;
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
      if (!item.group) {
        return [];
      }

      var items = this.props.items;
      var result = [];

      for (var i = 0; i < items.length; i++) {
        if (!this.isVisible(items[i])) {
          continue;
        }

        if (items[i].id === item.id) {
          continue;
        }

        if (items[i].group === item.group) {
          result.push(items[i].id);
        }
      }

      return result;
    }
  }, {
    key: "getAllChilds",
    value: function getAllChilds(id) {
      this.childs = [];
      this.getAllChildsRecursive(id);
    }
  }, {
    key: "getAllChildsRecursive",
    value: function getAllChildsRecursive(id) {
      var relations = this.props.relations;

      for (var i = 0; i < relations.length; i++) {
        var _relations$i = relations[i],
            from = _relations$i.from,
            to = _relations$i.to;

        if (from === id && this.childs.indexOf(to) === -1) {
          this.childs.push(to);
          this.getAllChildsRecursive(to);
        }
      }
    }
  }, {
    key: "fixCoords",
    value: function fixCoords() {
      if (!this.so || !this.so.items) {
        return;
      }

      var items = this.so.items;
      var coords = this.state.coords;
      var changes = [];

      for (var i = 0; i < items.length; i++) {
        var _items$i2 = items[i],
            coord = _items$i2.coord,
            id = _items$i2.id,
            item = _items$i2.item;
        var fixedCoord = this.getCoord({
          left: coord[0],
          top: coord[1]
        });
        coord[0] = fixedCoord[0];
        coord[1] = fixedCoord[1];
        changes.push({
          item: item,
          id: id,
          left: coord[0],
          top: coord[1]
        });
      }

      this.setState({
        coords: coords
      });

      if (this.props.onChange) {
        this.props.onChange(changes, coords);
      }
    }
  }, {
    key: "zoom",
    value: function zoom(sign, abs) {
      var _this$props5 = this.props,
          onZoom = _this$props5.onZoom,
          zoom = _this$props5.zoom;

      if (!onZoom) {
        return;
      }

      var newZoom;

      if (abs) {
        newZoom = sign;
      } else {
        var offset = sign * 0.1;
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
    key: "wheel",
    value: function wheel(e) {
      this.zoom(e.deltaY === 100 ? -1 : 1);
    }
  }, {
    key: "arrow",
    value: function arrow(code) {
      var _this$state = this.state,
          selected = _this$state.selected,
          coords = _this$state.coords;
      var _this$props6 = this.props,
          snap = _this$props6.snap,
          screen = _this$props6.screen;
      var sign,
          index = code === 37 || code === 39 ? 0 : 1;
      var id = selected;

      if (id !== false) {
        var item = this.getItemById(id);
        sign = code === 37 || code === 38 ? -1 : 1;
        coords[id][index] += snap[index] * sign;
        this.setState({
          coords: coords
        });

        if (this.props.onChange) {
          this.props.onChange([{
            item: item,
            id: id,
            left: coords[id][0],
            top: coords[id][1]
          }], coords);
        }
      } else {
        sign = code === 37 || code === 38 ? 1 : -1;
        screen[index] += 5 * sign;

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
        debugger;
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
      }
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
      return [screen[0] + zoomScreen[0], screen[1] + zoomScreen[1]];
    }
  }, {
    key: "getBackground",
    value: function getBackground() {
      var _this$props7 = this.props,
          snap = _this$props7.snap,
          zoom = _this$props7.zoom;

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
      var _this7 = this;

      var _this$props8 = this.props,
          items = _this$props8.items,
          _this$props8$events = _this$props8.events,
          events = _this$props8$events === void 0 ? {} : _this$props8$events,
          _this$props8$getCoord = _this$props8.getCoords,
          getCoords = _this$props8$getCoord === void 0 ? function () {} : _this$props8$getCoord,
          id = _this$props8.id,
          className = _this$props8.className,
          style = _this$props8.style,
          _this$props8$selected = _this$props8.selectedStyle,
          selectedStyle = _this$props8$selected === void 0 ? {} : _this$props8$selected;
      var _this$state2 = this.state,
          coords = _this$state2.coords,
          selected = _this$state2.selected;
      var screen = this.getScreen();
      getCoords(coords);
      var Items = items.filter(function (item) {
        return _this7.isVisible(item);
      }).map(function (item, i) {
        var id = item.id;
        coords[id] = coords[id] || _this7.getCoord(item, true).concat(item);
        var coord = coords[id];
        var props = {
          key: i,
          className: 'r-floater-item' + (id === selected ? ' selected' : ''),
          id: item.id,
          onMouseDown: function onMouseDown(e) {
            return _this7.itemMouseDown(e, item, id, i);
          },
          onTouchStart: function onTouchStart(e) {
            return _this7.itemMouseDown(e, item, id, i);
          },
          style: {
            left: coord[0] + screen[0],
            top: coord[1] + screen[1],
            ...(id === selected ? selectedStyle : {})
          },
          draggable: false
        };
        return /*#__PURE__*/_react.default.createElement("div", props, item.template);
      });
      var eventProps = {};

      for (var prop in events) {
        eventProps[prop] = events[prop];
      }

      return /*#__PURE__*/_react.default.createElement("div", _extends({
        ref: this.dom,
        className: "r-floater" + (className ? ' ' + className : ''),
        style: style,
        tabIndex: 0,
        onWheel: this.wheel.bind(this),
        onKeyDown: this.keyDown.bind(this)
      }, eventProps, {
        id: id,
        onDragOver: this.dragOver.bind(this),
        onDrop: this.drop.bind(this)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-floater-container",
        style: this.getStyle()
      }, /*#__PURE__*/_react.default.createElement("svg", {
        className: "r-floater-svg",
        onMouseDown: this.svgMouseDown.bind(this),
        onTouchStart: this.svgMouseDown.bind(this)
      }), Items));
    }
  }]);

  return RPGraph;
}(_react.Component);

exports.default = RPGraph;
RPGraph.defaultProps = {
  text: {},
  line: {},
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
  textLeft: 0
};