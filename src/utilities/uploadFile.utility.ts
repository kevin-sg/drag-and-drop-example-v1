/**
 *
 * @param file this is File content
 * @param onProgress this is function set an porcentage of number
 * @returns promisse of type string
 */
export function uploadFile(file: File, onProgress: (porcentage: number) => void) {
  const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const porcentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(porcentage));
      }
    };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'docs_upload_example_us_preset');

    xhr.send(formData);
  });
}
