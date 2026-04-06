import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const supportedLocales = ['en', 'fr'] as const;

function isSupportedLocale(locale: string | undefined): locale is (typeof supportedLocales)[number] {
  return locale !== undefined && (supportedLocales as readonly string[]).includes(locale);
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const preferredLocale = store.get('locale')?.value;
  const locale = isSupportedLocale(preferredLocale) ? preferredLocale : 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});



