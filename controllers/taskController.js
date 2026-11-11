
let tasks = [
  {
    id: 1,
    title: "Backend API geliştirme",
    description: "Express.js ile REST API oluşturulacak",
    status: "pending",
    priority: "high",
    assignee: "Eylül"
  },
  {
    id: 2,
    title: "Veritabanı tasarımı",
    description: "Veri modelleri hazırlanacak",
    status: "completed",
    priority: "medium",
    assignee: "Ahmet"
  }
];

// Tüm görevleri listele
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};


const createTask = (req, res) => {
  const { title, description, status, priority, assignee } = req.body;

  const newTask = {
    id: tasks.length > 0
      ? Math.max(...tasks.map(task => task.id)) + 1
      : 1,
    title,
    description,
    status: status || "pending",
    priority,
    assignee
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Görev başarıyla oluşturuldu",
    task: newTask
  });
};


const getTaskById = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  res.status(200).json(task);
};


const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  const { title, description, status, priority, assignee } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  if (priority !== undefined) task.priority = priority;
  if (assignee !== undefined) task.assignee = assignee;

  res.status(200).json({
    message: "Görev başarıyla güncellendi",
    task: task
  });
};


const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  tasks = tasks.filter(task => task.id !== id);

  res.status(200).json({
    message: "Görev başarıyla silindi"
  });
};



module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
deleteTask
};