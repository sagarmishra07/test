export function downloadAsBlob(raw: BlobPart, type: string, filename: string) {
  const blob = new Blob([raw], { type });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadFromUrl(url: string) {
  const link = document.createElement('a');
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function getMimeFromFilename(filename: string) {
  const extension = filename.split('.').pop();
  return getMimeFromExtension(extension ?? '');
}

const extensionList = {
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  csv: 'text/csv',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  pdf: 'application/pdf'
};

export function getMimeFromExtension(extension: string) {
  return extensionList[extension] || null;
}

export function getFileExtension(filename: string) {
  const nameparts = filename.split('.');
  return nameparts[nameparts.length - 1];
}

export function generateDatatUrl(body: string, extension: string) {
  const mime = getMimeFromExtension(extension);
  return `url(data:${mime};base64,${body})`;
}

export function generateImageDataUrl(body: string, path: string) {
  const extension = getFileExtension(path);
  return generateDatatUrl(body, extension);
}

export function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}
