// types/express/index.d.ts
import { Types } from 'mongoose';

declare global {
  namespace Express {
    interface User {
      id: Types.ObjectId;
    }

    interface Request {
      user: User;
    }
  }
}
