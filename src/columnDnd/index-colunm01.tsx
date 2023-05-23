import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './initial-data';
import { Column } from './colunm';
//样式
const Container = styled.div`
  display: flex;
`;
interface Column {
  title: string;
  id: string;
  taskIds: string[];
}
export const ColumnDnd = () => {
  //导入初始数据，它是我们渲染应用的基础。我们把初始状态 state 设定为初始数据，而应用的负责是渲染列：
  const [state, setState] = useState(initialData);
  /*
   ** 利用 onDragEnd 回调持久化列表排序
   ** 要实现效果，你将实现 onDragEnd 回调函数，它会在每次拖拽结束时调用
   ** 函数接收一个result对象
   ** 我们会使用source和destination属性来更收任务列表的顺序
   */
  const onDragEnd = (res: DropResult) => {
    //result有draggableId，它是用户拖动的元素id。它有类型属性,它会是放下或取消。
    //source和destination对象,这些对象含有位置信息，拖动的开始和结束位置
    const { destination, source, draggableId } = res;
    //***如果没有拖动直接结束
    //如果没有destination，没有什么需要做，我们可以直接退出。
    if (!destination) {
      return;
    }
    //***如果拖动列没有改变并且顺序没有改变直接结束
    //增加一些小检查，去校验拖动位置的变更。通过检查source和destination的draggableId，
    //还有它们的索引是否是一致，可以实现效果。如果两个校验都为真，表示用户把拖动项目放回原来位置，什么都不用做了。
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    //重新排序列的taskIds数组，我们先获取状态中的列。我已经从source中获取droppable的id来查询状态中的列。
    //可以直接用column-1来获取列，因为我知道只有一列，但用source.droppableId会使程序更健壮。
    //如果用column-1的话，我日后改初始数据，idcolumn-1也要改了。
    const column = state.columns[source.droppableId];
    //更新时，一般避免改变原有的状态，而是複製一个新对象，然后改变它。
    const newTaskIds = Array.from(column.taskIds);
    //需要把taskIds数组里的旧索引移到新索引。splice可以做什么？它会把指定索引的元素移除。
    newTaskIds.splice(source.index, 1);
    //要用多一次splice。这次要利用destination的索引，但我们什么都不删除，
    //而是插入draggableId，即task的id。排序数组有不同的方法，这只是其中之一。
    newTaskIds.splice(destination.index, 0, draggableId);

    //创造新列。它与旧列有相同属性，只是有新的数组。我们要把它放入状态。
    const newColumn: Column = {
      ...column,
      taskIds: newTaskIds,
    };
    //使用对象展开，一方面维护原来的状态，另一方面合并掉需要改变的属性。
    //插入新列，它会覆盖原有的列。技术上来说，我们不需要展开，因为我们只有一列，但我觉得这样做不错。
    //调用setState，它会更新react组件。回到任务列表，我们可以说排序持久化完成。
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };
  /*
   *DragDropContext，它是一个组件，用来包住我们需要拖拽应用部分
   *DragDropContext 只有 onDragEnd是必须传入。这是你的onDragEnd函数的负责去同步更新你的状态
   *DragDropContext组件有三个回调。onDragStart在拖拽发生时调用。onDragUpdate在拖拽发生变化时调用，例如某项目移到新位置。 onDragEnd 在拖拽结束时调用。
   */
  //增加组件叫Container，它会包裹我们的列。它是一个flex父元素，使子元素并排。然而，to do列比其他要宽。
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map(columnId => {
          //列的数据，它用来存放项目中的列。我们用 id 作为键来查询列。它是我们的 to-do 列表。
          const column = state.columns[columnId];
          //tasks的数据，tasks 对象拥有我们系统的任务。它用任务的 id 作为键，用来查询任务对象。
          //任务对象 task有 id，任务内容 content如 "take out the garbage."。
          const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
          //向子组件colum中透传数据
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};
