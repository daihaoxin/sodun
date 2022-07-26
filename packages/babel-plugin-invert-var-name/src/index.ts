import { PluginObj } from '@babel/core';
import u from '@/uu';
console.log(__dirname);
export default function (): PluginObj<ConsoleTransformState> {
  return {
    name: 'invert-var-name',
    visitor: {
      Identifier(path: { node: { name: any } }, source: any) {
        const name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      },
    },
  };
}
