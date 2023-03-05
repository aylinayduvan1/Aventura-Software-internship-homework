import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const itemsFromBackend = [
  { id: 'item-1', content: 'task 1' },
  { id: 'item-2', content: 'task 2' },
  { id: 'item-3', content: 'task 3' },
  { id: 'item-4', content: 'task 4' },
  { id: 'item-5', content: 'task 5' },
  { id: 'item-6', content: 'task 6' },
];

const columnsFromBackend = {
  'column-1': {
    name: 'To Do',
    items: itemsFromBackend
  },
  'column-2': {
    name: 'Selected For Development ',
    items: []
  },
  'column-3': {
    name: 'In Progress',
    items: []
  },
  'column-4': {
    name: 'Done',
    items: []
  }
};


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

const Board = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}> {/* onDragEnd result işlevini çağırır, sonucu içerir */}
      {Object.entries(columns).map(([columnId, column], index) => {
        return (
          <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:20,
            color: '#204E5F',
          }}
           key={columnId} 
           >
            <h3>{column.name}</h3>
            <div style={{ margin: 8 }}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                    // Bu işlev, bırakılabilir alanda görüntülenecek içeriği döndürür.
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? '#79A7A8': '#204E5F', // Eğer kullanıcı droppable üzerindeyse
                        padding: 20,
                        width: 250,
                        minHeight: 500,
                        borderRadius:5
                      }}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {
                            (provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                // öğenin sürükleme işlemini nasıl gerçekleştireceğini belirler.
                                style={{
                                  userSelect: 'none',
                                  padding:15,
                                  margin: '10px 5px 10px 5px',
                                  minHeight: '50px',
                                  backgroundColor: snapshot.isDragging ? '#B7D7D8': '#B7D7D8',
                                  color: '#204E5F',
                                  fontSize:18,
                                  borderRadius:5,
                                  ...provided.draggableProps.style
                                }}
                              >
                                {item.content}
                              </div>
                            )
                            }
                          </Draggable>
                        );
                      })}
                      {provided.placeholder} 
                      {/* Bu boş yer, öğelerin doğru konumlarına yerleştirilmesini sağlar. */}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          </div>
        );
      })}
    </DragDropContext>
  </div>
  )
}
  export default Board