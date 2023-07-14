import queryString from 'query-string';

const buildQuery = (options: Record<string, any>): string | undefined => {
  const notEmptyObjects: Record<string, any> = Object.entries(options)
    .filter(([, value]) => value.toString())
    .reduce((acc: Record<string, any>, [key, value]: [string, any]) => ({ ...acc, [key]: value }), {});

  const optionsStringify: string = queryString.stringify(notEmptyObjects);

  return optionsStringify ? '?' + optionsStringify : undefined;
};

export default buildQuery;
