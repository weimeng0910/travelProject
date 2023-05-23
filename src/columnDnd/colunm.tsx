import styled from 'styled-components';
//从 react-beautiful-dnd 导入 droppable 组件，把我们的任务列表放入 droppable， droppable只要求一个prop: droppableId。
import { Droppable, DraggableProvided } from 'react-beautiful-dnd';
import { IColumn, ITask } from './initial-data';
import { Task } from './task';

//定义样式
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;
//定义props类型
interface IXColumn {
  column: IColumn;
  tasks: ITask[];
  provided?: DraggableProvided;
}
/*
 ** 写于<Droppable/>标签中的funtion的框架
 ** - provided参数：提供内部标签所需的props【套路记住即可】
 ** 		1、innerRef:获取ref funtion组件是ref，class组件是innerRef
 **    2、droppableProps: 提供能够放置的props，在function的根结点展开即可{...provided.droppableProps}
 **    3、placeholder: 占位符，放置在function根节点内部的最下面
 ** - snapshot参数：此为快照（让我好容易想到mobx里的快照不知道为什么，但不一样，详见下面解析）
 */

//Colunm组件,可放置组件,Droppable包裹可放置组件
export const Column = (props: IXColumn) => {
  const { column, tasks } = props;
  return (
    <Container>
      <Title>{column.title}</Title>

      {/*  droppable 组件，把我们的任务列表放入 droppable， droppable只要求一个prop: droppableId。
       * 这id要求在 DragDropContext中唯一的。我们要用column的id
       * 每一个组件都有一个droppableId参数，用来标注唯一的放置Id
       */}

      <Droppable droppableId={column.id} type="TASK">
        {/* 函数第一个参数是provided，它是一个对象，有几个重要的存在意义。它有一个为droppableProps而设的属性。
         * 这些props需要应用至你想要作为拖拽区域的组件
         * provided对象中有一个属性叫innerRef，它是一个函数，用来把你组件中的DOM节点给react-beautiful-dnd。
         * 组件函数的第二个参数是snapshot，它包含一系列属性，让你可以在拖动时，添加样式。
         * snapshot里有两个属性。第一个是布尔flagisDragging，当draggable被拖动时，它的值为真。
         * 另一个是draggingOver，当draggable被拖入droppable区域时，它是一个droppable的id。
         * 如果draggable在拖动，没有进入droppable区域时，draggingOver是null。
         */}

        {(provided, snapshot) => (
          // provided参数：提供内部标签所需的props
          //provided对象有一个属性叫 draggableProps，它们要用在需要拖拽的组件，当用户输入时，组件可以作出回应。
          //provided还有另一个属性叫 dragHandleProps。这些props要用在控制拖拽部分，因而使这部分可以控制整个组件。
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* 列组件把prop里的任务用map组成任务组件。map函数的第二个参数是数组的索引。我们把索引传给任务组件。 */}
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}

            {/* styled-component有一个回调prop叫 innerRef，它返回组件的DOM节点。我们可以把provided.innerRef传给它。
             * 最后要做的是在droppable插入占位，provided.placeholder。
             */}
            {provided.placeholder}
            {/* 这时的provided.placeholder是计算拖动后下面的空间 */}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};
