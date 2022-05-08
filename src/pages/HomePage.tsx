import { DragDropContext } from 'react-beautiful-dnd';
import { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { payerJSON } from '@/data';
import { useDragEnd } from '@/hooks';
import { CardContainer } from '@/components';
import type { IColumnsFromBackendData, ISelection } from '@/models';

// items column
const itemsFromBackend: ISelection[] = payerJSON as any[];

// Structure data columns
const columnsFromBackend: IColumnsFromBackendData = {
  [uuidv4()]: {
    name: 'All Players',
    items: itemsFromBackend,
  },
  [uuidv4()]: {
    name: 'Team 1',
    items: [],
  },
  [uuidv4()]: {
    name: 'Team 2',
    items: [],
  },
  [uuidv4()]: {
    name: 'Team 3',
    items: [],
  },
};

function HomePage(): ReactElement {
  const [columns, setColumns] = useState(columnsFromBackend);

  const { onDragEnd } = useDragEnd();

  return (
    <div className="w-full h-full py-2 flex justify-center items-center flex-col">
      <div className="mt-4">
        <h1 className="text-4xl text-center font-bold uppercase">😎 Drag and Drop</h1>
        <h2 className="text-2xl text-center font-bold uppercase">Multiple Drag</h2>
      </div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        <div className="container mx-auto px-5 gap-5">
          <div className="w-auto mx-auto">
            {Object.entries(columns).map(
              ([columnId, column], index) =>
                index === 0 &&
                columns[columnId] && (
                  <CardContainer key={columnId} columnId={columnId} column={column} direction="horizontal" />
                ),
            )}
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              {Object.entries(columns).map(
                ([columnId, column], index) =>
                  index === 1 &&
                  columns[columnId] && (
                    <CardContainer key={columnId} columnId={columnId} column={column} direction="vertical" />
                  ),
              )}
            </div>
            <div>
              {Object.entries(columns).map(
                ([columnId, column], index) =>
                  index === 2 &&
                  columns[columnId] && (
                    <CardContainer key={columnId} columnId={columnId} column={column} direction="vertical" />
                  ),
              )}
            </div>
            <div>
              {Object.entries(columns).map(
                ([columnId, column], index) =>
                  index === 3 &&
                  columns[columnId] && (
                    <CardContainer key={columnId} columnId={columnId} column={column} direction="vertical" />
                  ),
              )}
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default HomePage;
