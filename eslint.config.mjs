// @ts-check
import stylisticTs from '@stylistic/eslint-plugin-ts';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        plugins: {
            '@stylistic/ts': stylisticTs,
        },
        // parser: parserTs,
        rules: {
            // '@typescript-eslint/indent': ['error', 2],
            // '@stylistic/ts/indent': ["error", 2],
            // ...
        },
    });
