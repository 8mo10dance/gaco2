import TaskListContainer from "./containers/TaskList";

export default function Page() {
  return (
    <>
      <h1>タスク管理</h1>
      <main>
        <TaskListContainer />
      </main>
    </>
  );
}
