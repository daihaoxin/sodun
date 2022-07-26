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
            ImportDeclaration: {
                // 创建访问者时你实际上有两次机会来访问一个节点
                // 进入
                enter(path, source) {
                    console.log("Entered!");
                },
                //退出
                exit(path, source) {
                    console.log("Exited!");
                },
            },
            FunctionDeclaration(path, source) {
                //todo
            },
            // 如有必要，你还可以把方法名用|分割成Idenfifier |MemberExpression形式的字符串，把同一个函数应用到多种访问节点。
            "ExportNamedDeclaration|Flow"(path) {
            },
            // Function is an alias for FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ObjectMethod and ClassMethod.
            Function(path) {
            },
        },
    };
};
