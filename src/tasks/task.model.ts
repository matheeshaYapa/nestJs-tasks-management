export interface Task {
    id: string;
    name: string;
    description: string;
    status: TaskStatuses;
}

export enum TaskStatuses {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}