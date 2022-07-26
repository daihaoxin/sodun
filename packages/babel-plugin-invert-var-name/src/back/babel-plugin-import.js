module.exports = function (babel) {
    // AST模块
    const { types: t } = babel;
    const imports = {};
    // 如果你有自己的模块组织方式，用这里把模块名和路径记录下来。
    const moduleRoot = ''; // 你其他的自定义变量
    
    return {
        visitor: {
            ImportDeclaration(path, source) {
                
                //取出参数
                const { opts: { libraryName, libraryDirectory = 'lib', style = "css" } } = source;
                //拿到老的AST节点
                let node = path.node;
                
                if (node.source.value !== libraryName) {
                    return;
                }
                //创建一个数组存入新生成AST
                let newImports = [];
                //构造新节点
                path.node.specifiers.forEach(item => {
                    newImports.push(t.importDeclaration([t.importDefaultSpecifier(item.local)], t.stringLiteral(`${ libraryName }/${ libraryDirectory }/${ item.local.name }`)));
                    newImports.push(t.importDeclaration([], t.stringLiteral(`${ libraryName }/${ libraryDirectory }/style.${ style }`)));
                });
                //替换原节点
                path.replaceWithMultiple(newImports);
            },
        },
    };
};
