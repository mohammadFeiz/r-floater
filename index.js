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
    var items = _this.props.items;
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    _this.state = {
      coords: _this.getCoords(items),
      selected: false
    };
    return _this;
  }

  _createClass(RPGraph, [{
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
    key: "getClient",
    value: function getClient(e) {
      return this.touch ? {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      } : {
        x: e.clientX,
        y: e.clientY
      };
    }
  }, {
    key: "getCoord",
    value: function getCoord(_ref, init) {
      var _ref$left = _ref.left,
          left = _ref$left === void 0 ? 0 : _ref$left,
          _ref$top = _ref.top,
          top = _ref$top === void 0 ? 0 : _ref$top;
      var snap = this.props.snap;

      if (init) {
        left *= snap[0];
        top *= snap[1];
      }

      return [this.getSnapedCoord(0, left), this.getSnapedCoord(1, top)];
    }
  }, {
    key: "isVisible",
    value: function isVisible(item) {
      var show = typeof item.show === 'function' ? item.show({ ...this.props,
        ...this.state
      }) : item.show;
      return show !== false;
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
    key: "getIndexById",
    value: function getIndexById(id) {
      var items = this.props.items;

      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          return i;
        }
      }
    }
  }, {
    key: "getRelations",
    value: function getRelations(model) {
      var relations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var coords = this.state.coords;
      var _this$props = this.props,
          Text = _this$props.text,
          Line = _this$props.line,
          arrowSize = _this$props.arrowSize;
      var r = [];

      for (var i = 0; i < relations.length; i++) {
        var rel = relations[i];

        if (!coords[rel.from] || !coords[rel.to]) {
          continue;
        }

        var line = _jquery.default.extend({}, Line, rel.line || {});

        var text = _jquery.default.extend({}, Text, rel.text || {});

        r.push({
          fromId: rel.from,
          toId: rel.to,
          line: {
            dash: line.dash || [5, 0],
            width: line.width || 1,
            color: line.color || '#666'
          },
          text: {
            color: text.color || '#666',
            value: text.value || '',
            position: text.position
          },
          arrowSize: rel.arrowSize || arrowSize
        });
      }

      return r;
    }
  }, {
    key: "getArea",
    value: function getArea(id) {
      var coords = this.state.coords;
      var screen = this.props.screen;
      var element = (0, _jquery.default)('#' + id),
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
        center: {
          x: left + width / 2,
          y: top + height / 2
        }
      };
    }
  }, {
    key: "update",
    value: function update() {
      var items = this.props.items;
      var relations = this.getRelations(items, this.props.relations);
      var lines = '';

      for (var i = 0; i < relations.length; i++) {
        var _relations$i = relations[i],
            fromId = _relations$i.fromId,
            toId = _relations$i.toId,
            _relations$i$text = _relations$i.text,
            text = _relations$i$text === void 0 ? {} : _relations$i$text,
            arrowSize = _relations$i.arrowSize,
            _relations$i$line = _relations$i.line,
            line = _relations$i$line === void 0 ? {} : _relations$i$line;
        var fromArea = this.getArea(fromId),
            toArea = this.getArea(toId);

        if (!fromArea || !toArea) {
          continue;
        }

        var x1, y1, x2, y2;

        if (fromArea.left < toArea.right && fromArea.right > toArea.left) {
          x1 = fromArea.center.x;
          x2 = toArea.center.x;

          if (fromArea.top < toArea.top) {
            y1 = fromArea.bottom;
            y2 = toArea.top;
          } else {
            y1 = fromArea.top;
            y2 = toArea.bottom;
          }
        } else {
          y1 = fromArea.center.y;
          y2 = toArea.center.y;

          if (fromArea.left < toArea.left) {
            x1 = fromArea.right;
            x2 = toArea.left;
          } else {
            x1 = fromArea.left;
            x2 = toArea.right;
          }
        }

        lines += this.getLine({
          x1: x1,
          x2: x2,
          y1: y1,
          y2: y2,
          line: line,
          arrowSize: arrowSize
        });
        lines += this.getArrow({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          line: line,
          arrowSize: arrowSize
        });
        lines += this.getText({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          text: text,
          line: line
        });
      }

      (0, _jquery.default)('.r-floater svg').html(lines);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var getMousePosition = this.props.getMousePosition;

      if (getMousePosition) {
        this.eventHandler('window', 'mousemove', _jquery.default.proxy(this.mouseMove, this));
      }

      this.update();
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      var getMousePosition = this.props.getMousePosition;
      var client = this.getClient(e);
      var _this$props2 = this.props,
          screen = _this$props2.screen,
          zoom = _this$props2.zoom;
      var dom = (0, _jquery.default)(this.dom.current);
      var offset = dom.offset();
      var x = Math.round((client.x - offset.left) / zoom - screen[0]);
      var y = Math.round((client.y - offset.top) / zoom - screen[1]);
      getMousePosition([x, y]);
    }
  }, {
    key: "getText",
    value: function getText(_ref2) {
      var x1 = _ref2.x1,
          y1 = _ref2.y1,
          x2 = _ref2.x2,
          y2 = _ref2.y2,
          text = _ref2.text,
          line = _ref2.line;
      var x = (x1 + x2) / 2,
          y = (y1 + y2) / 2;
      var radian = this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      radian = radian < 270 && radian > 90 ? 180 + radian : radian;
      var value = typeof text.value === 'function' ? text.value() : text.value;
      return '<text x="' + x + '" y="' + y + '" fill="' + (text.color || line.color || '#000') + '" transform="rotate(' + radian * -1 + ' ' + x + ',' + y + ') translate(0 ' + (text.position === undefined ? line.width / -2 - 3 : text.position) + ')" style="font-size:' + (text.size || 10) + 'px;-webkit-user-select:none; user-select:none;" text-anchor="middle">' + (value === undefined ? '' : value) + '</text>';
    }
  }, {
    key: "getArrowLength",
    value: function getArrowLength(arrowSize) {
      return arrowSize[1] * Math.cos(arrowSize[0] * Math.PI / 180);
    }
  }, {
    key: "getLine",
    value: function getLine(_ref3) {
      var x1 = _ref3.x1,
          y1 = _ref3.y1,
          x2 = _ref3.x2,
          y2 = _ref3.y2,
          line = _ref3.line,
          arrowSize = _ref3.arrowSize;
      var length = this.getLength({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      }) - this.getArrowLength(arrowSize);
      var l = this.getLineBySMR({
        x: x1,
        y: y1
      }, length < 0 ? 0 : length, this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      }));
      return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + l.x2 + '" y2="' + l.y2 + '" stroke="' + line.color + '" stroke-width="' + line.width + '" stroke-dasharray="' + line.dash + '" />';
    }
  }, {
    key: "getArrow",
    value: function getArrow(_ref4) {
      var x1 = _ref4.x1,
          y1 = _ref4.y1,
          x2 = _ref4.x2,
          y2 = _ref4.y2,
          line = _ref4.line,
          arrowSize = _ref4.arrowSize;
      var radian = this.getRadian({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      var line1 = this.getLineBySMR({
        x: x2,
        y: y2
      }, -arrowSize[1], radian - arrowSize[0]);
      var line2 = this.getLineBySMR({
        x: x2,
        y: y2
      }, -arrowSize[1], radian + arrowSize[0]);
      return '<path d="M' + x2 + ',' + y2 + ' L' + line1.x2 + ',' + line1.y2 + ' L' + line2.x2 + ',' + line2.y2 + ' Z" fill="' + line.color + '"/>';
    }
  }, {
    key: "getRadian",
    value: function getRadian(_ref5) {
      var x1 = _ref5.x1,
          x2 = _ref5.x2,
          y1 = _ref5.y1,
          y2 = _ref5.y2;
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
    value: function getLength(_ref6) {
      var x1 = _ref6.x1,
          y1 = _ref6.y1,
          x2 = _ref6.x2,
          y2 = _ref6.y2;
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
    key: "getOffset",
    value: function getOffset(e, _ref7, _ref8) {
      var _ref9 = _slicedToArray(_ref7, 2),
          x = _ref9[0],
          y = _ref9[1];

      var _ref10 = _slicedToArray(_ref8, 2),
          startX = _ref10[0],
          startY = _ref10[1];

      var zoom = this.props.zoom;
      var client = this.getClient(e);
      return [(client.x - x) / zoom + startX, (client.y - y) / zoom + startY];
    }
  }, {
    key: "svgMouseDown",
    value: function svgMouseDown(e) {
      console.log(e.button);
      var _this$props3 = this.props,
          screen = _this$props3.screen,
          moveHandleClassName = _this$props3.moveHandleClassName;
      this.svgMoved = false;
      e.preventDefault();

      if (!moveHandleClassName) {
        return;
      }

      this.isDown = true;
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
    key: "svgMouseMove",
    value: function svgMouseMove(e) {
      var onPan = this.props.onPan;

      if (!onPan) {
        return;
      }

      this.svgMoved = true;
      var _this$so = this.so,
          x = _this$so.x,
          y = _this$so.y,
          screen = _this$so.screen;
      onPan(this.getOffset(e, [x, y], screen));
    }
  }, {
    key: "svgMouseUp",
    value: function svgMouseUp() {
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
    key: "itemMouseDown",
    value: function itemMouseDown(e, item, id, index) {
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

      if (!target.hasClass(moveHandleClassName) && target.parents('.' + moveHandleClassName).length === 0) {
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
      console.log(this.childs);
    }
  }, {
    key: "getAllChildsRecursive",
    value: function getAllChildsRecursive(id) {
      var relations = this.props.relations;

      for (var i = 0; i < relations.length; i++) {
        var _relations$i2 = relations[i],
            from = _relations$i2.from,
            to = _relations$i2.to;

        if (from === id && this.childs.indexOf(to) === -1) {
          this.childs.push(to);
          this.getAllChildsRecursive(to);
        }
      }
    }
  }, {
    key: "itemMouseMove",
    value: function itemMouseMove(e) {
      var coords = this.state.coords,
          _this$so2 = this.so,
          x = _this$so2.x,
          y = _this$so2.y,
          items = _this$so2.items;

      for (var i = 0; i < items.length; i++) {
        var _items$i = items[i],
            coord = _items$i.coord,
            left = _items$i.left,
            top = _items$i.top;
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
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var zoom = this.props.zoom;
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 'calc(100% / ' + zoom + ')',
        height: 'calc(100% / ' + zoom + ')',
        transform: 'scale(' + zoom + ')',
        transformOrigin: '0% 0%',
        overflow: 'hidden'
      };
    }
  }, {
    key: "zoom",
    value: function zoom(sign) {
      var _this$props4 = this.props,
          onZoom = _this$props4.onZoom,
          zoom = _this$props4.zoom;

      if (!onZoom) {
        return;
      }

      var offset = sign * 0.1;
      var newZoom = parseFloat((zoom + offset).toFixed(1));

      if (newZoom < 0.1) {
        newZoom = 0.1;
      } else if (newZoom > 3) {
        newZoom = 3;
      }

      onZoom(newZoom);
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
      var _this$props5 = this.props,
          snap = _this$props5.snap,
          screen = _this$props5.screen;
      var sign,
          index = code === 37 || code === 39 ? 0 : 1;
      var id = selected;

      if (id !== undefined) {
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
        this.setState({
          screen: screen
        });
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      console.log(e.keyCode);
      var code = e.keyCode;

      if ([37, 38, 39, 40].indexOf(code) !== -1) {
        this.arrow(code);
      } else if (code === 17) {//ctrl
      } else if (code === 16) {
        //shift
        (0, _jquery.default)(window).bind('keyup', _jquery.default.proxy(this.shiftUp, this));
        this.groupMove = true;
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
          transform: 'scale(' + zoom + ')',
          transformOrigin: '0% 0%',
          overflow: 'hidden'
        },
        ...this.getBackground()
      };
    }
  }, {
    key: "getBackground",
    value: function getBackground() {
      var _this$props6 = this.props,
          snap = _this$props6.snap,
          zoom = _this$props6.zoom;

      var _snap = _slicedToArray(snap, 3),
          x = _snap[0],
          y = _snap[1],
          color = _snap[2];

      if (!color) {
        return;
      }

      var screen = this.props.screen;
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
      var _this2 = this;

      var _this$props7 = this.props,
          items = _this$props7.items,
          _this$props7$events = _this$props7.events,
          events = _this$props7$events === void 0 ? {} : _this$props7$events,
          screen = _this$props7.screen,
          _this$props7$getCoord = _this$props7.getCoords,
          getCoords = _this$props7$getCoord === void 0 ? function () {} : _this$props7$getCoord,
          id = _this$props7.id,
          className = _this$props7.className,
          style = _this$props7.style;
      var _this$state2 = this.state,
          coords = _this$state2.coords,
          selected = _this$state2.selected;
      getCoords(coords);
      var Items = items.filter(function (item) {
        return _this2.isVisible(item);
      }).map(function (item, i) {
        var id = item.id;
        coords[id] = coords[id] || _this2.getCoord(item, true).concat(item);
        var coord = coords[id];
        var props = {
          key: i,
          className: 'r-floater-item' + (id === selected ? ' selected' : ''),
          id: item.id,
          onMouseDown: function onMouseDown(e) {
            return _this2.itemMouseDown(e, item, id, i);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.itemMouseDown(e, item, id, i);
          },
          style: {
            left: coord[0] + screen[0],
            top: coord[1] + screen[1]
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
        id: id
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
  arrowSize: [10, 20],
  text: {},
  line: {},
  screen: [0, 0],
  snap: [1, 1],
  zoom: 1
};