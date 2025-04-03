const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// 通用输入校验函数
function validateTwoNumbers(req, res) {
    const { num1, num2 } = req.query;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ success: false, error: "Both num1 and num2 are required." });
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ success: false, error: "Both num1 and num2 must be valid numbers." });
    }

    return { num1: n1, num2: n2 };
}

function validateOneNumber(req, res) {
    const { num1 } = req.query;

    if (num1 === undefined) {
        return res.status(400).json({ success: false, error: "num1 is required." });
    }

    const n1 = parseFloat(num1);
    if (isNaN(n1)) {
        return res.status(400).json({ success: false, error: "num1 must be a valid number." });
    }

    return n1;
}

// 加法
app.get('/add', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        res.json({ success: true, result: inputs.num1 + inputs.num2 });
    }
});

// 减法
app.get('/subtract', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        res.json({ success: true, result: inputs.num1 - inputs.num2 });
    }
});

// 乘法
app.get('/multiply', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        res.json({ success: true, result: inputs.num1 * inputs.num2 });
    }
});

// 除法
app.get('/divide', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        if (inputs.num2 === 0) {
            res.status(400).json({ success: false, error: "Cannot divide by zero." });
        } else {
            res.json({ success: true, result: inputs.num1 / inputs.num2 });
        }
    }
});

// 幂运算
app.get('/power', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        res.json({ success: true, result: Math.pow(inputs.num1, inputs.num2) });
    }
});

// 取余
app.get('/modulo', (req, res) => {
    const inputs = validateTwoNumbers(req, res);
    if (inputs.num1 !== undefined) {
        if (inputs.num2 === 0) {
            res.status(400).json({ success: false, error: "Cannot modulo by zero." });
        } else {
            res.json({ success: true, result: inputs.num1 % inputs.num2 });
        }
    }
});

// 平方根
app.get('/sqrt', (req, res) => {
    const num1 = validateOneNumber(req, res);
    if (typeof num1 === 'number') {
        if (num1 < 0) {
            res.status(400).json({ success: false, error: "Cannot take square root of negative number." });
        } else {
            res.json({ success: true, result: Math.sqrt(num1) });
        }
    }
});

// 启动服务
app.listen(port, () => {
    console.log(`Enhanced calculator running at http://localhost:${port}`);
});
