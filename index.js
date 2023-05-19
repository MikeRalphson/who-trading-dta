const fs = require('node:fs');

const TurndownService = require('turndown')
const turndownPluginGfm = require('turndown-plugin-gfm')
 
const gfm = turndownPluginGfm.gfm;
const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', emDelimeter: '*' });
turndownService.use(gfm);
turndownService.remove('font');

const readOpenPI (version) => fs.readFileSync(process.argv[2],'utf8').split('\r').join('');

const markdown = turndownService.turndown(readOpenAPI);
markdow = markdown.retrieve

fs.writeFileSync(process.argv[2].replace('.html','.htm').replace('.htm','.md'),markdown,'utf8');
