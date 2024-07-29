import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Style.scss'

const PathAnimation = () => {
  const pathStyle = useSpring({
    from: { strokeDashoffset: 500 },
    to: { strokeDashoffset: 0 },
    config: { duration: 2000 },
  });

  return (
    <div style={{ position: 'relative', height: '600px', width: '200px' }}>
      <svg width="100%" height="100%">
        <animated.path
          d="M100 50 Q50 150 100 250 Q150 350 100 450 Q50 550 100 650"
          stroke="gray"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="500"
          style={pathStyle}
        />
      </svg>
      <div style={{ position: 'absolute', top: '35px', left: '80px' }}>
        <div className="node">1</div>
        <div className="label">Lesson 1</div>
      </div>
      <div style={{ position: 'absolute', top: '235px', left: '80px' }}>
        <div className="node">2</div>
        <div className="label">Lesson 2</div>
      </div>
      <div style={{ position: 'absolute', top: '435px', left: '80px' }}>
        <div className="node">3</div>
        <div className="label">Lesson 3</div>
      </div>
      <div style={{ position: 'absolute', top: '635px', left: '80px' }}>
        <div className="node">4</div>
        <div className="label">Lesson 4</div>
      </div>
    </div>
  );
};

export default PathAnimation;