"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.APP_PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// serve static
app.use(express_1.default.static('./client/dist/'));
app.get('*', (req, res) => { res.sendFile('./client/dist/index.html'); });
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
//# sourceMappingURL=index.js.map