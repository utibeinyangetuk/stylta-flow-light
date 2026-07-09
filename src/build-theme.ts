type TokenColor = {
	scope: string | string[];
	settings: {
		foreground?: string;
		fontStyle?: 'italic' | 'bold' | 'underline' | '';
	};
};
type semanticTokenColor = {
	rules: Record<string, string>;
};
type VscodeTheme = {
	$schema: string;
	name: string;
	type: 'dark' | 'light';
	semanticHighlighting: boolean;
	semanticTokenColors?: semanticTokenColor;
	colors: Record<string, string>;
	tokenColors: TokenColor[];
};
const colors = {
	background: '#F7F8FA',
	selection: '#E4E7EE',
	dropBackground: '#DBEAFE',
	transparent: '#00000000',
	border: {
		pry: '#D8DEE9',
		sec: '#E5E7EB',
		active: '#2563EB',
	},
	text: {
		foreground: '#1F2937',
		secondary: '#4B5563',
		muted: '#6B7280',
		disabled: '#9CA3AF',
	},
	accent: '#2563EB',
	button: {
		background: '#2563EB',
		hover: '#1D4ED8',
	},
	git: {
		added: '#16A34A',
		modified: '#2563EB',
		conflicting: '#DC2626',
		stageModified: '#0891B2',
		deleted: '#DC2626',
		stageDeleted: '#EA580C',
		untracked: '#16A34A',
		ignored: '#9CA3AF',
		submodule: '#7C3AED',
	},
	error: {
		foreground: '#DC2626',
		background: '#FEF2F2',
		border: '#FCA5A5',
	},

	warning: {
		foreground: '#D97706',
		background: '#FFFBEB',
		border: '#FCD34D',
	},

	success: {
		foreground: '#16A34A',
		background: '#F0FDF4',
		border: '#86EFAC',
	},

	info: {
		foreground: '#2563EB',
		background: '#EFF6FF',
		border: '#93C5FD',
	},

	hover: {
		default: '#EBEEF5',
		active: '#E4E7EE',
	},

	stickyScroll: {
		background: '#FFFFFF',
		shadow: '#00000014',
		hover: '#F3F4F6',
	},
};

const LightTheme: VscodeTheme = {
	$schema: 'vscode://schemas/color-theme',
	name: 'Stylta Flow Light',
	type: 'light',
	semanticHighlighting: true,
	colors: {
		//Backgrounds
		'editor.background': colors.background,
	},
	semanticTokenColors: {
		rules: {
			'variable.defaultLibrary': '#7C3AED',
			operatorOverload: '#0891B2',
			memberOperatorOverload: '#0891B2',
			'variable.defaultLibrary:javascript': '#7C3AED',
			'property.defaultLibrary:javascript': '#7C3AED',
			'variable.defaultLibrary:javascriptreact': '#7C3AED',
			'property.defaultLibrary:javascriptreact': '#7C3AED',
			'class:typescript': '#D97706',
			'interface:typescript': '#D97706',
			'enum:typescript': '#EA580C',
			'enumMember:typescript': '#EA580C',
			'namespace:typescript': '#2563EB',
			'property.defaultLibrary:typescript': '#7C3AED',
			'class:typescriptreact': '#D97706',
			'interface:typescriptreact': '#D97706',
			'enum:typescriptreact': '#EA580C',
			'enumMember:typescriptreact': '#EA580C',
			'namespace:typescriptreact': '#2563EB',
			'variable.defaultLibrary:typescriptreact': '#7C3AED',
			'property.defaultLibrary:typescriptreact': '#7C3AED',
			'intrinsic:python': '#7C3AED',
			'module:python': '#2563EB',
			'class:python': '#D97706',
			'macro:rust': '#2563EB',
			'namespace:rust': '#2563EB',
			'selfKeyword:rust': '#DC2626',
			function: '#2563EB',
			method: '#2563EB',
			variable: '#1F2937',
			parameter: '#4B5563',
			property: '#0891B2',
			keyword: '#7C3AED',
			string: '#2F855A',
			number: '#EA580C',
			typeParameter: '#D97706',
			'property:jsx': '#0891B2',
			'parameter:jsx': '#4B5563',
			'class:jsx': '#D97706',
			type: '#D97706',
			decorator: '#7C3AED',
			label: '#2563EB',
			regexp: '#2F855A',
			operator: '#7C3AED',
		},
	},
	tokenColors: [
		//  EMBEDDED LANGUAGES
		{
			scope: ['meta.embedded.block.html', 'meta.embedded.block.javascript', 'meta.embedded.block.css'],
			settings: {
				foreground: '#1F2937',
			},
		},
		{
			scope: ['source.css.embedded.html', 'source.js.embedded.html', 'source.js.embedded.vue', 'source.ts.embedded.vue'],
			settings: {
				foreground: '#1F2937',
			},
		},
		{
			scope: ['source.css.embedded.html', 'source.js.embedded.html', 'source.js.embedded.vue', 'source.ts.embedded.vue'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.heading', 'markup.bold', 'markup.italic', 'markup.strikethrough', 'markup.underline'],
			settings: {
				foreground: '#D97706',
				fontStyle: 'bold',
			},
		},
		//  MARKDOWN
		{
			scope: ['markup.quote', 'markup.raw', 'markup.raw.block.fenced', 'markup.link', 'markup.list'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.code', 'markup.inline.raw'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.operator.type.ts', 'keyword.other.type.ts', 'entity.name.type.interface.ts', 'storage.type.ts', 'storage.type.js'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.flow.python', 'keyword.control.import.python', 'storage.type.python'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters.python'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['storage.type.c', 'storage.type.cpp', 'storage.type.cs', 'storage.type.go', 'storage.type.java', 'storage.type.rust'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.c', 'keyword.control.cpp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.sql', 'keyword.other.DCL.sql'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.function.builtin.sql'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// LANGUAGE SPECIFIC OVERRIDES
		{
			scope: ['keyword.operator.type.ts', 'keyword.other.type.ts', 'entity.name.type.interface.ts', 'storage.type.ts', 'storage.type.js'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.flow.python', 'keyword.control.import.python', 'storage.type.python'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters.python'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['storage.type.c', 'storage.type.cpp', 'storage.type.cs', 'storage.type.go', 'storage.type.java', 'storage.type.rust'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.control.c', 'keyword.control.cpp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.DML.sql', 'keyword.other.DDL.sql', 'keyword.other.DCL.sql'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.function.builtin.sql'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// DIFF / GIT
		{
			scope: ['markup.deleted.diff'],
			settings: {
				foreground: '#DC2626',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.inserted.diff'],
			settings: {
				foreground: '#16A34A',
				fontStyle: '',
			},
		},
		{
			scope: ['markup.changed.diff'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		// HTML / CSS / PUG / VUE / SVELTE
		{
			scope: ['entity.name.tag', 'entity.name.tag.html', 'entity.name.tag.pug', 'entity.name.tag.vue', 'entity.name.tag.svelte', 'meta.tag'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['entity.other.attribute-name', 'entity.other.attribute-name.id', 'entity.other.attribute-name.class', 'keyword.attribute.pug'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.other.pug', 'keyword.other.at-rule', 'keyword.other.important'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['support.type.property-name.css', 'meta.property-name.css'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['constant.other.color.rgb-value', 'constant.other.color.hex'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		//JSON / YAML / TOML
		{
			scope: ['support.type.property-name.json', 'meta.object-literal.key', 'entity.name.tag.yaml', 'constant.other.anchor.yaml', 'entity.name.tag.reference.yaml', 'entity.name.section.toml', 'entity.name.key.toml'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		// REGEX
		{
			scope: ['string.regexp'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['string.regexp.character-class', 'constant.other.character-class.regexp'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['string.regexp.group'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['keyword.operator.regexp'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		//  FUNCTIONS
		{
			scope: ['entity.name.function', 'support.function', 'support.function.builtin', 'support.function.construct', 'meta.function-call', 'meta.function'],
			settings: {
				foreground: '#2563EB',
				fontStyle: '',
			},
		},
		{
			scope: ['entity.name.function.decorator'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		{
			scope: ['meta.function.parameters'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		// TYPES + CLASSES + INTERFACES + ENUMS
		{
			scope: ['entity.name.class', 'support.class'],
			settings: {
				foreground: '#D97706',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['entity.name.type', 'entity.name.interface', 'entity.name.enum', 'support.type'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		// KEYWORDS + CONTROL FLOW + STORAGE + MODULES
		{
			scope: ['keyword.operator', 'keyword.operator.assignment', 'keyword.operator.logical', 'keyword.operator.comparison'],
			settings: {
				foreground: '#0891B2',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['keyword', 'keyword.control', 'keyword.control.flow', 'keyword.control.import', 'keyword.control.export', 'storage', 'storage.type', 'storage.modifier'],
			settings: {
				foreground: '#7C3AED',
				fontStyle: '',
			},
		},
		// LANGUAGE CONSTANTS: this, self, super, true, false, null
		{
			scope: ['variable.language', 'variable.language.this', 'variable.language.super', 'variable.language.self', 'variable.language.special', 'constant.language', 'constant.language.boolean', 'constant.language.null', 'constant.language.undefined'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		// LITERALS: STRINGS
		{
			scope: ['string', 'string.quoted', 'string.quoted.double', 'string.quoted.single', 'string.quoted.triple', 'string.template', 'meta.string', 'meta.string.contents'],
			settings: {
				foreground: '#2F855A',
				fontStyle: '',
			},
		},
		{
			scope: ['string.template.punctuation', 'constant.other.placeholder'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		// LITERALS: NUMBERS + CONSTANTS
		{
			scope: ['constant.numeric', 'constant.character'],
			settings: {
				foreground: '#EA580C',
				fontStyle: '',
			},
		},
		{
			scope: ['constant.other', 'support.constant'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		// COMMENTS
		{
			scope: ['comment', 'comment.line', 'comment.block', 'comment.block.documentation', 'punctuation.definition.comment'],
			settings: {
				foreground: '#6B7280',
				fontStyle: 'italic',
			},
		},
		// VARIABLES + PARAMETERS + PROPERTIES
		{
			scope: ['variable', 'variable.other', 'variable.other.readwrite', 'entity.name.variable', 'support.variable'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
		{
			scope: ['variable.parameter'],
			settings: {
				foreground: '#4B5563',
				fontStyle: '',
			},
		},
		{
			scope: ['variable.other.property', 'meta.property-name'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.definition.parameters.begin', 'punctuation.definition.parameters.end', 'punctuation.section.brackets', 'punctuation.section.brackets.begin', 'punctuation.section.brackets.end', 'meta.brace', 'meta.bracket', 'meta.paren'],
			settings: {
				foreground: '#6B7280',
				fontStyle: 'bold',
			},
		},
		{
			scope: ['punctuation.accessor', 'punctuation.separator.method'],
			settings: {
				foreground: '#0891B2',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.separator.comma', 'punctuation.separator.key-value', 'punctuation.separator.parameter'],
			settings: {
				foreground: '#6B7280',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.terminator', 'punctuation.separator.statement'],
			settings: {
				foreground: '#9CA3AF',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end'],
			settings: {
				foreground: '#D97706',
				fontStyle: '',
			},
		},
		{
			scope: ['punctuation'],
			settings: {
				foreground: '#6B7280',
				fontStyle: '',
			},
		},
		// CATCH-ALL DEFAULT
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {
				foreground: '#DC2626',
				fontStyle: '',
			},
		},
		{
			scope: ['source'],
			settings: {
				foreground: '#1F2937',
				fontStyle: '',
			},
		},
	],
};

// write to JSON file
import * as fs from 'node:fs';
fs.writeFileSync('themes/Stylta-Flow-Light.json', JSON.stringify(LightTheme, null, 2));
console.log('---Theme generated---');
