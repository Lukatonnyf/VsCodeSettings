"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.register(cors_1.default);
        yield app.register(routes_1.routes);
        const port = parseInt(process.env.PORT || '3000'); // Render usa process.env.PORT
        const host = '0.0.0.0'; // Importante!
        yield app.listen({ port, host });
        console.log(`🚀 Server running at http://${host}:${port}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
});
start();
