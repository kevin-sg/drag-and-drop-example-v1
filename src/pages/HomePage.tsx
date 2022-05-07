import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ReactElement, useCallback, useState } from 'react';

import { payerJSON } from '@/data';
import { CardContainer } from '@/components';
import type { IListSelectionState, ISelection } from '@/models';

function HomePage(): ReactElement {
  const [listSelection, setListSelection] = useState(shortListPlayer(payerJSON));

  // reduce list
  function shortListPlayer(items: any[]): IListSelectionState {
    const listPlayer = items.map(({ id, ...el }) => ({ id: `${id}`.trim(), ...el }));
    return { team: [...listPlayer].slice(0, 3) };
  }

  // update state
  const reorderDragDrop = (list: any[], startIndex: number, endIndex: number): ISelection[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = useCallback(({ source, destination, reason }: DropResult) => {
    // check drop content
    if (reason !== 'DROP') return;
    // check null
    if (!destination) return;
    // check same position & check position of multiple columns
    if (source.index === destination.index && source.droppableId === destination.droppableId) return;

    // update state
    setListSelection((prev) => ({
      ...prev,
      team: reorderDragDrop(prev.team, source.index, destination.index),
    }));
  }, []);

  return (
    <div className="w-full h-full py-2 flex justify-center items-center flex-col">
      <div className="mt-4">
        <h1 className="text-4xl text-center font-bold uppercase">😎 Drag and Drop</h1>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-4/5 flex justify-between items-center">
          <CardContainer team={listSelection.team} id="team" />
        </div>
      </DragDropContext>
    </div>
  );
}

export default HomePage;
