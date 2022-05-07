import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ReactElement, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CardContainer } from '@/components';
import type { IColumnsFromBackendData, ItemsFromBackendData } from '@/models';

const itemsFromBackend: ItemsFromBackendData[] = [
  { id: uuidv4(), content: 'First task' },
  { id: uuidv4(), content: 'Second task' },
  { id: uuidv4(), content: 'Third task' },
  { id: uuidv4(), content: 'Fourth task' },
  { id: uuidv4(), content: 'Fifth task' },
];

const columnsFromBackend: IColumnsFromBackendData = {
  [uuidv4()]: {
    name: 'Requested',
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: 'To do',
    items: [],
  },
  [uuidv4()]: {
    name: 'In Progress',
    items: [],
  },
  [uuidv4()]: {
    name: 'Done',
    items: [],
  },
};

function HomePage(): ReactElement {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = useCallback((result: DropResult, columns: IColumnsFromBackendData, setColumns: Function) => {
    // check drop content
    if (result.reason !== 'DROP') return;
    // check null
    if (!result.destination) return;

    const { source, destination } = result;
    // check position of multiple columns
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      // update state
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiesItems = [...column.items];
      const [removed] = copiesItems.splice(source.index, 1);
      copiesItems.splice(destination.index, 0, removed);

      // update state
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiesItems,
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-full py-2 flex justify-center items-center flex-col">
      <div className="mt-4">
        <h1 className="text-4xl text-center font-bold uppercase">😎 Drag and Drop</h1>
        <h2 className="text-2xl text-center font-bold uppercase">Multiple Drag</h2>
      </div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        <div className="w-4/5 flex justify-between items-start gap-5">
          {Object.entries(columns).map(([columnId, column], index) => (
            <CardContainer key={columnId} columnId={columnId} column={column} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default HomePage;
