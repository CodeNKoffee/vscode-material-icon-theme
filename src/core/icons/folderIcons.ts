import type { FolderTheme } from '../models/icons/folders/folderTheme';
import { IconPack } from '../models/icons/iconPack';

/**
 * Defines folder icons
 */
export const folderIcons: FolderTheme[] = [
  {
    name: 'specific',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
    icons: [
      {
        name: 'folder-robot',
        folderNames: ['bot', 'bots', 'robot', 'robots'],
      },
      {
        name: 'folder-src',
        folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
      },
      {
        name: 'folder-dist',
        folderNames: [
          'dist',
          'out',
          'output',
          'build',
          'builds',
          'release',
          'bin',
          'distribution',
        ],
      },
      {
        name: 'folder-css',
        folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles'],
      },
      { name: 'folder-sass', folderNames: ['sass', 'scss'] },
      { name: 'folder-television', folderNames: ['tv', 'television'] },
      { name: 'folder-desktop', folderNames: ['desktop', 'display'] },
      { name: 'folder-console', folderNames: ['console'] },
      {
        name: 'folder-images',
        folderNames: [
          'images',
          'image',
          'imgs',
          'img',
          'icons',
          'icon',
          'icos',
          'ico',
          'figures',
          'figure',
          'figs',
          'fig',
          'screenshot',
          'screenshots',
          'screengrab',
          'screengrabs',
          'pic',
          'pics',
          'picture',
          'pictures',
          'photo',
          'photos',
          'photograph',
          'photographs',
        ],
      },
      {
        name: 'folder-scripts',
        folderNames: ['script', 'scripts', 'scripting'],
      },
      { name: 'folder-node', folderNames: ['node', 'nodejs', 'node_modules'] },
      {
        name: 'folder-javascript',
        folderNames: ['js', 'javascript', 'javascripts'],
      },
      { name: 'folder-json', folderNames: ['json', 'jsons'] },
      { name: 'folder-font', folderNames: ['font', 'fonts'] },
      { name: 'folder-bower', folderNames: ['bower_components'] },
      {
        name: 'folder-test',
        folderNames: ['test', 'tests', 'testing', 'snapshots', 'spec', 'specs'],
      },
      {
        name: 'folder-directive',
        folderNames: ['directive, directives'],
      },
      {
        name: 'folder-jinja',
        folderNames: ['jinja', 'jinja2', 'j2'],
        light: true,
      },
      { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
      { name: 'folder-pdm', folderNames: ['pdm-plugins', 'pdm-build'] },
      { name: 'folder-php', folderNames: ['php'] },
      { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
      { name: 'folder-sublime', folderNames: ['sublime'] },
      {
        name: 'folder-docs',
        folderNames: [
          'doc',
          'docs',
          'document',
          'documents',
          'documentation',
          'post',
          'posts',
          'article',
          'articles',
          'wiki',
          'news',
        ],
      },
      { name: 'folder-gh-workflows', folderNames: ['github/workflows'] },
      {
        name: 'folder-git',
        folderNames: ['git', 'patches', 'githooks', 'submodules'],
      },
      { name: 'folder-github', folderNames: ['github'] },
      { name: 'folder-gitea', folderNames: ['gitea'] },
      { name: 'folder-gitlab', folderNames: ['gitlab'] },
      { name: 'folder-forgejo', folderNames: ['forgejo'] },
      { name: 'folder-vscode', folderNames: ['vscode', 'vscode-test'] },
      {
        name: 'folder-views',
        folderNames: [
          'view',
          'views',
          'screen',
          'screens',
          'page',
          'pages',
          'public_html',
          'html',
        ],
      },
      { name: 'folder-vue', folderNames: ['vue'] },
      { name: 'folder-vuepress', folderNames: ['vuepress'] },
      { name: 'folder-expo', folderNames: ['expo', 'expo-shared'] },
      {
        name: 'folder-config',
        folderNames: [
          'cfg',
          'cfgs',
          'conf',
          'confs',
          'config',
          'configs',
          'configuration',
          'configurations',
          'setting',
          'settings',
          'META-INF',
          'option',
          'options',
          'pref',
          'prefs',
          'preference',
          'preferences',
        ],
      },
      {
        name: 'folder-i18n',
        folderNames: [
          'i18n',
          'internationalization',
          'lang',
          'langs',
          'language',
          'languages',
          'locale',
          'locales',
          'l10n',
          'localization',
          'translation',
          'translate',
          'translations',
          'tx',
        ],
      },
      {
        name: 'folder-components',
        folderNames: ['components', 'widget', 'widgets', 'fragments'],
      },
      {
        name: 'folder-verdaccio',
        folderNames: ['verdaccio'],
      },
      { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
      {
        name: 'folder-resource',
        folderNames: [
          'resource',
          'resources',
          'res',
          'asset',
          'assets',
          'static',
          'report',
          'reports',
        ],
      },
      {
        name: 'folder-lib',
        folderNames: [
          'lib',
          'libs',
          'library',
          'libraries',
          'vendor',
          'vendors',
          'third-party',
          'lib64',
        ],
      },
      {
        name: 'folder-theme',
        folderNames: [
          'themes',
          'theme',
          'color',
          'colors',
          'design',
          'designs',
        ],
      },
      { name: 'folder-webpack', folderNames: ['webpack'] },
      { name: 'folder-global', folderNames: ['global'] },
      {
        name: 'folder-public',
        folderNames: [
          'public',
          'www',
          'wwwroot',
          'web',
          'website',
          'site',
          'browser',
          'browsers',
        ],
      },
      {
        name: 'folder-include',
        folderNames: [
          'inc',
          'include',
          'includes',
          'partial',
          'partials',
          'inc64',
        ],
      },
      {
        name: 'folder-docker',
        folderNames: ['docker', 'dockerfiles', 'dockerhub'],
      },
      {
        name: 'folder-ngrx-store',
        folderNames: ['store'],
        enabledFor: [IconPack.Ngrx],
      },
      {
        name: 'folder-ngrx-effects',
        folderNames: ['effects'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'cyan-500',
        },
      },
      {
        name: 'folder-ngrx-state',
        folderNames: ['states', 'state'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'lime-800',
        },
      },
      {
        name: 'folder-ngrx-reducer',
        folderNames: ['reducers', 'reducer'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'red-400',
        },
      },
      {
        name: 'folder-ngrx-actions',
        folderNames: ['actions'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'purple-400',
        },
      },
      {
        name: 'folder-ngrx-entities',
        folderNames: ['entities'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'yellow-700',
        },
      },
      {
        name: 'folder-ngrx-selectors',
        folderNames: ['selectors'],
        enabledFor: [IconPack.Ngrx],
        clone: {
          base: 'folder-ngrx-store',
          color: 'deep-orange-A200',
        },
      },
      {
        name: 'folder-redux-reducer',
        folderNames: ['reducers', 'reducer'],
        enabledFor: [IconPack.Redux],
      },
      {
        name: 'folder-redux-actions',
        folderNames: ['actions'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'purple-400',
        },
      },
      {
        name: 'folder-redux-selector',
        folderNames: ['selectors', 'selector'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'deep-orange-A200',
        },
      },
      {
        name: 'folder-redux-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Redux],
        clone: {
          base: 'folder-redux-reducer',
          color: 'light-green-500',
        },
      },
      {
        name: 'folder-react-components',
        folderNames: ['components', 'react', 'jsx', 'reactjs'],
        enabledFor: [IconPack.React, IconPack.Redux],
      },
      {
        name: 'folder-astro',
        folderNames: ['astro'],
      },
      {
        name: 'folder-database',
        folderNames: ['db', 'data', 'database', 'databases', 'sql'],
      },
      { name: 'folder-log', folderNames: ['log', 'logs', 'logging'] },
      { name: 'folder-target', folderNames: ['target'] },
      {
        name: 'folder-temp',
        folderNames: ['temp', 'tmp', 'cached', 'cache'],
      },
      { name: 'folder-aws', folderNames: ['aws', 'azure', 'gcp'] },
      {
        name: 'folder-audio',
        folderNames: [
          'aud',
          'auds',
          'audio',
          'audios',
          'music',
          'sound',
          'sounds',
          'voice',
          'voices',
          'recordings',
        ],
      },
      {
        name: 'folder-video',
        folderNames: [
          'vid',
          'vids',
          'video',
          'videos',
          'movie',
          'movies',
          'media',
        ],
      },
      {
        name: 'folder-kubernetes',
        folderNames: ['kubernetes', 'k8s'],
      },
      { name: 'folder-import', folderNames: ['import', 'imports', 'imported'] },
      { name: 'folder-export', folderNames: ['export', 'exports', 'exported'] },
      { name: 'folder-wakatime', folderNames: ['wakatime'] },
      { name: 'folder-circleci', folderNames: ['circleci'] },
      {
        name: 'folder-wordpress',
        folderNames: ['wordpress-org', 'wp-content'],
      },
      { name: 'folder-gradle', folderNames: ['gradle'] },
      {
        name: 'folder-coverage',
        folderNames: [
          'coverage',
          'nyc-output',
          'nyc_output',
          'e2e',
          'it',
          'integration-test',
          'integration-tests',
        ],
      },
      {
        name: 'folder-class',
        folderNames: [
          'class',
          'classes',
          'model',
          'models',
          'schemas',
          'schema',
        ],
      },
      {
        name: 'folder-other',
        folderNames: [
          'other',
          'others',
          'misc',
          'miscellaneous',
          'extra',
          'extras',
          'etc',
        ],
      },
      { name: 'folder-lua', folderNames: ['lua'] },
      { name: 'folder-turborepo', folderNames: ['turbo'] },
      {
        name: 'folder-typescript',
        folderNames: ['typescript', 'ts', 'typings', '@types', 'types'],
      },
      { name: 'folder-graphql', folderNames: ['graphql', 'gql'] },
      { name: 'folder-routes', folderNames: ['routes', 'router', 'routers'] },
      { name: 'folder-ci', folderNames: ['ci'] },
      {
        name: 'folder-benchmark',
        folderNames: [
          'benchmark',
          'benchmarks',
          'performance',
          'profiling',
          'measure',
          'measures',
          'measurement',
        ],
      },
      {
        name: 'folder-messages',
        folderNames: [
          'messages',
          'messaging',
          'forum',
          'chat',
          'chats',
          'conversation',
          'conversations',
          'dialog',
          'dialogs',
        ],
      },
      { name: 'folder-less', folderNames: ['less'] },
      {
        name: 'folder-gulp',
        folderNames: [
          'gulp',
          'gulp-tasks',
          'gulpfile.js',
          'gulpfile.mjs',
          'gulpfile.ts',
          'gulpfile.babel.js',
        ],
      },
      {
        name: 'folder-python',
        folderNames: ['python', 'pycache', 'pytest_cache'],
      },
      {
        name: 'folder-mojo',
        folderNames: ['mojo'],
      },
      { name: 'folder-moon', folderNames: ['moon'] },
      { name: 'folder-debug', folderNames: ['debug', 'debugger', 'debugging'] },
      { name: 'folder-fastlane', folderNames: ['fastlane'] },
      {
        name: 'folder-plugin',
        folderNames: [
          'plugin',
          'plugins',
          'mod',
          'mods',
          'modding',
          'extension',
          'extensions',
          'addon',
          'addons',
          'addin',
          'addins',
          'module',
          'modules',
        ],
      },
      { name: 'folder-middleware', folderNames: ['middleware', 'middlewares'] },
      {
        name: 'folder-controller',
        folderNames: [
          'controller',
          'controllers',
          'controls',
          'service',
          'services',
          'provider',
          'providers',
          'handler',
          'handlers',
        ],
      },
      { name: 'folder-ansible', folderNames: ['ansible'] },
      {
        name: 'folder-server',
        folderNames: ['server', 'servers', 'backend', 'backends'],
      },
      {
        name: 'folder-client',
        folderNames: [
          'client',
          'clients',
          'frontend',
          'frontends',
          'pwa',
          'spa',
        ],
      },
      { name: 'folder-tasks', folderNames: ['tasks', 'tickets'] },
      { name: 'folder-android', folderNames: ['android'] },
      { name: 'folder-ios', folderNames: ['ios'] },
      {
        name: 'folder-ui',
        folderNames: ['presentation', 'gui', 'ui', 'ux'],
      },
      { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
      {
        name: 'folder-download',
        folderNames: ['downloads', 'download', 'downloader', 'downloaders'],
      },
      {
        name: 'folder-tools',
        folderNames: [
          'tools',
          'toolkit',
          'toolkits',
          'toolbox',
          'toolboxes',
          'tooling',
          'devtools',
        ],
      },
      { name: 'folder-helper', folderNames: ['helpers', 'helper'] },
      { name: 'folder-serverless', folderNames: ['serverless'] },
      { name: 'folder-api', folderNames: ['api', 'apis', 'restapi'] },
      {
        name: 'folder-app',
        folderNames: ['app', 'apps', 'application', 'applications'],
      },
      {
        name: 'folder-apollo',
        folderNames: [
          'apollo',
          'apollo-client',
          'apollo-cache',
          'apollo-config',
        ],
      },
      {
        name: 'folder-archive',
        folderNames: [
          'arc',
          'arcs',
          'archive',
          'archives',
          'archival',
          'bkp',
          'bkps',
          'bak',
          'baks',
          'backup',
          'backups',
          'back-up',
          'back-ups',
          'history',
          'histories',
        ],
      },
      { name: 'folder-batch', folderNames: ['batch', 'batchs', 'batches'] },
      { name: 'folder-buildkite', folderNames: ['buildkite'] },
      { name: 'folder-cluster', folderNames: ['cluster', 'clusters'] },
      {
        name: 'folder-command',
        folderNames: [
          'command',
          'commands',
          'commandline',
          'cmd',
          'cli',
          'clis',
        ],
      },
      { name: 'folder-constant', folderNames: ['constant', 'constants'] },
      {
        name: 'folder-container',
        folderNames: ['container', 'containers', 'devcontainer'],
      },
      { name: 'folder-content', folderNames: ['content', 'contents'] },
      { name: 'folder-context', folderNames: ['context', 'contexts'] },
      { name: 'folder-core', folderNames: ['core'] },
      { name: 'folder-delta', folderNames: ['delta', 'deltas', 'changes'] },
      { name: 'folder-dump', folderNames: ['dump', 'dumps'] },
      {
        name: 'folder-examples',
        folderNames: [
          'demo',
          'demos',
          'example',
          'examples',
          'sample',
          'samples',
          'sample-data',
        ],
      },
      {
        name: 'folder-environment',
        folderNames: ['env', 'envs', 'environment', 'environments', 'venv'],
      },
      {
        name: 'folder-functions',
        folderNames: [
          'func',
          'funcs',
          'function',
          'functions',
          'lambda',
          'lambdas',
          'logic',
          'math',
          'maths',
          'calc',
          'calcs',
          'calculation',
          'calculations',
        ],
      },
      {
        name: 'folder-generator',
        folderNames: [
          'generator',
          'generators',
          'generated',
          'cfn-gen',
          'gen',
          'gens',
          'auto',
        ],
      },
      {
        name: 'folder-hook',
        folderNames: ['hook', 'hooks', 'trigger', 'triggers'],
      },
      { name: 'folder-job', folderNames: ['job', 'jobs'] },
      {
        name: 'folder-keys',
        folderNames: [
          'key',
          'keys',
          'token',
          'tokens',
          'jwt',
          'secret',
          'secrets',
        ],
      },
      { name: 'folder-layout', folderNames: ['layout', 'layouts'] },
      {
        name: 'folder-mail',
        folderNames: ['mail', 'mails', 'email', 'emails', 'smtp', 'mailers'],
      },
      { name: 'folder-mappings', folderNames: ['mappings', 'mapping'] },
      { name: 'folder-meta', folderNames: ['meta'] },
      { name: 'folder-changesets', folderNames: ['changesets', 'changeset'] },
      {
        name: 'folder-packages',
        folderNames: [
          'package',
          'packages',
          'pkg',
          'pkgs',
          'serverpackages',
          'devpackages',
          'dependencies',
        ],
      },
      { name: 'folder-shared', folderNames: ['shared', 'common'] },
      {
        name: 'folder-shader',
        folderNames: ['glsl', 'hlsl', 'shader', 'shaders'],
      },
      { name: 'folder-stack', folderNames: ['stack', 'stacks'] },
      {
        name: 'folder-template',
        folderNames: [
          'template',
          'templates',
          'github/ISSUE_TEMPLATE',
          'github/PULL_REQUEST_TEMPLATE',
        ],
      },
      {
        name: 'folder-utils',
        folderNames: ['util', 'utils', 'utility', 'utilities'],
      },
      { name: 'folder-supabase', folderNames: ['supabase'] },
      { name: 'folder-private', folderNames: ['private'] },
      { name: 'folder-linux', folderNames: ['linux', 'linuxbsd', 'unix'] },
      { name: 'folder-windows', folderNames: ['windows', 'win', 'win32'] },
      {
        name: 'folder-macos',
        folderNames: ['macos', 'mac', 'osx', 'DS_Store'],
      },
      {
        name: 'folder-error',
        folderNames: ['error', 'errors', 'err', 'errs', 'crash', 'crashes'],
      },
      { name: 'folder-event', folderNames: ['event', 'events'] },
      {
        name: 'folder-secure',
        folderNames: [
          'auth',
          'authentication',
          'secure',
          'security',
          'cert',
          'certs',
          'certificate',
          'certificates',
          'ssl',
          'cipher',
          'cypher',
          'tls',
        ],
      },
      { name: 'folder-custom', folderNames: ['custom', 'customs'] },
      {
        name: 'folder-mock',
        folderNames: [
          'draft',
          'drafts',
          'mock',
          'mocks',
          'fixture',
          'fixtures',
          'concept',
          'concepts',
          'sketch',
          'sketches',
        ],
      },
      {
        name: 'folder-syntax',
        folderNames: ['syntax', 'syntaxes', 'spellcheck', 'spellcheckers'],
      },
      { name: 'folder-vm', folderNames: ['vm', 'vms'] },
      { name: 'folder-stylus', folderNames: ['stylus'] },
      { name: 'folder-flow', folderNames: ['flow-typed'] },
      {
        name: 'folder-rules',
        folderNames: [
          'rule',
          'rules',
          'validation',
          'validations',
          'validator',
          'validators',
        ],
      },
      {
        name: 'folder-review',
        folderNames: [
          'review',
          'reviews',
          'revisal',
          'revisals',
          'reviewed',
          'preview',
          'previews',
        ],
      },
      {
        name: 'folder-animation',
        folderNames: [
          'anim',
          'anims',
          'animation',
          'animations',
          'animated',
          'motion',
          'motions',
          'transition',
          'transitions',
          'easing',
          'easings',
        ],
      },
      { name: 'folder-guard', folderNames: ['guard', 'guards'] },
      { name: 'folder-prisma', folderNames: ['prisma', 'prisma/schema'] },
      {
        name: 'folder-pipe',
        folderNames: ['pipe', 'pipes', 'pipeline', 'pipelines'],
      },
      { name: 'folder-svg', folderNames: ['svg', 'svgs'] },
      {
        name: 'folder-vuex-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Vuex],
      },
      {
        name: 'folder-nuxt',
        folderNames: ['nuxt'],
      },
      {
        name: 'folder-vue-directives',
        folderNames: ['directives'],
        enabledFor: [IconPack.Vuex, IconPack.Vue],
      },
      {
        name: 'folder-vue',
        folderNames: ['components'],
        enabledFor: [IconPack.Vuex, IconPack.Vue],
      },
      { name: 'folder-terraform', folderNames: ['terraform'] },
      {
        name: 'folder-mobile',
        folderNames: [
          'mobile',
          'mobiles',
          'portable',
          'portability',
          'phone',
          'phones',
        ],
      },
      { name: 'folder-stencil', folderNames: ['stencil'] },
      { name: 'folder-firebase', folderNames: ['firebase'] },
      { name: 'folder-svelte', folderNames: ['svelte', 'svelte-kit'] },
      {
        name: 'folder-update',
        folderNames: ['update', 'updates', 'upgrade', 'upgrades'],
      },
      { name: 'folder-intellij', folderNames: ['idea'], light: true },
      {
        name: 'folder-azure-pipelines',
        folderNames: ['azure-pipelines', 'azure-pipelines-ci'],
      },
      { name: 'folder-mjml', folderNames: ['mjml'] },
      {
        name: 'folder-admin',
        folderNames: [
          'admin',
          'admins',
          'manager',
          'managers',
          'moderator',
          'moderators',
        ],
      },
      {
        name: 'folder-jupyter',
        folderNames: ['jupyter', 'notebook', 'notebooks', 'ipynb'],
      },
      { name: 'folder-scala', folderNames: ['scala'] },
      {
        name: 'folder-connection',
        folderNames: [
          'connection',
          'connections',
          'integration',
          'integrations',
          'remote',
          'remotes',
        ],
      },
      { name: 'folder-quasar', folderNames: ['quasar'] },
      { name: 'folder-next', folderNames: ['next'] },
      { name: 'folder-cobol', folderNames: ['cobol'] },
      { name: 'folder-yarn', folderNames: ['yarn'] },
      { name: 'folder-husky', folderNames: ['husky'] },
      {
        name: 'folder-storybook',
        folderNames: ['storybook', 'stories'],
      },
      { name: 'folder-base', folderNames: ['base', 'bases'] },
      {
        name: 'folder-cart',
        folderNames: ['cart', 'shopping-cart', 'shopping', 'shop'],
      },
      {
        name: 'folder-home',
        folderNames: ['home', 'start', 'main', 'landing'],
      },
      {
        name: 'folder-project',
        folderNames: ['project', 'projects'],
      },
      {
        name: 'folder-interface',
        folderNames: ['interface', 'interfaces'],
      },
      { name: 'folder-netlify', folderNames: ['netlify'] },
      {
        name: 'folder-enum',
        folderNames: ['enum', 'enums'],
      },
      {
        name: 'folder-contract',
        folderNames: [
          'pact',
          'pacts',
          'contract',
          'contracts',
          'contract-testing',
          'contract-test',
          'contract-tests',
        ],
      },
      {
        name: 'folder-helm',
        folderNames: ['helm', 'helmchart', 'helmcharts'],
      },
      {
        name: 'folder-queue',
        folderNames: ['queue', 'queues', 'bull', 'mq'],
      },
      {
        name: 'folder-vercel',
        folderNames: ['vercel', 'now'],
      },
      {
        name: 'folder-cypress',
        folderNames: ['cypress'],
      },
      {
        name: 'folder-decorators',
        folderNames: ['decorator', 'decorators'],
      },
      {
        name: 'folder-java',
        folderNames: ['java'],
      },
      {
        name: 'folder-resolver',
        folderNames: ['resolver', 'resolvers'],
      },
      {
        name: 'folder-angular',
        folderNames: ['angular'],
      },
      {
        name: 'folder-unity',
        folderNames: ['unity'],
      },
      {
        name: 'folder-pdf',
        folderNames: ['pdf', 'pdfs'],
      },
      {
        name: 'folder-proto',
        folderNames: ['protobuf', 'protobufs', 'proto', 'protos'],
      },
      {
        name: 'folder-plastic',
        folderNames: ['plastic'],
      },
      {
        name: 'folder-gamemaker',
        folderNames: ['gamemaker', 'gamemaker2'],
      },
      {
        name: 'folder-mercurial',
        folderNames: ['hg', 'hghooks', 'hgext'],
      },
      {
        name: 'folder-godot',
        folderNames: ['godot', 'godot-cpp'],
      },
      {
        name: 'folder-lottie',
        folderNames: ['lottie', 'lotties', 'lottiefiles'],
      },
      {
        name: 'folder-taskfile',
        folderNames: ['taskfile', 'taskfiles'],
      },
      {
        name: 'folder-drizzle',
        folderNames: ['drizzle'],
      },
      {
        name: 'folder-cloudflare',
        folderNames: ['cloudflare'],
      },
      {
        name: 'folder-seeders',
        folderNames: ['seeds', 'seeders', 'seed', 'seeding'],
      },
      {
        name: 'folder-store',
        folderNames: ['store', 'stores'],
        enabledFor: [IconPack.Angular],
      },
      { name: 'folder-bicep', folderNames: ['bicep'] },
      { name: 'folder-snapcraft', folderNames: ['snap', 'snapcraft'] },
      {
        name: 'folder-development',
        folderNames: ['dev', 'development'],
        clone: {
          base: 'folder-src',
          color: 'light-blue-700',
        },
      },
      { name: 'folder-flutter', folderNames: ['flutter'] },
      { name: 'folder-snippet', folderNames: ['snippet', 'snippets'] },
      { name: 'folder-element', folderNames: ['element', 'elements'] },
      {
        name: 'folder-src-tauri',
        folderNames: ['src-tauri'],
      },
      {
        name: 'folder-favicon',
        folderNames: ['favicon', 'favicons'],
      },
      {
        name: 'folder-bloc',
        folderNames: ['bloc', 'cubit', 'blocs', 'cubits'],
      },
      { name: 'folder-lefthook', folderNames: ['lefthook', 'lefthook-local'] },
      {
        name: 'folder-powershell',
        folderNames: ['powershell', 'ps', 'ps1'],
      },
      {
        name: 'folder-luau',
        folderNames: ['luau'],
      },
      { name: 'folder-obsidian', folderNames: ['obsidian'] },
      { name: 'folder-trash', folderNames: ['trash'] },
      { name: 'folder-liquibase', folderNames: ['liquibase'] },
    ],
  },
  {
    name: 'classic',
    defaultIcon: { name: 'folder' },
    rootFolder: { name: 'folder-root' },
  },
  { name: 'none', defaultIcon: { name: '' } },
];
