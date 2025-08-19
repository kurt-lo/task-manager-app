// GET - Read data (no body needed)
export const getTasks = async () => {
  const response = await axios.get("/api/tasks");
  return response.data;
};
// POST - Create data (body contains new data)
export const createTask = async (newTask) => {
  const response = await axios.post("/api/tasks", newTask);
  return response.data;
};
// PUT - Update data (body contains updated data)
export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`/api/tasks/${id}`, updatedTask);
  return response.data;
};
// DELETE - Remove data (no body needed)
export const deleteTask = async (id) => {
  await axios.delete(`/api/tasks/${id}`);
};

export const getCompletedTasks = async (iscompleted) => {
  await axios.get(`/api/tasks/search?searh=${iscompleted}`);
};
