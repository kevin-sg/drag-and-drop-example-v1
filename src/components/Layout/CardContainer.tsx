import { Droppable } from 'react-beautiful-dnd';
import type { ReactElement } from 'react';

import { CardPlayer } from '@/components';
import type { ICardContainerProps } from '@/models';

function CardContainer({ columnId, column, direction }: ICardContainerProps): ReactElement {
  return (
    <div
      className={`${direction === 'vertical' ? 'w-60' : 'w- mx-auto'} ${
        !column.items.length ? 'w-64' : ''
      } mx-auto  overflow-hidden bg-gray-800 mt-10 rounded-md shadow-lg shadow-gray-800`}
    >
      <div className="w-auto">
        <div className="bg-gray-900 py-2">
          <h2 className="text-2xl text-center font-semibold uppercase">{column.name}</h2>
        </div>
        <div className="bg-slate-700 py-2">
          <h3 className="text-lg text-center font-semibold uppercase">Total: {column.items.length}</h3>
        </div>
      </div>
      <Droppable droppableId={columnId} key={columnId} direction={direction} type={'column'}>
        {(droppableProvided, snapshot) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className={`${snapshot.isDraggingOver ? 'bg-gray-900' : 'bg-gray-800'} flex p-5 ${
              direction === 'vertical' ? 'flex-col' : 'mx-auto overflow-x-auto'
            } ${column.items.length && 'w-auto mx-auto relative'}`}
          >
            {column.items?.map((item, index) => (
              <div key={item.id || ''} className="w-48 mx-auto flex justify-center items-center relative">
                <CardPlayer index={index} {...item} />

                <div className="w-44 h-60 m-2 flex justify-center items-center absolute inset-0 z-10 border-dashed border-2 border-sky-500 rounded-lg">
                  <span className="text-xl text-sky-500 font-semibold uppercase">Drop</span>
                </div>
              </div>
            ))}

            {!column.items.length && (
              <div className="w-48 h-60 mb-5 mx-auto flex justify-center items-center relative">
                <div className="w-44 h-60 m-2 flex justify-center items-center absolute inset-0 z-10 border-dashed border-2 border-sky-500 rounded-lg">
                  <span className="text-xl text-sky-500 font-semibold uppercase">Drop</span>
                </div>
              </div>
            )}

            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CardContainer;
