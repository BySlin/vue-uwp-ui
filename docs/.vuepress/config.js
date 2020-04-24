const path = require('path');

module.exports = {
  title: 'Vue UWP UI',
  head: [
    [
      'link', {
      rel: 'icon',
      href: '/logo.png'
    }
    ],
  ],
  themeConfig: {
    locales: {
      '/': {
        sidebar: [
          {
            title: '组件',
            collapsable: false,
            children: [
              '/components/Button.md',
              '/components/Icon.md',
              '/components/CheckBox.md',
              '/components/Img.md',
              '/components/ColorPicker.md',
              '/components/ProgressBar.md',
              '/components/ProgressRing.md',
              '/components/RatingControl.md',
              '/components/ScrollReveal.md',
              '/components/Slider.md',
              '/components/SplitView.md',
              '/components/SplitViewCommand.md',
              '/components/Tabs.md',
              '/components/TransformCard.md',
              '/components/TreeView.md',
              '/components/NavigationView.md',
              '/components/TimePicker.md',
              '/components/DatePicker.md',
              '/components/CalendarView.md',
              '/components/CalendarDatePicker.md',
            ]
          },
        ]
      },
    },
    search: true,
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
