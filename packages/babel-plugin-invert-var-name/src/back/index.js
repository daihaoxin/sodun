module.exports=function({ types: t }) {
    return {
        visitor: {
            
            Identifier(path, source) {
                const name = path.node.name;
                // reverse the name: JavaScript -> tpircSavaJ
                path.node.name = name
                    .split("")
                    .reverse()
                    .join("");
            },
            ImportDeclaration:{
                // 创建访问者时你实际上有两次机会来访问一个节点
                // 进入
                enter(path, source) {
                    console.log("Entered!");
                },
                //退出
                exit(path, source) {
                    console.log("Exited!");
                }
            },
            FunctionDeclaration(path, source){
                //todo
            },
            // 如有必要，你还可以把方法名用|分割成Idenfifier |MemberExpression形式的字符串，把同一个函数应用到多种访问节点。
            "ExportNamedDeclaration|Flow"(path) {},
            // Function is an alias for FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ObjectMethod and ClassMethod.
            Function(path) {}
        },
    };
}
