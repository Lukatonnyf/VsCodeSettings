import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfg = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);