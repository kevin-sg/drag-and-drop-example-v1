import { useCallback } from 'react';

import type { IDragEndArg, IDragEndCustomHook } from '@/models';

function useDragEnd(): IDragEndCustomHook {
  const onDragEnd = useCallback<IDragEndArg>((result, columns, setColumns) => {
    // check drop content
    if (result.reason !== 'DROP') return;
    // check null
    if (!result.destination || result.destination === null) return;

    const { source, destination } = result;
    // check position of multiple columns
    if (source.droppableId !== destination.droppableId) {
      // search column by source id
      const sourceColumn = columns[source.droppableId];
      // search column by destination id
      const destColumn = columns[destination.droppableId];

      // create copy soruce column items
      const sourceItems = [...sourceColumn.items];
      // create copy destination column items
      const destItems = [...destColumn.items];

      // Remove items dragged
      const [removed] = sourceItems.splice(source.index, 1);
      // mutate current array
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

  return { onDragEnd };
}

export default useDragEnd;
