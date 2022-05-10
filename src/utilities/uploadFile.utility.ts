export function uploadFile(file: File, onProgress: (porcentage: number) => void) {
  // const url = 'https://api.cloudinary.com/v1_1/doyv2rmqe/upload';
  const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';
  const key = 'react-upload';

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
    // formData.append('upload_preset', key);
    // formData.append('folder', 'dropzone_v1');

    xhr.send(formData);
  });
}