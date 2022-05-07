import { Droppable } from 'react-beautiful-dnd';
import type { ReactElement } from 'react';

import { CardPlayer } from '@/components';
import type { ICardContainerProps } from '@/models';

function CardContainer({ columnId, column }: ICardContainerProps): ReactElement {
  return (
    <div className="w-72 mx-auto bg-gray-800 mt-10 rounded-md shadow-lg shadow-gray-800">
      <div className="bg-gray-900 w-full py-2">
        <h2 className="text-2xl text-center font-semibold uppercase">{column.name}</h2>
      </div>
      <Droppable droppableId={columnId} key={columnId}>
        {(droppableProvided, snapshot) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className={`${
              snapshot.isDraggingOver ? 'bg-gray-900' : 'bg-gray-800'
            } h-full  p-5 flex justify-center items-center flex-col`}
          >
            {column.items?.map((item, index: number) => (
              <CardPlayer key={item.id || ''} index={index} {...item} />
            ))}
            {!column.items.length && <p className="text-center font-semibold">Add items</p>}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CardContainer;
