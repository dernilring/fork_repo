
/**
 * Task Management System
 * Simple task manager with priority support
 */

class TaskManager {
  static VALID_PRIORITIES = ['low', 'medium', 'high'];

  constructor() {
    this.tasks = [];
  }

  /**
   * Add a new task with priority level
   * @param {string} title - Task title (required)
   * @param {string} description - Task description (required)
   * @param {string} priority - Priority level (low, medium, high)
   * @returns {Object} The created task
   * @throws {Error} If title or description is empty
   */
  addTask(title, description, priority = 'medium') {
    // Input validation
    if (!title || title.trim() === '') {
      throw new Error('Title is required and cannot be empty');
    }
    if (!description || description.trim() === '') {
      throw new Error('Description is required and cannot be empty');
    }
    if (!TaskManager.VALID_PRIORITIES.includes(priority)) {
      throw new Error(`Priority must be one of ${TaskManager.VALID_PRIORITIES.join(', ')}`);
    }

    const task = {
      id: this.tasks.length + 1,
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false
    };
    this.tasks.push(task);
    return task;
  }

  /**
   * Mark a task as completed
   * @param {number} taskId - ID of the task to complete
   * @returns {Object} The updated task
   * @throws {Error} If task not found
   */
  markAsCompleted(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) {
      throw new Error(`Task with ID ${taskId} not found`);
    }
    task.completed = true;
    return task;
  }
/**
   * Delete a task by ID
   * @param {number} taskId - ID of the task to delete
   * @returns {boolean} True if task was deleted
   * @throws {Error} If task not found
   */
  deleteTask(taskId) {
    const index = this.tasks.findIndex(t => t.id === taskId);
    if (index === -1) {
      throw new Error(`Task with ID ${taskId} not found`);
    }
    this.tasks.splice(index, 1);
    return true;
  }
  /**
   * Get all tasks, optionally filtered by priority
   * @param {string|null} priority - Optional priority filter
   * @returns {Array} Filtered or all tasks
   */
  listTasks(priority = null) {
    if (priority) {
      return this.tasks.filter(task => task.priority === priority);
    }
    return this.tasks;
  }

  /**
   * Get all high priority tasks sorted by ID
   * @returns {Array} High priority tasks
   */
  getHighPriorityTasks() {
    const highPriority = this.listTasks('high');
    return highPriority.sort((a, b) => a.id - b.id);
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TaskManager;
}

// Example usage
if (require.main === module) {
  const manager = new TaskManager();
  console.log('Task Manager initialized successfully');
}
