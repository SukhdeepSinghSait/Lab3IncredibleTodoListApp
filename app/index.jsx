import { View, Text } from 'react-native';
import { useState } from 'react';
import ToDoList from '../components/ToDoList.jsx';
import ToDoForm from '../components/ToDoForm.jsx';

const Index = () => {
  const [tasks, setTasks] = useState(
    [
    'Do laundry',
    'Go to gym',
    'Walk dog'
    ]);
  return (
    <View>
        <ToDoList tasks={tasks} />
        <ToDoForm />
    </View>
  )
}


export default Index;