const { createNextIntlPlugin } = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lang/i18n/request.ts');

module.exports = withNextIntl({
  reactStrictMode: true
});