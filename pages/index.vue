<template>
    <v-container>
        <v-card>
            <v-card-title>
                Hello world
            </v-card-title>
        </v-card>
        <v-form>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        :counter="10"
                        label="First name"
                        hide-details
                        required
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        :counter="10"
                        label="Last name"
                        hide-details
                        required
                    />
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        label="E-mail"
                        hide-details
                        required
                    />
                </v-col>
            </v-row>
            <v-btn>
                Button
            </v-btn>
        </v-form>
    </v-container>
</template>

<script lang="ts" setup></script>
