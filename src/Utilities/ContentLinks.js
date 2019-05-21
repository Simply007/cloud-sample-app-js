import { englishCode, spanishCode } from './LanguageCodes';

export function resolveContentLink(link, language) {
  let resultLink;
  switch (link.type) {
    case 'article':
      resultLink = `/articles/${link.itemId}`;
      break;
    case 'coffee':
      resultLink = `/coffees/${link.urlSlug}`;
      break;
    case 'brewer':
      resultLink = `/brewers/${link.urlSlug}`;
      break;
    case 'fact_about_us':
      resultLink =
        !language || language.toLowerCase() === englishCode.toLowerCase()
          ? `/about-us`
          : language && language.toLowerCase() === spanishCode.toLowerCase()
            ? `/acerca-de`
            : '';
      break;
    default:
      resultLink = '';
  }
  console.log(link);

  if (language) {
    resultLink = `/${language.toLowerCase()}${resultLink}`;
  }
  console.log(`result link: ` + resultLink);
  return resultLink;
}
