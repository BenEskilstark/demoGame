'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var React = require('react');
var ReactDOM = require('react-dom');
var useState = React.useState,
    useEffect = React.useEffect;


var Main = function Main() {
  var width = 300;
  var height = 200;

  var _useState = useState(100),
      _useState2 = _slicedToArray(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _useState3 = useState(100),
      _useState4 = _slicedToArray(_useState3, 2),
      y = _useState4[0],
      setY = _useState4[1];

  var _useState5 = useState(2),
      _useState6 = _slicedToArray(_useState5, 2),
      xSpeed = _useState6[0],
      setXSpeed = _useState6[1];

  var _useState7 = useState(2),
      _useState8 = _slicedToArray(_useState7, 2),
      ySpeed = _useState8[0],
      setYSpeed = _useState8[1];

  useEffect(function () {
    setTimeout(function () {
      var nextX = x + xSpeed;
      var nextY = y + ySpeed;
      if (nextX + 50 > width || nextX < 0) {
        setXSpeed(-1 * xSpeed);
      }
      if (nextY + 50 > height || nextY < 0) {
        setYSpeed(-1 * ySpeed);
      }

      setX(nextX);
      setY(nextY);
    }, 50);
  }, [x, y]);

  return React.createElement(
    'div',
    {
      style: {
        width: width,
        height: height,
        border: '1px solid black'
      }
    },
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: y,
        left: x,
        backgroundColor: 'steelblue',
        borderRadius: '50%',
        width: 50,
        height: 50
      }
    })
  );
};

ReactDOM.render(React.createElement(Main, null), document.getElementById('container'));