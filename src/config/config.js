const config = {
    API_ENDPOINT: 'restaurant-api.dicoding.dev',
    API_PROTOCOL: 'https',
    API_URL() {
        return `${this.API_PROTOCOL}://${this.API_ENDPOINT}`;
    },
    CACHE_NAME: 'restaurant-catalogue',
    DATABASE_NAME: 'restaurant-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'restaurant',
};

export default config;
