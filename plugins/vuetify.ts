import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VBtn, VDataTable } from 'vuetify/components';

import { aliases } from 'vuetify/iconsets/mdi-svg';

const accadisLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#004c93',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        accadis: '#004c93',
        // colors
        infoPrimary: '#0277BD', // orange
        specialPrimary: '#009688', // light-blue
        modulePrimary: '#4CAF50', // light-blue-darken-3
        eventPrimary: '#FF9800', // lime
        unclassifiedPrimary: '#ff0f0f',
    },
    variables: {
        infoIcon: 'mdi-information',
        specialIcon: 'mdi-seat',
        moduleIcon: 'mdi-school',
        eventIcon: 'mdi-calendar',
        unclassifiedIcon: 'mdi-folder-question-outline',
    },
};

const accadisDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        accadis: '#004c93',
        infoPrimary: '#ffc0cb',
        specialPrimary: '#d1a77e',
        modulePrimary: '#ffeae0',
        eventPrimary: '#00ffff',
        unclassifiedPrimary: '#ff0f0f',
    },
    variables: {
        infoIcon: 'mdi-information',
        specialIcon: 'mdi-seat',
        moduleIcon: 'mdi-school',
        eventIcon: 'mdi-calendar',
        unclassifiedIcon: 'mdi-folder-question-outline',
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        icons: {
            aliases: {
                ...aliases,
                // Icons
                infoIcon: 'mdi-information',
                specialIcon: 'mdi-seat',
                moduleIcon: 'mdi-school',
                eventIcon: 'mdi-calendar',
                unclassifiedIcon: 'mdi-folder-question-outline',
            },
        },
        ssr: false,
        components: {
            ...components,
        },
        directives,
        theme: {
            defaultTheme: 'accadisLightTheme',
            themes: {
                accadisLightTheme,
                accadisDarkTheme,
            },
        },
        aliases: {
            OkBtn: VBtn,
            VDevBtn: VBtn,
            GoogleTable: VDataTable,
            VPlainTextField: components.VTextField,
            STextField: components.VTextField,
            SSelect: components.VSelect,
            SCombobox: components.VCombobox,
            Alpha: components.VChip,
            Beta: components.VChip,
        },
        defaults: {
            GoogleTable: {
                color: 'success',
                density: 'compact',
                variant: 'outlined',
                hover: true,
            },
            OkBtn: {
                color: 'primary',
                variant: 'tonal',
                rounded: '0',
                elevation: '4',
                size: 'large',
            },

            VCard: {
                variant2: 'flat',
                rounded: '0',
            },

            VDevBtn: {
                density: 'compact',
                variant: 'outlined',
                rounded: '0',
            },
            global: {
                ripple: true,
            },

            Alpha: {
                color: 'error',
                text: 'Alpha',
            },
            Beta: {
                color: 'warning',
                text: 'Beta',
            },

            VTextField: {},
            STextField: {
                density: 'compact',
                variant: 'outlined',
            },
            SSelect: {
                density: 'compact',
                variant: 'underlined',
                chips: true,
            },
            SCombobox: {
                density: 'compact',
                variant: 'underlined',
                chips: true,

            },
            VPlainTextField: {
                variant: 'plain',
                density: 'compact',
                class: 'font-weight-bold',
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
