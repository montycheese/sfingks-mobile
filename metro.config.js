module.exports = {
    resolver: {
        blacklistRE: /#current-cloud-backend\/.*/
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};

// This file is required to FIX: https://github.com/amazon-archives/awsmobile-cli/issues/172
