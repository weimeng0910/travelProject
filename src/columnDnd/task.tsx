import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ITask } from './initial-data';

//定义类型
interface TaskProps {
  index: number;
  task: ITask;
}
//定义样式
const Container = styled.div<{ isDragging: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;
//任务组件，使它可拖拽,用 draggable组件来包裹容器组件。
//<Draggable/>的子函数接收provided对象，它有一个属性叫dragHandleProps。
//dragHandleProps这属性让我们可以指定<Draagable/>哪一部分可以控制拖动
export const Task = ({ task, index }: TaskProps) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <h4>{task.content}</h4>
        </Container>
      )}
    </Draggable>
  );
};
