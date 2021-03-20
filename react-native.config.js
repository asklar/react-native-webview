module.exports = {
  dependency: {
    platforms: {
      windows: {
        sourceDir: 'windows',
        solutionFile: 'ReactNativeWebView.sln',
        projects: [
          {
            projectFile: 'ReactNativeWebView\\ReactNativeWebView.vcxproj',
            directDependency: true,
          },
          {
            projectFile: 'WebViewBridgeComponent\\WebViewBridgeComponent.vcxproj',
            directDependency: false,
          }
        ],
      },
    },
  },
};