
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const FIG_PID: string;
	export const LC_FIG_SET_PARENT: string;
	export const MANPATH: string;
	export const npm_package_devDependencies_prettier: string;
	export const rvm_use_flag: string;
	export const TERM_PROGRAM: string;
	export const rvm_bin_path: string;
	export const FNM_LOGLEVEL: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const rvm_quiet_flag: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const rvm_gemstone_url: string;
	export const npm_package_devDependencies_vite: string;
	export const FIGTERM_SESSION_ID: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const rvm_docs_type: string;
	export const npm_package_scripts_lint: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_package_scripts_dev: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const rvm_hook: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_exports___svelte: string;
	export const npm_config_registry: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const PNPM_HOME: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_config_python: string;
	export const rvm_gemstone_package_file: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_peerDependencies_esm_env: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const rvm_path: string;
	export const npm_package_devDependencies_esm_env: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_eslint: string;
	export const rvm_proxy: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const rvm_ruby_file: string;
	export const npm_package_devDependencies_svelte: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const LSCOLORS: string;
	export const FNM_ARCH: string;
	export const rvm_prefix: string;
	export const rvm_silent_flag: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PATH: string;
	export const rvm_ruby_make: string;
	export const npm_package_devDependencies_type_fest: string;
	export const npm_config_engine_strict: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const TTY: string;
	export const npm_command: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_pub: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const rvm_sdk: string;
	export const npm_package_name: string;
	export const npm_package_svelte: string;
	export const npm_package_types: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const npm_package_exports___types: string;
	export const FNM_MULTISHELL_PATH: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const VSCODE_INJECTION: string;
	export const rvm_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const HOME: string;
	export const SHLVL: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_script_name: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const rvm_ruby_mode: string;
	export const npm_package_typesVersions_____0: string;
	export const HOMEBREW_PREFIX: string;
	export const FNM_DIR: string;
	export const FIG_SET_PARENT: string;
	export const npm_package_exports___default: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
	export const rvm_alias_expanded: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const BUN_INSTALL: string;
	export const rvm_nightly_flag: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const rvm_ruby_make_install: string;
	export const rvm_niceness: string;
	export const npm_package_scripts_build_watch: string;
	export const rvm_ruby_bits: string;
	export const npm_package_files_0: string;
	export const rvm_bin_flag: string;
	export const rvm_only_path_flag: string;
	export const npm_config_init_author_name: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const FIG_TERM: string;
	export const npm_node_execpath: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		FIG_PID: string;
		LC_FIG_SET_PARENT: string;
		MANPATH: string;
		npm_package_devDependencies_prettier: string;
		rvm_use_flag: string;
		TERM_PROGRAM: string;
		rvm_bin_path: string;
		FNM_LOGLEVEL: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		rvm_quiet_flag: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		rvm_gemstone_url: string;
		npm_package_devDependencies_vite: string;
		FIGTERM_SESSION_ID: string;
		FNM_NODE_DIST_MIRROR: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		rvm_docs_type: string;
		npm_package_scripts_lint: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_package_scripts_dev: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		rvm_hook: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_exports___svelte: string;
		npm_config_registry: string;
		FIG_SET_PARENT_CHECK: string;
		PNPM_HOME: string;
		NVM_DIR: string;
		USER: string;
		npm_config_python: string;
		rvm_gemstone_package_file: string;
		npm_package_scripts_check_watch: string;
		npm_package_exports___package_json: string;
		npm_package_peerDependencies_esm_env: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		rvm_path: string;
		npm_package_devDependencies_esm_env: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_eslint: string;
		rvm_proxy: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		PAGER: string;
		rvm_ruby_file: string;
		npm_package_devDependencies_svelte: string;
		FNM_VERSION_FILE_STRATEGY: string;
		LSCOLORS: string;
		FNM_ARCH: string;
		rvm_prefix: string;
		rvm_silent_flag: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PATH: string;
		rvm_ruby_make: string;
		npm_package_devDependencies_type_fest: string;
		npm_config_engine_strict: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		PWD: string;
		TTY: string;
		npm_command: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_pub: string;
		npm_lifecycle_event: string;
		LANG: string;
		rvm_sdk: string;
		npm_package_name: string;
		npm_package_svelte: string;
		npm_package_types: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		npm_package_exports___types: string;
		FNM_MULTISHELL_PATH: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		VSCODE_INJECTION: string;
		rvm_version: string;
		npm_package_devDependencies_svelte_check: string;
		HOME: string;
		SHLVL: string;
		rvm_pretty_print_flag: string;
		rvm_script_name: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		rvm_ruby_mode: string;
		npm_package_typesVersions_____0: string;
		HOMEBREW_PREFIX: string;
		FNM_DIR: string;
		FIG_SET_PARENT: string;
		npm_package_exports___default: string;
		LESS: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
		rvm_alias_expanded: string;
		npm_package_peerDependencies_svelte: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		BUN_INSTALL: string;
		rvm_nightly_flag: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		rvm_ruby_make_install: string;
		rvm_niceness: string;
		npm_package_scripts_build_watch: string;
		rvm_ruby_bits: string;
		npm_package_files_0: string;
		rvm_bin_flag: string;
		rvm_only_path_flag: string;
		npm_config_init_author_name: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		FIG_TERM: string;
		npm_node_execpath: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
