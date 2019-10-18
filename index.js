#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const handlebars = require('handlebars');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const path = require('path');

const VERSION = require('./package.json').version;

program.version(VERSION, '-v, --version');



program.command('ts <name>').action((name) => {
    if (!fs.existsSync(name)) {
        const spinner = ora('正在初始化文件...\n');
        fs.mkdirSync(name);
        try {
            spinner.start();
            spinner.text = '文件写入中...';
            // 写入tsx
            const content = fs.readFileSync(`${__dirname}/react-dva/index.tsx`).toString();
            // const result = handlebars.compile(content);
            fs.writeFileSync(`${name}/index.tsx`, content);

            // 写入less
            fs.writeFileSync(`${name}/index.less`, "");

            // 写入model
            const c = fs.readFileSync(`${__dirname}/react-dva/model.ts`).toString();
            // const r = handlebars.compile(c);
            fs.writeFileSync(`${name}/model.ts`, c);

            spinner.text = '文件写入成功！';
            spinner.succeed();
        } catch (error) {
            spinner.text = '文件写入失败！';
            spinner.fail();
        }
    } else {
        // 错误提示项目已存在，避免覆盖原有项目
        console.log(symbols.error, chalk.red('文件目录已存在!'));
    }
})

program.parse(process.argv);