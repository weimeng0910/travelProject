import React from 'react';
import { useUndo } from '@/utils/use-undo/use-undo';
const Text2 = () => {
  const [
    countState,
    { set: setCount, reset: resetCount, undo: undoCount, redo: redoCount, canUndo, canRedo },
  ] = useUndo(0);
  const { present: presentCount } = countState;
  return (
    <div>
      <nav style={{ display: 'flex', borderBottom: 'solid #000', paddingBottom: '1rem' }}>
        <h2>useUndo</h2>
      </nav>

      <p>
        You clicked
        <>{presentCount}</>
        times
      </p>

      <button key="increment" onClick={() => setCount((presentCount as number) + 1)}>
        +
      </button>
      <button key="decrement" onClick={() => setCount((presentCount as number) - 1)}>
        -
      </button>
      <button key="undo" onClick={undoCount} disabled={!canUndo}>
        undo
      </button>
      <button key="redo" onClick={redoCount} disabled={!canRedo}>
        redo
      </button>
      <button key="reset" onClick={() => resetCount(0)}>
        reset to 0
      </button>
    </div>
  );
};
export default Text2;
