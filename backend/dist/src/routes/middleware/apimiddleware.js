"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiMiddleware = apiMiddleware;
const auth_1 = require("../../lib/auth");
const node_1 = require("better-auth/node");
async function apiMiddleware(req, _res, next) {
    try {
        const session = await auth_1.auth.api.getSession({
            headers: (0, node_1.fromNodeHeaders)(req.headers),
        });
        if (session) {
            req.user = session.user;
            req.session = session.session;
        }
    }
    catch {
        // session lookup failed — req.user stays undefined
    }
    next(); // always proceed; routes that need auth check req.user?.id themselves
}
//# sourceMappingURL=apimiddleware.js.map