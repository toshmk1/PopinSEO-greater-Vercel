import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';

// Create Express app without server setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add logging middleware for API requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
  });

  next();
});

// Initialize routes
let routesInitialized = false;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Initialize routes only once
  if (!routesInitialized) {
    await registerRoutes(app);
    
    // Add error handler
    app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
    });
    
    routesInitialized = true;
  }

  // Handle the request with Express app
  return new Promise<void>((resolve) => {
    app(req as any, res as any, () => {
      resolve();
    });
  });
}