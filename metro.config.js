const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

console.log('Metro config is being loaded');

const config = {
    resolver: {
        assetExts: ['svg', ...getDefaultConfig(__dirname).resolver.assetExts],
        sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'svg'],
    },
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
