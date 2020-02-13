import { Injectable } from '@nestjs/common';
import { Task, TaskStatuses } from './task.model';
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {

        const {name, description} = createTaskDto;
        
        const task: Task = {
            id: uuid(),
            name,
            description,
            status: TaskStatuses.OPEN
        };
        
        this.tasks.push(task);
        
        return task;
    }

    updateTask(id: string, status: TaskStatuses): Task {
        let taskToBeUpdated: Task = this.getTaskById(id);
        taskToBeUpdated.status = status;
        return taskToBeUpdated;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
