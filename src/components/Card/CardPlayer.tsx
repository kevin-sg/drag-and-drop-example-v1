import type { ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import type { ICardPlayerProps } from '@/models';

function CardPlayer({ index, ...props }: ICardPlayerProps): ReactElement {
  return (
    <Draggable draggableId={props.id} index={index}>
      {(draggableProvided, snapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          className={'my-2 flex justify-center items-center'}
        >
          <div
            className={`${
              snapshot.isDragging ? 'bg-gray-900' : 'bg-gray-800'
            } w-36 rounded-lg border border-gray-700 hover:bg-gray-900 shadow-md shadow-gray-800`}
          >
            <p className="p-2 text-center">{props.content}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardPlayer;
