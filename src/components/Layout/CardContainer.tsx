import { Droppable } from 'react-beautiful-dnd';

import { CardPlayer } from '@/components';
import type { ICardContainerProps } from '@/models';

function CardContainer({ id, team }: ICardContainerProps): React.ReactElement {
  return (
    <div className="w-72 mx-auto pb-5 bg-gray-800 my-10 rounded-md shadow-lg shadow-gray-800">
      <div className="bg-gray-900 w-full py-2">
        <h2 className="text-2xl text-center font-semibold uppercase">{id}</h2>
      </div>
      <Droppable droppableId={id} key={id}>
        {(droppableProvided, snapshot) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className={`${
              snapshot.isDraggingOver ? 'bg-gray-900' : 'bg-gray-800'
            } w-full py-5 flex justify-evenly items-center flex-col`}
          >
            {team?.map((player, index) => (
              <CardPlayer key={player.id} index={index} {...player} />
            ))}

            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default CardContainer;
