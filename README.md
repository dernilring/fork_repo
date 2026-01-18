# Task Management System

A simple yet powerful task management system with priority support.

## Features

-  Create tasks with titles and descriptions
-  Priority levels: low, medium, high
-  Filter tasks by priority
-  Quick access to high-priority tasks
-  Automatic task ID assignment

## Installation
```bash
# Clone the repository
git clone https://github.com/dolgayad13/company_repo.git
cd company_repo 
```

## Usage
```javascript
const TaskManager = require('./src/taskManager');

// Initialize manager
const manager = new TaskManager();

// Add tasks with different priorities
manager.addTask(
  'Fix critical bug',
  'Production issue in payment system',
  'high'
);

manager.addTask(
  'Update documentation',
  'Add API usage examples',
  'medium'
);

manager.addTask(
  'Refactor old code',
  'Clean up deprecated functions',
  'low'
);

// List all tasks
const allTasks = manager.listTasks();

// Get only high priority tasks
const urgent = manager.getHighPriorityTasks();

// Filter by specific priority
const mediumTasks = manager.listTasks('medium');
```

## Priority Levels

- **high**: Urgent tasks requiring immediate attention
- **medium**: Standard priority (default)
- **low**: Tasks that can be deferred

## Development

To run the basic test:
```bash
node src/taskManager.js
```

## API Reference

### `addTask(title, description, priority = 'medium')`
Creates a new task with the specified priority.

### `listTasks(priority = null)`
Returns all tasks, or filters by priority if specified.

### `getHighPriorityTasks()`
Returns all high-priority tasks sorted by ID.