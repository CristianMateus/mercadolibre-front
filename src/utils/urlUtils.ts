export const replaceUrlParams = (
  url: string,
  params: { [key: string]: string }
): string => {
  let newUrl = url.slice(0);

  Object.keys(params).map((param) => {
    const value = params[param] !== null ? params[param] : "";

    newUrl = newUrl.replace(`:${param}`, value);
    return null;
  });

  return newUrl;
};
