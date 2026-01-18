/**
 * Task Management System
 * Simple task manager with priority support
 */

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  /**
   * Add a new task to the list
   * @param {string} title - Task title
   * @param {string} description - Task description
   * @returns {Object} The created task
   */
  addTask(title, description) {
    const task = {
      id: this.tasks.length + 1,
      title,
      description,
      completed: false
    };
    this.tasks.push(task);
    return task;
  }

  /**
   * Get all tasks
   * @returns {Array} All tasks
   */
  listTasks() {
    return this.tasks;
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