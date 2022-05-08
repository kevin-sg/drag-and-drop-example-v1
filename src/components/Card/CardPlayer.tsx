import type { ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import type { ICardPlayerProps } from '@/models';

function CardPlayer({ index, ...props }: ICardPlayerProps): ReactElement {
  return (
    <Draggable draggableId={`${props.id}`} index={index}>
      {(draggableProvided, snapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          className="w-44 h-60 flex justify-center items-center m-2"
        >
          <div
            className={`${
              snapshot.isDragging ? 'bg-gray-900' : 'bg-gray-900'
            } w-full h-full rounded-lg border-2 bg-gray-900 border-gray-700 hover:bg-gray-900 shadow-md shadow-gray-800 z-20`}
          >
            <div className="w-full flex flex-col justify-center items-center py-2">
              <img className="my-3 w-24 h-24 rounded-full shadow-lg" src={props.photo} alt={props.name} />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">Nationality: {props.nationality}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Height: {props.height}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Age: {props.age}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardPlayer;
