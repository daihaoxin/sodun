interface PluginOptions {
	env: string;
	removeMethods?: Array<string | Function>;
	additionalStyleMethods?: { [key: string]: string };
}
interface ConsoleTransformState {
	opts: PluginOptions;
	file: any;
}
