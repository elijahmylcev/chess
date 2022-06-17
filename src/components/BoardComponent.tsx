import * as React from 'react';

function BoardComponent() {
  return (
    <div className="board">
      <div className="cell white" />
      <div className="cell black" />
      <div className="cell white" />
      <div className="cell black" />
    </div>
  );
}

export default BoardComponent;
