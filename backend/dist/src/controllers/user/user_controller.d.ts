import { Request, Response } from "express";
export declare function getUser(req: Request, res: Response): Promise<void>;
export declare function getPublicProfile(req: Request<{
    userId: string;
}>, res: Response): Promise<void>;
//# sourceMappingURL=user_controller.d.ts.map