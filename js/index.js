
const React = require('react');
const ReactDOM = require('react-dom');
const {useState, useEffect} = React;

const Main = () => {
  const width = 300;
  const height = 200;

  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [xSpeed, setXSpeed] = useState(2);
  const [ySpeed, setYSpeed] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      let nextX = x + xSpeed;
      let nextY = y + ySpeed;
      if ((nextX + 50) > width || nextX < 0) {
        setXSpeed(-1 * xSpeed);
      }
      if ((nextY + 50) > height || nextY < 0) {
        setYSpeed(-1 * ySpeed);
      }

      setX(nextX);
      setY(nextY);
    }, 50);
  }, [x, y]);

  return (
    <div
      style={{
        width: width,
        height: height,
        border: '1px solid black',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: y,
          left: x,
          backgroundColor: 'steelblue',
          borderRadius: '50%',
          width: 50,
          height: 50,
        }}
      >
      </div>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('container'),
);
