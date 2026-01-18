/**
 * Task Management System
 * Simple task manager with priority support
 */

class TaskManager {
  static VALID_PRIORITIES = ["low", "medium", "high"];

  constructor() {
    this.tasks = [];
  }

  /**
   * Add a new task with priority level
   * @param {string} title - Task title
   * @param {string} description - Task description
   * @param {string} priority - Priority level (low, medium, high)
   * @returns {Object} The created task
   */
  addTask(title, description, priority = "medium") {
    if (!TaskManager.VALID_PRIORITIES.includes(priority)) {
      throw new Error(
        `Priority must be one of ${TaskManager.VALID_PRIORITIES.join(", ")}`,
      );
    }

    const task = {
      id: this.tasks.length + 1,
      title,
      description,
      priority,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  /**
   * Get all tasks, optionally filtered by priority
   * @param {string} priority - Optional priority filter
   * @returns {Array} Filtered or all tasks
   */
  listTasks(priority = null) {
    if (priority) {
      return this.tasks.filter((task) => task.priority === priority);
    }
    return this.tasks;
  }
  /**
   * Get all high priority tasks sorted by ID
   * @returns {Array} High priority tasks
   */
  getHighPriorityTasks() {
    const highPriority = this.listTasks("high");
    return highPriority.sort((a, b) => a.id - b.id);
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = TaskManager;
}

// Example usage
if (require.main === module) {
  const manager = new TaskManager();
  console.log("Task Manager initialized successfully");
}
