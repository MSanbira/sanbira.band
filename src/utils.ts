export const getImageUrl = (imageObj: any) => {
    const url = imageObj?.fields?.file?.url || '';

    return 'https:' + url;
}