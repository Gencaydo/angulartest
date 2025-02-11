export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: string[];
    statusCode?: number;
    timestamp?: string;
} 