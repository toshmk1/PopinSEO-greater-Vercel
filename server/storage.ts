import { users, type User, type InsertUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private static users: Map<number, User> = new Map();
  private static currentId: number = 1;

  constructor() {
    // Use static properties to persist across function calls in same container
    // Note: In serverless, this will still reset on cold starts
    // For production, use database storage instead
  }

  async getUser(id: number): Promise<User | undefined> {
    return MemStorage.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(MemStorage.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = MemStorage.currentId++;
    const user: User = { ...insertUser, id };
    MemStorage.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
