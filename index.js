#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

const VERSION = require('./package.json').version;

program.version(VERSION, '-v, --version');


// 创建文件夹
program.command('tsdir <name>').action((name) => {
    if (!fs.existsSync(name)) {
        const spinner = ora('正在初始化文件...\n');
        fs.mkdirSync(name);
        try {
            spinner.start();
            spinner.text = '文件写入中...';
            // 写入tsx
            const content = fs.readFileSync(`${__dirname}/react-dva/index.tsx`).toString();
            fs.writeFileSync(`${name}/index.tsx`, content);

            // 写入less
            const less = fs.readFileSync(`${__dirname}/react-dva/index.less`).toString();
            fs.writeFileSync(`${name}/index.less`, less);

            // 写入model
            const model = fs.readFileSync(`${__dirname}/react-dva/model.ts`).toString();
            fs.writeFileSync(`${name}/model.ts`, model);

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

// 创建tsx文件
program.command('tsx <name>').action((name) => {
    if (!fs.existsSync(`${name}.tsx`)) {
        const spinner = ora('正在初始化文件...\n');

        try {
            spinner.start();
            spinner.text = '文件写入中...';
            // 写入tsx
            const content = fs.readFileSync(`${__dirname}/react-dva/index.tsx`).toString();
            fs.writeFileSync(`${name}.tsx`, content);

            spinner.text = '文件写入成功！';
            spinner.succeed();
        } catch (error) {
            spinner.text = '文件写入失败！';
            spinner.fail();
        }
    } else {
        // 错误提示项目已存在，避免覆盖原有项目
        console.log(symbols.error, chalk.red('文件已存在!'));
    }
})

program.parse(process.argv);